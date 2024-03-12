import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { User } from "./User";
import { Address } from "./Address.entity";
import { Recovery } from "./Recovery.entity";
import { Point } from "./Point.entity";
import { Skill } from "./Skill.entity";

@Entity()
export class Member extends User {
  CIN!: number;
  @Column({
    type: "varchar",
    nullable: true,
  })
  picture?: string;
  @Column({
    type: "boolean",
    default: false,
  })
  isMember!: boolean;
  @OneToOne(() => Address, (address) => address.member)
  @JoinColumn()
  address!: Address;
  @OneToOne(() => Recovery, (recovery) => recovery.member)
  @JoinColumn()
  recovery!: Recovery;
  @OneToOne(() => Point , (point) => point.member)
  @JoinColumn() 
  point! : Point
  @OneToMany(() => Skill , (skill) => skill.member)
  skills! : Skill[]
}
