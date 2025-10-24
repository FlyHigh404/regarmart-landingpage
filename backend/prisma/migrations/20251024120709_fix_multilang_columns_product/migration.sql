/*
  Warnings:

  - You are about to drop the column `description` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `products` table. All the data in the column will be lost.
  - Made the column `description_id` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name_id` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `description`,
    DROP COLUMN `name`,
    MODIFY `description_id` TEXT NOT NULL,
    MODIFY `name_id` VARCHAR(150) NOT NULL;
