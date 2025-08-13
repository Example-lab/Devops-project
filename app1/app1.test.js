const request = require('supertest');
const app = require('./index');

describe('App1 Tests', () => {
  it('should return 200 OK and contain "Welcome to App 1"', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Welcome to App 1');
  });
});
