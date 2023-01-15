import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserTable1673741142150 implements MigrationInterface {
    name = 'createUserTable1673741142150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL, \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(255) NOT NULL, \`deletedAt\` datetime(6) NULL, \`deletedBy\` varchar(255) NULL, \`isActive\` tinyint NULL DEFAULT 1, \`firstName\` varchar(50) NOT NULL, \`lastName\` varchar(50) NOT NULL, \`mail\` varchar(500) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
