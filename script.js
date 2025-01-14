document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#rankings-table tbody');
    const searchBar = document.getElementById('search-bar');

    // Fetch rankings data from the backend
    async function fetchRankings() {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/rankings'); // Ensure the URL is correct
            const data = await response.json();
            populateTable(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Populate table with data
    function populateTable(data) {
        if (data.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='4'>No data available</td></tr>";
        } else {
            tableBody.innerHTML = ''; // Clear previous data
            data.forEach((item) => {
                const row = `
                    <tr>
                        <td>${item['Global Rank']}</td>
                        <td>${item['University']}</td>
                        <td>${item['Country']}</td>
                        <td>${item['City']}</td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        }
    }

    // Search functionality
    searchBar.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const rows = tableBody.querySelectorAll('tr');
        rows.forEach(row => {
            const university = row.cells[1].textContent.toLowerCase();
            if (university.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Initialize the page
    fetchRankings();
});
