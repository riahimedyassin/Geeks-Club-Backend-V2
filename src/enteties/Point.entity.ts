import { Column, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export class Point {
    @PrimaryGeneratedColumn()
    id!: number ;
    @Column() 
    week! : number ; 
    @Column()
    global! : number ; 
    @UpdateDateColumn()
    updated_at! : Date ;
}