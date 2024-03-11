import { Column, PrimaryGeneratedColumn } from "typeorm";

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
}
