import app from '../src/main.ts';
import request from 'supertest';
import kleur from 'kleur';

import { teacherFactory } from '../src/factories/teacher.factory.ts';
import testService from '../src/services/testService.ts';

import type { Mocked } from 'vitest';
import { PrismaClient } from '@prisma/client';

import { any } from 'zod/v4';
import { mock } from 'node:test';

describe('PING TEST', () => {
  it('GET "/test/ping" should return 200', async () => {
    const res = await request(app).get('/test/ping');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'THIS IS A TEST' });
  });
});

describe('FETCH TEST', () => {
  it('GET "/test/teacher/c45c7670-683a-4a5c-a09c-f0653671b772" should return "George Fordwhite"', async () => {
    const res = await request(app).get('/test/teacher/c45c7670-683a-4a5c-a09c-f0653671b772');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      data: {
        id: 'c45c7670-683a-4a5c-a09c-f0653671b772',
        name: 'George Fordwhite',
        createdAt: '2025-06-26T04:46:23.819Z',
        updatedAt: '2025-06-26T04:46:23.819Z',
      },
    });
  });
});

describe('CREATE TEST', () => {
  beforeEach(() => {
    vi.doMock('../prisma/instance.ts', () => ({
      default: {
        teacher: {
          create: vi.fn(),
        },
      },
    }));
  });

  afterEach(() => {
    vi.resetModules(); // resets import cache between tests
    vi.clearAllMocks(); // optional but cleans up mocked functions
  });

  it('POST "/test/teacher/create"', async () => {
    const client = (await import('../prisma/instance.ts')).default as Mocked<PrismaClient>;

    const mockTeacher = teacherFactory.build();

    client.teacher.create.mockResolvedValue(mockTeacher);

    const req = {
      body: { name: mockTeacher.name },
    };

    const res = await testService.createTeacher(req);

    expect(res).toEqual(mockTeacher);
  });
  //
});
