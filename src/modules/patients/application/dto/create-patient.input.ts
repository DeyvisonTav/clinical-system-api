import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  Matches,
} from 'class-validator';
import { AddressInput } from './address.input';

@InputType()
export class CreatePatientInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @Matches(/^\d{11}$/, { message: 'CPF deve conter 11 números.' })
  cpf: string;

  @Field({ nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field()
  @IsPhoneNumber('BR')
  phone: string;

  @Field({ nullable: true })
  @IsOptional()
  birth_date?: Date;

  @Field({ nullable: true })
  @IsString()
  responsible_name?: string;

  @Field({ nullable: true })
  @IsPhoneNumber('BR')
  responsible_phone?: string;

  @Field({ nullable: true })
  @IsString()
  dental_plan_name?: string;

  @Field({ nullable: true })
  @IsString()
  dental_plan_number?: string;

  @Field(() => AddressInput, { nullable: true })
  @IsOptional()
  address?: AddressInput;

  @Field(() => String)
  @IsNotEmpty()
  clinic_id: string;
}
