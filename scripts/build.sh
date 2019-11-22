#!/bin/bash

set -e

"./scripts/clean.sh"

npx tsc
npx webpack --config 'webpack.config.js'
