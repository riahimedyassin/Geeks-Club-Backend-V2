import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DepartmentAssignment } from "./DepartmentAssignment.entity";
import { Submission } from "./Submission.entity";

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
  @OneToMany(() => DepartmentAssignment, (dep) => dep.assignment)
  depart_asgnmnt!: DepartmentAssignment[];
  @OneToMany(() => Submission , (submission) => submission.assignment)
  submissions! : Submission[]
}
