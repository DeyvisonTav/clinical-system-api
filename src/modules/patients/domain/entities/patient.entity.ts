import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Consultancy } from '../../../consultancies/domain/entities/consultancy.entity';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, generated: 'increment' })
  public_id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  cpf: string;

  @Column({ unique: true, nullable: true })
  email?: string;

  @Column()
  phone: string;

  @Column({ type: 'date', nullable: true })
  birth_date?: Date;

  @Column({ nullable: true })
  responsible_name?: string;

  @Column({ nullable: true })
  responsible_phone?: string;

  @Column({ nullable: true })
  dental_plan_name?: string;

  @Column({ nullable: true })
  dental_plan_number?: string;

  @Column({ type: 'json', nullable: true })
  address?: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };

  @ManyToOne(() => Consultancy, { nullable: false })
  @JoinColumn({ name: 'clinic_id' })
  clinic: Consultancy;

  @Column()
  clinic_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
