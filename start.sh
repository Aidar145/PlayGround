#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="${PROJECT_DIR:-$SCRIPT_DIR}"
OPENCODE_WEB_DIR="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}"
PORT="${PORT:-3000}"
DIST_DIR="$PROJECT_DIR/dist"
export PORT DIST_DIR

cd "$PROJECT_DIR"

now_ms() {
  date +%s%3N
}

timed() {
  local label="$1"
  shift
  local start end status
  start="$(now_ms)"
  set +e
  "$@"
  status=$?
  set -e
  end="$(now_ms)"
  printf '[timing] %s: %dms (exit %d)\n' "$label" "$((end - start))" "$status"
  return "$status"
}

write_metadata() {
  mkdir -p "$OPENCODE_WEB_DIR"
  printf '{"project":"%s","directory":"%s"}\n' "$PROJECT_DIR" "$DIST_DIR" > "$OPENCODE_WEB_DIR/deployment-output.json"
}

verify_deployment() {
  node -e '
    const fs = require("node:fs");
    const path = require("node:path");
    const file = process.argv[1];
    const meta = JSON.parse(fs.readFileSync(file, "utf8"));
    if (!meta.project || !meta.directory) throw new Error("deployment metadata is incomplete");
    if (!path.isAbsolute(meta.directory)) throw new Error("deployment directory must be absolute");
    if (!fs.existsSync(path.join(meta.directory, "index.html"))) throw new Error("dist/index.html is missing");
    console.log(`[metadata] ${meta.project} -> ${meta.directory}`);
  ' "$OPENCODE_WEB_DIR/deployment-output.json"
}

needs_install() {
  [ -f package.json ] || return 1
  node -e '
    const pkg = require("./package.json");
    const deps = Object.keys({ ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) });
    process.exit(deps.length > 0 ? 0 : 1);
  ' >/dev/null 2>&1
}

timed "read project" test -f "$PROJECT_DIR/src/index.html"

if needs_install; then
  if [ ! -d node_modules ]; then
    timed "install dependencies" npm install --no-audit --no-fund
  else
    printf '[timing] install dependencies: skipped (node_modules present)\n'
  fi
else
  printf '[timing] install dependencies: skipped (no dependencies)\n'
fi

timed "build static app" node "$PROJECT_DIR/scripts/build.mjs"
timed "verify build output" test -f "$DIST_DIR/index.html"
timed "write deployment metadata" write_metadata
timed "verify deployment metadata" verify_deployment

printf '[start] serving %s on 0.0.0.0:%s\n' "$DIST_DIR" "$PORT"
exec /usr/bin/time -p node "$PROJECT_DIR/scripts/serve.mjs"
