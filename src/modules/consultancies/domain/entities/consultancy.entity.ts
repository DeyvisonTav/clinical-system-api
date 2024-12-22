import { Patient } from '../../../patients/domain/entities/patient.entity';
import { Professional } from '../../../professionals/domain/entities/professional.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity('consultancies')
export class Consultancy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true, unique: true })
  cnpj?: string;

  @Column()
  accountHolderName: string;

  @Column({ unique: true })
  officialEmail: string;

  @Column()
  cpf: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column({ nullable: true })
  complement?: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipCode: string;

  @Column()
  primaryPhone: string;

  @Column({ nullable: true })
  secondaryPhone?: string;

  @Column({ default: true })
  status: boolean;

  @OneToMany(() => Professional, (professional) => professional.clinic)
  professionals: Professional[];

  @OneToMany(() => Patient, (patient) => patient.clinic)
  patients: Patient[];
}
