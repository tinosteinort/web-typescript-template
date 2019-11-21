#!/bin/bash

set -e

function deleteDir() {
    folder=$1
    echo $folder
    if [ -d "$folder" ]
    then
        echo exist
        rm -rf "$folder"
    fi
}

deleteDir 'web-frontend/js'
deleteDir 'build'
