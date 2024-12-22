import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { PatientsRepository } from '../../domain/repositories/patients.repository';
import { Patient } from '../../domain/entities/patient.entity';

@Injectable()
export class PatientsRepositoryImpl extends PatientsRepository {
  constructor(
    @InjectRepository(Patient)
    private readonly repository: Repository<Patient>,
  ) {
    super();
  }

  async create(data: Partial<Patient>): Promise<Patient> {
    // Busca o maior public_id atual para incrementar
    const lastPatient = await this.repository.find({
      order: { public_id: 'DESC' },
      take: 1,
    });

    const nextPublicId =
      lastPatient.length > 0 ? lastPatient[0].public_id + 1 : 1;

    const patient = this.repository.create({
      ...data,
      public_id: nextPublicId,
    });
    return this.repository.save(patient);
  }

  async findAll(
    filters: Partial<Patient>,
    page: number,
    limit: number,
  ): Promise<Patient[]> {
    const where: any = {};

    if (filters.name) where.name = ILike(`%${filters.name}%`);
    if (filters.cpf) where.cpf = filters.cpf;
    if (filters.phone) where.phone = ILike(`%${filters.phone}%`);

    return this.repository.find({
      where,
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findById(id: string): Promise<Patient | null> {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<Patient>): Promise<Patient> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findByCpf(cpf: string): Promise<Patient | null> {
    return this.repository.findOne({ where: { cpf } });
  }
}
