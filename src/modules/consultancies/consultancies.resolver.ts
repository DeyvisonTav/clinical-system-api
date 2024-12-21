import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ConsultanciesService } from './application/service/consultancies.service';
import { ConsultancyOutput } from './application/dto/consultancy.output';
import { CreateConsultancyInput } from './application/dto/create-consultancy.input';

@Resolver(() => ConsultancyOutput)
export class ConsultanciesResolver {
  constructor(private readonly service: ConsultanciesService) {}

  @Query(() => [ConsultancyOutput])
  async consultancies() {
    return this.service.findAll();
  }

  @Mutation(() => ConsultancyOutput)
  async createConsultancy(@Args('data') data: CreateConsultancyInput) {
    return this.service.create(data);
  }
}
