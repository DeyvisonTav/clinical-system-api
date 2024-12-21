import { Module } from '@nestjs/common';
import { PermissionsService } from './application/service/permissions.service';
import { PermissionsResolver } from './permissions.resolver';
import { PermissionsRepositoryImpl } from './infrastructure/persistence/permissions.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './domain/entities/permission.entity';
import { PermissionsRepository } from './domain/repositories/permissions.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  providers: [
    PermissionsResolver,
    PermissionsService,
    { provide: PermissionsRepository, useClass: PermissionsRepositoryImpl },
  ],
})
export class PermissionsModule {}
