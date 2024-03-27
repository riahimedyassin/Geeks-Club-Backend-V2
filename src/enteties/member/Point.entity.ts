import {
  Column,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Member } from "./Member.entity";

export class Point {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  week!: number;
  @Column()
  global!: number;
  @UpdateDateColumn()
  updated_at!: Date;
  @OneToOne(() => Member, (member) => member.point)
  member!: Member;
}
