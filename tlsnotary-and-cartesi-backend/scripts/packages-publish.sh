#!/usr/bin/env bash

PACKAGE_VERSION=$1
if [ -z "$PACKAGE_VERSION" ]
then
  echo "should give version"
  exit 1;
fi

npx lerna publish "$PACKAGE_VERSION" \
   --no-git-tag-version \
   --no-changelog \
   --no-push \
   --yes
