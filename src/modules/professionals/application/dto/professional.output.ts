import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ProfessionalOutput {
  @Field()
  id: string;

  @Field()
  fullName: string;

  @Field()
  cpf: string;

  @Field()
  primaryPhone: string;

  @Field()
  email: string;

  @Field()
  cro?: string;

  @Field()
  clinicId: string;

  @Field()
  permissionId: string;
}
