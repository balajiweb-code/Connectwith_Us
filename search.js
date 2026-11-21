
 // ==========================================
 // 2. SEARCH SERVICE SECTION
 // FRONTEND + BACKEND INTEGRATION
 // ==========================================

const searchInput = document.getElementById("input-section");
const searchBtn = document.getElementById("search-btn");

async function searchService() {

    if (!searchInput) return;

    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") {
        alert("Please enter a service name!");
        return;
    }

    // Identify the destination page
    let destination = "";

    if (
        searchText.includes("web development") ||
        searchText.includes("website development") ||
        searchText.includes("web design") ||
        searchText.includes("website") ||
        searchText.includes("web")
    ) {
        destination = "development.html";
    }

    else if (searchText.includes("book")) {
        destination = "book.html";
    }

    else if (
        searchText.includes("editing") ||
        searchText.includes("video") ||
        searchText.includes("edit")
    ) {
        destination = "editing.html";
    }

    else if (
        searchText.includes("interior") ||
        searchText.includes("design")
    ) {
        destination = "interior.html";
    }

    else if (
        searchText.includes("tiktok") ||
        searchText.includes("tik tok") ||
        searchText.includes("tik") ||
        searchText.includes("tok")
    ) {
        destination = "tiktok.html";
    }

    else {
        alert("No matching service found!");
        return;
    }

    // Send search query to backend
    try {

        const response = await fetch(
            "http://localhost:3000/api/search",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    query: searchText
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Search request failed");
        }

        console.log("Backend response:", data);

        // Navigate after successful backend response
        window.location.href = destination;

    }

    catch (error) {

        console.error("Backend connection error:", error);

        alert("Unable to connect to the backend. Please try again.");

    }

}

// Search button click
if (searchBtn) {
    searchBtn.addEventListener("click", searchService);
}

// Enter key
if (searchInput) {

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            searchService();
        }

    });

}
