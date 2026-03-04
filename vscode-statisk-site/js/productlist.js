const urlParams = new URLSearchParams(window.location.search)
const category = urlParams.get("category")

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
.then(response => response.json())
.then(showProducts)

function showProducts(products){

    const container = document.querySelector(".product_list_container")

    products.forEach(product => {

        const productHTML = `
        <a href="product.html?id=${product.id}" class="product-card">

            <div class="image-wrapper">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
            </div>

            <div class="product-info">
                <h2>${product.productdisplayname}</h2>
                <p class="brand">${product.brandname}</p>
                <p class="price">DKK ${product.price}</p>
            </div>

        </a>
        `

        container.insertAdjacentHTML("beforeend", productHTML)

    })
}