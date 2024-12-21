import { Injectable } from '@nestjs/common';
import { ConsultanciesRepository } from '../../domain/repositories/consultancies.repository';
import { CreateConsultancyInput } from '../dto/create-consultancy.input';

@Injectable()
export class ConsultanciesService {
  constructor(private readonly repository: ConsultanciesRepository) {}

  async create(data: CreateConsultancyInput) {
    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findAll();
  }
}
