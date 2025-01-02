const request = require('supertest');
const app = require('../index');

describe('Test Endpoints', () => {
    it('should get greetings', async () => {
        const res = await request(app)
            .get('/')
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual('Hello World!');
    });

    it('should post greetings', async () => {
        const res = await request(app)
            .post('/greetings')
            .send({ name: 'John' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual('Greetings to John!');
    });

    it('should not post greetings when name not provided', async () => {
        const res = await request(app)
            .post('/greetings')
            .send({});
        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual('Please provide a name!');
    });
});