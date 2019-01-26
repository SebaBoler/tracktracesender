import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn
} from "typeorm";
import { ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Route extends BaseEntity {
  @PrimaryColumn({ type: "int", unique: true })
  RouteId: number;

  //@OneToMany(type => RouteShipOrder, routeshiporder => routeshiporder.RouteId)
  //routeshiporders: RouteShipOrder[];

  @Column({ type: "varchar", length: 100 })
  DocFullNo: string;

  @Column({ type: "int" })
  Returns: number;

  @Column({ type: "int" })
  StatusId: number;

  @Column({ type: "varchar", length: 100 })
  StatusName: string;

  @Column({ type: "varchar" })
  RouteDescr: string;

  @Column({ type: "varchar", length: 50 })
  CarrierSymbol: string;

  @Column({ type: "varchar" })
  CarrierName: string;

  @Column({ type: "varchar" })
  DriverName: string;

  @Column({ type: "varchar", length: 30 })
  DriverPhone: string;

  @Column({ type: "varchar", length: 30 })
  VehicleNumber: string;

  @Column({ type: "varchar", length: 30 })
  TrailerNumber: string;

  @Column({ type: "int" })
  BusinessUnitId: number;

  @Column({ type: "varchar", length: 50 })
  BusinessUnitSymbol: string;

  @Column({ type: "varchar" })
  BusinessUnitName: string;

  @Column({ type: "varchar", length: 100 })
  OwnerId: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
