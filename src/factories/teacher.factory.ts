import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';
import { Teacher } from '../../generated/prisma/index.js';

export const teacherFactory = Factory.Sync.makeFactory<Teacher>({
  id: Factory.each(() => faker.string.uuid()),
  name: faker.person.fullName(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent(),
});
