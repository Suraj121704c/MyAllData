// Lexical Scope
// function a() {
//   console.log(b); //--> 10
//   function c(){
//     console.log(b) // --> 10
//   }
//   c();
// }
// var b = 10;
// a();


// a = 1 
// console.log(a)

// function a() {
//     a = 1
//     console.log(a)
// }
// a();

// var scope = "global"

// function check () {
//   let scope = "local"
//   function s () {
//     console.log(scope);
//   }   
//   s();
// }
// console.log(check());



let a = 12
function b(){
    a = 13;
    function c () {
        console.log(a)
    }
    c()
}
b();