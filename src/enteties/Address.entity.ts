import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Address {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
  })
  city!: string;
  @Column({
    type: "varchar",
  })
  region!: string;
  @Column({
    type: "varchar",
  })
  country!: string;
}
