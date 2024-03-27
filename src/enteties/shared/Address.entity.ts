import { Column, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "../member/Member.entity";

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
  @OneToOne(() => Member , (member) => member.address )
  member! : Member 
}
