import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, ArrayNotEmpty, IsArray } from 'class-validator';

@InputType()
export class CreatePermissionInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  level: string;

  @Field(() => [String])
  @IsArray()
  @ArrayNotEmpty()
  professionalsIds: string[];
}
