#!/bin/bash

echo Enter commit message:
read commit_message

echo Enter branch name:
read branch

echo Generating Docs.....
documentation build src/ -f html -o docs

echo Pushing to Github

git add .
git commit --message "$commit_message"
git push origin $branch