import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PermissionsService } from './application/service/permissions.service';
import { PermissionOutput } from './application/dto/permission.output';
import { CreatePermissionInput } from './application/dto/create-permission.input';

@Resolver(() => PermissionOutput)
export class PermissionsResolver {
  constructor(private readonly service: PermissionsService) {}

  @Query(() => [PermissionOutput])
  async permissions() {
    return this.service.findAll();
  }

  @Mutation(() => PermissionOutput)
  async createPermission(@Args('data') data: CreatePermissionInput) {
    return this.service.create(data);
  }
}
