import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';
import type { StudentLevel } from '../../generated/prisma/index.js';

export const studentLevelFactory = Factory.Sync.makeFactory<StudentLevel>({
  id: Factory.each(i => i),
  studentId: '',
  levelId: 404,
  createdAt: Factory.each(() => faker.date.past()),
  updatedAt: Factory.each(() => faker.date.recent()),
});
