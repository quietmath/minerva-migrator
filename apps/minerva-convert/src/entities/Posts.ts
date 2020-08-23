import { Column, Entity, Index, OneToMany } from 'typeorm';
import { PostsTags } from './PostsTags';
import { Subscribers } from './Subscribers';

@Index('posts_slug_unique', ['slug'], { unique: true })
@Entity('posts')
export class Posts {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('varchar', { name: 'uuid', length: 36 })
    uuid: string;

    @Column('varchar', { name: 'title', length: 150 })
    title: string;

    @Column('varchar', { name: 'slug', length: 150, unique: true })
    slug: string;

    @Column('text', { name: 'markdown', nullable: true })
    markdown: string | null;

    @Column('text', { name: 'html', nullable: true })
    html: string | null;

    @Column('text', { name: 'image', nullable: true })
    image: string | null;

    @Column('boolean', { name: 'featured', default: () => '\'0\'' })
    featured: boolean;

    @Column('boolean', { name: 'page', default: () => '\'0\'' })
    page: boolean;

    @Column('varchar', { name: 'status', length: 150, default: () => '\'draft\'' })
    status: string;

    @Column('varchar', { name: 'language', length: 6, default: () => '\'en_US\'' })
    language: string;

    @Column('varchar', { name: 'meta_title', nullable: true, length: 150 })
    metaTitle: string | null;

    @Column('varchar', { name: 'meta_description', nullable: true, length: 200 })
    metaDescription: string | null;

    @Column('integer', { name: 'author_id' })
    authorId: number;

    @Column('datetime', { name: 'created_at' })
    createdAt: Date;

    @Column('integer', { name: 'created_by' })
    createdBy: number;

    @Column('datetime', { name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @Column('integer', { name: 'updated_by', nullable: true })
    updatedBy: number | null;

    @Column('datetime', { name: 'published_at', nullable: true })
    publishedAt: Date | null;

    @Column('integer', { name: 'published_by', nullable: true })
    publishedBy: number | null;

    @Column('varchar', {
        name: 'visibility',
        length: 150,
        default: () => '\'public\'',
    })
    visibility: string;

    @Column('text', { name: 'mobiledoc', nullable: true })
    mobiledoc: string | null;

    @Column('text', { name: 'amp', nullable: true })
    amp: string | null;

    @OneToMany(() => PostsTags, (postsTags) => postsTags.post)
    postsTags: PostsTags[];

    @OneToMany(() => Subscribers, (subscribers) => subscribers.post)
    subscribers: Subscribers[];
}
