/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `faq` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lead` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ratingtagtype` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `searchhistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `testimonial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `testimonialimage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `testimonialratingtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `unit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_unit_id_fkey`;

-- DropForeignKey
ALTER TABLE `testimonial` DROP FOREIGN KEY `Testimonial_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `testimonialimage` DROP FOREIGN KEY `TestimonialImage_testimonial_id_fkey`;

-- DropForeignKey
ALTER TABLE `testimonialratingtag` DROP FOREIGN KEY `TestimonialRatingTag_tag_type_id_fkey`;

-- DropForeignKey
ALTER TABLE `testimonialratingtag` DROP FOREIGN KEY `TestimonialRatingTag_testimonial_id_fkey`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `faq`;

-- DropTable
DROP TABLE `lead`;

-- DropTable
DROP TABLE `product`;

-- DropTable
DROP TABLE `ratingtagtype`;

-- DropTable
DROP TABLE `searchhistory`;

-- DropTable
DROP TABLE `testimonial`;

-- DropTable
DROP TABLE `testimonialimage`;

-- DropTable
DROP TABLE `testimonialratingtag`;

-- DropTable
DROP TABLE `unit`;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `description` TEXT NULL,
    `is_promo` BOOLEAN NOT NULL DEFAULT false,
    `base_price` DECIMAL(10, 2) NOT NULL,
    `promo_price` DECIMAL(10, 2) NULL,
    `image_url` VARCHAR(255) NULL,
    `stock` INTEGER NOT NULL DEFAULT 0,
    `total_sold` INTEGER NOT NULL DEFAULT 0,
    `unit_id` INTEGER NOT NULL,
    `category_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `units` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(75) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `units_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `categories_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `search_histories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_token` VARCHAR(100) NULL,
    `search_term` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `testimonials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_name` VARCHAR(150) NOT NULL,
    `customer_title` VARCHAR(100) NOT NULL,
    `rating` FLOAT NOT NULL DEFAULT 5.0,
    `content` VARCHAR(255) NULL,
    `product_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `testimonial_images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image_url` VARCHAR(255) NOT NULL,
    `testimonial_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rating_tag_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `rating_tag_types_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `testimonial_rating_tags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rating_value` INTEGER NOT NULL,
    `testimonial_id` INTEGER NOT NULL,
    `tag_type_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faqs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` VARCHAR(255) NOT NULL,
    `answer` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `leads` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `units`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `testimonials` ADD CONSTRAINT `testimonials_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `testimonial_images` ADD CONSTRAINT `testimonial_images_testimonial_id_fkey` FOREIGN KEY (`testimonial_id`) REFERENCES `testimonials`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `testimonial_rating_tags` ADD CONSTRAINT `testimonial_rating_tags_testimonial_id_fkey` FOREIGN KEY (`testimonial_id`) REFERENCES `testimonials`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `testimonial_rating_tags` ADD CONSTRAINT `testimonial_rating_tags_tag_type_id_fkey` FOREIGN KEY (`tag_type_id`) REFERENCES `rating_tag_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
