#!/bin/bash

# Test Build Script for Lomagundi Diamond Drilling
# This script helps verify that all images are correctly included in the build

echo "Starting build verification process..."

# Navigate to the project directory
cd lomagundi-diamond-drilling

# Step 1: Check if the build exists
if [ ! -d "dist/lomagundi-diamond-drilling" ]; then
  echo "Build not found! Please run the build script first."
  exit 1
fi

# Step 2: Create an inventory of all images in public directory
echo "Creating inventory of source images..."
find public -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.svg" -o -name "*.webp" \) | sort > /tmp/source_images.txt
IMAGE_COUNT=$(wc -l < /tmp/source_images.txt)
echo "Found $IMAGE_COUNT source images"

# Step 3: Create an inventory of all images in the built output
echo "Creating inventory of built images..."
find dist/lomagundi-diamond-drilling -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.svg" -o -name "*.webp" \) | sort > /tmp/built_images.txt
BUILT_COUNT=$(wc -l < /tmp/built_images.txt)
echo "Found $BUILT_COUNT images in build output"

# Step 4: Check for missing images by comparing filenames only
echo "Checking for missing images..."
MISSING_COUNT=0
while IFS= read -r source_image; do
  # Extract just the filename
  filename=$(basename "$source_image")
  if ! grep -q "$filename" /tmp/built_images.txt; then
    echo "WARNING: Image not found in build: $source_image"
    MISSING_COUNT=$((MISSING_COUNT + 1))
  fi
done < /tmp/source_images.txt

if [ $MISSING_COUNT -eq 0 ]; then
  echo "✅ All image filenames found in build output!"
else
  echo "❌ $MISSING_COUNT images appear to be missing from the build."
fi

# Step 5: Set up a local server to test the build
echo -e "\nSetting up local server to test the build..."
echo "You can access the built application at http://localhost:8080"
echo "Press Ctrl+C to stop the server when done testing"
echo -e "\nLaunching server..."

# Create a simple Python HTTP server in the background
cd dist/lomagundi-diamond-drilling
python3 -m http.server 8080
