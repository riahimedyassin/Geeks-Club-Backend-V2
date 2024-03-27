import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ForumLog } from "./ForumLog.entity";
import { Contributer } from "./Contributer.entity";
import { Post } from "./posts/Post.entity";

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
  @OneToMany(() => ForumLog, (log) => log.forum)
  logs!: ForumLog[];
  @OneToMany(() => Contributer, (contributer) => contributer.forum)
  contributers!: Contributer[];
  @OneToMany(() => Post, (post) => post.forum)
  posts!: Post[];
}
