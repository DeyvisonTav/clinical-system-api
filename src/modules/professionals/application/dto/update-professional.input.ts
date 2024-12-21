import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProfessionalInput } from './create-professional.input';

@InputType()
export class UpdateProfessionalInput extends PartialType(
  CreateProfessionalInput,
) {}
