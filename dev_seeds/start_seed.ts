import bcrypt from 'bcryptjs';
import client from '../prisma/instance.ts';

async function seed() {
  //   await client.teacher.create({
  //     data: {
  //       name: 'George Fordwhite',
  //     },
  //   });
  //   await client.guardian.create({
  //     data: {
  //       name: 'Mercedes Batayola',
  //     },
  //   });
}

await seed();

// await client.student.createMany({
// 	data: [
// 		{
// 			firstName: "Jake James",
// 			lastName: "Batayola",
// 			age: 21,
// 			email: "jakejamesbatayola@edu.com",
// 			password: await bcrypt.hash("1234", 10),
// 			guardianId: (await client.guardian.create({ data: { name: "Mercedes Batayola" } })).id,
// 			gender: "Male",
// 		},
// 		{
// 			firstName: "Charles Isaac",
// 			lastName: "Nieves",
// 			age: 21,
// 			email: "charlesisaacnieves@edu.com",
// 			password: await bcrypt.hash("1234", 10),
// 			guardianId: (await client.guardian.create({ data: { name: "Carmela Nieves" } })).id,
// 			gender: "Male",
// 		},
// 	],
// });

// await client.level.createMany({
// 	data: [
// 		{ name: "Grade 1" },
// 		{ name: "Grade 2" },
// 		{ name: "Grade 3" },
// 		{ name: "Grade 4" },
// 		{ name: "Grade 5" },
// 		{ name: "Grade 6" },
// 		{ name: "Grade 7" },
// 		{ name: "Grade 8" },
// 		{ name: "Grade 9" },
// 		{ name: "Grade 10" },
// 		{ name: "Grade 11" },
// 		{ name: "Grade 12" },
// 		{ name: "1st year college" },
// 		{ name: "2nd year college" },
// 		{ name: "3rd year college" },
// 		{ name: "4th year college" },
// 	],
// });

// await client.schoolYear.create({
// 	data: {
// 		name: "2025",
// 		startDate: new Date("2025-01-04T00:00:00"),
// 		endDate: new Date("2025-10-28T00:00:00"),
// 	},
// });

// await client.term.createMany({
// 	data: [
// 		{
// 			name: "1st Term",
// 			termStart: new Date("2025-01-04T00:00:00"),
// 			termEnd: new Date("2025-04-30T00:00:00"),
// 			schoolYearId: "e8022d8b-0a3b-40be-9679-aca43b1d8d96",
// 		},
// 		{
// 			name: "2nd Term",
// 			termStart: new Date("2025-05-01T00:00:00"),
// 			termEnd: new Date("2025-08-31T00:00:00"),
// 			schoolYearId: "e8022d8b-0a3b-40be-9679-aca43b1d8d96",
// 		},
// 		{
// 			name: "3rd Term",
// 			termStart: new Date("2025-09-01T00:00:00"),
// 			termEnd: new Date("2025-10-28T00:00:00"),
// 			schoolYearId: "e8022d8b-0a3b-40be-9679-aca43b1d8d96",
// 		},
// 	],
// });

// await client.subject.createMany({
// 	data: [
// 		{ name: "MATHEMATICS" },
// 		{ name: "SCIENCE" },
// 		{ name: "PHILOSOPHY" },
// 		{ name: "ETHICS" },
// 		{ name: "HISTORY" },
// 		{ name: "GEOGRAPHY" },
// 		{ name: "ARTS" },
// 		{ name: "PHYSICAL EDUCATION" },
// 	],
// });

// await client.course.createMany({
// 	data: [
// 		{ name: "Basic Calculus", subjectId: 1 },
// 		{ name: "Human Bodies", subjectId: 2 },
// 		{ name: "Introduction to Philosophy", subjectId: 3 },
// 		{ name: "Ethical Theories", subjectId: 4 },
// 		{ name: "World History", subjectId: 5 },
// 		{ name: "Geographical Studies", subjectId: 6s },
// 		{ name: "Creative Arts", subjectId: 7 },
// 		{ name: "Sports and Fitness", subjectId: 8 },
// 		{ name: "Advanced Calculus", subjectId: 1 },
// 		{ name: "Physics of Matter", subjectId: 2 },
// 		{ name: "Philosophical Logic", subjectId: 3 },
// 		{ name: "Applied Ethics", subjectId: 4 },
// 		{ name: "Modern History", subjectId: 5 },
// 		{ name: "Environmental Geography", subjectId: 6 },
// 		{ name: "Visual Arts", subjectId: 7 },
// 		{ name: "Athletic Training", subjectId: 8 },
// 	],
// });

// await client.enrollment.createMany({
// 	data: [{}],
// });
