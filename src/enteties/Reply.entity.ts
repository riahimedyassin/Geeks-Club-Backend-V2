import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Reply {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
    length: 100,
  })
  messsage!: string;
  @Column({
    type: "varchar",
    nullable: true,
  })
  picture!: string;
  @CreateDateColumn()
  created_at!: Date;
}
