// const mybuffer=Buffer.alloc(17)
// mybuffer.write("node welcomes you")
// const a=(mybuffer.toString())
// console.log(a);

var buff=Buffer.alloc(10)
console.log(buff)
buff.write('write')
console.log(buff)
var a=buff.toString()
console.log(a)


//method 2
var buff2=new Buffer('node')
console.log(buff2)

//method 3
var buff3= Buffer.from[1,2,3,4]
console.log(buff3)

//length calculation
var length=buff.length
console.log(length)

//concentation
console.log(Buffer.concat([buff,buff2]))


//copy buffer
 const bufferSrc=new Buffer('abc');
const bufferDest=Buffer.alloc(3);
bufferSrc.copy(bufferDest);

const Data=bufferDest.toString('utf-8');
console.log(Data);

//slicing data
const bufferold=new Buffer(
    'nodejsisthere tointroduceyou to industry');
const bufferNew=bufferold.slice(16,25);
console.log(bufferNew.toString());


//compare 2 buffer
const buffero=new Buffer("avi")
const buffert=new Buffer("singh")
var result=buffero.compare(buffert)
console.log(result)


