/*
  Warnings:

  - You are about to drop the column `answer_en` on the `faqs` table. All the data in the column will be lost.
  - You are about to drop the column `question_en` on the `faqs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `faqs` DROP COLUMN `answer_en`,
    DROP COLUMN `question_en`,
    ADD COLUMN `answer_eng` TEXT NULL,
    ADD COLUMN `question_eng` VARCHAR(255) NULL;
