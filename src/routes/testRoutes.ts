import express, { Router } from 'express';
const router: Router = express.Router();

import client from '../../prisma/instance.ts';

router.get('/ping', (req, res): void => {
  console.log('TEST!');
  res.status(200).json({
    message: 'THIS IS A TEST',
  });
});

router.get('/teacher/:id', async (req, res) => {
  const teacher = await client.teacher.findFirst({ where: { id: 'c45c7670-683a-4a5c-a09c-f0653671b772' } });

  res.json({ data: teacher });
});

router.get('/students', async (req, res) => {
  const students = await client.student.findMany();

  res.json({ data: students });
});

router.get('/student/:id', async (req, res) => {
  const studentSubjects = await client.student.findFirst({ where: { id: req.params.id } });

  res.json({ data: studentSubjects });
});

// router.get('/e')

export default router;
