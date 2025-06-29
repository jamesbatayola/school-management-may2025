// import request from 'supertest';
// import authService from '../../src/services/authService.ts';
// import app from '../../src/main.ts';
// import { vi, type Mocked } from 'vitest';
// import { PrismaClient } from '@prisma/client';

// // Factory models
// import { studentFactory } from '../../src/factories/student.factory.ts';
// import { guardianFactory } from '../../src/factories/guardian.factory.ts';
// import { studentLevelFactory } from '../../src/factories/studentLevel.factory.ts';
// import { enrollmentFactory } from '../../src/factories/enrollment.factory.ts';

// // Mock utils function
// // vi.mock('../../src/utils/util.ts', () => ({
// //   generateEmail: vi.fn().mockResolvedValue('james@email.com'),
// //   generatepassword: vi.fn().mockResolvedValue('1234'),
// // }));

// // Mock Prisma client
// vi.mock('../../prisma/instance.ts', () => ({
//   default: {
//     term: { findFirst: vi.fn() },
//     guardian: { findFirst: vi.fn(), create: vi.fn() },
//     student: { findFirst: vi.fn(), create: vi.fn() },
//     studentLevel: { create: vi.fn() },
//     enrollment: { create: vi.fn() },
//     tuitionBill: { create: vi.fn() },
//   },
// }));

// describe('authService.enrollNewStudent', () => {
//   it('POST | should enroll student', async () => {
//     const prisma = (await import('../../prisma/instance.ts')).default as Mocked<PrismaClient>;

//     // Factory build (mock data)
//     const mockGuardian = guardianFactory.build();
//     const mockStudent = studentFactory.build({ guardianId: mockGuardian.id });
//     const mockStudentLevel = studentLevelFactory.build({ studentId: mockStudent.id, levelId: 14 });
//     const mockEnrollment = ['Basic Calculus', 'Human Bodies', 'Introduction to Philosophy', 'Ethical Theories', 'World History'].map(e => {
//       enrollmentFactory.build({ courseName: e, studentId: mockStudent.id, termId: 4 });
//     });

//     // 1st. Setup return values
//     prisma.term.findFirst.mockResolvedValue({
//       id: 4,
//       name: '1st Term',
//       termStart: '2025-01-03 16:00:00.000',
//       termEnd: '2025-04-29 16:00:00.000',
//       schoolYearId: 'e8022d8b-0a3b-40be-9679-aca43b1d8d96',
//       createdAt: '2025-06-08 05:15:17.655',
//       updatedAt: '2025-06-08 05:15:17.655',
//     });

//     // prisma.guardian.findFirst.mockResolvedValue({ id: 'fb90ab86-b820-4d81-b3f7-59ba14a25796', name: 'Mercedes Batayola', createdAt: '2025-06-26 04:56:53.409', updatedAt: '2025-06-26 04:56:53.409' });
//     prisma.guardian.findFirst.mockResolvedValue(null);
//     prisma.guardian.create(mockGuardian);

//     prisma.student.findFirst(null);
//     prisma.student.create(mockStudent);

//     prisma.studentLevel.create(mockStudentLevel);

//     prisma.enrollment.createMany();
//   });

//   // 2nd. Prepare dummy request
//   //   const req = {
//   //     body: {},
//   //   };
// });
