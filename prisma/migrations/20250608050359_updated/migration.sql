/*
  Warnings:

  - The primary key for the `SchoolYear` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Term" DROP CONSTRAINT "Term_schoolYearId_fkey";

-- DropForeignKey
ALTER TABLE "TuitionBill" DROP CONSTRAINT "TuitionBill_schoolYearId_fkey";

-- AlterTable
ALTER TABLE "SchoolYear" DROP CONSTRAINT "SchoolYear_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SchoolYear_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SchoolYear_id_seq";

-- AlterTable
ALTER TABLE "Term" ALTER COLUMN "schoolYearId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "TuitionBill" ALTER COLUMN "dueDate" SET DEFAULT (now() + interval '15 days'),
ALTER COLUMN "schoolYearId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Term" ADD CONSTRAINT "Term_schoolYearId_fkey" FOREIGN KEY ("schoolYearId") REFERENCES "SchoolYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TuitionBill" ADD CONSTRAINT "TuitionBill_schoolYearId_fkey" FOREIGN KEY ("schoolYearId") REFERENCES "SchoolYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
