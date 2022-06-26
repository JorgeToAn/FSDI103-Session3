let x=0;
//Create the function
function greet(userName){
    return `Hello ${userName} ID: ${x++}`;
}

//Call the function
console.log(greet("Brett"));
document.write(`<p>${greet("Jimmy")}</p>`);
document.write(`<p>${greet("James")}</p>`);
document.write(`<p>${greet("Diana")}</p>`);

//anonymous function
//can only be accesed after it is declared
// let greet = function(userName){
//     x++;
//     return `Hello ${userName} ID: ${x}`;
// }