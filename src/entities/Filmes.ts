import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
  } from "typeorm";
import { v4 as uuid } from "uuid";
import { Genero } from "./Genero";
  
  @Entity("filmes")
  class Filmes {
    @PrimaryColumn()
    readonly id!: string ;
    
    @Column()
      name!: string;
  
    @Column()
      description!: string;

    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;
            
    @OneToOne(() => Genero)
    @JoinColumn()
       genero: Genero    
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Filmes };