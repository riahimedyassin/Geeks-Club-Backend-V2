import { CreateDateColumn, Entity } from "typeorm";

@Entity()
export class Contributer {
  @CreateDateColumn()
  created_at!: Date;
}
