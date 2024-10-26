document.getElementById('search-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const query = document.getElementById('query').value;
    const resultsSection = document.getElementById('results-section');
    const resultsDisplay = document.getElementById('results');
    try {
        const response = await fetch(`http://localhost:5000/api/analyze?url=${encodeURIComponent(query)}`);
        const data = await response.json();

    
        resultsDisplay.textContent = JSON.stringify(data, null, 2);
        resultsSection.style.display = 'block';
    } catch (error) {
        resultsDisplay.textContent = 'Error fetching data.';
        resultsSection.style.display = 'block';
    }
});

document.getElementById('year').textContent = new Date().getFullYear();