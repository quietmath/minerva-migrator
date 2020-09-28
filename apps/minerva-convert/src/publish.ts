import * as fs from 'fs-extra';
import { s } from '@quietmath/proto';
import { DOWNLOAD_DIR, MarkdownPost, OUTPUT_DIR } from './schema';
import { getPosts } from './db';
import { shapePosts, replaceColon, getAuthor } from './util';
import { Users } from './entities/Users';

export async function retrieveMarkdownPosts(): Promise<MarkdownPost[]> {
    const posts = await getPosts();
    return shapePosts(posts);
}

export function markdownConversion(post: MarkdownPost, authors: Users[], imgPath: string): string {
    let output = '---\n';
    output += `title: ${ replaceColon(post.MetaTitle) }\n`;
    output += `description: ${ replaceColon(post.MetaDescription) }\n`;
    output += `datePublished: ${ post.DatePublished }\n`;
    output += `tags: ${ (post.Tags) ? post.Tags : '' }\n`;
    output += `author: ${ getAuthor(post.Author, authors) }\n`;
    output += '---\n\n';
    if(post.Image !== undefined) {
        try {
            const image = (imgPath != null) ? imgPath.split(OUTPUT_DIR)[1] : post.Image;
            output += `![${ post.Title }](${ image })\n\n`;
        }
        catch(e) {
            console.error(`Failed to get relative path for image: ${ e }`);
        }
    }
    output += `# ${ post.Title }\n\n`;
    output += `${ post.Post }\n\n`;
    return output;
}

export async function createDir(): Promise<boolean> {
    try {
        await fs.ensureDir(`${ process.cwd() }/${ OUTPUT_DIR }`);
        await fs.ensureDir(`${ process.cwd() }/${ DOWNLOAD_DIR }`);
        return true;
    }
    catch(e) {
        return false;
    }
}

export async function publishMarkdownFile(title: string, output: string): Promise<boolean> {
    const fileName = `${ s(title).lower().slugify().toString() }.md`;
    const filePath = `${ process.cwd() }/${ OUTPUT_DIR }/${ fileName }`;
    try {
        await fs.writeFile(`${ filePath }`, output, {  encoding:'utf-8' });
        return true;
    }
    catch(e) {
        return false;
    }
}
