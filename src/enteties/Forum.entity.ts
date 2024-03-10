import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Forum {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
  @Column()
  descreption!: string;
  @Column()
  isClosed!: boolean;
  @Column({
    type: "varchar",
    nullable: true,
  })
  picture!: string;
}
