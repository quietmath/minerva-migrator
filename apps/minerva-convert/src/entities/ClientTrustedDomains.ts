import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Clients } from './Clients';

@Entity('client_trusted_domains')
export class ClientTrustedDomains {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('varchar', { name: 'uuid', length: 36 })
    uuid: string;

    @Column('varchar', { name: 'trusted_domain', nullable: true, length: 2000 })
    trustedDomain: string | null;

    @ManyToOne(() => Clients, (clients) => clients.clientTrustedDomains)
    @JoinColumn([{ name: 'client_id', referencedColumnName: 'id' }])
    client: Clients;
}
