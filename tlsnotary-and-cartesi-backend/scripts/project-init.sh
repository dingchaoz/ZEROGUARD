#!/usr/bin/env bash

RESET="\033[0m"
BOLD="\033[1m"
YELLOW="\033[38;5;11m"
read -p  "$(echo -e "$BOLD""$YELLOW""Are your sure init project (Y/n) ?  ""$RESET")" -n 1 -r

if [[ $REPLY =~ ^[Yy]$ ]]
then
  REPOSITORY_NAME=$(basename "$(git rev-parse --show-toplevel)")
  AUTHOR_NAME=$(git config --get user.name)
  AUTHOR_EMAIL=$(git config --get user.email)

  # step 2
  git remote remove origin
  git remote remove upstream
  git remote add origin git@github.com:TokenBricks/"$REPOSITORY_NAME".git
  git remote add upstream git@github.com:TokenBricks/microservice-nestjs-template.git

  # step 4
  rm CHANGELOG.md

  # step 3
  docker run -it --rm --name project-init-node -v "${PWD}":/work -w /work node:14-alpine sh -c "
   node -e \
   'let pkg = require(\"./package.json\"); \
   pkg.name = \"$REPOSITORY_NAME\"; \
   pkg.version = \"1.0.0\"; \
   pkg.author = \"$AUTHOR_NAME <$AUTHOR_EMAIL>\"; \

   pkg.contributors = [{ name: \"$AUTHOR_NAME\", email: \"$AUTHOR_EMAIL\" }]
   require(\"fs\").writeFileSync(\"package.json\", JSON.stringify(pkg, null, 2)); \
   '"

  # step 5

  npm install

  git branch --set-upstream-to=origin/main main

  git config merge.ours.driver true

  # git add .

  # git commit

  # git push -u origin main
fi
