import { Injectable } from '@nestjs/common';
import { PermissionsRepository } from '../../domain/repositories/permissions.repository';
import { Professional } from '../../../professionals/domain/entities/professional.entity';
import { CreatePermissionInput } from '../dto/create-permission.input';
import { UpdatePermissionInput } from '../dto/update-permission.input';

@Injectable()
export class PermissionsService {
  constructor(private readonly repository: PermissionsRepository) {}

  async create(data: CreatePermissionInput) {
    const permission = await this.repository.create({
      level: data.level,
      professionals: data.professionalsIds.map(
        (id) => ({ id }) as Professional,
      ),
    });
    return permission;
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id: string) {
    return this.repository.findById(id);
  }

  async update(id: string, data: UpdatePermissionInput) {
    const permission = await this.repository.findById(id);
    if (!permission) {
      throw new Error('Permission not found');
    }
    return this.repository.create({
      ...permission,
      ...data,
      professionals: data.professionalsIds.map(
        (id) => ({ id }) as Professional,
      ),
    });
  }
}
