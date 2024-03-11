import { CreateDateColumn, Entity } from "typeorm";

@Entity()
export class DepartmentMember {
  @CreateDateColumn()
  joined_at!: Date;
}
