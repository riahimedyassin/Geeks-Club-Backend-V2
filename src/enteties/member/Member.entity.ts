import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { User } from "../base/User";
import { Address } from "../shared/Address.entity";
import { Recovery } from "../recovery/Recovery.entity";
import { Point } from "./Point.entity";
import { Skill } from "./Skill.entity";
import { Participant } from "../event/Participant.entity";
import { Comment } from "../event/Comment.entity";
import { Post } from "../forum/posts/Post.entity";
import { Reply } from "../forum/posts/Reply.entity";
import { DepartmentMember } from "../department/DepartmentMember.entity";
import { Submission } from "../assignment/Submission.entity";

@Entity()
export class Member extends User {
  @Column({
    type: "int",
    length: 8,
  })
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
  @OneToMany(() => Submission, (sub) => sub.member)
  submissions!: Submission[];
}
