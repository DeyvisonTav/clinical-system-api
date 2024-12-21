import { Injectable } from '@nestjs/common';
import { ProfessionalsRepository } from '../../domain/repositories/professionals.repository';
import { UpdateProfessionalInput } from '../dto/update-professional.input';
import { CreateProfessionalInput } from '../dto/create-professional.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProfessionalsService {
  constructor(private readonly repository: ProfessionalsRepository) {}

  async create(data: CreateProfessionalInput) {
    // Hash da senha antes de salvar
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const professionalData = { ...data, password: hashedPassword };

    return this.repository.create(professionalData);
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

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.repository.create({ ...professional, ...data });
  }
}
