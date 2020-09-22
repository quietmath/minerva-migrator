import { createConnection, getConnection } from 'typeorm';
import { downloadImage } from './download';
import { createDir, retrieveMarkdownPosts, markdownConversion, publishMarkdownFile } from './publish';

async function createDirectory(): Promise<boolean> {
    return await createDir();
}

async function publishFile(title: string, content: string): Promise<boolean> {
    return await publishMarkdownFile(title, content);
}

export async function publish(): Promise<void> {
    try {
        getConnection();
    }
    catch(e) {
        await createConnection();
    }
    const isDir = await createDirectory();
    if(isDir) {
        const posts = await retrieveMarkdownPosts();
        for(let i = 0; i < posts.length; i++) {
            const md = markdownConversion(posts[i]);
            try {
                await downloadImage(posts[i].Image);
            }
            catch(e) {
                console.error(`Failed to download image: ${ e }`);
            }
            const result = await publishFile(posts[i].Title, md);
            if(result) {
                console.log(`Published ${ posts[i].Title }`);
            }
        }
    }
}
