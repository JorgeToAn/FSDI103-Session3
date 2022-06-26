function register(){
    let productName = prompt("Enter your product");
    display(productName);
}

function display(pName){
    document.getElementById("products").innerHTML+=`<li class="product">${pName}</li>`;
}