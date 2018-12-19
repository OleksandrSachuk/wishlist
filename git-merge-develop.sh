#!/bin/bash

CURRENT_BRANCH_NAME=$(git branch | grep \* | cut -d ' ' -f2 2>&1)
COMMIT_MESSAGE=$1
RED_COLOR=`tput setaf 1`
GREEN_COLOR=`tput setaf 2`
RESET_COLOR=`tput sgr0`
echo $COMMIT_MESSAGE
[[ !  -z  $COMMIT_MESSAGE  ]] || { echo "${RED_COLOR}Please, add commit message${RESET_COLOR}"; exit 1; }
[[ !  -z  CURRENT_BRANCH_NAME  ]] || { echo "${RED_COLOR}No current branch find${RESET_COLOR}"; exit 1; }

git checkout develop
git merge --squash $CURRENT_BRANCH_NAME
git commit -m "$COMMIT_MESSAGE"

echo "${GREEN_COLOR}Branch CURRENT_BRANCH_NAME merged and squashed${RESET_COLOR}"
exit 1
