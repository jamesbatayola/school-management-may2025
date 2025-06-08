-- AlterTable
ALTER TABLE "TuitionBill" ALTER COLUMN "dueDate" SET DEFAULT (now() + interval '15 days');
