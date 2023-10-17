import {
    Entity,
    PrimaryColumn,
    Column,
    UpdateDateColumn,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  
  
  @Entity("genero")
  class Genero {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      name!: string;
  
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
  
  export { Genero };