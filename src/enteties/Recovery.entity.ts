import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "./Member.entity";

@Entity()
export class Recovery {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
  })
  answer!: string;
  @OneToOne(() => Member,(member) => member.recovery)
  member! : Member 
  
}
