const arr = [1, 2, 3, 4, 5];
let newArr = [];
let sum = 0

for (let i = 0; i < arr.length; i++) {
   let numberSqrt = Math.pow(arr[i],2);
   newArr.push(numberSqrt);

//    console.log(newArr[i]); //проверочка 
}
for (z = 0 ; z < newArr.length; z++) {
    sum += newArr[z];
}
console.log(sum);