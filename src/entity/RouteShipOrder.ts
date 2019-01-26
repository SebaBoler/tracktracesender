import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";
import { ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class RouteShipOrder extends BaseEntity {
  @PrimaryColumn({ type: "int", unique: true })
  RouteShipOrderId: number;

  @Column({ type: "int" })
  RouteId: number;

  //@ManyToOne(type => Route, route => route.routeshiporders)
  //route: Route;

  @Column({ type: "integer"})
  Seq: number;

  @Column({ type: "varchar", length: 100 })
  DocExtNo: string;

  @Column({ type: "varchar", length: 100 })
  DocClientNo: string;

  @Column({ type: "integer" })
  UnloadingId: number;

  @Column({ type: "varchar" })
  UnloadingSymbol: string;

  @Column({ type: "varchar" })
  UnloadingName: string;

  @Column({ type: "varchar" })
  UnloadingAddress: string;

  @Column({ type: "varchar" })
  UnloadingCity: string;

  @Column({ type: "varchar", length: 20 })
  UnloadingPostalCode: string;

  @Column({ type: "varchar" })
  UnloadingCountry: string;

  @Column({ type: "numeric" })
  UnloadingLon: number;

  @Column({ type: "numeric" })
  UnloadingLat: number;

  @Column({ type: "date" })
  DeliveryDateFrom: Date;

  @Column({ type: "date" })
  DeliveryDateTo: Date;

  @Column({ type: "time" })
  DeliveryTimeFrom: Date;

  @Column({ type: "time" })
  DeliveryTimeTo: Date;
}
