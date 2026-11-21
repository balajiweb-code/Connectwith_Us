document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript connected successfully!");

    // ==========================================
    // 1. LOGIN AND SIGNUP AUTHENTICATION FOR INDEX.HTML 
    // ==========================================

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

    const joinButtons = document.querySelectorAll(".join-area");

    let isSignup = false;

    // Open popup
    function openAuth(signup) {

        if (!authOverlay) return;

        isSignup = signup;

        authOverlay.classList.add("active");
        document.body.style.overflow = "hidden";

        updateAuthForm();
    }

    // Update login/signup form
    function updateAuthForm() {

        if (
            !authTitle || !authSubtitle || !authSubmit ||
            !nameGroup || !authName || !authPassword ||
            !switchText || !switchAuth || !authMessage
        ) {
            console.log("Authentication form elements are missing on this page.");
            return;
        }

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

        signInBtn.addEventListener("click", function () {
            openAuth(false);
        });

    }

    // All Join buttons
    joinButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            openAuth(true);

        });

    });

    // Switch between login/signup
    if (switchAuth && authForm) {

        switchAuth.addEventListener("click", function () {

            authForm.reset();
            openAuth(!isSignup);

        });

    }

    // Close popup
    function closeAuthForm() {

        if (authOverlay) {

            authOverlay.classList.remove("active");
            document.body.style.overflow = "";

        }

    }

    if (closeAuth) {
        closeAuth.addEventListener("click", closeAuthForm);
    }

    // Close when clicking outside the form
    if (authOverlay) {

        authOverlay.addEventListener("click", function (event) {

            if (event.target === authOverlay) {
                closeAuthForm();
            }

        });

        // Close with Escape key
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                closeAuthForm();
            }

        });

    }

    // Show/hide password
    if (togglePassword && authPassword) {

        togglePassword.addEventListener("click", function () {

            const isHidden = authPassword.type === "password";

            authPassword.type = isHidden ? "text" : "password";

            togglePassword.textContent = isHidden ? "Hide" : "Show";

        });

    }

    // Temporary form behavior
    if (authForm && authMessage) {

        authForm.addEventListener("submit", function (event) {

            event.preventDefault();

            authMessage.style.color = "#dc2626";

            authMessage.textContent =
                "The form design works, but authentication is not connected yet.";

        });

    }
})