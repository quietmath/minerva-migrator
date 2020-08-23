import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Apps } from './Apps';

@Index('app_settings_key_unique', ['key'], { unique: true })
@Entity('app_settings')
export class AppSettings {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('varchar', { name: 'uuid', length: 36 })
    uuid: string;

    @Column('varchar', { name: 'key', length: 150, unique: true })
    key: string;

    @Column('text', { name: 'value', nullable: true })
    value: string | null;

    @Column('datetime', { name: 'created_at' })
    createdAt: Date;

    @Column('integer', { name: 'created_by' })
    createdBy: number;

    @Column('datetime', { name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @Column('integer', { name: 'updated_by', nullable: true })
    updatedBy: number | null;

    @ManyToOne(() => Apps, (apps) => apps.appSettings)
    @JoinColumn([{ name: 'app_id', referencedColumnName: 'id' }])
    app: Apps;
}
