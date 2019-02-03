import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn
} from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Route extends BaseEntity {
  @Field()
  @PrimaryColumn({ type: "int", unique: true })
  RouteId: number;

  @Field()
  @Column({ type: "varchar", length: 100 })
  DocFullNo: string;

  @Field()
  @Column({ type: "int" })
  Returns: number;

  @Field()
  @Column({ type: "int" })
  StatusId: number;

  @Field()
  @Column({ type: "varchar", length: 100 })
  StatusName: string;

  @Field()
  @Column({ type: "varchar" })
  RouteDescr: string;

  @Field()
  @Column({ type: "varchar", length: 50 })
  CarrierSymbol: string;

  @Field()
  @Column({ type: "varchar" })
  CarrierName: string;

  @Field()
  @Column({ type: "varchar" })
  DriverName: string;

  @Field()
  @Column({ type: "varchar", length: 30 })
  DriverPhone: string;

  @Field()
  @Column({ type: "varchar", length: 50 })
  VehicleNumber: string;

  @Field()
  @Column({ type: "varchar", length: 50 })
  TrailerNumber: string;

  @Field()
  @Column({ type: "int" })
  BusinessUnitId: number;

  @Field()
  @Column({ type: "varchar", length: 50 })
  BusinessUnitSymbol: string;

  @Field()
  @Column({ type: "varchar" })
  BusinessUnitName: string;

  // @ManyToOne(type => RefUser, refuser => refuser.OwnerId);
  // refuser: RefUser[];

  @Field()
  @Column({ type: "varchar", length: 100 })
  OwnerId: string;

  @Field()
  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
