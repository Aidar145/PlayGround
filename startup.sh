#!/usr/bin/env bash
set -euo pipefail

start="$(date +%s%N)"
if command -v playwright-cli >/dev/null 2>&1; then
  playwright-cli install-browser chromium
else
  echo "[startup] playwright-cli is not available; skipping browser prerequisite" >&2
fi
end="$(date +%s%N)"
printf '[timing] startup browser prerequisite: %d ms\n' "$(( (end - start) / 1000000 ))"
