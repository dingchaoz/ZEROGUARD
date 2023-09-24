#!/usr/bin/env bash

PACKAGES_COUNT=$(ls packages | wc -l)
CLIENT_PACKAGES_COUNT=$(ls -d packages/*-client | wc -l)

echo PACKAGES_COUNT: "$PACKAGES_COUNT"
echo CLIENT_PACKAGES_COUNT: "$CLIENT_PACKAGES_COUNT"

if [[ $PACKAGES_COUNT > $CLIENT_PACKAGES_COUNT ]];
then
  npx lerna run --ignore "*/*-client" build
fi

