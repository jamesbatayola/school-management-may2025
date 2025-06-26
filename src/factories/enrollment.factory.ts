import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';
import type { Enrollment } from '../../generated/prisma/index.js';

export const enrollmentFactory = Factory.Sync.makeFactory<Enrollment>({
  id: Factory.each(() => faker.string.uuid()),
  studentId: 'n/a',
  courseName: 'n/a',
  termId: 404,
  createdAt: Factory.each(() => faker.date.past()),
  updatedAt: Factory.each(() => faker.date.recent()),
});
