import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AppSettings } from './AppSettings';
import { AppFields } from './AppFields';

@Index('apps_slug_unique', ['slug'], { unique: true })
@Index('apps_name_unique', ['name'], { unique: true })
@Entity('apps')
export class Apps {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('varchar', { name: 'uuid', length: 36 })
    uuid: string;

    @Column('varchar', { name: 'name', length: 150, unique: true })
    name: string;

    @Column('varchar', { name: 'slug', length: 150, unique: true })
    slug: string;

    @Column('varchar', { name: 'version', length: 150 })
    version: string;

    @Column('varchar', {
        name: 'status',
        length: 150,
        default: () => '\'inactive\'',
    })
    status: string;

    @Column('datetime', { name: 'created_at' })
    createdAt: Date;

    @Column('integer', { name: 'created_by' })
    createdBy: number;

    @Column('datetime', { name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @Column('integer', { name: 'updated_by', nullable: true })
    updatedBy: number | null;

    @OneToMany(() => AppSettings, (appSettings) => appSettings.app)
    appSettings: AppSettings[];

    @OneToMany(() => AppFields, (appFields) => appFields.app)
    appFields: AppFields[];
}
