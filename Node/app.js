// const _ = require('lodash');

// const items = [1,[2,[3,[4]]]]

// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log("Hello people")
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// const {readFile} = require('fs')

// console.log('started task 1')
// readFile('./content/first.txt','utf8',(err,result)=> {
//     if(err){
//         console.log(err)
//     }
//     console.log(result)
//     console.log('completed 1st task')
// })
// console.log('starting next task')
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// console.log('first')
// setInterval(()=>{
//     console.log('second')
// },2000)
// console.log('third')
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000,()=>{
    console.log('Server litening on port:5000...')
})