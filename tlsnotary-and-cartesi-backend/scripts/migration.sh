#!/usr/bin/env bash

RED='\033[0;31m'
NC='\033[0m' # No Color

CMD=$1
STAGE=$2
TABLE=$2

# TODO 這份 script 其實只是暫時的 到時候會以 template 的 migration 為主
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
STAGES="local|dev|stage|prod"
STAGES_PATTERN="^($STAGES)$"
MIGRATION_PATH="src/migration"
ENVS_PATH="env"

migrationWithStage() {
    # backup original .env
    cp .env .env.bak
    # cp argument specific environment
    cp "${ENVS_PATH}"/.env."${STAGE}" .env

    migration "$1" "$2" "$3"

    # recover original environment
    mv .env.bak .env
}

migration() {
    TS_NODE_FILES=true node -r dotenv/config \
        "${DIR}"/../node_modules/.bin/ts-node -r tsconfig-paths/register \
        "${DIR}"/../node_modules/.bin/typeorm \
        --config ormconfig-migration.ts \
        migration:$1 $2 $3
}

migrationCreate() {
    TS_NODE_FILES=true node -r dotenv/config \
        "${DIR}"/../node_modules/.bin/ts-node -r tsconfig-paths/register \
        "${DIR}"/../node_modules/.bin/typeorm \
        --config ormconfig-migration.ts \
        migration:$1 $2 $3 -d ${MIGRATION_PATH}
}

validateStage() {
    if ! [[ ${STAGE} =~ $STAGES_PATTERN ]]; then
        usage
    fi
}

run() {
    validateStage
    migrationWithStage run
}

revert() {
    validateStage
    migrationWithStage revert
}

create() {
    migrationCreate create -n "${TABLE}"
}

usage() {
    echo -e "${RED}Usage: $0 [run|revert] [local|k8s-local|k8s-stage|k8s-prod|dev|stage|prod]${NC}"
    echo -e "${RED}Usage: $0 [create] [NEW-MIGRATION-FILE]${NC}"
    exit 1
}

case "$CMD" in
run)
    run "${STAGE}"
    ;;
revert)
    revert "${STAGE}"
    ;;
create)
    create "${TABLE}"
    ;;
*)
    usage
    ;;
esac
