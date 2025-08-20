// // day 01

// var x=5;

// x="hello";

// var x=true;
// console.log(x);

// {
//     let a=10;

// console.log(a);
// }

// let data1 = 42;
// let data2="42";
//  let dat3;
// console.log(typeof data1);
// console.log(typeof data2);
// console.log(typeof data3);

// let userinput=prompt ("enter your age:");
// console.log(typeof userinput);

// const name="john"

// console.log(name)

// // 7/8/2025

// console.log(10+10);
// console.log(10-10);
// console.log(10*10);
// console.log(10/10);
// console.log(10%11);
// console.log(10**10);

// let int=10;
// int=int++
// console.log(int);

// let numbers=20
// let numbers1=++numbers
// console.log(numbers,numbers1)

// let a1=12
// let b1=++a1
// let c1=++b1
// console.log(a1,b1,c1)

// let d1=1
// let e1=--d1
// let f1=++e1
// console.log(d1,e1,f1)

// let num1=20
// let num2=num1++ + --num1
// console.log(num1,num2)

// 10/08/2025

// let x = 5;
// let y = x++ + ++x;
// console.log(x, y);

// let total=50;
// total +=30;
// total /=4;
// console.log(total)

// console.log(10 == "10");
// console.log(10 === "10");

// let age=25;
// console.log(age >=25);
// let experience=3;
// console.log( experience >=3);
// console.log(age >=25 && experience >=3 );

// console.log(typeof(5 + "5"));

// console.log(Boolean(0));
// console.log(Boolean("false"));
// console.log(Boolean([]));

// let num="123"
// let add=10;
// console.log(num+add);
// console.log(Number(num)+add);

// console.log(Boolean({}));
// console.log(Boolean(null));

// let one="Hello";
// let two="Students";
// let result= one +" "+ two;
// console.log(result);
// let title=`final: ${one} ${two}`;
// console.log(title);

// let a="10";
// let b=10;
// console.log(a+b);
// console.log(Number(a)+b);

// 11/08/2025

// let num=-1;
// if(num>0){
//     console.log("Positive Number")
// }else if(num<0){
//     console.log("Negative Number")
// }else{
//     console.log("Zero")
// }


// let month=3;
// switch (month) {
//     case 1:console.log("January");break;
//     case 2:console.log("February");break;
//     case 3:console.log("March");break;
//     case 4:console.log("April");break;
//     case 5:console.log("May");break;
//     case 6:console.log("June");break;
//     case 7:console.log("July");break;
//     case 8:console.log("August");break;
//     case 9:console.log("September");break;
//     case 10:console.log("October");break;
//     case 11:console.log("November");break;
//     case 12:console.log("December");break;
// }

// for(let t=1;t<=10;t++){
//     console.log(`${t}*7=${t*7}`);
    
// }

// let colours=["BLUE","RED","GREEN"]
// for(let cols of colours){
//     console.log(cols);
    
// }

// let obj=  {
//     Brand: "Jeep",
//     Model: "Rubicon",
//     Year: "2025"
// }
// for(let suv in obj){
//     console.log(obj[suv]);
    
// }

// 12/08/2025

// function MagicNumber(num){
//     if(num%3===0 && num%7===0){
//         return "It's magic";
        
//     }else{
//         return "Not magic";
        
//     }
// }
// console.log(MagicNumber(3));
// console.log(MagicNumber(7));
// console.log(MagicNumber(21));

// let ShoutName=function(a,b="!!!"){
//     console.log(`${a} ${b}`);
    
// }
// ShoutName("Hi")


// let TellFortune=(name,place)=>{
//     console.log(`"Dear ${name},you will travel to ${place} soon!"`);
    
// }
// TellFortune("vivek","cape comorin")

// function ScopeDectective(){
//     if(false){
    
//     let lt="lt is let"
//     const con="con is constant"
//     console.log(lt);
//     console.log(con);
//     }else{
//     var vr= "vr is var"
//       console.log(vr);
     
// }
// }
// ScopeDectective()

// let arrow=(a,b)=>{
//     return a + b

// }
// let value=arrow(2,3)
// console.log(value);

// 13/08/2025

// function  xy (a,b){
//     console.log("hello world");
    
// }
// xy()

// let fruits=["Apple","Orange","Mango","Banana","Guava"]
// console.log("First Fruit",fruits[0]);
// console.log("Last Fruit",fruits[4-1]);

// let Student={
//     Name:"Vivek",
//     Age: 33
// };
// console.log("Student Name:",Student.Name);

// let word="JAVASCRIPT"
// for(let letter of word){
//     console.log(letter);
    
// }

// (function(){
//     console.log("I am learning JavaScript");
    
// })();

// function calculate (a,b,callback){
//     console.log("sum:",a+b);
//     callback(a,b);
// }
// function difference(x,y){
//     console.log("Diff:",x-y);
    
// }
// calculate(8,4,difference);

// function power (f){
//     return function(g){
//     return f**g
// };
// }
// console.log( power (2)(3));

// (function(shopName, discount) {
//   alert(`Welcome to ${shopName}! Get ${discount}% off today!`);
// })("EasyBuy", 30);

// function* colorGenerator() {
//   yield "red";
//   yield "green";
//   yield "blue";
// }


// let colors = colorGenerator();

// console.log(colors.next()); 
// console.log(colors.next());
// console.log(colors.next()); 
// console.log(colors.next()); 

// let word1 = "DEVELOPER";

// for (let letter of word1) {
//   console.log(letter);
// }
// let laptop = { brand: "Dell", price: 45000, isNew: true };

// for ( let key in laptop) {
//   console.log(laptop[key]); 
// }

// 14/08/2025

// let arr1 = ['a', 'b'];
// let arr2 = ['c', 'd'];

// // let merged = [...arr1, ...arr2];

// // console.log(merged);

// let student = { name: "John", age: 25 };

// let clone = { ...student };

// console.log(clone);

// let obj1 = { x: 1, y: 2 };
// let obj2 = { y: 3, z: 4 };

// //  let merged = { ...obj1, ...obj2 };

// //  console.log(merged);

// function sumAll(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }


// console.log(sumAll(1, 2, 3));        
// console.log(sumAll(5, 10, 15, 20));  
// console.log(sumAll());               

// function logArgs(first, second, ...rest) {
//   console.log("First:", first);
//   console.log("Second:", second);
//   console.log("Remaining:", rest);
// }


// logArgs(10, 20, 30, 40, 50);

// let colors = ['red', 'green', 'blue'];

// let [c1, c2] = colors;

// console.log("c1:", c1); 
// console.log("c2:", c2); 

// let items = ['pen', 'pencil', 'eraser', 'sharpener'];

// let [first, , , last] = items;

// console.log("First:", first); 
// console.log("Last:", last);   

// let nums = [10, 20, 30, 40, 50];

// let [n1, n2, ...rest] = nums;

// console.log("First:", n1);    
// console.log("Second:", n2);   
// console.log("Remaining:", rest); 

// let vehicles = ['car', ['bike', ['bus', 'train']]];

// let [ , [ , [bus]]] = vehicles;

// console.log(bus); 

// let a = 1;
// let b = 2;

// [a, b] = [b, a];  

// console.log("a:", a); 
// console.log("b:", b); 

// let x = [1, 2, 3];

// x.push(4, 5);

// console.log(x);

// let y = [1, 2, 3];

// y.pop(); 
// y.pop(); 

// console.log(y);

// let z = [3, 4, 5];

// z.unshift(1, 2);

// console.log(z);

// let s = [1, 2, 3, 4];

// s.shift(); 

// console.log(s);

// let sp = [10, 20, 30, 40, 50];

// sp.splice(1, 2, 99, 100);

// console.log(sp);

// let c = [1, 2];
// let d = [3, 4];

// let merged = c.concat(d);

// console.log(merged);

// let I = [5, 6, 7, 8, 9];

// let sliced = I.slice(1, 3);

// console.log(sliced);

// let j = [1, [2, [3, [4]]]];

// let flatArr1 = j.flat(Infinity);

// console.log(flatArr1);

// let k = new Array(5).fill("Hello");

// console.log(k);

// let m = [1, 2, 3, [4, [5, 6]]];

// let flatArr2 = m.flat(Infinity);

// console.log(flatArr2);

// 19/08/2025

let nums=[45,12,3,99,23,8]
var new1 = nums.sort((a,b)=>{
      return a-b
})
console.log(new1)
var new2 = nums.sort((a,b)=>{
    return b-a
})
console.log(new2);

var colors = ["red","blue","green","yellow"]
colors.push("pink");
var val = colors.includes("pink");
console.log(val);
console.log(colors);

let arr =["HTML","CSS","JS"]
let jo = arr.join()
console.log("join:",jo);
let tos  = arr.toString()
console.log("tostring:",tos);

let items =["pen","book","pen","pencil","pen"]
let ind = items.indexOf("pen",1)
console.log("indexof:",ind);
let last = items.lastIndexOf("pen",1)
console.log("lastindexof:",last);

let students=["kamal","Sita","Ravi"]
let stu = students.forEach((cEle,index,tA)=>{
console.log("Foreach:",cEle);
})
let Student=students.map((cEle,ind,tA)=>{
  return tA
})
console.log("Map:",Student);

let products = [ {name: "Laptop", price: 45000},
                   {name: "Phone", price:20000},
                 {name: "Tablet", price: 20000},
                 {name: "Monitor", price: 12000} ];
let prod = products.filter((CE)=>CE.price==20000)                 
console.log("filter:",prod);
let prodfind= products.find((CE)=>CE.price==20000)
console.log(prodfind);

let numbers = [5, 10, 15, 20, 25];
let sum = numbers.reduce((acc,ce,ind,ta)=>{
    return acc+ce
},0)
console.log(sum);

let ages = [22, 18, 25, 30, 16,];
let some=ages.some((ce)=>{
     return ce<18
})
console.log("under18:",some);
let every=ages.every((ce)=>{
    return ce>15
})
console.log("above15:",every);

let str = "Hello World";
console.log("Replace:",str.replace("World","Javascript"));
console.log("slice:",str.slice(0,6));

let sentence = "I love coding";
console.log("split:",sentence.split(" "));
console.log("Repeat:",sentence.repeat(3));


















