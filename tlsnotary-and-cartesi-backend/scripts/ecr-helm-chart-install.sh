#!/usr/bin/env bash

AWS_CLI_IMAGE_TAG=2.1.39
HELM_IMAGE_TAG=3.5.4
HOST_AWS_ACCESS_KEY_ID=$(cat ~/.aws/credentials | grep aws_access_key_id | awk '{print $3}')
HOST_AWS_SECRET_ACCESS_KEY=$(cat ~/.aws/credentials | grep aws_secret_access_key | awk '{print $3}')
AWS_DEFAULT_REGION=ap-northeast-1
IMAGE_TAG=$1
AWS_ACCESS_KEY_ID="${2:-$HOST_AWS_ACCESS_KEY_ID}"
AWS_SECRET_ACCESS_KEY="${3:-$HOST_AWS_SECRET_ACCESS_KEY}"

RED='\033[0;31m'
NC='\033[0m' # No Color
HOST_OS='unknown'
HOST_HELM_CONFIG_PATH=
HOST_HELM_CACHE_PATH=

error_message() {
  echo -e "${RED} OS: ${HOST_OS} is not support ${NC}"
  exit 1
}

case "$OSTYPE" in
  solaris*)
    HOST_OS="SOLARIS"
    error_message
    ;;
  darwin*)
    HOST_OS="OSX"
    HOST_HELM_CONFIG_PATH=${HOME}/Library/Preferences/helm
    HOST_HELM_CACHE_PATH=${HOME}/Library/Caches/helm
    ;;
  msys*)
    HOST_OS="WINDOWS"
    error_message
    ;;
  *)
    HOST_OS="linux"
    HOST_HELM_CONFIG_PATH=${HOME}/.config/helm
    HOST_HELM_CACHE_PATH=${HOME}/.cache/helm
    ;;
esac

alias aws="docker run -i \
 --rm \
 -e AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} \
 -e AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} \
 -e AWS_DEFAULT_REGION=${AWS_DEFAULT_REGION} \
 amazon/aws-cli:${AWS_CLI_IMAGE_TAG}"

# https://stackoverflow.com/questions/43099116/error-the-input-device-is-not-a-tty
alias helm="docker run -i  \
  -e HELM_EXPERIMENTAL_OCI=1 \
  -w /apps \
  --rm \
  -v $(pwd):/apps \
  -v ~/.kube:/root/.kube \
  -v ~/.helm:/root/.helm \
  -v ${HOST_HELM_CONFIG_PATH}:/root/.config/helm \
  -v ${HOST_HELM_CACHE_PATH}:/root/.cache/helm \
  alpine/helm:${HELM_IMAGE_TAG}"

AWS_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
AWS_REGION=$(aws configure list | grep region | awk '{print $2}')
echo "${AWS_ACCOUNT}"
echo "${AWS_REGION}"
#echo "${}"
#echo "${}"

aws ecr get-login-password \
     --region "${AWS_REGION}" | helm registry login \
     --username AWS \
     --password-stdin "${AWS_ACCOUNT}".dkr.ecr."${AWS_REGION}".amazonaws.com
HELM_CHART_REGISTRY="${AWS_ACCOUNT}".dkr.ecr."${AWS_REGION}".amazonaws.com/stateless-service-helm:"${IMAGE_TAG}"

helm chart pull "${HELM_CHART_REGISTRY}"

helm chart export "${HELM_CHART_REGISTRY}" --destination ./k8s/charts

# helm install ecr-chart-demo ./mychart