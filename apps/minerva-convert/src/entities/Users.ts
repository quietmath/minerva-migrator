import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Accesstokens } from './Accesstokens';
import { Refreshtokens } from './Refreshtokens';

@Index('users_email_unique', ['email'], { unique: true })
@Index('users_slug_unique', ['slug'], { unique: true })
@Entity('users')
export class Users {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('varchar', { name: 'uuid', length: 36 })
    uuid: string;

    @Column('varchar', { name: 'name', length: 150 })
    name: string;

    @Column('varchar', { name: 'slug', length: 150, unique: true })
    slug: string;

    @Column('varchar', { name: 'password', length: 60 })
    password: string;

    @Column('varchar', { name: 'email', length: 254, unique: true })
    email: string;

    @Column('text', { name: 'image', nullable: true })
    image: string | null;

    @Column('text', { name: 'cover', nullable: true })
    cover: string | null;

    @Column('varchar', { name: 'bio', nullable: true, length: 200 })
    bio: string | null;

    @Column('text', { name: 'website', nullable: true })
    website: string | null;

    @Column('text', { name: 'location', nullable: true })
    location: string | null;

    @Column('text', { name: 'accessibility', nullable: true })
    accessibility: string | null;

    @Column('varchar', { name: 'status', length: 150, default: () => '\'active\'' })
    status: string;

    @Column('varchar', { name: 'language', length: 6, default: () => '\'en_US\'' })
    language: string;

    @Column('varchar', { name: 'meta_title', nullable: true, length: 150 })
    metaTitle: string | null;

    @Column('varchar', { name: 'meta_description', nullable: true, length: 200 })
    metaDescription: string | null;

    @Column('text', { name: 'tour', nullable: true })
    tour: string | null;

    @Column('datetime', { name: 'last_login', nullable: true })
    lastLogin: Date | null;

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

    @Column('text', { name: 'facebook', nullable: true })
    facebook: string | null;

    @Column('text', { name: 'twitter', nullable: true })
    twitter: string | null;

    @OneToMany(() => Accesstokens, (accesstokens) => accesstokens.user)
    accesstokens: Accesstokens[];

    @OneToMany(() => Refreshtokens, (refreshtokens) => refreshtokens.user)
    refreshtokens: Refreshtokens[];
}
