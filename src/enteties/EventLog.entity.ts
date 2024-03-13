import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Event } from "./Event.entity";

@Entity()
export class EventLog {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 200,
  })
  content!: string;
  @CreateDateColumn()
  updated_at!: Date;
  @ManyToOne(() => Event , (event) => event.logs)
  event! : Event ; 
}
