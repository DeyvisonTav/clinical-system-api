import { InputType, PartialType } from '@nestjs/graphql';
import { CreateConsultancyInput } from './create-consultancy.input';

@InputType()
export class UpdateConsultancyInput extends PartialType(
  CreateConsultancyInput,
) {}
