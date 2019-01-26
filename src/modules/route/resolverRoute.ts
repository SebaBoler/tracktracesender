import { PubSubEngine } from "graphql-subscriptions";
import { Resolver, Subscription } from "type-graphql";
import { Route } from "src/entity/Route";

@Resolver()
export class ResolverRoute {
  @Subscription({
    topics: ["Routes", "ERRORS"]
  })
  NewRoute(): Route {}
}
