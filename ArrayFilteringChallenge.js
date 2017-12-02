var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(x,y) {
  a = Number(x['x']);
  b = Number(x['y']);

   var z = Math.sqrt((a * a) + (b * b));
   return z;

  //console.log("the value of x is:",x);
  //console.log("the value of y is:",y);

});

 console.log(result[0] === 5);
 console.log(result[1] === 13);
 console.log(result[2] === 17);


// //Synchronous mode of programming
// var array = [10,20,30];
// for(var i = 0; i < array.length; i++){
//   console.log("the value is :"+array[i]);
// }

// console.log("after loop");


// //Asychronous programming
// array.map(function(x){
//   console.log(x);
// });

// console.log("after map function");


// array.map(function(x){
//   console.log("squaring values "+(x*x));
// });



