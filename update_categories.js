const fs = require('fs');
let file = fs.readFileSync('src/data/content.js', 'utf8');
const categories = ['Celebrations', 'Flavors', 'Masterclass', 'Behind the Scenes'];
let i = 0;
file = file.replace(/(\{ id: \d+, type: '[^']+')/g, (match) => {
  const cat = categories[i % categories.length];
  i++;
  return match + `, category: '${cat}'`;
});
fs.writeFileSync('src/data/content.js', file);
