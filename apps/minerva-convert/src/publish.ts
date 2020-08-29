import { MarkdownPost } from './schema';
import { getPosts } from './db';
import { shapePosts } from './util';

export async function retrieveMarkdownPosts(): Promise<MarkdownPost[]> {
    const posts = await getPosts();
    return shapePosts(posts);
}

export function markdownConversion(post: MarkdownPost): string {
    let output = '---\n';
    output += `title: ${ post.MetaTitle }\n`;
    output += `description: ${ post.MetaDescription }\n`;
    output += `datePublished: ${ post.DatePublished }\n`;
    output += `tags: ${ (post.Tags) ? post.Tags : '' }\n`;
    output += `author: ${ post.Author }\n`;
    output += '---\n\n';
    if(post.Image !== undefined) {
        output += `![${ post.Title }](${ post.Image })\n\n`;
    }
    output += `# ${ post.Title }\n\n`;
    output += `${ post.Post }\n\n`;
    return output;
}
