// 1st question

 var name = "Harry";
 console.log("Hello " + name);

// 2nd question

 let a = 5;
 let b = 3;
 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
 console.log(a/b);

// 4th question

let n = prompt("Enter a number ");
n = parseInt(n);

if (n %2 ===0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}

//8th question

for (i=2; i<=10; i= i+2){
    console.log(i);
}

// 5th question

let fruits = ["Apple","Mango","Orange","banana","Blue berry"]
for (let i=0; i<=fruits.length; i++){
    console.log(i, fruits[i]);
}

// 6th question

const Book = {
    Aurthor : "Harry",
    Title : "Heavenly Conqurer",
    published: 2024,
    
};

// 10th question
    
     const number = Math.floor(Math.random() * 100) + 1;
     console.log(`random number : ${number}`)

 // 3rd question
 
 let movie = 'Deadpool';
 console.log(movie.toUpperCase());
 

 // 7th question
    
function sum(num1,num2,){
    var res;
    res=num1+num2;
return res;
}

console.log(sum(3,3));
