import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Tags } from './Tags';
import { Posts } from './Posts';

@Entity('posts_tags')
export class PostsTags {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('integer', { name: 'sort_order', default: () => '\'0\'' })
    sortOrder: number;

    @ManyToOne(() => Tags, (tags) => tags.postsTags)
    @JoinColumn([{ name: 'tag_id', referencedColumnName: 'id' }])
    tag: Tags;

    @ManyToOne(() => Posts, (posts) => posts.postsTags)
    @JoinColumn([{ name: 'post_id', referencedColumnName: 'id' }])
    post: Posts;
}
