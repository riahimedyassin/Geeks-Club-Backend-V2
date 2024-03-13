import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { User } from "./User";
import { Address } from "./Address.entity";
import { Recovery } from "./Recovery.entity";
import { Point } from "./Point.entity";
import { Skill } from "./Skill.entity";
import { Participant } from "./Participant.entity";
import { Comment } from "../enteties/Comment.entity";
import { Post } from "./Post.entity";
import { Reply } from "./Reply.entity";
import { DepartmentMember } from "./DepartmentMember.entity";

@Entity()
export class Member extends User {
  CIN!: number;
  @Column({
    type: "varchar",
    nullable: true,
  })
  picture?: string;
  @Column({
    type: "boolean",
    default: false,
  })
  isMember!: boolean;
  @OneToOne(() => Address, (address) => address.member)
  @JoinColumn()
  address!: Address;
  @OneToOne(() => Recovery, (recovery) => recovery.member)
  @JoinColumn()
  recovery!: Recovery;
  @OneToOne(() => Point, (point) => point.member)
  @JoinColumn()
  point!: Point;
  @OneToMany(() => Skill, (skill) => skill.member)
  skills!: Skill[];
  @OneToMany(() => Participant, (paritcipant) => paritcipant.member)
  participants!: Participant[];
  @OneToMany(() => Comment, (comment) => comment.member)
  comments!: Comment[];
  @OneToMany(() => Post, (post) => post.member)
  posts!: Post[];
  @OneToMany(() => Reply, (reply) => reply.member)
  replies!: Reply[];
  @OneToMany(() => DepartmentMember, (dep_member) => dep_member.member)
  dep_member!: DepartmentMember[];
}
