import { getConnection } from 'typeorm';
import { Posts } from './entities/Posts';

export async function getPosts(): Promise<Posts[]> {
    return await getConnection().manager.find(Posts);
}
