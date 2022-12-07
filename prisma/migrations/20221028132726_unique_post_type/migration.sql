/*
  Warnings:

  - A unique constraint covering the columns `[postTypeName]` on the table `PostType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PostType_postTypeName_key" ON "PostType"("postTypeName");
