import { Module } from '@nestjs/common';
import { ConsultanciesService } from './application/service/consultancies.service';
import { ConsultanciesResolver } from './consultancies.resolver';
import { ConsultanciesRepositoryImpl } from './infrastructure/persistence/consultancies.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultancy } from './domain/entities/consultancy.entity';
import { ConsultanciesRepository } from './domain/repositories/consultancies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Consultancy])],
  providers: [
    ConsultanciesResolver,
    ConsultanciesService,
    {
      provide: ConsultanciesRepository,
      useClass: ConsultanciesRepositoryImpl,
    },
  ],
})
export class ConsultanciesModule {}