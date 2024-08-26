const request = require('supertest');
const app = require('../index');

test('responds with nice hello world', async () => {
	const response = await request(app).get('/hello');
	expect(response.text).toBe('Hello, World!');
});

test('responds with nice hello {name}', async () => {
	const response = await request(app).get('/hello?name=moocow');
	expect(response.text).toBe('Hello, moocow!');
});

test('responds with irritated hello Ian', async () => {
	const response = await request(app).get('/hello?name=Ian');
	expect(response.text).toBe('What do you want, Ian?');
});
