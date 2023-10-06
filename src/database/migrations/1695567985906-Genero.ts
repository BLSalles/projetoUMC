import {MigrationInterface, QueryRunner} from "typeorm";

export class Genero1695567985906 implements MigrationInterface {
    name = 'Genero1695567985906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "genero" ("id" character varying NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_b829204c76a525595b67b4dc1f0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "genero"`);
    }

}
