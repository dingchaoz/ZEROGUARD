#!/usr/bin/env bash

export VAULT_ADDR=http://127.0.0.1:8200
SERVICE_NAME=$(basename "$(git rev-parse --show-toplevel)")
NAMESPACES=("dev" "stage")

for namespace in "${NAMESPACES[@]}"
  do
    vault kv put "${namespace}"/"${SERVICE_NAME}"/.env value=@env/.env.$(echo "$namespace" | cut -d "-" -f 2)
  done
