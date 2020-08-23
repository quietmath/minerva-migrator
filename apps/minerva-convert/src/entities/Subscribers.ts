import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Posts } from './Posts';

@Index('subscribers_email_unique', ['email'], { unique: true })
@Entity('subscribers')
export class Subscribers {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('varchar', { name: 'uuid', length: 36 })
    uuid: string;

    @Column('varchar', { name: 'name', nullable: true, length: 150 })
    name: string | null;

    @Column('varchar', { name: 'email', length: 254, unique: true })
    email: string;

    @Column('varchar', {
        name: 'status',
        length: 150,
        default: () => '\'pending\'',
    })
    status: string;

    @Column('text', { name: 'subscribed_url', nullable: true })
    subscribedUrl: string | null;

    @Column('text', { name: 'subscribed_referrer', nullable: true })
    subscribedReferrer: string | null;

    @Column('text', { name: 'unsubscribed_url', nullable: true })
    unsubscribedUrl: string | null;

    @Column('datetime', { name: 'unsubscribed_at', nullable: true })
    unsubscribedAt: Date | null;

    @Column('datetime', { name: 'created_at' })
    createdAt: Date;

    @Column('integer', { name: 'created_by' })
    createdBy: number;

    @Column('datetime', { name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @Column('integer', { name: 'updated_by', nullable: true })
    updatedBy: number | null;

    @ManyToOne(() => Posts, (posts) => posts.subscribers)
    @JoinColumn([{ name: 'post_id', referencedColumnName: 'id' }])
    post: Posts;
}
