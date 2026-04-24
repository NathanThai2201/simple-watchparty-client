# ideally give this file just the drive file id.

pip install gdown
rm -rf public
mkdir -p public
gdown https://drive.google.com/uc?id=1v1ynEmgKeiQX1gsHYwMf1bhJoFTgvYeZ -O public/video.mp4
# example
# https://drive.google.com/file/d/1v1ynEmgKeiQX1gsHYwMf1bhJoFTgvYeZ/view?usp=sharing
# here the id is 1v1ynEmgKeiQX1gsHYwMf1bhJoFTgvYeZ
npm install
npm run dev