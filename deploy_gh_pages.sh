#!/bin/bash
set -e

# Configuration
DIST_DIR="dist/public"
REPO_URL="https://github.com/makoban/kuroko-plus-lp.git"
BRANCH="gh-pages"

# Ensure build exists
if [ ! -d "$DIST_DIR" ]; then
  echo "Error: Build directory $DIST_DIR does not exist. Run 'pnpm build' first."
  exit 1
fi

# Create a temporary directory for deployment
DEPLOY_DIR=$(mktemp -d)
echo "Deploying to $REPO_URL branch $BRANCH from $DIST_DIR..."

# Copy build artifacts to temporary directory
cp -r $DIST_DIR/* $DEPLOY_DIR/
# Copy .nojekyll specifically if it exists (it might be hidden from * expansion)
if [ -f "$DIST_DIR/.nojekyll" ]; then
  cp "$DIST_DIR/.nojekyll" $DEPLOY_DIR/
fi

# Navigate to temporary directory
cd $DEPLOY_DIR

# Initialize git
git init
git checkout -b $BRANCH

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages - $(date)"

# Force push to the repository
git push -f $REPO_URL $BRANCH

# Cleanup
cd -
rm -rf $DEPLOY_DIR

echo "Deployment complete!"
