import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Clients } from './Clients';
import { Users } from './Users';

@Index('refreshtokens_token_unique', ['token'], { unique: true })
@Entity('refreshtokens')
export class Refreshtokens {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('varchar', { name: 'token', length: 255, unique: true })
    token: string;

    @Column('bigint', { name: 'expires' })
    expires: string;

    @ManyToOne(() => Clients, (clients) => clients.refreshtokens)
    @JoinColumn([{ name: 'client_id', referencedColumnName: 'id' }])
    client: Clients;

    @ManyToOne(() => Users, (users) => users.refreshtokens)
    @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
    user: Users;
}
