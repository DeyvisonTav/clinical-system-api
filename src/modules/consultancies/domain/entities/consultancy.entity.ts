import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('consultancies')
export class Consultancy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  cnpj?: string;

  @Column()
  accountHolderName: string;

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

  @Column()
  officialEmail: string;

  @Column()
  status: string;
}