//compressing data using Gzib
var zlib = require('zlib');
var fs = require('fs');
var Gzip = zlib.createGzip(); 
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(Gzip).pipe(w);nnnnnnnnnn