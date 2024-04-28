let precio = document.querySelector("#precio");
let categoria = document.querySelector("#categoria");
let marca = document.querySelector("#marca");
let carrito = document.querySelector("#carrito");
let resultado = document.querySelector("#resultado");
let aplicar = document.querySelector("#aplicar");
let btotal = document.querySelector("#btotal");
let productos = [];
let cestaCompra = [];
let total = 0;

fetch("https://dummyjson.com/products")
    .then((result) => {
        return result.json();
    })
    .then((results2) => {
        productos = results2.products;
        mostrarProductos(productos);
    })
    .catch((error) => {
        resultado.innerHTML = `<p>Error al cargar productos.</p>`;
    });

function mostrarProductos(products) {
    resultado.innerHTML = ``;
    products.forEach((item) => {
        resultado.innerHTML += `
        <div class="card m-3" style="width: 18rem; background-color: aquamarine;">
            <img src='${item.images[0]}' class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
            </div>
            <div class="m-2">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${item.brand}</li>
                    <li class="list-group-item">${item.category}</li>
                    <li class="list-group-item">${item.price}€</li>
                </ul>
                <button id="add-${item.id}" type="button" class="btn btn-info">Añadir a cesta</button>
            </div>
        </div>`;
    });
}



resultado.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON' && event.target.id.startsWith('add-')) {
        let productId = event.target.id.split('-')[1];
        let product = productos.find(p => p.id === parseInt(productId));
        if (product) {
            cestaCompra.push(product);
            actualizarCarrito(product);
            total = total + product.price;
            console.log(total);
        }
    }
});






aplicar.onclick = function () {
    let filtradoPMarca = productos.filter((element) => {
        return ((marca.value === "" || element.brand === marca.value) && (categoria.value === "" || element.category === categoria.value) && (precio.value === "" || element.price > parseFloat(precio.value)));
    })
    if (filtradoPMarca.length > 0) {
        mostrarProductos(filtradoPMarca);
    }

}


function actualizarCarrito(product) {
    let nodo = document.createElement("li");
    nodo.textContent = `${product.title}, ${product.price}€` // ${inputEmail.value}     ${inputDepartamento.value}
    nodo.className = "animate__animated animate__backInLeft list-group-item";
    nodo.addEventListener("click", () => {
        nodo.classList.remove("animate__animated");
        nodo.classList.remove("animate__backInLeft");
        nodo.classList.add("animate__animated");
        nodo.classList.add("animate__bounce");
    });
    carrito.append(nodo);
    //carrito.innerHTML += `<li class=" animate__animated animate__backInLeft list-group-item">${product.title}, ${product.price}€</li>`;
}

btotal.onclick = function () {
    Swal.fire({
        title: "Este es el total de tu cesta de compra",
        text: total + "€",
    });
}