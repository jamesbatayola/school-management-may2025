import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';
import type { Student } from '../../generated/prisma/index.js';

const baseFactory = Factory.Sync.makeFactory<Student>({
  id: Factory.each(() => faker.string.uuid()),
  firstName: Factory.each(() => faker.person.firstName()),
  lastName: Factory.each(() => faker.person.lastName()),
  age: Factory.each(() => faker.number.int({ min: 18, max: 30 })),
  gender: Factory.each(() => faker.person.gender()),
  password: Factory.each(() => faker.internet.password()),
  guardianId: "",
  createdAt: Factory.each(() => faker.date.past()),
  updatedAt: Factory.each(() => faker.date.recent()),
  email: '', // placeholder, will be overridden by derivation
});

export const studentFactory = baseFactory.withDerivation2(['firstName', 'lastName'], 'email', (firstName, lastName) => faker.internet.email({ firstName, lastName }));
