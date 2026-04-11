document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('promo-modal');

    if (!modal) {
        return;
    }

    var closeButtons = modal.querySelectorAll('[data-close-modal]');

    function closeModal() {
        modal.classList.remove('is-visible');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('promo-open');
    }

    function openModal() {
        modal.classList.add('is-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('promo-open');
    }

    closeButtons.forEach(function (button) {
        button.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
            closeModal();
        }
    });

    openModal();
});
