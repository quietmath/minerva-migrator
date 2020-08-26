import { Posts } from './entities/Posts';

export function shapePosts(posts: Posts[]): any[] {
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
