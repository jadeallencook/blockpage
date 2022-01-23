const fs = require('fs');

const [node, path, args] = process.argv;
const root = path.replace('/src/test', '');

const hasCache = fs.existsSync(`${root}/cache`);
const hasReactApp = fs.existsSync(`${root}/cache/react-app`);
const hasStorybook = fs.existsSync(`${root}/cache/react-storybook`);
const hasBlockpage = fs.existsSync(`${root}/cache/blockpage`);

if (hasCache) {
  console.log('yes');
} else {
  console.log('nope');
}
