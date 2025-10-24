/*
  Warnings:

  - You are about to drop the column `name` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `answer` on the `faqs` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `faqs` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `rating_tag_types` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `testimonials` table. All the data in the column will be lost.
  - You are about to drop the column `customer_title` on the `testimonials` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `units` table. All the data in the column will be lost.
  - Made the column `name_id` on table `categories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `answer_id` on table `faqs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `question_id` on table `faqs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name_id` on table `rating_tag_types` required. This step will fail if there are existing NULL values in that column.
  - Made the column `customer_title_id` on table `testimonials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name_id` on table `units` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `categories_name_key` ON `categories`;

-- DropIndex
DROP INDEX `rating_tag_types_name_key` ON `rating_tag_types`;

-- DropIndex
DROP INDEX `units_name_key` ON `units`;

-- AlterTable
ALTER TABLE `categories` DROP COLUMN `name`,
    MODIFY `name_id` VARCHAR(150) NOT NULL;

-- AlterTable
ALTER TABLE `faqs` DROP COLUMN `answer`,
    DROP COLUMN `question`,
    MODIFY `answer_id` TEXT NOT NULL,
    MODIFY `question_id` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `rating_tag_types` DROP COLUMN `name`,
    MODIFY `name_id` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `testimonials` DROP COLUMN `content`,
    DROP COLUMN `customer_title`,
    MODIFY `customer_title_id` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `units` DROP COLUMN `name`,
    MODIFY `name_id` VARCHAR(75) NOT NULL;
