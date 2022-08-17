// // json iterate over all for loops

// // converting json into javascript object

var myJson = {
    "name" : "raja",
    "age" : 20,
    "array" : [1,2,3,4,5]
}

obj1 = JSON.stringify(myJson);
console.log(obj1);
// by this way we can convert any json data into javascript object data and iterate


//for loop(array)

var array1 = [1,2,3,4,5];

for(let i=0;i<array1.length;i++){
    console.log(i);
}


// for in loop

var array2 = [1,2,3,4,5];

for(let key in array2){
    console.log(key,array2[key]);
}


// for of loop

var array3 = [1,2,3,4,5];
for(let value of array3){
    console.log(value);
}


//for each loop

var array4 = [1,2,3,4,5];

array4.forEach(function(arr){
    console.log(arr);
})