#!/usr/bin/env bash

if [[ -n "$(find packages -maxdepth 1 -name "*-client")" ]];
then
 npx lerna run --scope "*/*-client" build
fi

