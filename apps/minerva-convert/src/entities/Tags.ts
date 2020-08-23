import { Column, Entity, OneToMany } from 'typeorm';
import { PostsTags } from './PostsTags';

@Entity('tags')
export class Tags {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('varchar', { name: 'uuid', length: 36 })
    uuid: string;

    @Column('varchar', { name: 'name', length: 150 })
    name: string;

    @Column('varchar', { name: 'slug', length: 150 })
    slug: string;

    @Column('varchar', { name: 'description', nullable: true, length: 200 })
    description: string | null;

    @Column('text', { name: 'image', nullable: true })
    image: string | null;

    @Column('integer', { name: 'parent_id', nullable: true })
    parentId: number | null;

    @Column('varchar', { name: 'meta_title', nullable: true, length: 150 })
    metaTitle: string | null;

    @Column('varchar', { name: 'meta_description', nullable: true, length: 200 })
    metaDescription: string | null;

    @Column('datetime', { name: 'created_at' })
    createdAt: Date;

    @Column('integer', { name: 'created_by' })
    createdBy: number;

    @Column('datetime', { name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @Column('integer', { name: 'updated_by', nullable: true })
    updatedBy: number | null;

    @Column('varchar', {
        name: 'visibility',
        length: 150,
        default: () => '\'public\'',
    })
    visibility: string;

    @OneToMany(() => PostsTags, (postsTags) => postsTags.tag)
    postsTags: PostsTags[];
}
