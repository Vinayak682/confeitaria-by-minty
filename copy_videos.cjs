const fs = require('fs');
const path = require('path');

const sourceDir = '/Users/vinayakbhadani/Confeitaria_by-minty';
const targetDir = path.join(__dirname, 'public', 'user-media');
const contentJsPath = path.join(__dirname, 'src', 'data', 'content.js');

const files = fs.readdirSync(sourceDir);
const videoFiles = files.filter(f => f.endsWith('.mp4'));

let videoPaths = [];
let counter = 1;

for (const file of videoFiles) {
  // Let's copy all of them. The user can manually delete the cheese one later.
  const oldPath = path.join(sourceDir, file);
  const newName = `minty_full_vid_${counter++}.mp4`;
  const newPath = path.join(targetDir, newName);
  
  fs.copyFileSync(oldPath, newPath);
  videoPaths.push(`/confeitaria-by-minty/user-media/${newName}`);
}

console.log(`Copied ${videoPaths.length} videos.`);

// Now we need to update content.js to have these videos in the `reels` array.
// But wait, the reels array in content.js already has `video` fields that we replaced with `minty_video_1.mp4` and `minty_video_2.mp4` earlier.
// Let's just rewrite the reels section entirely or just replace the `video: "..."` with our new videos circularly.

let content = fs.readFileSync(contentJsPath, 'utf8');

let vIdx = 0;
const getNextVideo = () => videoPaths[vIdx++ % videoPaths.length];

content = content.replace(/video:\s*['"](.*?)['"]/g, () => {
  return `video: "${getNextVideo()}"`;
});

// For videoBg
content = content.replace(/videoBg:\s*['"](.*?)['"]/g, () => {
  return `videoBg: "${getNextVideo()}"`;
});

fs.writeFileSync(contentJsPath, content);
console.log("Updated content.js with new full videos.");
