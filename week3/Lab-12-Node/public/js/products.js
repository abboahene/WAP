
let products = ['Ferarri', 'Bugatti', 'Benz'];
const ul = document.getElementById("p-list");

products.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    ul.appendChild(li);
});

//clear list
function refreshList(){
    while(ul.lastChild){
        ul.removeChild(ul.lastChild)
    }
    products.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p;
        ul.appendChild(li);
    });
}

// add list


//add product
function removeProduct(name){
   products = products.filter(p => p !== name)
   refreshList();
}

//remove product
function addProduct(){
    const addProductInput = document.getElementById("addProductInput");
    products.push(addProductInput.value);
    addProductInput.value= '';
    refreshList();
}