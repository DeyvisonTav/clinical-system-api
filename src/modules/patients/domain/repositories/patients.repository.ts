import { Patient } from '../entities/patient.entity';

export abstract class PatientsRepository {
  abstract create(data: Partial<Patient>): Promise<Patient>;
  abstract findAll(
    filters: Partial<Patient>,
    page: number,
    limit: number,
  ): Promise<Patient[]>;
  abstract findById(id: string): Promise<Patient | null>;
  abstract update(id: string, data: Partial<Patient>): Promise<Patient>;
  abstract delete(id: string): Promise<void>;
  abstract findByCpf(cpf: string): Promise<Patient | null>;
}
