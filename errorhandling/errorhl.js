// function First(){
//             let a=123;
//             let b=0;
//             try{
//                 if(b==0){
//                     throw "Do not divide by zero";
//                 }
//             }
//             catch(e){
//                 document.getElementById('demo').innerHTML += "<br>" + e + "<br>";
//             }
//             finally{
//                 document.getElementById('demo').innerHTML += " it will execute anyways!";
//             }
//         }




// var a = require('fs')
// a.readFile('file.txt', 'utf8', function(err,data){
//     if(err){
//         console.error(err)

//     }

//     else{
//         console.log(data);
//     }
// })




var fs= require('fs');
{
    try{
        var data=fs.readFileSync('file.txt','utf-8');
        console.log(data);
    }
    catch(e){
        console.log('error');
    }
}
function square(n){
    return n*n;
}
var result=square(5);
console.log(result);

fs.writeFile('file.txt', 'content Written!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });


  

  fs.access("function.html",fs.constants.F_OK,(err)=>
  {
      if(err){
          console.log('sorry file is not present')}
  
      
      else{
          console.log("file is there")
      }
})

fs.unlink("file.txt",(err))

