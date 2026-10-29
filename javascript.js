 // Using this code to open the login and signup form

const signInBtn = document.getElementById("signInBtn");

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

// Select all Join buttons using the shared class
const joinButtons = document.querySelectorAll(".join-area");

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

    authSubmit.textContent = isSignup
        ? "Create Account"
        : "Sign in";

    nameGroup.style.display = isSignup ? "block" : "none";
    authName.required = isSignup;

    authPassword.autocomplete = isSignup
        ? "new-password"
        : "current-password";

    switchText.textContent = isSignup
        ? "Already have an account?"
        : "Don't have an account?";

    switchAuth.textContent = isSignup
        ? "Sign in"
        : "Join now";

    authMessage.textContent = "";
}

// Sign In button
if (signInBtn) {
    signInBtn.addEventListener("click", () => {
        openAuth(false);
    });
}

// All Join buttons open the same signup form
joinButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        openAuth(true);
    });
});

// Switch between login and signup
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

// Close when clicking outside the form
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



const searchInput = document.getElementById("input-section");
const searchBtn = document.getElementById("search-btn");

function searchService() {
    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") {
        alert("Please enter a service name!");
        return;
    }

    if (
        searchText.includes("web development") ||
        searchText.includes("website development") ||
        searchText.includes("web design") ||
        searchText.includes("website") ||
        searchText.includes("web")
    ) {
        window.location.href = "development.html";
    } 
    else if (searchText.includes("book")) {
        window.location.href = "book.html";
    } 
    else if (
        searchText.includes("editing") ||
        searchText.includes("video") ||
        searchText.includes("video editing")
    ) {
        window.location.href = "editing.html";
    } 
    else if (
        searchText.includes("interior") ||
        searchText.includes("interior design")
    ) {
        window.location.href = "interior.html";
    } 
    else if (
        searchText.includes("tiktok") ||
        searchText.includes("tik tok")
    ) {
        window.location.href = "tiktok.html";
    } 
    else {
        alert("No matching service found!");
    }
}

// Click the search icon
searchBtn.addEventListener("click", searchService);

// Press Enter in the search box
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchService();
    }
});

//grid container section has some css color design using js code

  document.querySelectorAll(".grid-container > div").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", (e.clientX - r.left) + "px");
      card.style.setProperty("--y", (e.clientY - r.top) + "px");
    });
  });

  //js code for the popular services section
  const cards = document.querySelector(".cards");
  const step = 220; // pixels to scroll per click

  document.getElementById("left-btn").addEventListener("click", () => {
    cards.scrollBy({ left: -step, behavior: "smooth" });
  });
  document.getElementById("right-btn").addEventListener("click", () => {
    cards.scrollBy({ left: step, behavior: "smooth" });
  });
