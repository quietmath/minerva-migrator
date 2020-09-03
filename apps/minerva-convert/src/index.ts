import { createDir, retrieveMarkdownPosts, markdownConversion, publishMarkdownFile } from './publish';

export async function publish(): Promise<void> {
    const isDir = await createDir();
    if(isDir) {
        const posts = await retrieveMarkdownPosts();
        for(let i = 0; i < posts.length; i++) {
            const md = markdownConversion(posts[i]);
            const result = await publishMarkdownFile(posts[i].Title, md);
            if(result) {
                console.log(`Published ${ posts[i].Title }`);
            }
        }
    }
}

publish();
