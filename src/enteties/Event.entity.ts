import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

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
}
