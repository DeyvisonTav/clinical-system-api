import { Injectable } from '@nestjs/common';
import { PatientsRepository } from '../../domain/repositories/patients.repository';
import { CreatePatientInput } from '../dto/create-patient.input';
import { FilterPatientInput } from '../dto/filter-patient.input';
import { UpdatePatientInput } from '../dto/update-patient.input';

@Injectable()
export class PatientsService {
  constructor(private readonly repository: PatientsRepository) {}

  async create(data: CreatePatientInput) {
    return this.repository.create(data);
  }

  async findAll(filters: FilterPatientInput, page: number, limit: number) {
    return this.repository.findAll(filters, page, limit);
  }

  async findById(id: string) {
    return this.repository.findById(id);
  }

  async update(id: string, data: UpdatePatientInput) {
    const patient = await this.repository.findById(id);
    if (!patient) throw new Error('Patient not found');
    return this.repository.update(id, data);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}
