const hooks = require('./hooks1');
const config = require('../config').get(process.env.NODE_ENV);
const SearchPage = require('./page-objects/search.page');

//Test Suite
describe('Sample Test', () => {
  let app;

  //is executed before each Test Case
  beforeEach(async () => {
    app = await hooks.startApp();
  });

  //is executed after each Test Case
  afterEach(async() => {
    await hooks.stopApp(app);
  });
/*
  //Test Case
  it('opens a window', async() => {
    await app.client.waitUntilWindowLoaded()
      .getWindowCount()
      .should.eventually.equal(1);
  });

  //Test Case
  it('should get a url', async() => {
    await app.client//.url(config.url)
      .getTitle()
      .should.eventually.include('ABCD EFGH');
  });

  //Test Case
  it('Enter First Val', async() => {
    const aval = '21';
    await app.client//.url(config.url)
      .setValue('#aid', aval)
      .getValue('#aid')
      .should.eventually.equal(aval);
  });
*/


});
