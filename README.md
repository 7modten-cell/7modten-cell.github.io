# Abdelrahman Mosalam Portfolio — V5

## What changed in V5
- Added stronger entrance animations for the hero title, text, and portrait.
- Added scroll reveal, scroll progress, moving orbit rings, client marquee, and hover motion.
- Integrated image thumbnails into the three work-category cards and project tiles.
- Reel cards open a video modal with playback controls.
- Added graceful fallback behavior if a remote image cannot load.
- Responsive layout for phones and desktop.

## Run in Termux
```sh
pkg update -y
pkg install python -y
cd ~/downloads
unzip -o abdelrahman-portfolio-clone-v5.zip -d portfolio-v5
cd portfolio-v5/abdelrahman-portfolio-clone
python -m http.server 8080 --bind 127.0.0.1
```
Then open http://127.0.0.1:8080 in your browser.

## Important
Portfolio images and video thumbnails use the original remote image/video hosts referenced in the project. An internet connection is required for those remote assets. The portrait and Bar Warrior project image also use the original portfolio image host. This package does not contain the creator's private/original media files. If an original asset URL changes or is blocked, replace its URL in index.html or app.js with the correct asset URL.
