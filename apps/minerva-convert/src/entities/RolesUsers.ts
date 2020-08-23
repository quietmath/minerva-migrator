import { Column, Entity } from 'typeorm';

@Entity('roles_users')
export class RolesUsers {
    @Column('integer', { primary: true, name: 'id' })
    id: number;

    @Column('integer', { name: 'role_id' })
    roleId: number;

    @Column('integer', { name: 'user_id' })
    userId: number;
}
