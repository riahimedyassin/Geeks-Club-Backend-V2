import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Member extends User {
  CIN!: number;
  @Column({
    type: "varchar",
    nullable : true
  })
  picture?: string;
  @Column({
    type: "boolean",
    default: false,
  })
  isMember!: boolean;
}
