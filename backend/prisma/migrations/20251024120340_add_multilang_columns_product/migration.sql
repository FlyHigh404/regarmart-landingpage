-- AlterTable
ALTER TABLE `products` ADD COLUMN `description_en` TEXT NULL,
    ADD COLUMN `description_id` TEXT NULL,
    ADD COLUMN `name_en` VARCHAR(150) NULL,
    ADD COLUMN `name_id` VARCHAR(150) NULL;
