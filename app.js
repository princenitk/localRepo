
num = 5;
str = "10";
let newString = str + num;
const intNumber = Number(newString);
console.log(typeof intNumber);
console.log(newString);

function fetchData(callback) {

    setTimeout(function() {
      const data = 'Some fetched data';
      callback(data); 
    }, 3000); 
  }
  
  function processFetchedData(data) {
    console.log('Processing data:', data);
  }

  fetchData(processFetchedData);
  



strNumber = "df123abc";
n = parseInt(strNumber);
console.log(n);

const person = {
    firstName : "Prince",
    lastName : "Kumar",
    age : 23,
    Course : "Mca",

    greet : function(){
        console.log(`Hello my name is ${this.firstName}, thank you for visiting me`);
    }
}

console.log(person.firstName);
person.greet();




// Promises in javascript

let promise = new Promise((res, err)=>{
    let a = 2 + 5;
    if(a == 7){
        res("promise resolved");
    }
    else err("Promise rejected");
})

promise.then((msg)=>{
    console.log("This is then method, " + msg);
}).catch((err)=>{
    console.log("This is in catch block, " + err);
})


// Async Await

const connect = ()=>{
    return "Connected";
}

function connectDatabase(){
    try{
        let msg = "Connecting to database";
        setTimeout(async()=>{
            var conn = await connect();
            console.log( msg + conn);
        }, 3000)

    }
    catch(err){
        console.log(err);
    }
}

connectDatabase();

// Closure in js. Basically closure allows a function to access member from a
// function which has already been executed.

 
const sum = function(a){
    var c = 6;

    return function(b){
        return a + b + c;
    }
}

const store = sum(5);
console.log(store(10));   // here we can access values of a and c variables


const arr = [1,2,3];
console.log(arr);

for(let i = 0; i<3; i++){
    console.log(arr[i]);
}