import { Resolver, Query, Arg } from "type-graphql";
import { RefUser } from "../entity/RefUser";
import { getRepository } from "typeorm";

@Resolver(RefUser)
export class RouteResolver {
  private routeRepository = getRepository(RefUser);

  @Query(() => [RefUser], { name: "RefUserGetAll" })
  async routes(): Promise<RefUser[]> {
    return await this.routeRepository.find();
  }

  @Query(() => RefUser, { nullable: true, name: "RefUserbyId" })
  async refUserById(@Arg("refUserId") refUserId: number) {
    return this.routeRepository.findOne(refUserId);
  }
}
