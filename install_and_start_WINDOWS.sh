#!/usr/bin/env bash

set -e

# Check Node.js

if ! command -v node &> /dev/null
then
echo "Node.js not found. Please install it from https://nodejs.org/"
exit 1
fi

# Check Python

if ! command -v python &> /dev/null
then
echo "Python not found. Please install it from https://www.python.org/downloads/"
exit 1
fi


python -m pip install --upgrade gdown

rm -rf public
mkdir -p public

python -m gdown https://drive.google.com/uc?id=1v1ynEmgKeiQX1gsHYwMf1bhJoFTgvYeZ -O public/video.mp4

npm install

npm run dev
