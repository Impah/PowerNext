const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Por favor complete el Captcha.")
        return
    }
});
