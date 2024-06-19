//U59555732
function addNavigationButtons(products) {
    const productListContainer = document.getElementById('product-list');

    let currentIndex = 0;

    function showProduct(index) {
        // Remove existing products
        productListContainer.innerHTML = '';

        const product = products[index];
        const productCard = createProductCard(product);
        productListContainer.appendChild(productCard);
    }

    // Initial display
    showProduct(currentIndex);

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        showProduct(currentIndex);
    });

    // Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % products.length;
        showProduct(currentIndex);
    });

    // Append navigation buttons
    productListContainer.appendChild(prevButton);
    productListContainer.appendChild(nextButton);
}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // Product image
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    productCard.appendChild(img);

    // Product name
    const name = document.createElement('h2');
    name.textContent = product.name;
    productCard.appendChild(name);

    // Product price
    const price = document.createElement('p');
    price.textContent = `$${product.price}`;
    productCard.appendChild(price);

    // Product description
    const description = document.createElement('p');
    description.textContent = product.description;
    productCard.appendChild(description);

    return productCard;
}
