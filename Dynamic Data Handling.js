//U59555732
document.addEventListener('DOMContentLoaded', fetchAndDisplayProducts);

function fetchAndDisplayProducts() {
    const apiUrl = 'https://course-api.com/react-store-products';
    const productListContainer = document.getElementById('product-list');
    const loadingElement = document.getElementById('loading-message');

    // Show loading state
    loadingElement.style.display = 'block';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Hide loading state
            loadingElement.style.display = 'none';

            // Display products
            if (data.length === 0) {
                productListContainer.innerHTML = '<p>No products found.</p>';
            } else {
                // Initialize product index and display first product
                let currentIndex = 0;
                showProduct(currentIndex);

                // Add navigation buttons
                addNavigationButtons(data);

                function showProduct(index) {
                    // Remove existing products
                    productListContainer.innerHTML = '';

                    const product = data[index];
                    const productCard = createProductCard(product);
                    productListContainer.appendChild(productCard);
                }

                function addNavigationButtons(products) {
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
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Display error message
            loadingElement.textContent = 'Failed to fetch data. Please try again later.';
        });
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
