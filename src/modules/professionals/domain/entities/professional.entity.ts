import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Consultancy } from '../../../consultancies/domain/entities/consultancy.entity';
import { Permission } from '../../../permissions/domain/entities/permission.entity';

@Entity('professionals')
export class Professional {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column()
  cpf: string;

  @Column()
  primaryPhone: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  cro?: string;

  @Column({ default: 'password123' })
  password: string;

  @ManyToOne(() => Consultancy)
  @JoinColumn({ name: 'clinicId' })
  clinic: Consultancy;

  @Column()
  clinicId: string;

  @ManyToOne(() => Permission)
  @JoinColumn({ name: 'permissionId' })
  permission: Permission;

  @Column()
  permissionId: string;
}
