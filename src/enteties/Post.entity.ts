import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "varchar",
  })
  message!: string;
  @Column({
    type: "varchar",
    nullable: true,
  })
  picture!: string;
}
