import { Module } from '@nestjs/common';
import { ProfessionalsService } from './application/service/professionals.service';
import { ProfessionalsRepositoryImpl } from './infrastructure/persistence/professionals.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professional } from './domain/entities/professional.entity';
import { ProfessionalsResolver } from './professionals.resolver';
import { ProfessionalsRepository } from './domain/repositories/professionals.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Professional])],
  providers: [
    ProfessionalsResolver,
    ProfessionalsService,
    {
      provide: ProfessionalsRepository,
      useClass: ProfessionalsRepositoryImpl,
    },
  ],
  exports: [ProfessionalsService],
})
export class ProfessionalsModule {}
