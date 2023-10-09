import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuid} from "uuid";

export class Profile{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    photo:string;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}