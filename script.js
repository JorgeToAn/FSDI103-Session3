let myArray = [1,2,3,4];
myArray[1] = 5;
console.log(myArray[1]);

let myArray2 = ["What is the meaning of life?",42,true];
console.log(myArray2[0]);

//Array declaration
const numbers = [10,20,30,40,50];
const months = ["Jan","Feb","Mar","Apr","May","Jun"];

//Methods for arrays
numbers.push(60,70,80); //appends an element to the end of the array
numbers.unshift(-30,-20,-10,0); //prepend an element at the beggining of the array

//accessing to the elements in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//travel the array using a for loop
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

months.pop(); //removes the last element of the array
months.shift(); // removes the first element of the array
months.splice(1,1); //removes n elements starting from a specified position

//Display the array
console.table(numbers);
console.table(months);