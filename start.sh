#!/bin/bash

set -e

FILE_ID=$1

# homebrew
if ! command -v brew &> /dev/null
then
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# nodejs
if ! command -v node &> /dev/null
then
brew install node
fi

#python
if ! command -v python3 &> /dev/null
then
brew install python
fi
# ideally give this file just the drive file id.

pip3 install --upgrade gdown
rm -rf public
mkdir -p public
gdown https://drive.google.com/uc?id=${FILE_ID} -O public/video.mp4
# example
# https://drive.google.com/file/d/1v1ynEmgKeiQX1gsHYwMf1bhJoFTgvYeZ/view?usp=sharing
# here the id is 1v1ynEmgKeiQX1gsHYwMf1bhJoFTgvYeZ
npm install
npm run dev

