const fs = require('fs');
const { join } = require('path');
const copyFile = require('./index');

describe('copy', () => {
  beforeEach(done => {
    fs.writeFile(join(__dirname, 'newTest.txt'), 'Copy Me', done);
    });

    afterEach(done => {
      fs.unlink(join(__dirname, 'newTest.txt'), done);
    })
  });

  it('copies a file', done => {
    const src = join(__dirname, 'newTest,txt');
    const dest = join(__dirname, 'newTest-copy.txt');
    copyFile(src, dest, err => {
      fs.readFile(dest, { encoding: 'utf8' }, (err, data) => {
        expect(data).toEqual('Copy Me');
        done(err);
      });
    })
  }); 
});

