import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ClientTrustedDomains } from './ClientTrustedDomains';
import { Accesstokens } from './Accesstokens';
import { Refreshtokens } from './Refreshtokens';

@Index('clients_slug_unique', ['slug'], { unique: true })
@Index('clients_name_unique', ['name'], { unique: true })
@Entity('clients')
export class Clients {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('varchar', { name: 'uuid', length: 36 })
    uuid: string;

    @Column('varchar', { name: 'name', length: 150, unique: true })
    name: string;

    @Column('varchar', { name: 'slug', length: 150, unique: true })
    slug: string;

    @Column('varchar', { name: 'secret', length: 150 })
    secret: string;

    @Column('varchar', { name: 'redirection_uri', nullable: true, length: 2000 })
    redirectionUri: string | null;

    @Column('varchar', { name: 'logo', nullable: true, length: 2000 })
    logo: string | null;

    @Column('varchar', {
        name: 'status',
        length: 150,
        default: () => '\'development\'',
    })
    status: string;

    @Column('varchar', { name: 'type', length: 150, default: () => '\'ua\'' })
    type: string;

    @Column('varchar', { name: 'description', nullable: true, length: 200 })
    description: string | null;

    @Column('datetime', { name: 'created_at' })
    createdAt: Date;

    @Column('integer', { name: 'created_by' })
    createdBy: number;

    @Column('datetime', { name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @Column('integer', { name: 'updated_by', nullable: true })
    updatedBy: number | null;

    @OneToMany(
        () => ClientTrustedDomains,
        (clientTrustedDomains) => clientTrustedDomains.client
    )
    clientTrustedDomains: ClientTrustedDomains[];

    @OneToMany(() => Accesstokens, (accesstokens) => accesstokens.client)
    accesstokens: Accesstokens[];

    @OneToMany(() => Refreshtokens, (refreshtokens) => refreshtokens.client)
    refreshtokens: Refreshtokens[];
}
