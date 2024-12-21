import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Professional } from '../../../professionals/domain/entities/professional.entity';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  level: string;

  @ManyToMany(() => Professional, { cascade: true })
  @JoinTable({
    name: 'permission_professionals',
    joinColumn: { name: 'permissionId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'professionalId', referencedColumnName: 'id' },
  })
  professionals: Professional[];
}
