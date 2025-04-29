#!/bin/bash
set -e

# Usage: ./publish.sh [patch|minor|major]
if [ -z "$1" ]; then
  echo "Usage: $0 [patch|minor|major]"
  exit 1
fi

# Bump version, create commit and annotated tag
NEW_TAG=$(npm version $1 -m "chore(release): bump version to %s")
echo "Created git tag $NEW_TAG"

# Push both commit and tag to remote
git push origin main --follow-tags