#!/usr/bin/env sh

set -env

npm run build

cd dist

git init
git add -A 
git commit -m 'New Deployment'
git push -f git@github.com:ridaelqassmi/vue-demo-app.git master:gh-pages

cd -