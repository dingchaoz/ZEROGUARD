#!/usr/bin/env bash
# dependency aws-cli .env ~/.npmrc
RED='\033[0;31m'
NC='\033[0m' # No Color
REGISTRY_HOST=""
NODEJS_VERSION=14
IMAGE_NAME=$(basename "$(git rev-parse --show-toplevel)")
IMAGE_TAG=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[:space:]')

usage() {
  echo -e "${RED}Usage: $0 -r [ecr|kind|local]${NC}"
  exit 1
}

# read option
while test $# -gt 0; do
  case "$1" in
    -h|--help)
      echo "* nodejs microservice image builder and publisher"
      echo " "
      echo "  image-publish.sh [-r registry type] [-v nodejs version]"
      echo " "
      echo "options:"
      echo "-h, --help                  show help"
      echo "-r, --registry=REGISTRY_TYPE  "
      echo "-v, --version=NODEJS_VERSION default 14 "
      echo " "
      exit 0
      ;;
    -r|--registry)
      shift
      if test $# -gt 0; then
        REGISTRY_TYPE=$1
      else
        echo "no process specified"
        exit 1
      fi
      shift
      ;;
    -v|--version)
      shift
      if test $# -gt 0; then
        NODEJS_VERSION=$1
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



if [ "$REGISTRY_TYPE" = "ecr" ]; then
  AWS_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
  AWS_REGION=$(aws configure list | grep region | awk '{print $2}')
#  AWS_REGION=$(aws configure get region)
  echo "AWS_ACCOUNT: ${AWS_ACCOUNT}"
  echo "AWS_REGION: ${AWS_REGION}"
  REGISTRY_HOST=${AWS_ACCOUNT}.dkr.ecr.${AWS_REGION}.amazonaws.com/
  aws ecr get-login-password --region "${AWS_REGION}" | docker login --username AWS --password-stdin "${AWS_ACCOUNT}".dkr.ecr."${AWS_REGION}".amazonaws.com
elif [ "$REGISTRY_TYPE" = "kind" ]; then
  REGISTRY_HOST=localhost:5000/
elif [ "$REGISTRY_TYPE" = "local" ]; then
  REGISTRY_HOST=""
else
  usage
fi

echo "REGISTRY_TYPE = ${REGISTRY_TYPE}"
echo "REGISTRY_HOST = ${REGISTRY_HOST}"
echo "IMAGE_NAME = ${IMAGE_NAME}"
echo "IMAGE_TAG = ${IMAGE_TAG}"
echo "NODEJS_VERSION= ${NODEJS_VERSION}"

REPOSITORY=${REGISTRY_HOST}"${IMAGE_NAME}"

docker build \
  -f docker/prod/Dockerfile \
  --build-arg NODEJS_VERSION="${NODEJS_VERSION}" \
  --build-arg NPMRC_STRING="$(cat ~/.npmrc)" \
  -t "${REPOSITORY}":"${IMAGE_TAG}" \
  .
# https://stackoverflow.com/questions/50126741/how-to-remove-intermediate-images-from-a-build-after-the-build
docker image prune --filter label=stage=builder -f

if [ "$REGISTRY_TYPE" != "local" ]; then
  docker push "${REPOSITORY}"
  docker push "${REPOSITORY}":"${IMAGE_TAG}"
fi