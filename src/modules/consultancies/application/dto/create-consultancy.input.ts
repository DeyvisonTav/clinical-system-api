import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
} from 'class-validator';

@InputType()
export class CreateConsultancyInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsOptional()
  cnpj?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  accountHolderName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  street: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  number: string;

  @Field()
  @IsString()
  @IsOptional()
  complement?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  city: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  state: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  primaryPhone: string;

  @Field()
  @IsString()
  @IsOptional()
  secondaryPhone?: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  officialEmail: string;

  @Field(() => String)
  @IsEnum(['ACTIVE', 'INACTIVE'])
  status: 'ACTIVE' | 'INACTIVE';
}
