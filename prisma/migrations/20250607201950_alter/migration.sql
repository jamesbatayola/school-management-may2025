/*
  Warnings:

  - You are about to drop the column `courseId` on the `Enrollment` table. All the data in the column will be lost.
  - The primary key for the `StudentLevel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `levelId` on the `StudentLevel` table. All the data in the column will be lost.
  - You are about to drop the `EnrollmentBill` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `courseName` to the `Enrollment` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `gender` on the `Student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `levelName` to the `StudentLevel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_courseId_fkey";

-- DropForeignKey
ALTER TABLE "StudentLevel" DROP CONSTRAINT "StudentLevel_levelId_fkey";

-- AlterTable
ALTER TABLE "Enrollment" DROP COLUMN "courseId",
ADD COLUMN     "courseName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "gender",
ADD COLUMN     "gender" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "StudentLevel" DROP CONSTRAINT "StudentLevel_pkey",
DROP COLUMN "levelId",
ADD COLUMN     "levelName" TEXT NOT NULL,
ADD CONSTRAINT "StudentLevel_pkey" PRIMARY KEY ("studentId", "levelName");

-- DropTable
DROP TABLE "EnrollmentBill";

-- DropEnum
DROP TYPE "Gender";

-- CreateTable
CREATE TABLE "TuitionBill" (
    "id" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "dueDate" TIMESTAMP(3) NOT NULL,
    "studentId" TEXT NOT NULL,
    "termId" INTEGER NOT NULL,
    "schoolYearId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TuitionBill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StudentLevel" ADD CONSTRAINT "StudentLevel_levelName_fkey" FOREIGN KEY ("levelName") REFERENCES "Level"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_courseName_fkey" FOREIGN KEY ("courseName") REFERENCES "Course"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TuitionBill" ADD CONSTRAINT "TuitionBill_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TuitionBill" ADD CONSTRAINT "TuitionBill_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TuitionBill" ADD CONSTRAINT "TuitionBill_schoolYearId_fkey" FOREIGN KEY ("schoolYearId") REFERENCES "SchoolYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
