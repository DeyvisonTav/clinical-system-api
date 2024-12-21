import { Injectable, OnModuleInit } from '@nestjs/common';
import { PermissionsRepository } from '../../domain/repositories/permissions.repository';
import { CreatePermissionInput } from '../dto/create-permission.input';

@Injectable()
export class PermissionsService implements OnModuleInit {
  constructor(private readonly repository: PermissionsRepository) {}

  async onModuleInit() {
    await this.seedPermissions();
  }

  private async seedPermissions() {
    const permissions = [
      { level: 'Dentista' },
      { level: 'Secretário(a)' },
      { level: 'Assistente' },
      { level: 'Admin' },
    ];

    for (const permission of permissions) {
      const existingPermission = await this.findByLevel(permission.level);
      if (!existingPermission) {
        await this.create({
          level: permission.level,
          professionalsIds: [],
        });
        console.log(`Permission ${permission.level} created.`);
      } else {
        console.log(`Permission ${permission.level} already exists.`);
      }
    }
  }

  async create(data: CreatePermissionInput) {
    return this.repository.create({
      level: data.level,
      professionals: data.professionalsIds.map((id) => ({ id }) as any),
    });
  }

  async findByLevel(level: string) {
    return this.repository.findByLevel(level);
  }

  async findAll() {
    return this.repository.findAll();
  }
}
