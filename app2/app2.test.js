const request = require('supertest');
const app = require('./index');

describe('App2 Tests', () => {
  it('should return 200 OK and contain "Welcome to App 2"', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    // Adjust to match something inside your App2 HTML file
    expect(res.text).toContain('Welcome to App 2');
  });
});
