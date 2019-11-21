#!/bin/bash

set -e

"./clean.sh"

npx tsc
npx webpack --config 'webpack.config.js'
