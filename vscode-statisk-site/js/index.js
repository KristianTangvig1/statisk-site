fetch("https://kea-alt-del.dk/t7/api/categories")
.then(response => response.json())
.then(showCategories)

function showCategories(categories){

    const container = document.querySelector(".category_list_container")

    categories.forEach(category => {

        const categoryHTML = `
        <a href="productlist.html?category=${category.category}" class="category-card">
            <h2>${category.category}</h2>
        </a>
        `

        container.insertAdjacentHTML("beforeend", categoryHTML)

    })
}