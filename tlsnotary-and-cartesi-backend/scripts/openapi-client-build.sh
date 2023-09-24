#!/usr/bin/env bash

FILE_SOURCE="http://localhost:3000/api-json"
GENERATOR_NAME="typescript-nestjs"
OUT_PATH="packages/nestjs-client/src"
OPENAPI_GENERATOR_CLI_VERSION="latest"
OPENAPI_JSON_PATH="/tmp/openapi.json"

trap "rm -rf ${OPENAPI_JSON_PATH}  && echo 'REMOVE ${OPENAPI_JSON_PATH}'" EXIT

# read option
while test $# -gt 0; do
  case "$1" in
    -h|--help)
      echo "* openapi client generator"
      echo " "
      echo "  openapi-client-build.sh [-g generator-name] [-o output]"
      echo " "
      echo "options:"
      echo "-h, --help                  show help"
      echo "-f, --file=FILE_SOURCE   read openapi file source (it will be yaml, json or http/https format URL), default:\"http://localhost:3000/api-json\""
      echo "-g, --generator-name=GENERATOR_NAME   export using program language + (library or framework), default:\"4010\""
      echo "-o, --output=PATH       if you need export file path, default: \"typescriptClient\""
      echo " "
      exit 0
      ;;
    -f|--file)
      shift
      if test $# -gt 0; then
        FILE_SOURCE=$1
      else
        echo "no process specified"
        exit 1
      fi
      shift
      ;;
    -g|--generator-name)
      shift
      if test $# -gt 0; then
        GENERATOR_NAME=$1
      else
        echo "no process specified"
        exit 1
      fi
      shift
      ;;
    -o|--output)
      shift
      if test $# -gt 0; then
        OUT_PATH=$1
      else
        echo "no process specified"
        exit 1
      fi
      shift
      ;;
    *)
      break
      ;;
  esac
done

alias openapi-generator-cli="docker run -i  \
  --rm \
  -v ${OPENAPI_JSON_PATH}:${OPENAPI_JSON_PATH} \
  -v ${PWD}/${OUT_PATH}:/tmp/${OUT_PATH} \
  openapitools/openapi-generator-cli:${OPENAPI_GENERATOR_CLI_VERSION}"

if [[ "$FILE_SOURCE" =~ ^http: ]] || [[ "$FILE_SOURCE" =~ ^https: ]] || [[ "$FILE_SOURCE" =~ ^ftp: ]] || [[ "$FILE_SOURCE" =~  ^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3} ]]; then
  curl "$FILE_SOURCE" -o "${OPENAPI_JSON_PATH}"
else
  cp "$FILE_SOURCE" "${OPENAPI_JSON_PATH}"
fi

rm -rf "$OUT_PATH"

# wait fileNaming kebab-case bug fix
openapi-generator-cli generate \
    -i "${OPENAPI_JSON_PATH}" \
    -g "$GENERATOR_NAME" \
    -o "/tmp/$OUT_PATH" \
    --additional-properties="disallowAdditionalPropertiesIfNotPresent=false" \
    --additional-properties="stringEnums=true" \
    --additional-properties="enumPropertyNaming=original" \
    --additional-properties="paramNaming=original" \
    --additional-properties="fileNaming=camelCase" \
    --additional-properties="supportsES6=true"