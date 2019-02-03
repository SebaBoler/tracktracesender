import { Resolver, Query, Arg } from "type-graphql";
import { RouteShipOrder } from "../entity/RouteShipOrder";
import { getRepository } from "typeorm";

@Resolver(RouteShipOrder)
export class RouteShipOrderResolver {
  private routeshiporderRepository = getRepository(RouteShipOrder);

  @Query(() => [RouteShipOrder], { name: "RouteShipOrderGetAll" })
  async routes(): Promise<RouteShipOrder[]> {
    return await this.routeshiporderRepository.find();
  }

  @Query(() => RouteShipOrder, {
    nullable: true,
    name: "RouteShipOrderOneById"
  })
  async routeshiporderOneById(
    @Arg("routeShipOrderId") routeShipOrderId: number
  ) {
    return await this.routeshiporderRepository.findOne(routeShipOrderId);
  }
}
