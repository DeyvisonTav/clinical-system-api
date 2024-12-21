import { Consultancy } from '../entities/consultancy.entity';

export abstract class ConsultanciesRepository {
  abstract create(data: Partial<Consultancy>): Promise<Consultancy>;
  abstract findAll(): Promise<Consultancy[]>;
  abstract findById(id: string): Promise<Consultancy | null>;
  abstract findByCpf(cpf: string): Promise<Consultancy>;
}
