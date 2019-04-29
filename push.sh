#!/bin/bash

echo Enter commit message:
read commit_message

echo Enter branch name:
read branch

echo Generating Docs.....
./node_modules/.bin/esdoc

echo Pushing to Github

git add .
git commit --message "$commit_message"
git push origin $branch
