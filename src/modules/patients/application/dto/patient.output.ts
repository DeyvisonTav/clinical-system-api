import { ObjectType, Field } from '@nestjs/graphql';
import { AddressOutput } from './address.output';

@ObjectType()
export class PatientOutput {
  @Field()
  id: string;

  @Field()
  public_id: number;

  @Field()
  name: string;

  @Field()
  cpf: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  phone: string;

  @Field({ nullable: true })
  birth_date?: Date;

  @Field({ nullable: true })
  responsible_name?: string;

  @Field({ nullable: true })
  responsible_phone?: string;

  @Field({ nullable: true })
  dental_plan_name?: string;

  @Field({ nullable: true })
  dental_plan_number?: string;

  @Field(() => AddressOutput, { nullable: true })
  address?: AddressOutput;

  @Field()
  clinic_id: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
