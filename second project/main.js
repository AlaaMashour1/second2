document.addEventListener("DOMContentLoaded", function() {
    // Get the modals
    var loginModal = document.getElementById("loginModal");
    var resetPasswordModal = document.getElementById("resetPasswordModal");
    var registerModal = document.getElementById("registerModal");

    // Get the buttons that open the modals
    var openLoginModalBtn = document.getElementById("openLoginModalBtn");
    var resetPasswordLink = document.getElementById("resetPasswordLink");
    var registerLink = document.getElementById("registerLink");

    // Get the <span> elements that close the modals
    var closeButtons = document.getElementsByClassName("close");

    // Function to open login modal
    function openLoginModal() {
        loginModal.style.display = "block";
    }

    // Function to open reset password modal
    function openResetPasswordModal() {
        resetPasswordModal.style.display = "block";
    }

    // Function to open register modal
    function openRegisterModal() {
        registerModal.style.display = "block";
    }

    // Function to close modals
    function closeModal(modal) {
        modal.style.display = "none";
    }

    // Event listeners for opening modals
    openLoginModalBtn.addEventListener("click", function() {
        openLoginModal();
    });

    resetPasswordLink.addEventListener("click", function(event) {
        event.preventDefault();
        openResetPasswordModal();
    });

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        openRegisterModal();
    });

    // Event listeners for closing modals
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", function() {
            closeModal(this.parentElement.parentElement);
        });
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == loginModal) {
            closeModal(loginModal);
        }
        if (event.target == resetPasswordModal) {
            closeModal(resetPasswordModal);
        }
        if (event.target == registerModal) {
            closeModal(registerModal);
        }
    };

    // Submit login form
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // Add your login logic here
    });

    // Add event listener to buttons
    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', () => {
            // Toggle active class on button click
            button.classList.toggle('act');
        });
    });

    var current_fs, next_fs, previous_fs;
    var left, opacity, scale;
    var animating;

    $(".next-action-button").click(function() {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        // Show the next fieldset
        next_fs.show();

        // Hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now, mx) {
                // As the opacity of current_fs reduces to 0 - stored in "now"
                // Scale a new value proportionally between 0.8 and 1, depending on the opacity now
                scale = 0.8 + (1 - now) * 0.2;
                // The opacity of the next_fs element increases to 1
                opacity = 1 - now;
                current_fs.css({
                    'position': 'absolute',
                    'opacity': now
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 600,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            // This comes from the easing plugin
            easing: 'linear'
        });
    });

    $(".back-action-button").click(function() {
        if (animating) return false;
        animating = true;
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        // Show the previous fieldset
        previous_fs.show();

        // Hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now, mx) {
                // As the opacity of current_fs reduces to 0 - stored in "now"
                // Scale a new value proportionally between 0.8 and 1, depending on the opacity now
                scale = 0.8 + (1 - now) * 0.2;
                // The opacity of the previous_fs element increases to 1
                opacity = 1 - now;
                current_fs.css({ 'position': 'absolute', 'opacity': now });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 600,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            // This comes from the easing plugin
            easing: 'linear'
        });
    });

    $(".submit").click(function() {
        return false;
    });
});
