/*
  Warnings:

  - A unique constraint covering the columns `[name_id]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_eng]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_id]` on the table `rating_tag_types` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_eng]` on the table `rating_tag_types` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_id]` on the table `units` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_eng]` on the table `units` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `categories` ADD COLUMN `name_eng` VARCHAR(150) NULL,
    ADD COLUMN `name_id` VARCHAR(150) NULL;

-- AlterTable
ALTER TABLE `faqs` ADD COLUMN `answer_en` TEXT NULL,
    ADD COLUMN `answer_id` TEXT NULL,
    ADD COLUMN `question_en` VARCHAR(255) NULL,
    ADD COLUMN `question_id` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `rating_tag_types` ADD COLUMN `name_eng` VARCHAR(100) NULL,
    ADD COLUMN `name_id` VARCHAR(100) NULL;

-- AlterTable
ALTER TABLE `testimonials` ADD COLUMN `content_eng` VARCHAR(255) NULL,
    ADD COLUMN `content_id` VARCHAR(255) NULL,
    ADD COLUMN `customer_title_eng` VARCHAR(100) NULL,
    ADD COLUMN `customer_title_id` VARCHAR(100) NULL;

-- AlterTable
ALTER TABLE `units` ADD COLUMN `name_eng` VARCHAR(75) NULL,
    ADD COLUMN `name_id` VARCHAR(75) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `categories_name_id_key` ON `categories`(`name_id`);

-- CreateIndex
CREATE UNIQUE INDEX `categories_name_eng_key` ON `categories`(`name_eng`);

-- CreateIndex
CREATE UNIQUE INDEX `rating_tag_types_name_id_key` ON `rating_tag_types`(`name_id`);

-- CreateIndex
CREATE UNIQUE INDEX `rating_tag_types_name_eng_key` ON `rating_tag_types`(`name_eng`);

-- CreateIndex
CREATE UNIQUE INDEX `units_name_id_key` ON `units`(`name_id`);

-- CreateIndex
CREATE UNIQUE INDEX `units_name_eng_key` ON `units`(`name_eng`);
