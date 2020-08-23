import { Column, Entity, Index } from 'typeorm';

@Index('settings_key_unique', ['key'], { unique: true })
@Entity('settings')
export class Settings {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('varchar', { name: 'uuid', length: 36 })
    uuid: string;

    @Column('varchar', { name: 'key', length: 150, unique: true })
    key: string;

    @Column('text', { name: 'value', nullable: true })
    value: string | null;

    @Column('varchar', { name: 'type', length: 150, default: () => '\'core\'' })
    type: string;

    @Column('datetime', { name: 'created_at' })
    createdAt: Date;

    @Column('integer', { name: 'created_by' })
    createdBy: number;

    @Column('datetime', { name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @Column('integer', { name: 'updated_by', nullable: true })
    updatedBy: number | null;
}
