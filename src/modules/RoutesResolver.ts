import { Resolver, Query } from "type-graphql";
import { Route } from "../entity/Route";
import { getRepository } from "typeorm";

@Resolver(Route)
export class RouteResolver {
  private routeRepository = getRepository(Route);

  @Query(() => [Route], { name: "RouteAll" })
  async routes(): Promise<Route[]> {
    return await this.routeRepository.find();
  }

  @Query(() => [Route], { name: "RoutebyId" })
  async routeById() {
    return await this.routeRepository.find();
  }
}
