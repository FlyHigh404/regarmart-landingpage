/*
  Warnings:

  - A unique constraint covering the columns `[user_token,search_term]` on the table `search_histories` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `search_histories_user_token_search_term_key` ON `search_histories`(`user_token`, `search_term`);
