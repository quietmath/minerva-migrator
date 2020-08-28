import { MarkdownPost } from './schema';
import { getPosts } from './db';
import { shapePosts } from './util';

export async function retrieveMarkdownPosts(): Promise<MarkdownPost[]> {
    const posts = await getPosts();
    return shapePosts(posts);
}

export async function checkMarkdownPostImage(): Promise<void> {
    const posts = await retrieveMarkdownPosts();
    posts.forEach((itm: MarkdownPost) => console.log(itm.Image));
}

export function markdownConversion(post: MarkdownPost): string {
    let output = '---\n\r';
    output += `title: ${ post.MetaTitle }\n\r`;
    output += `description: ${ post.MetaDescription }\n\r`;
    output += `datePublished: ${ post.DatePublished }\n\r`;
    output += `tags: ${ post.Tags }\n\r`;
    output += `author: ${ post.Author }\n\r`;
    output += '---\n\r';
    output += `${ post.Image }\n\r`;
    output += `# ${ post.Title }\n\r`;
    output += `${ post.Post }\n\r`;
    return output;
}
