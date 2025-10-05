export function siteHeader() {

    ////////////////////////////////////////////////////
    // Toggle nav
    ////////////////////////////////////////////////////
    const toggleNavBtn = document.getElementById('menuToggle');
    const navElement = document.getElementById('navPane');
    const siteHeader = document.getElementById('siteHeader');

    toggleNavBtn.addEventListener("click", function () {
        toggleNavBtn.classList.toggle("navButton--active");
        siteHeader.classList.toggle('siteHeader--active');

        const isExpanded = toggleNavBtn.getAttribute('aria-expanded') === 'true';
        const newExpanded = !isExpanded;
        toggleNavBtn.setAttribute('aria-expanded', newExpanded);
        
        // Use the pre-translated strings from data attributes
        if (newExpanded) {
            toggleNavBtn.setAttribute('aria-label', toggleNavBtn.dataset.labelClose);
        } else {
            toggleNavBtn.setAttribute('aria-label', toggleNavBtn.dataset.labelOpen);
        }

        if (navElement.classList.contains("siteHeader__nav--passive")) {
            navElement.classList.remove("siteHeader__nav--passive");
            navElement.classList.add("siteHeader__nav--active");
        } else {
            navElement.classList.remove("siteHeader__nav--active");
            navElement.classList.add("siteHeader__nav--passive");
        }
    });


    ////////////////////////////////////////////////////
    // Toggle searchbar
    ////////////////////////////////////////////////////
    function toggleSearch() {
        let a = document.getElementById("search-toggle").getAttribute("aria-expanded");
        let b = document.getElementById("searchbar");

        if (a == "false") {
            a = "true";
            b.classList.add("is-visible");

            // Event listener for clicks outside the searchbar
            document.addEventListener('click', outsideClickListener);

            // Event listener for the ESC key press
            document.addEventListener('keydown', escKeyListener);
        } else {
            a = "false";
            b.classList.remove("is-visible");

            // Remove event listeners when searchbar is hidden
            document.removeEventListener('click', outsideClickListener);
            document.removeEventListener('keydown', escKeyListener);
        }
        document.getElementById("search-toggle").setAttribute("aria-expanded", a);
    }

    // Function to hide the searchbar
    function hideSearchbar() {
        let searchbar = document.getElementById("searchbar");
        if (searchbar.classList.contains("is-visible")) {
            searchbar.classList.remove("is-visible");
            document.getElementById("search-toggle").setAttribute("aria-expanded", "false");

            // Remove event listeners when searchbar is hidden
            document.removeEventListener('click', outsideClickListener);
            document.removeEventListener('keydown', escKeyListener);
        }
    }

    // Event listener for clicks outside the searchbar
    function outsideClickListener(event) {
        let searchbar = document.getElementById("searchbar");
        let searchToggle = document.getElementById("search-toggle");
        if (!searchbar.contains(event.target) && !searchToggle.contains(event.target)) {
            hideSearchbar();
        }
    }

    // Event listener for the ESC key press
    function escKeyListener(event) {
        if (event.key === "Escape") {
            hideSearchbar();
        }
    }

}