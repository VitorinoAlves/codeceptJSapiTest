exports.config = {
  tests: './tests/*_tests.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3001'
    },
    REST: {
      endpoint: 'http://localhost:3001/',
      onRequest: (request) => {
      //request.headers.auth = '123';
    }
  },
  ChaiWrapper : {
    require: "codeceptjs-chai"
  }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'TesteAPI'
}