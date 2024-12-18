document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.btn-outline-success');
    const searchInput = document.querySelector('.form-control');

    searchButton.addEventListener('click', function (event) {
        if (searchInput.classList.contains('d-none')) {
            event.preventDefault();
            searchInput.classList.remove('d-none');
            searchInput.focus();
        }
    });
});
