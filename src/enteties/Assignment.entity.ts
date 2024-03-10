import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  title!: string;
  @Column()
  descreption!: string;
  @Column({
    type: "varchar",
    nullable: true,
  })
  picture!: string;
  @Column({
    type: "date",
  })
  end_date!: Date;
  @CreateDateColumn()
  created_at!: Date;
}
