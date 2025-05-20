document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('darkModeToggle');

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode',
                document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled'
            );
        });
    }

    // Search bar functionality
    const pages = [
        { name: "Home", url: "home.html" },
        { name: "Chapters", url: "chapters.html" },
        { name: "Development", url: "development.html" },
        { name: "Achievements", url: "achievements.html" }
    ];

    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase();
            searchResults.innerHTML = "";

            if (!query) {
                searchResults.style.display = "none";
                return;
            }

            const matches = pages.filter(page => page.name.toLowerCase().includes(query));

            matches.forEach(page => {
                const li = document.createElement("li");
                li.textContent = page.name;
                li.addEventListener("click", () => {
                    window.location.href = page.url;
                });
                searchResults.appendChild(li);
            });

            searchResults.style.display = matches.length > 0 ? "block" : "none";
        });

        document.addEventListener("click", (e) => {
            if (!e.target.closest('.search-container')) {
                searchResults.style.display = "none";
            }
        });
    }
});
