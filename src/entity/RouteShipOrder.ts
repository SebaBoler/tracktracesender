import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class RouteShipOrder extends BaseEntity {
  @Field()
  @PrimaryColumn({ type: "int", unique: true })
  RouteShipOrderId: number;

  @Field()
  @Column({ type: "int" })
  RouteId: number;

  //@ManyToOne(type => Route, route => route.routeshiporders)
  //route: Route;
  @Field()
  @Column({ type: "int" })
  Seq: number;

  @Field()
  @Column({ type: "varchar", length: 100 })
  DocExtNo: string;

  @Field()
  @Column({ type: "varchar", length: 100 })
  DocClientNo: string;

  @Field()
  @Column({ type: "int" })
  UnloadingId: number;

  @Field()
  @Column({ type: "varchar" })
  UnloadingSymbol: string;

  @Field()
  @Column({ type: "varchar" })
  UnloadingName: string;

  @Field()
  @Column({ type: "varchar" })
  UnloadingAddress: string;

  @Field()
  @Column({ type: "varchar" })
  UnloadingCity: string;

  @Field()
  @Column({ type: "varchar", length: 20 })
  UnloadingPostalCode: string;

  @Field()
  @Column({ type: "varchar" })
  UnloadingCountry: string;

  @Field()
  @Column({ type: "numeric" })
  UnloadingLon: number;

  @Field()
  @Column({ type: "numeric" })
  UnloadingLat: number;

  @Field()
  @Column({ type: "date" })
  DeliveryDateFrom: Date;

  @Field()
  @Column({ type: "date" })
  DeliveryDateTo: Date;

  @Field()
  @Column({ type: "time" })
  DeliveryTimeFrom: Date;

  @Field()
  @Column({ type: "time" })
  DeliveryTimeTo: Date;
}
