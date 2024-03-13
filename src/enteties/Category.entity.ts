import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./Event.entity";

export class Category {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 20,
  })
  name!: string;
  @Column({
    type: "varchar",
    length: 200,
  })
  descreption!: string;
  @OneToMany(() => Event, (event) => event.category)
  events! : Event[]
}
