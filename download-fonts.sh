#!/bin/bash

# Script to download Roboto font files for offline use

echo "Downloading Roboto font files..."

# Create the directory structure
mkdir -p src/assets/fonts

# Download the font files
wget -O src/assets/fonts/roboto-v20-latin-300.woff2 https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2
wget -O src/assets/fonts/roboto-v20-latin-regular.woff2 https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2
wget -O src/assets/fonts/roboto-v20-latin-500.woff2 https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2

# WOFF format as fallback
wget -O src/assets/fonts/roboto-v20-latin-300.woff https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc-.woff
wget -O src/assets/fonts/roboto-v20-latin-regular.woff https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxM.woff
wget -O src/assets/fonts/roboto-v20-latin-500.woff https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc-.woff

echo "Font files downloaded to src/assets/fonts/"

# Create local-fonts.scss if it doesn't exist
if [ ! -f "src/styles/local-fonts.scss" ]; then
  echo "Creating local-fonts.scss file..."
  cat > src/styles/local-fonts.scss << 'EOF'
/* Local Roboto font setup */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'), local('Roboto-Light'),
       url('../assets/fonts/roboto-v20-latin-300.woff2') format('woff2'),
       url('../assets/fonts/roboto-v20-latin-300.woff') format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
       url('../assets/fonts/roboto-v20-latin-regular.woff2') format('woff2'),
       url('../assets/fonts/roboto-v20-latin-regular.woff') format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: local('Roboto Medium'), local('Roboto-Medium'),
       url('../assets/fonts/roboto-v20-latin-500.woff2') format('woff2'),
       url('../assets/fonts/roboto-v20-latin-500.woff') format('woff');
}
EOF
  echo "local-fonts.scss created successfully!"
else
  echo "local-fonts.scss already exists at src/styles/local-fonts.scss"
fi

echo "Now update your angular.json to include this file in the styles array and update your index.html to remove Google Fonts references."
