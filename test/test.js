const request = require('supertest');
const app = require('../index');

describe('POST /tasks', () => {
  it('devrait renvoyer le message "ajout avec succes" pour POST', (done) => {
    request(app)
      .post('/tasks')
      .send({ message: 'ajout avec succes' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        if (res.text !== "ajout avec succes") {
          return done(new Error('erreur d ajout'));
        }
        done();
      });
  });
});
