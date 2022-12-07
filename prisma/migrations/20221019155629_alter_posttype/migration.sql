/*
  Warnings:

  - Added the required column `postTypeName` to the `PostType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PostType" ADD COLUMN     "postTypeName" TEXT NOT NULL;
