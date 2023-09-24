#!/usr/bin/env bash

export VAULT_ADDR=http://127.0.0.1:8200
SERVICE_NAME=$(basename "$(git rev-parse --show-toplevel)")
NAMESPACES=("dev" "stage")

function join_by { local IFS="$1"; shift; echo "$*"; }

vault write auth/kubernetes/role/"${SERVICE_NAME}" \
           bound_service_account_names="${SERVICE_NAME}" \
           bound_service_account_namespaces=$(join_by , "${NAMESPACES[@]}") \
           policies="${SERVICE_NAME}" \
           ttl=24h

POLICY=""
for namespace in "${NAMESPACES[@]}"
  do
    POLICY+="
    path \"$namespace/${SERVICE_NAME}/*\" {
      capabilities = [\"read\"]
    }
    "
  done
echo "${POLICY}"

vault policy write "${SERVICE_NAME}" - <<EOF
  ${POLICY}
EOF