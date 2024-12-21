import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProfessionalsService } from './application/service/professionals.service';
import { ProfessionalOutput } from './application/dto/professional.output';
import { CreateProfessionalInput } from './application/dto/create-professional.input';

@Resolver(() => ProfessionalOutput)
export class ProfessionalsResolver {
  constructor(private readonly service: ProfessionalsService) {}

  @Query(() => [ProfessionalOutput])
  async professionals() {
    return this.service.findAll();
  }

  @Mutation(() => ProfessionalOutput)
  async createProfessional(@Args('data') data: CreateProfessionalInput) {
    return this.service.create(data);
  }
}
