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

let num=-1;
if(num>0){
    console.log("Positive Number")
}else if(num<0){
    console.log("Negative Number")
}else{
    console.log("Zero")
}


let month=3;
switch (month) {
    case 1:console.log("January");break;
    case 2:console.log("February");break;
    case 3:console.log("March");break;
    case 4:console.log("April");break;
    case 5:console.log("May");break;
    case 6:console.log("June");break;
    case 7:console.log("July");break;
    case 8:console.log("August");break;
    case 9:console.log("September");break;
    case 10:console.log("October");break;
    case 11:console.log("November");break;
    case 12:console.log("December");break;
}

for(let t=1;t<=10;t++){
    console.log(`${t}*7=${t*7}`);
    
}

let colours=["BLUE","RED","GREEN"]
for(let cols of colours){
    console.log(cols);
    
}

let obj=  {
    Brand: "Jeep",
    Model: "Rubicon",
    Year: "2025"
}
for(let suv in obj){
    console.log(obj[suv]);
    
}

