#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

: "${CAPTURE_URL:?Set CAPTURE_URL to the exact preview URL.}"
: "${CAPTURE_DIR:?Set CAPTURE_DIR to an absolute output directory.}"

export CAPTURE_URL CAPTURE_DIR

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

printf '[capture] url=%s\ndir=%s\n' "$CAPTURE_URL" "$CAPTURE_DIR"

timed "prepare capture output" mkdir -p "$CAPTURE_DIR"
timed "run browser capture" node "$SCRIPT_DIR/scripts/capture.mjs"
timed "verify desktop screenshot" test -s "$CAPTURE_DIR/final-desktop.png"
timed "verify mobile screenshot" test -s "$CAPTURE_DIR/final-mobile.png"

printf '[capture] finished %s/final-desktop.png and %s/final-mobile.png\n' "$CAPTURE_DIR" "$CAPTURE_DIR"
