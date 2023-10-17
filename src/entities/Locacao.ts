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
import { Filmes } from "./Filmes";
import { User } from "./User";
  
  @Entity("locacao")
  class Locacao {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      description!: string;
    
    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;
            
    @OneToOne(() => Filmes)
    @JoinColumn()
       filmes: Filmes
       
       @OneToOne(() => User)
       @JoinColumn()
          users: User
  
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Locacao };