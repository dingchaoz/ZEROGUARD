#!/usr/bin/env bash

RED='\033[0;31m'
NC='\033[0m' # No Color

ENVS="local|dev|stage|prod|ci|test"
ENVS_PATTERN="^($ENVS)$"
ENV=$1
ENVS_PATH="env"

usage() {
    echo -e "${RED}current" "$(grep NODE_ENV .env)" "${NC}"
    echo -e "${RED}Usage: $0 [${ENVS}]${NC}"
    exit 1
}

config() {
    pwd
    cp ${ENVS_PATH}/.env."${ENV}" .env
}

if [[ ${ENV} =~ $ENVS_PATTERN ]]; then
    config "${ENV}"
else
    usage
fi
