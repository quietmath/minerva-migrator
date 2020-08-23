import { Column, Entity } from 'typeorm';

@Entity('permissions_users')
export class PermissionsUsers {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('integer', { name: 'user_id' })
    userId: number;

    @Column('integer', { name: 'permission_id' })
    permissionId: number;
}
