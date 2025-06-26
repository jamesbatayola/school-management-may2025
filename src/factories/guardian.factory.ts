import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';
import type { Guardian } from '../../generated/prisma/index.js';

export const guardianFactory = Factory.Sync.makeFactory<Guardian>({
  id: Factory.each(() => faker.string.uuid()),
  name: Factory.each(() => faker.person.fullName()),
  createdAt: Factory.each(() => faker.date.past()),
  updatedAt: Factory.each(() => faker.date.recent()),
});
