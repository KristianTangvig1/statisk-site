const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
.then(response => response.json())
.then(showProduct)

function showProduct(product){

    document.querySelector(".product-name").textContent = product.productdisplayname

    document.querySelector(".brand").textContent = product.brandname

    document.querySelector(".price").textContent = "DKK " + product.price

    document.querySelector(".color").textContent = "Color: " + product.basecolour

    document.querySelector(".product-image").src =
    `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`

}