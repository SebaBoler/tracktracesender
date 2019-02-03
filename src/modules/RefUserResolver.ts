import { Resolver, Query } from "type-graphql";
import { RefUser } from "../entity/RefUser";
import { getRepository } from "typeorm";

@Resolver(RefUser)
export class RouteResolver {
  private routeRepository = getRepository(RefUser);

  @Query(() => [RefUser], { name: "RefUserAll" })
  async routes(): Promise<RefUser[]> {
    return await this.routeRepository.find();
  }

  @Query(() => [RefUser], { name: "RefUserbyId" })
  async routeById() {
    return await this.routeRepository.find();
  }
}
