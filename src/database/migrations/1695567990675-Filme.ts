import {MigrationInterface, QueryRunner} from "typeorm";

export class Filme1695567990675 implements MigrationInterface {
    name = 'Filme1695567990675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "filmes" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_345de4acf41fc44bc207b21cfc2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "filmes"`);
    }

}
