import { Module } from '@nestjs/common';
import { GraphqlModule } from './modules/config/graphql.module';
import { DataBaseModule } from './modules/database/database.module';
import { ConsultanciesModule } from './modules/consultancies/consultancies.module';

@Module({
  imports: [GraphqlModule, DataBaseModule, ConsultanciesModule],
})
export class AppModule {}
