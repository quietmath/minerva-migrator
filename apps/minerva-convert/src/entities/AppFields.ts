import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Apps } from './Apps';

@Entity('app_fields')
export class AppFields {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('varchar', { name: 'uuid', length: 36 })
    uuid: string;

    @Column('varchar', { name: 'key', length: 150 })
    key: string;

    @Column('text', { name: 'value', nullable: true })
    value: string | null;

    @Column('varchar', { name: 'type', length: 150, default: () => '\'html\'' })
    type: string;

    @Column('integer', { name: 'relatable_id' })
    relatableId: number;

    @Column('varchar', {
        name: 'relatable_type',
        length: 150,
        default: () => '\'posts\'',
    })
    relatableType: string;

    @Column('boolean', { name: 'active', default: () => '\'1\'' })
    active: boolean;

    @Column('datetime', { name: 'created_at' })
    createdAt: Date;

    @Column('integer', { name: 'created_by' })
    createdBy: number;

    @Column('datetime', { name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @Column('integer', { name: 'updated_by', nullable: true })
    updatedBy: number | null;

    @ManyToOne(() => Apps, (apps) => apps.appFields)
    @JoinColumn([{ name: 'app_id', referencedColumnName: 'id' }])
    app: Apps;
}
