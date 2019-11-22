#!/bin/bash

set -e

function deleteDir() {
    folder=$1
    if [ -d "$folder" ]
    then
        rm -rf "$folder"
    fi
}

deleteDir 'web-frontend/js'
deleteDir 'build'
