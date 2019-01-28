import { Resolver, Query } from "type-graphql";
import { Route } from "src/entity/Route";

@Resolver()
export class RouteResolver {
  @Query(() => [Route])
  async routes() {
    return Route.find();
  }
}
