import { Module } from '@nestjs/common';
import { GraphqlModule } from './modules/config/graphql.module';
import { DataBaseModule } from './modules/database/database.module';
import { ConsultanciesModule } from './modules/consultancies/consultancies.module';
import { ProfessionalsModule } from './modules/professionals/professionals.module';
import { PermissionsModule } from './modules/permissions/permissions.module';

@Module({
  imports: [
    GraphqlModule,
    DataBaseModule,
    ConsultanciesModule,
    ProfessionalsModule,
    PermissionsModule,
  ],
})
export class AppModule {}
