/*
  Warnings:

  - You are about to drop the column `description_en` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `name_en` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `description_en`,
    DROP COLUMN `name_en`,
    ADD COLUMN `description_eng` TEXT NULL,
    ADD COLUMN `name_eng` VARCHAR(150) NULL;
