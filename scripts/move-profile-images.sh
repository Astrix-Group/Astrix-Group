#!/bin/bash

# This script helps move profile images to the correct location
# Usage: ./scripts/move-profile-images.sh [source_directory]

SOURCE_DIR=${1:-.}
TARGET_DIR="public/profile-images"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
  echo "Error: Source directory '$SOURCE_DIR' does not exist."
  exit 1
fi

# Move profile images
echo "Moving profile images from $SOURCE_DIR to $TARGET_DIR..."

# LegendYt4k
if [ -f "$SOURCE_DIR/1186473897240039444.webp" ]; then
  cp "$SOURCE_DIR/1186473897240039444.webp" "$TARGET_DIR/"
  echo "✓ Moved LegendYt4k's profile image"
else
  echo "✗ LegendYt4k's profile image not found"
fi

# itsoffkey
if [ -f "$SOURCE_DIR/1066372046583517264.webp" ]; then
  cp "$SOURCE_DIR/1066372046583517264.webp" "$TARGET_DIR/"
  echo "✓ Moved itsoffkey's profile image"
else
  echo "✗ itsoffkey's profile image not found"
fi

# Italia Troller
if [ -f "$SOURCE_DIR/1072043412779433994.webp" ]; then
  cp "$SOURCE_DIR/1072043412779433994.webp" "$TARGET_DIR/"
  echo "✓ Moved Italia Troller's profile image"
else
  echo "✗ Italia Troller's profile image not found"
fi

# Chirag Gamer
if [ -f "$SOURCE_DIR/761886210120744990.webp" ]; then
  cp "$SOURCE_DIR/761886210120744990.webp" "$TARGET_DIR/"
  echo "✓ Moved Chirag Gamer's profile image"
else
  echo "✗ Chirag Gamer's profile image not found"
fi

echo "Done!"
