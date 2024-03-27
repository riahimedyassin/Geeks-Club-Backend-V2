import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comment } from "./Comment.entity";
import { Category } from "./Category.entity";
import { Participant } from "./Participant.entity";
import { EventLog } from "./EventLog.entity";

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 30,
  })
  title!: string;
  @Column({
    type: "varchar",
    length: 200,
  })
  descreption!: string;
  @Column({
    type: "double",
    precision: 0.01,
  })
  price!: number;
  @Column({
    type: "int",
  })
  rewared!: number;
  @Column({
    type: "date",
  })
  start_date!: Date;
  @Column({
    type: "date",
  })
  end_date!: Date;
  @Column({
    type: "varchar",
    nullable: true,
  })
  picture?: string;
  @OneToMany(() => Comment, (comment) => comment.event)
  comments!: Comment[];
  @ManyToOne(() => Category, (category) => category.events)
  category!: Category;
  @OneToMany(() => Participant, (participant) => participant.event)
  participants!: Participant[];
  @ManyToOne(() => EventLog, (log) => log.event)
  logs!: EventLog[];
}
