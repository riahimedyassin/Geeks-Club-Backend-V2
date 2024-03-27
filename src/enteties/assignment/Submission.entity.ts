import {
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Assignment } from "./Assignment.entity";
import { Member } from "../member/Member.entity";

export class Submission {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 500,
  })
  content!: string;
  @CreateDateColumn()
  created_at!: Date;
  @UpdateDateColumn()
  updated_at!: Date;
  @ManyToOne(() => Assignment, (ass) => ass.submissions)
  assignment!: Assignment;
  @ManyToOne(() => Member , (member) => member.submissions)
  member ! : Member ; 
}
