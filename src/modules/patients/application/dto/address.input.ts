import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class AddressInput {
  @Field()
  @IsString()
  street: string;

  @Field()
  @IsString()
  number: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  complement?: string;

  @Field()
  @IsString()
  neighborhood: string;

  @Field()
  @IsString()
  city: string;

  @Field()
  @IsString()
  state: string;

  @Field()
  @IsString()
  zipCode: string;
}
