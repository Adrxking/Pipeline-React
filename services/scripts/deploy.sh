#!/usr/bin/env sh

set -x
cd app/react
npm run build
npm start &
sleep 1

echo $! > .pidfile
set +x