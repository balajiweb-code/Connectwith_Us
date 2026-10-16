
//using this code to scroll the cards in the slide section when the user clicks on the lefft and right buttons

const cards = document.querySelector("#slider-container .cards");

document.getElementById("right-btn").addEventListener("click", () => {
    cards.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});

document.getElementById("left-btn").addEventListener("click", () => {
    cards.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});
//using this code to search the text in the google search section and display the results in the answer box
const searchInput = document.getElementById("input-section");
const searchBtn = document.getElementById("search-btn");
const answerBox = document.getElementById("google-answer");

async function searchGoogle() {
    const query = searchInput.value.trim();

    if (query === "") {
        answerBox.textContent = "Please enter something to search.";
        return;
    }

    answerBox.textContent = "Searching...";

    try {
        // Send the search text to your backend
        const response = await fetch(
            `/api/search?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error("Search request failed");
        }

        const data = await response.json();

        // Display the returned search results
        answerBox.replaceChildren();

        if (!data.items || data.items.length === 0) {
            answerBox.textContent = "No results found.";
            return;
        }

        data.items.forEach(item => {
            const result = document.createElement("div");
            result.className = "search-result";

            const title = document.createElement("h3");
            const link = document.createElement("a");
            link.href = item.link;
            link.textContent = item.title;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            title.appendChild(link);

            const description = document.createElement("p");
            description.textContent = item.snippet || "";

            result.append(title, description);
            answerBox.appendChild(result);
        });

    } catch (error) {
        console.error("Search error:", error);
        answerBox.textContent =
            "Unable to load search results. Please try again.";
    }
}

// Search when the icon is clicked
searchBtn.addEventListener("click", searchGoogle);

// Search when Enter is pressed
searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchGoogle();
    }
});


const signInBtn = document.getElementById("signInBtn");
const joinBtn = document.getElementById("joinBtn");

const authOverlay = document.getElementById("authOverlay");
const closeAuth = document.getElementById("closeAuth");

const authTitle = document.getElementById("authTitle");
const authSubtitle = document.getElementById("authSubtitle");
const authSubmit = document.getElementById("authSubmit");

const nameGroup = document.getElementById("nameGroup");
const authName = document.getElementById("authName");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");

const switchText = document.getElementById("switchText");
const switchAuth = document.getElementById("switchAuth");
const togglePassword = document.getElementById("togglePassword");

const authForm = document.getElementById("authForm");
const authMessage = document.getElementById("authMessage");

let isSignup = false;

// Open popup
function openAuth(signup) {
    isSignup = signup;

    authOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    updateAuthForm();
}

// Update login/signup form
function updateAuthForm() {
    authTitle.textContent = isSignup
        ? "Create Your Account"
        : "Welcome Back!";

    authSubtitle.textContent = isSignup
        ? "Join ConnectWith and discover opportunities"
        : "Sign in to continue to ConnectWith";

    authSubmit.textContent = isSignup ? "Create Account" : "Sign in";

    nameGroup.style.display = isSignup ? "block" : "none";
    authName.required = isSignup;

    authPassword.autocomplete = isSignup
        ? "new-password"
        : "current-password";

    switchText.textContent = isSignup
        ? "Already have an account?"
        : "Don't have an account?";

    switchAuth.textContent = isSignup ? "Sign in" : "Join now";

    authMessage.textContent = "";
}

// Navbar buttons
signInBtn.addEventListener("click", () => openAuth(false));
joinBtn.addEventListener("click", () => openAuth(true));

// Switch between forms
switchAuth.addEventListener("click", () => {
    authForm.reset();
    openAuth(!isSignup);
});

// Close popup
function closeAuthForm() {
    authOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

closeAuth.addEventListener("click", closeAuthForm);

// Close when clicking outside the card
authOverlay.addEventListener("click", (event) => {
    if (event.target === authOverlay) {
        closeAuthForm();
    }
});

// Close with Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeAuthForm();
    }
});

// Show/hide password
togglePassword.addEventListener("click", () => {
    const isHidden = authPassword.type === "password";

    authPassword.type = isHidden ? "text" : "password";
    togglePassword.textContent = isHidden ? "Hide" : "Show";
});

// Temporary form behavior
authForm.addEventListener("submit", (event) => {
    event.preventDefault();

    authMessage.style.color = "#dc2626";
    authMessage.textContent =
        "The form design works, but authentication is not connected yet.";
});


