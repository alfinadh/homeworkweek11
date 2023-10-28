const app = require('../app')
const request = require('supertest')

test('Berhasil Mendapatkan List', (done) => {
    request(app)
    .get('/api/v1/todohw')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
        expect(response.body.message).toBe("Success")
        done()
    })
    .catch(done)
})

test('Mendapatkan Detail Todo', (done) => {
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