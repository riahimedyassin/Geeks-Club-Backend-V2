import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Role {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 20,
  })
  title!: string;
  @Column({
    type: "varchar",
    length: 100,
  })
  descreption!: string;
}
