import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionsRepository } from '../../domain/repositories/permissions.repository';
import { Permission } from '../../domain/entities/permission.entity';

@Injectable()
export class PermissionsRepositoryImpl extends PermissionsRepository {
  constructor(
    @InjectRepository(Permission)
    private readonly repository: Repository<Permission>,
  ) {
    super();
  }

  async create(data: Partial<Permission>): Promise<Permission> {
    return this.repository.save(this.repository.create(data));
  }

  async findAll(): Promise<Permission[]> {
    return this.repository.find({ relations: ['professionals'] });
  }

  async findById(id: string): Promise<Permission | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['professionals'],
    });
  }

  async findByLevel(level: string): Promise<Permission | null> {
    return this.repository.findOne({
      where: { level },
      relations: ['professionals'],
    });
  }
}
