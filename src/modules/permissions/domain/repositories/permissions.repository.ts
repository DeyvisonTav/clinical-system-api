import { Permission } from '../entities/permission.entity';

export abstract class PermissionsRepository {
  abstract create(data: Partial<Permission>): Promise<Permission>;
  abstract findAll(): Promise<Permission[]>;
  abstract findById(id: string): Promise<Permission | null>;
  abstract findByLevel(level: string): Promise<Permission | null>;
}
