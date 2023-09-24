#!/usr/bin/env bash

git config merge.ours.driver true

git fetch upstream

git merge --squash upstream/master

git reset -- docs/

git reset -- src/users/

git reset -- packages/

git reset -- lerna.json

git reset -- env/.env.ci

git reset -- tsconfig.json

git restore tsconfig.json

git clean -fd