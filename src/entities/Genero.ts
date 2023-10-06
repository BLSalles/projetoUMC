import {
    Entity,
    PrimaryColumn,
    Column
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  
  @Entity("genero")
  class Genero {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      name!: string;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Genero };