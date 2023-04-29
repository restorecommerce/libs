#!/bin/bash

cd 'src/generated' && find '.' -type f \( -iname "*.ts" ! -iname "index.*" \) -exec bash -c 'path=$0; echo "export * as $(basename ${path%.*}) from \"${path%.*}\"";' {} \; > index.ts;
cd '../generated-server' && find '.' -type f \( -iname "*.ts" ! -iname "index.*" \) -exec bash -c 'path=$0; echo "export * as $(basename ${path%.*}) from \"${path%.*}\"";' {} \; > index.ts;