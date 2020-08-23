import { Column, Entity } from 'typeorm';

@Entity('permissions')
export class Permissions {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('varchar', { name: 'uuid', length: 36 })
    uuid: string;

    @Column('varchar', { name: 'name', length: 150 })
    name: string;

    @Column('varchar', { name: 'object_type', length: 150 })
    objectType: string;

    @Column('varchar', { name: 'action_type', length: 150 })
    actionType: string;

    @Column('integer', { name: 'object_id', nullable: true })
    objectId: number | null;

    @Column('datetime', { name: 'created_at' })
    createdAt: Date;

    @Column('integer', { name: 'created_by' })
    createdBy: number;

    @Column('datetime', { name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @Column('integer', { name: 'updated_by', nullable: true })
    updatedBy: number | null;
}
