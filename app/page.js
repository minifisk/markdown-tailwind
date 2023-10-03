import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from "gray-matter";
const path = require('path')


const getPostContent = () => {
  const folder = path.join(process.cwd(), 'app')
  const file = `${folder}/how-to-use-gp3.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content);
  return matterResult

}

export default function Home() {
  const post = getPostContent();

  return (
    <main>
      <h1 className="mb-10"> Testing markdown</h1>
      <p></p>
      <Markdown>{post.content}</Markdown>
    </main>
  );
}
