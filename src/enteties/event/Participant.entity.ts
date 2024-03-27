import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "../member/Member.entity";
import { Event } from "./Event.entity";

export class Participant {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "boolean",
    default: false,
  })
  confirmed!: boolean;
  @CreateDateColumn()
  participated_at!: Date;
  @ManyToOne(()=> Member , (member) => member.participants)
  member! : Member
  @ManyToOne(() => Event , (event) => event.participants)
  event! : Event ;
}
