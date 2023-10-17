import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuid } from "uuid";
@Entity()
export class Profile {

    @PrimaryColumn()
    id: string

    @Column()
    description: string

    @Column()
    photo: string

    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;
      
    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
}