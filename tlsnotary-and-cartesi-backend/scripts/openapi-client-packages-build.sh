#!/usr/bin/env bash

CLIENTS=($(find packages -maxdepth 1 -name "*-client"))
OPENAPI_PATH="docs/openapi.json"

for client in "${CLIENTS[@]}"; do

	GENERATOR_NAME=$(echo "$client" | sed "s/packages\///" | sed "s/-client//")

	sh ./scripts/openapi-client-build.sh \
	  -g "$GENERATOR_NAME" \
	  -o "$client"/src \
	  -f "$OPENAPI_PATH"
#	echo ${generator}
done
