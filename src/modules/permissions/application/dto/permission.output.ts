import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PermissionOutput {
  @Field()
  id: string;

  @Field()
  level: string;

  @Field(() => [String])
  professionalsIds: string[];
}
