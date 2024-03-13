import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DepartmentAssignment {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    type: "boolean",
    default: true,
  })
  required!: boolean;
  
}
