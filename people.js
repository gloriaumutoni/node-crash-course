// const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
// const m='hiii'
// module.exports=people
// // console.log(people,m)

const fs = require("fs");
// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
// console.log(err)
//     }
//     else{
//         console.log(data.toString())
//     }
// })
console.log("last line");

fs.writeFile("./docs/blog1.txt", "hello world", () => {
  console.log("hello again");
});

if (!fs.existsSync("./assets")) {
  //it a synchronous mehod of the fs which will check if the directory exists
  fs.mkdir("./assets", (err) => {
    if(err){
        console.log(err);
    }
  });
} else {
fs.rmdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }})
}
 if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt',(err)=>{
        if(err){
            console.log(err);
        }
    })
 }