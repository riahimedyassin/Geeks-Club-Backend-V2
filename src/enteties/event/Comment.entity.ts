import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Event } from "./Event.entity";
import { Member } from "../member/Member.entity";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 100,
  })
  message!: string;
  @CreateDateColumn()
  created_at!: Date;
  @ManyToOne(() => Event, (event) => event.comments)
  event!: Event;
  @ManyToOne(() => Member , (member) => member.comments)
  member! : Member 
}
