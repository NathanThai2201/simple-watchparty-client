@echo off
setlocal

echo === Checking for winget ===
where winget >nul 2>nul
if %errorlevel% neq 0 (
echo winget not found. Please install "App Installer" from Microsoft Store.
pause
exit /b
)

echo === Checking Node.js ===
where node >nul 2>nul
if %errorlevel% neq 0 (
echo Installing Node.js...
winget install -e --id OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
) else (
echo Node.js already installed
)

echo === Checking Python ===
where python >nul 2>nul
if %errorlevel% neq 0 (
echo Installing Python...
winget install -e --id Python.Python.3 --accept-package-agreements --accept-source-agreements
) else (
echo Python already installed
)

echo === Installing gdown ===
python -m pip install --upgrade pip
python -m pip install --upgrade gdown

echo === Preparing video ===
if exist public rmdir /s /q public
mkdir public

python -m gdown https://drive.google.com/uc?id=1v1ynEmgKeiQX1gsHYwMf1bhJoFTgvYeZ -O public\video.mp4

echo === Installing npm dependencies ===
npm install

echo === Starting app ===
npm run dev

pause
