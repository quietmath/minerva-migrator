import { Column, Entity } from 'typeorm';

@Entity('permissions_roles')
export class PermissionsRoles {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('integer', { name: 'role_id' })
    roleId: number;

    @Column('integer', { name: 'permission_id' })
    permissionId: number;
}
