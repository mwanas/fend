const request = require('supertest')
const app = require('../index.js')
import 'babel-polyfill'

describe('Post Endpoints', () => {
  it('POST /sentimentData', async () => {
    jest.setTimeout(30000);
    try{
    const res = await request(app)
      .post('/sentimentData')
      .send({
        data: "https://www.nytimes.com/2021/03/19/us/florida-senate-race-fraud.html"
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('model')
  }catch (e){
    console.log(e)
  }
  })
})