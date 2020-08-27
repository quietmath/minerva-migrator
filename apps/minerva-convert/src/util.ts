import { Posts } from './entities/Posts';
import { MarkdownPost } from './schema';

export function shapePosts(posts: Posts[]): MarkdownPost[] {
    const result = [];
    for(let i = 0; i < posts.length; i++) {
        result.push({
            Title: posts[i].title,
            Author: posts[i].publishedBy,
            DatePublished: posts[i].publishedAt,
            Post: posts[i].markdown,
            Image: posts[i].image,
            MetaTitle: posts[i].metaTitle,
            MetaDescription: posts[i].metaDescription,
            Tags: posts[i].postsTags,
            IsPage: posts[i].page
        });
    }
    return result;
}

export function isString(post: MarkdownPost): boolean {
    if(typeof(post.Image) === 'string') {
        return true;
    }
    return false;
}
