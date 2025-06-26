import app from '../src/main.ts';
import request from 'supertest';

// import { teacherFactory } from '../src/factories/teacher.factory.ts';

describe('ping test', () => {
  it('GET "/test/ping" should return 200', async () => {
    const res = await request(app).get('/test/ping');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'THIS IS A TEST' });
  });

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

  it('POST "/test/teacher/create"', async () => {
    const res = await request(app).post('/test/teacher/create');

    expect(res.status).toBe(200);
  });
});
