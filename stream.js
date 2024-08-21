const fs=require('fs')
const readStream=fs.createReadStream('./docs/blog2.txt',{encoding:'utf8'})
const writeStream=fs.createWriteStream('./docs/blog3.txt')
// readStream.on('data',(chunks)=>{
//     console.log('-------NEW CHUNKS------')
//     writeStream.write('\n NEW CHUNKS \n')
//     writeStream.write(chunks)
//     console.log(chunks)
// })

//while using piping 
readStream.pipe(writeStream)