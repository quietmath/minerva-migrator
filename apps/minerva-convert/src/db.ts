import { getConnection } from 'typeorm';
import { Posts } from './entities/Posts';
import { Users } from './entities/Users';

export async function getPosts(): Promise<Posts[]> {
    return await getConnection().manager.find(Posts, {
        relations: ['postsTags', 'postsTags.tag']
    });
}

export async function getAuthors(): Promise<Users[]> {
    return await getConnection().manager.find(Users);
}
