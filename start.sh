#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
cd "$PROJECT_DIR"

PORT="${PORT:-3000}"
WEB_DIR="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}"
DEPLOYMENT_OUTPUT="$WEB_DIR/deployment-output.json"
STATIC_DIR="$PROJECT_DIR"

run_timed() {
  local label="$1"
  shift
  local start end status
  start="$(date +%s%N)"
  set +e
  "$@"
  status=$?
  set -e
  end="$(date +%s%N)"
  printf '[timing] %s: %d ms\n' "$label" "$(( (end - start) / 1000000 ))"
  return "$status"
}

run_timed "prepare metadata directory" mkdir -p "$WEB_DIR"

if [[ -f "$PROJECT_DIR/package.json" ]]; then
  if [[ ! -d "$PROJECT_DIR/node_modules" ]]; then
    run_timed "install dependencies" npm install --no-audit --no-fund
  fi
  if node -e 'const p = require("./package.json"); process.exit(p.scripts && p.scripts.build ? 0 : 1)'; then
    run_timed "build" npm run build
  fi
fi

[[ -f "$STATIC_DIR/index.html" ]] || {
  echo "Static deployment output must contain index.html: $STATIC_DIR" >&2
  exit 1
}

run_timed "write deployment metadata" node -e '
const fs = require("node:fs");
const path = require("node:path");
const [project, directory, output] = process.argv.slice(1);
if (!fs.existsSync(path.join(directory, "index.html"))) {
  console.error(`Static deployment output must contain index.html: ${directory}`);
  process.exit(1);
}
fs.writeFileSync(output, JSON.stringify({ project: path.resolve(project), directory: path.resolve(directory) }));
' "$PROJECT_DIR" "$STATIC_DIR" "$DEPLOYMENT_OUTPUT"

echo "[start] serving $STATIC_DIR on 0.0.0.0:$PORT"
run_timed "serve" env PORT="$PORT" node "${RUNTIME_DIR:?RUNTIME_DIR is required}/scripts/default-start.mjs"
