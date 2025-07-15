const fs = require('fs');
const path = require('path');

// Copy Bootstrap files to local directory
const copyBootstrap = () => {
  const srcCSS = 'node_modules/bootstrap/dist/css/bootstrap.min.css';
  const destCSS = 'css/bootstrap.min.css';
  
  const srcJS = 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
  const destJS = 'js/bootstrap.bundle.min.js';
  
  fs.copyFileSync(srcCSS, destCSS);
  fs.copyFileSync(srcJS, destJS);
  
  console.log('Bootstrap files copied successfully!');
};

// Copy jQuery
const copyJQuery = () => {
  const src = 'node_modules/jquery/dist/jquery.min.js';
  const dest = 'js/jquery.min.js';
  
  fs.copyFileSync(src, dest);
  console.log('jQuery copied successfully!');
};

copyBootstrap();
copyJQuery();