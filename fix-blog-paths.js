const fs = require('fs');
const path = require('path');

// Function to recursively find all HTML files in a directory
function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix paths in HTML content
function fixPaths(content) {
  // Fix CSS and JS asset paths
  content = content.replace(/href="\/assets\//g, 'href="/vrndweb/assets/');
  content = content.replace(/src="\/assets\//g, 'src="/vrndweb/assets/');
  
  // Fix image paths
  content = content.replace(/href="\/img\//g, 'href="/vrndweb/img/');
  content = content.replace(/src="\/img\//g, 'src="/vrndweb/img/');
  
  // Fix other absolute paths that should be relative to /vrndweb/
  content = content.replace(/href="\/(?!vrndweb\/)([^"]*\.(png|jpg|jpeg|svg|gif|ico|pdf|xml))"/g, 'href="/vrndweb/$1"');
  content = content.replace(/src="\/(?!vrndweb\/)([^"]*\.(png|jpg|jpeg|svg|gif|ico))"/g, 'src="/vrndweb/$1"');
  
  return content;
}

// Main execution
const blogDir = path.join(__dirname, 'public', 'blog');
const htmlFiles = findHtmlFiles(blogDir);

console.log(`Found ${htmlFiles.length} HTML files to process...`);

let fixedCount = 0;
for (const filePath of htmlFiles) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixPaths(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} files successfully!`); 