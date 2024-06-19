//U59555732
// Inside the fetchAndDisplayProducts function
.catch(error => {
    console.error('Error fetching data:', error);
    loadingElement.textContent = 'Failed to fetch data. Please try again later.';
});
