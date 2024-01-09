/*
   Ashish Khatri
   *variables, data types, and typing
 */
let wordData;
wordData = "word List";
console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax =subTotal + tax;

let obj = {
    key1: "value",
    key2: 4,
    obj2: {
        obj2key1: "internal object value",
    },

}
console.log(obj.obj2.obj2key1)
//variables
let var1 = "2";
let var2 = 5;
let result=var1 + var2;
console.log(result);
/* operators

 */

let add = 1+2;
let sub = 2-1;
let mult = 2*4;
let division = 4/2;
let mod = 5%2;

let String = "String1" + "String 2";
console.log (String);

/*
conditionals, loops
 */
let equals = 1 === 1;
let greaterThan = 5>1;
let lessThan = 2<10;
let greaterThanEq = 5>=5;
let lessThanEq = 4 <=9;
let notEquals = 5!== 2;
//

let x = 1.5
let y = 1
let xislower = x < y;

    console.log(xislower);

let storeA = 1.40;
let storeB = 3.40;

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}
compareStorePrices(10,5);
compareStorePrices(7,10);
function squareNum (number) {
    let squared = number * number;
    return squared;
}
let squaredNum = squareNum(5);
console.log (squaredNum);
/*
conditionals-and-functions
 */
let z = 10;
function addNumbers (n,m,z){
    console.log(z);
    let b;
    if (1===1){
        b=8;
    }
    console.log(b);
    return n+m;
}
addNumbers (2,3, 1);

/*
arrays and indexes
 */
// indexes:            0 1 2 3 4
let outArray = [1,2,3,4,5,6,7];
let newArr = outArray[4];
console.log(newArr);
//
/*let arrLen = outArray.length;
for (let i = 0; i<arrLen; i++){
    console.log("i is equal to: "+ i);
    for (let j = 0; j<2; j++){
        console.log('j is equal to:' + j)
    }
}
*/
//
let v = 0;
while (v<2) {
    console.log('Ran');
    v++;
}
/*
API, Objects, Interfaces
 */

let dog= {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    bark : function (typeOfBark) {
        console.log("Bark!");
    },
};
dog.bark();
// Application Programming Interfaces:
/* passing by value or reference */
   function q(w) {
        w.num= w.num+5;
        console.log(w);
    }
    let w= {
       name: "Tom",
        num: 10,
    };
    q(w);
    console.log(w);
// Note: objects in JS as passed in by reference. object is not copied. vs passed in by value.