let fs = require('fs');
let rmMarkdown = require('remove-markdown');

let folder = './pages/posts';
let destFolder = './src';

module.exports.buildSnippets = function () {
  let snippets = fs.readdirSync(folder).reduce((acc, file) => {
    let content = fs.readFileSync(`${folder}/${file}`, 'utf8');

    let [title, subtitle, p1] = content
      .split('\n\n')
      .filter((line) => !line.match(/^import\s.*/))
      .filter((line) => !line.match(/^export\s.*/))
      .map((l) => rmMarkdown(l));

    let [postNum] = file.split('.');

    let map = {
      postId: postNum,
      title: title,
      subtitle: subtitle,
      content: p1,
    };

    acc.push(map);
    return acc;
  }, []);

  // console.log(snippets);

  let fileContent = `/* 
  This file is auto-generated
  DO NOT MODIFY
  */

  let snippets = ${JSON.stringify(snippets)}
  export default snippets
  `;

  try {
    fs.writeFileSync(`${destFolder}/snippets.ts`, fileContent);
  } catch (err) {
    console.log(err);
  }
};
