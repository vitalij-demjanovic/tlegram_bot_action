/*
  Warnings:

  - Changed the type of `dataStart` on the `Action` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dataEnd` on the `Action` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Action" DROP COLUMN "dataStart",
ADD COLUMN     "dataStart" TIMESTAMP(3) NOT NULL,
DROP COLUMN "dataEnd",
ADD COLUMN     "dataEnd" TIMESTAMP(3) NOT NULL;
