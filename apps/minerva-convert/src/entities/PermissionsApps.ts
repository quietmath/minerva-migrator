import { Column, Entity } from 'typeorm';

@Entity('permissions_apps')
export class PermissionsApps {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('integer', { name: 'app_id' })
    appId: number;

    @Column('integer', { name: 'permission_id' })
    permissionId: number;
}
