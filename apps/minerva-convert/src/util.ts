import { Posts } from './entities/Posts';
import { BASE_URL, MarkdownPost } from './schema';

export function shapePosts(posts: Posts[]): MarkdownPost[] {
    const result = [];
    for(let i = 0; i < posts.length; i++) {
        result.push({
            Title: posts[i].title,
            Author: posts[i].publishedBy,
            DatePublished: posts[i].publishedAt,
            Post: posts[i].markdown,
            Image: (isAbsoluteURL(posts[i].image)) ? posts[i].image : makeAbsoluteURL(posts[i].image),
            MetaTitle: posts[i].metaTitle,
            MetaDescription: posts[i].metaDescription,
            Tags: posts[i].postsTags,
            IsPage: posts[i].page
        });
    }
    return result;
}

export function makeAbsoluteURL(field: string): string {
    if(field == null) {
        return undefined;
    }
    return `${ BASE_URL }${ field }`;
}

export function isAbsoluteURL(field: string | null): boolean {
    if(field == null) {
        return false;
    }
    if(field.startsWith('https://') || field.startsWith('https://')) {
        return true;
    }
    return false;
}

export function isString(field: string | number): boolean {
    if(typeof(field) === 'string') {
        return true;
    }
    return false;
}
