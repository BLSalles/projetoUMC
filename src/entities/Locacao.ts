import {
    Entity,
    PrimaryColumn,
    Column
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  
  @Entity("locacao")
  class Locacao {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      description!: string;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Locacao };