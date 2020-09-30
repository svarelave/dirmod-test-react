#!/bin/sh
USER=${USER:-scorpion}
HOST=${HOST:-45.173.197.126}
PORT=${PORT:-467}

SOURCE=${SOURCE:-build}
TARGET=${TARGET:-/var/www/html/incasso}

echo "Removing existing files..."
ssh $USER@$HOST -p $PORT "rm -ifr $TARGET"
echo ""
echo "Uploading new files..."
echo ""
scp -P $PORT -r "$SOURCE" "$USER@$HOST:$TARGET"
echo ""
echo "Done"