import { Module } from '@nestjs/common';
import { PatientsService } from './application/service/patients.service';
import { PatientsResolver } from './patients.resolver';
import { PatientsRepositoryImpl } from './infrastructure/persistence/patients.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './domain/entities/patient.entity';
import { PatientsRepository } from './domain/repositories/patients.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  providers: [
    PatientsResolver,
    PatientsService,
    { provide: PatientsRepository, useClass: PatientsRepositoryImpl },
  ],
  exports: [PatientsService],
})
export class PatientsModule {}
