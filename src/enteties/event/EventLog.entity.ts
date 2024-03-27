import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Event } from "./Event.entity";
import { Admin } from "../admin/Admin.entity";

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
  @ManyToOne(() => Admin , (admin) => admin.event_logs)
  admin! : Admin
}
