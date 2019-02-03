import { Resolver, Query, Arg } from "type-graphql";
import { Route } from "../entity/Route";
import { getRepository } from "typeorm";

@Resolver(Route)
export class RouteResolver {
  private routeRepository = getRepository(Route);

  @Query(() => [Route], { name: "RouteGetAll" })
  async routes(): Promise<Route[]> {
    return await this.routeRepository.find();
  }

  @Query(() => Route, { nullable: true, name: "RoutebyId" })
  async routeById(@Arg("routeId") routeId: number) {
    return await this.routeRepository.findOne(routeId);
  }
}
