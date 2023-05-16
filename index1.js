/*function print(){
    console.log("hello world");
}
print();


function sum(a,b){
    console.log(a+b)
    console.log("the sum of "+ a +"and"+ b +"is"+a+b)
 }
 sum(3,4)

 let add=(a ,b ) =>{
  result= a+b;
    console.log(result)
 };
 add(3,4)*/


/*var x = 21;
var girl = function () {
    var x = 20;
 console.log(x);
 var x = 20;
};
girl ();*/

/*var x = 21;
girl ();
console.log(x)
function girl() {
 console.log(x);
 var x = 20;
}; */
var x = 21;
a();
b();
 function a() {
 
 x = 20;
 console.log(x);
};
 function b() {
 
 x = 40;
 console.log(x);
}

function factorial(n){
    let fact=1;
    for(i=1;i<=n;i++){
      fact=fact*i;
      
    }
    console.log(fact)
}
factorial(5);

function FindSum(a, b){
    return a + b;
   }
   function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
   }
   DisplayData("PrepBytes", FindSum(10, 9));


  /* Abc();
const Abc = function(){
 let value = 20;
 console.log(value);
} */

var a = 10;
(function (){
 console.log(a);
 var a = 20;
})();

//Guess the Output
const greet = function(name){
 return function(m){
 
 console.log(`Hi!! ${name}, ${m}`);
 }
}
 
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")