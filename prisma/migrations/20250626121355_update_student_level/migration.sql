/*
  Warnings:

  - The primary key for the `StudentLevel` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "StudentLevel" DROP CONSTRAINT "StudentLevel_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "StudentLevel_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TuitionBill" ALTER COLUMN "dueDate" SET DEFAULT (now() + interval '15 days');
