import { Professional } from '../entities/professional.entity';

export abstract class ProfessionalsRepository {
  abstract create(data: Partial<Professional>): Promise<Professional>;
  abstract findAll(): Promise<Professional[]>;
  abstract findById(id: string): Promise<Professional | null>;
  abstract findByCpf(cpf: string): Promise<Professional | null>;
}
