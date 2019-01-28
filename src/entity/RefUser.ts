import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class RefUser extends BaseEntity {
  @Field()
  @PrimaryColumn({ type: "int", unique: true })
  RefUserId: number;

  @Field()
  @Column({ type: "varchar", length: 20 })
  Country: string;

  @Field()
  @Column({ type: "varchar", length: 100 })
  OwnerId: string;
}
