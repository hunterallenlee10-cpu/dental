#!/usr/bin/env bash
# Restart the production server on port ${PORT:-3000}.
PORT=${PORT:-3000}
fuser -k ${PORT}/tcp >/dev/null 2>&1 || true
sleep 0.5
nohup npx next start -p ${PORT} > /tmp/next-${PORT}.log 2>&1 &
for i in $(seq 1 40); do curl -s -o /dev/null http://localhost:${PORT}/ && break; sleep 0.25; done
echo "serving on ${PORT}"
