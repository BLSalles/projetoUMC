import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from "uuid";

@Entity()

export class Profile{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    photo:string;

    @CreateDateColumn()
    created_at!:Date;

    @UpdateDateColumn()
    update_at!:Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}