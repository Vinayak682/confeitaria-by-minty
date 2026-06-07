const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const contentJsPath = path.join(projectDir, 'src', 'data', 'content.js');
const userMediaDir = path.join(projectDir, 'public', 'user-media');

const files = fs.readdirSync(userMediaDir);
const photos = files.filter(f => f.startsWith('minty_photo_') && f.endsWith('.png'));

let photoArrayStr = '  featuredPhotos: [\n';
for (const photo of photos) {
  photoArrayStr += `    "/confeitaria-by-minty/user-media/${photo}",\n`;
}
photoArrayStr += '  ]\n};\n';

let contentStr = fs.readFileSync(contentJsPath, 'utf8');

// The file ends with `};` or `};\n`. We replace the last `};` with our new array.
contentStr = contentStr.replace(/};\s*$/, `,\n${photoArrayStr}`);

fs.writeFileSync(contentJsPath, contentStr);
console.log(`Added ${photos.length} featured photos to content.js`);
