/*
  Warnings:

  - You are about to drop the column `schoolYearId` on the `Enrollment` table. All the data in the column will be lost.
  - Added the required column `termId` to the `Enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_schoolYearId_fkey";

-- AlterTable
ALTER TABLE "Enrollment" DROP COLUMN "schoolYearId",
ADD COLUMN     "termId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "EnrollmentBill" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "dueDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EnrollmentBill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
