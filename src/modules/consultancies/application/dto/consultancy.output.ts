import { ObjectType, Field } from '@nestjs/graphql';

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
}
