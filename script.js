const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    const info = box.getAttribute('data-info');
    alert(`You clicked on the box with information: ${info}`);
  });
});

function searchTrains() {
    // Retrieve input values
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var departureDate = document.getElementById('departure-date').value;

    // Perform the search logic (this is just a placeholder)
    var searchResults = getSearchResults(from, to, departureDate);

    // Display the results
    displayResults(searchResults);
}

function getSearchResults(from, to, departureDate) {
    // Implement your search logic here (e.g., fetch data from a server)
    // This is a placeholder; replace it with your actual logic
    var results = [
        { trainName: 'Express One', departureTime: '08:00 AM', arrivalTime: '04:00 PM' },
        { trainName: 'Speedy Train', departureTime: '10:00 AM', arrivalTime: '06:00 PM' },
        // Add more results as needed
    ];

    return results;
}

function displayResults(results) {
    var resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No trains found for the given criteria.</p>';
    } else {
        var ul = document.createElement('ul');
        results.forEach(function (result) {
            var li = document.createElement('li');
            li.textContent = `Train: ${result.trainName}, Departure: ${result.departureTime}, Arrival: ${result.arrivalTime}`;
            ul.appendChild(li);
        });
        resultsContainer.appendChild(ul);
    }
}

