const fs = require('fs');

// fs.readFile('./test.txt', { encoding: 'utf8' }, (err, data) => {
//   if(err) {
//     //handle error 
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// //{ encoding: 'utf8' } is for changing hex(?) into text

// // exercise 2, writing a new file and deleting
// const textMessage = 'hello';
// fs.writeFile('./write.txt', textMessage, (err) => {
//   if(err) return console.error(err);
// //reads in terminal
//   fs.readFile('./write.txt', { encoding: 'utf8' }, (err, data) => {
//     if(err) return console.error(err);
    
//     fs.unlink('./write.txt', err => {
//       console.log(err);
//     })

//   });

// });

// exercise 3, takes a file and copies it
// fs.readFile('./write.txt', { encoding: 'utf8' }, (err, content) => {
//   if(err) return console.error(err);

//   fs.writeFile('./write-copy.txt', content, (err) => {
//     if(err) return console.error(err);

//     console.log('done');
//   });
// });

//exercise 4 test with src dest and callback


function copyFile(src, dest, callback) {
  fs.readFile(src, (err, data) => {
    if(err) return callback(err);

    fs.writeFile(dest, data, err => {
      callback(err);
    });
  });
} 

module.exports = copyFile;
