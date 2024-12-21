import { Injectable } from '@nestjs/common';
import { ProfessionalsRepository } from '../../domain/repositories/professionals.repository';
import { UpdateProfessionalInput } from '../dto/update-professional.input';
import { CreateProfessionalInput } from '../dto/create-professional.input';

@Injectable()
export class ProfessionalsService {
  constructor(private readonly repository: ProfessionalsRepository) {}

  async create(data: CreateProfessionalInput) {
    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id: string) {
    return this.repository.findById(id);
  }

  async update(id: string, data: UpdateProfessionalInput) {
    const professional = await this.repository.findById(id);
    if (!professional) {
      throw new Error('Professional not found');
    }
    return this.repository.create({ ...professional, ...data });
  }
}
