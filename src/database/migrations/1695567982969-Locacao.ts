import {MigrationInterface, QueryRunner} from "typeorm";

export class Locacao1695567982969 implements MigrationInterface {
    name = 'Locacao1695567982969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "locacao" ("id" character varying NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_b3c9d705d4515d3c4ac790e14d0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "locacao"`);
    }

}
