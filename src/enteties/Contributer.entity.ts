import { CreateDateColumn, Entity, ManyToOne } from "typeorm";
import { Forum } from "./Forum.entity";

@Entity()
export class Contributer {
  @CreateDateColumn()
  created_at!: Date;
  @ManyToOne(() => Forum , (forum) => forum.contributers)
  forum! : Forum ; 
}
