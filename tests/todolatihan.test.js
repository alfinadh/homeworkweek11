const app = require('../app')
const request = require('supertest')

test('Sukses Mendapatkan List Todo', (done) => {
    request(app)
        .get('/api/v1/todo')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body.message).toBe("Success")
            done()
        })
        .catch(done)
})

test('Get Count Data From First Page', (done) => {
    request(app)
        .get('/api/v1/todo')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            console.log(response.body.data.length)
            expect(response.body.data.length).toBe(5)
            done()
        })
        .catch(done)
})

test('Get 1 Data From List', (done) => {
    request(app)
    .get('/api/v1/todo')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body.data[0].title).toBe("Todo 1")
            done()
        })
        .catch(done)
})