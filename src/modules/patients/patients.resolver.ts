import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PatientsService } from './application/service/patients.service';
import { PatientOutput } from './application/dto/patient.output';
import { CreatePatientInput } from './application/dto/create-patient.input';
import { UpdatePatientInput } from './application/dto/update-patient.input';
import { FilterPatientInput } from './application/dto/filter-patient.input';

@Resolver(() => PatientOutput)
export class PatientsResolver {
  constructor(private readonly service: PatientsService) {}

  @Query(() => [PatientOutput])
  async patients(
    @Args('filters', { type: () => FilterPatientInput, nullable: true })
    filters?: FilterPatientInput,
    @Args('page', { type: () => Number, nullable: true }) page = 1,
    @Args('limit', { type: () => Number, nullable: true }) limit = 10,
  ): Promise<PatientOutput[]> {
    return this.service.findAll(filters, page, limit);
  }

  @Query(() => PatientOutput)
  async patient(
    @Args('id', { type: () => String }) id: string,
  ): Promise<PatientOutput> {
    return this.service.findById(id);
  }

  @Mutation(() => PatientOutput)
  async createPatient(
    @Args('data') data: CreatePatientInput,
  ): Promise<PatientOutput> {
    return this.service.create(data);
  }

  @Mutation(() => PatientOutput)
  async updatePatient(
    @Args('id', { type: () => String }) id: string,
    @Args('data') data: UpdatePatientInput,
  ): Promise<PatientOutput> {
    return this.service.update(id, data);
  }

  @Mutation(() => Boolean)
  async deletePatient(
    @Args('id', { type: () => String }) id: string,
  ): Promise<boolean> {
    await this.service.delete(id);
    return true;
  }
}
