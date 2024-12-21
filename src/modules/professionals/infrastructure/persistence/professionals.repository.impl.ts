import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfessionalsRepository } from '../../domain/repositories/professionals.repository';
import { Professional } from '../../domain/entities/professional.entity';

@Injectable()
export class ProfessionalsRepositoryImpl extends ProfessionalsRepository {
  constructor(
    @InjectRepository(Professional)
    private readonly repository: Repository<Professional>,
  ) {
    super();
  }

  async create(data: Partial<Professional>): Promise<Professional> {
    return this.repository.save(this.repository.create(data));
  }

  async findAll(): Promise<Professional[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Professional | null> {
    return this.repository.findOneBy({ id });
  }

  async findByCpf(cpf: string): Promise<Professional | null> {
    return this.repository.findOneBy({ cpf });
  }
}
