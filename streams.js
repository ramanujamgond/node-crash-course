const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStrem = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('---- New Chunk ----');
//     // console.log(chunk.toString());
//     console.log(chunk);
//     writeStrem.write('\n NEW CHUNK\n');
//     writeStrem.write('\n NEW CHUNK\n')
//     writeStrem.write(chunk);
// })


// piping
readStream.pipe(writeStrem);