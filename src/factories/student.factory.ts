import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';
import type { Student } from '../../generated/prisma/index.js';

export const studentFactory = Factory.Sync.makeFactory<Student>({
  id: Factory.each(() => faker.string.uuid()),
  firstName: Factory.each(() => faker.person.firstName()),
  lastName: Factory.each(() => faker.person.lastName()),
  age: Factory.each(() => faker.number.int({ min: 18, max: 30 })),
  gender: Factory.each(() => faker.person.gender()),
  email: Factory.each(({ attributes }) => faker.internet.email(attributes.firstName, attributes.lastName)),
  password: Factory.each(() => faker.internet.password()),
  guardianId: Factory.each(() => faker.string.uuid()),
  createdAt: Factory.each(() => faker.date.past()),
  updatedAt: Factory.each(() => faker.date.recent()),
});
