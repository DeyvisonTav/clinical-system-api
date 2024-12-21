import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConsultanciesRepository } from '../../domain/repositories/consultancies.repository';
import { Consultancy } from '../../domain/entities/consultancy.entity';

@Injectable()
export class ConsultanciesRepositoryImpl extends ConsultanciesRepository {
  constructor(
    @InjectRepository(Consultancy)
    private readonly repository: Repository<Consultancy>,
  ) {
    super();
  }

  async create(data: Partial<Consultancy>): Promise<Consultancy> {
    return this.repository.save(this.repository.create(data));
  }

  async findAll(): Promise<Consultancy[]> {
    return this.repository.find({ relations: ['professionals'] });
  }

  async findById(id: string): Promise<Consultancy | null> {
    return this.repository.findOneBy({ id });
  }

  async findByCpf(cpf: string): Promise<Consultancy> {
    return this.repository.findOneBy({ cpf });
  }
}
