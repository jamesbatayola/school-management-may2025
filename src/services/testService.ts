import { Request } from 'express';
import client from '../../prisma/instance.ts';

const testService = {
  async createTeacher(req: Request) {
    const { name } = req.body;

    const teacher = await client.teacher.create({
      data: {
        name: name,
      },
    });

    return teacher;
  },
};

export default testService;
