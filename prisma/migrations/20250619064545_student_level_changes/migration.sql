/*
  Warnings:

  - The primary key for the `StudentLevel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `levelName` on the `StudentLevel` table. All the data in the column will be lost.
  - Added the required column `levelId` to the `StudentLevel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StudentLevel" DROP CONSTRAINT "StudentLevel_levelName_fkey";

-- AlterTable
ALTER TABLE "StudentLevel" DROP CONSTRAINT "StudentLevel_pkey",
DROP COLUMN "levelName",
ADD COLUMN     "levelId" INTEGER NOT NULL,
ADD CONSTRAINT "StudentLevel_pkey" PRIMARY KEY ("studentId", "levelId");

-- AlterTable
ALTER TABLE "TuitionBill" ALTER COLUMN "dueDate" SET DEFAULT (now() + interval '15 days');

-- AddForeignKey
ALTER TABLE "StudentLevel" ADD CONSTRAINT "StudentLevel_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
