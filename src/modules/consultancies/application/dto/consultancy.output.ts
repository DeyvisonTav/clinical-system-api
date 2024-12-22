import { ObjectType, Field } from '@nestjs/graphql';
import { ProfessionalOutput } from '../../../professionals/application/dto/professional.output';
import { PatientOutput } from '../../../patients/application/dto/patient.output';

@ObjectType()
export class ConsultancyOutput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  cnpj?: string;

  @Field()
  accountHolderName: string;

  @Field()
  cpf: string;

  @Field()
  street: string;

  @Field()
  number: string;

  @Field()
  complement?: string;

  @Field()
  neighborhood: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  zipCode: string;

  @Field()
  primaryPhone: string;

  @Field()
  secondaryPhone?: string;

  @Field()
  officialEmail: string;

  @Field()
  status: string;

  @Field(() => [ProfessionalOutput], { nullable: true })
  professionals?: ProfessionalOutput[];

  @Field(() => [PatientOutput], { nullable: true })
  patients?: PatientOutput[];
}
