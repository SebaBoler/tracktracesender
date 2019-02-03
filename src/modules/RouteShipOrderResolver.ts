import { Resolver, Query } from "type-graphql";
import { RouteShipOrder } from "../entity/RouteShipOrder";
import { getRepository } from "typeorm";

@Resolver(RouteShipOrder)
export class RouteShipOrderResolver {
  private routeshiporderRepository = getRepository(RouteShipOrder);

  @Query(() => [RouteShipOrder], { name: "RouteShipOrderAll" })
  async routes(): Promise<RouteShipOrder[]> {
    return await this.routeshiporderRepository.find();
  }

  @Query(() => [RouteShipOrder], { name: "RouteShipOrderbyId" })
  async routeById() {
    return await this.routeshiporderRepository.find();
  }
}
