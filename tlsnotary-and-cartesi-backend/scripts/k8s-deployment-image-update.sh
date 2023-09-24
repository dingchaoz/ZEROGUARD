#!/usr/bin/env bash

CHART_VALUES_FILE="k8s/charts/stateless-service-helm/dev.values.yaml"
DEPLOYMENT_FILE="k8s/manifest/deployment.yaml"

IMAGE_NAME=$(basename "$(git rev-parse --show-toplevel)")
DEPLOYMENT_MANIFEST_CONTENT=$(cat $DEPLOYMENT_FILE)
VALUES_CONTENT=$(cat $CHART_VALUES_FILE)
CURRENT_IMAGE_TAG=$1

echo "IMAGE_NAME: $IMAGE_NAME"
echo "CURRENT_IMAGE_TAG: $CURRENT_IMAGE_TAG"
echo "PREVIOUS_IMAGE_TAG: $PREVIOUS_IMAGE_TAG"
echo "DEPLOYMENT_FILE: $DEPLOYMENT_FILE"
echo "CHART_VALUES_FILE: $CHART_VALUES_FILE"

if [ -f "$DEPLOYMENT_FILE" ]; then
  echo "$DEPLOYMENT_MANIFEST_CONTENT" \ |
  sed -e s/"${IMAGE_NAME}":.*/"${IMAGE_NAME}":"${CURRENT_IMAGE_TAG}"/g  > $DEPLOYMENT_FILE
fi

if [ -f "$CHART_VALUES_FILE" ]; then
  echo "$VALUES_CONTENT" \ |
  sed -e s/"tag: ".*/"tag: ""${CURRENT_IMAGE_TAG}"/g  > $CHART_VALUES_FILE
fi

