import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AddressOutput {
  @Field()
  street: string;

  @Field()
  number: string;

  @Field({ nullable: true })
  complement?: string;

  @Field()
  neighborhood: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  zipCode: string;
}
