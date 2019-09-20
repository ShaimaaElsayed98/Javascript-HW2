//Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString.replace(/,/g , " ");
console.log(myString);

//Arrays!
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,"meerkat")
console.log("blowfish","meerkat", "capricorn", "giraffe", "turtle");
console.log(favoriteAnimals);
console.log("The array has a lenght of :", favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
const index = favoriteAnimals.indexOf("meerkat");
console.log("The time you are looking for is at index : ", index);

//More Javacript!
//Q1
function cal(a, b, c){
    console.log(a+b+c);
}
cal(1, 3, 3)
//Q2
function colorCar( color ){
    console.log("A",color,"car");

}
//Q3
const object={
        Name:"Shayma",
        Age:"20",
        Country:"Egypt"
}

function ObPrint(x){
    console.log(x);
}

ObPrint(object);

//Q4
function vehicleType(colors,num){
    if(num===1){
        console.log("A",colors,"car");
    }
    if(num===2){
        console.log("A",colors,"motorcycle");
    }
}
vehicleType("blue",2);

//Q5
console.log(3 === 3 ? "yes" : "no");

//Q6
function vehicle(colors,num,age){
    if(age!=0 && num===1){
        console.log("A",colors,"used car");
        }
    if(age!=0 && num===2){
            console.log("A",colors,"used motorcycle");
        }
    
    if(age===0 && num===1){
            console.log("A",colors,"new car");
        }
    if(age===0 && num===2){
            console.log("A",colors,"new motorcycle");
    }   
}
vehicle("blue",1 ,5 );

//Q7
Vehicles=["cars","motorbikes","caravans","bikes"];
const string = Vehicles.toString();
string.replace(/,/g , " , ");
console.log("Amazing Joe's Garage, we service",string);

//Q8
const teachers={
    Zohir:"Html-Css",
    AbdElrahman:"Html-Css",
    Mohammed:"JavaScript"
};

//Q9
let x = [1,2,3];
let y = [1,2,3];
let z = y;
console.log(x == y) // false
console.log(x === y) // false
console.log(z == y)  // true
console.log(z == x)  //false

//Q10
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log(o1==o2 || o1===o2 || o3==o1)//false
console.log(o3==o2) //true

//Q11
let bar = 42;
typeof typeof bar; //string as begininng from the right the type of bar is "number" and the type of "number" is string.




