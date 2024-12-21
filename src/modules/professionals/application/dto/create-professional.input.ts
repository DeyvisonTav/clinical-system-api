import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateProfessionalInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  primaryPhone: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsString()
  @IsOptional()
  cro?: string;

  @Field()
  @IsString()
  @IsOptional()
  password?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  clinicId: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  permissionId: string;
}
