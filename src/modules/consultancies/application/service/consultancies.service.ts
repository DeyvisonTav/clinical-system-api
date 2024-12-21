import { Injectable } from '@nestjs/common';
import { ConsultanciesRepository } from '../../domain/repositories/consultancies.repository';
import { CreateConsultancyInput } from '../dto/create-consultancy.input';
import { ProfessionalsService } from '../../../professionals/application/service/professionals.service';
import { PermissionsService } from '../../../permissions/application/service/permissions.service';

@Injectable()
export class ConsultanciesService {
  constructor(
    private readonly repository: ConsultanciesRepository,
    private readonly professionalsService: ProfessionalsService,
    private readonly permissionsService: PermissionsService,
  ) {}

  async create(data: CreateConsultancyInput) {
    const consultancy = await this.repository.create(data);

    const adminPermission = await this.permissionsService.findByLevel('Admin');
    if (!adminPermission) {
      throw new Error(
        'Admin permission not found. Please seed permissions first.',
      );
    }

    await this.professionalsService.create({
      fullName: data.accountHolderName,
      cpf: data.cpf,
      primaryPhone: data.primaryPhone,
      email: data.officialEmail,
      password: 'Admin@123',
      clinicId: consultancy.id,
      permissionId: adminPermission.id,
    });

    return consultancy;
  }

  async findAll() {
    return this.repository.findAll();
  }
}
