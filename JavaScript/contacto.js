document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('new-contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const message = formatMessage(formData);
        sendWhatsAppMessage(message);
    });

    function formatMessage(formData) {
        let message = 'Hola, soy ' + formData.get('name') + '. Mi correo electrónico es ' + formData.get('email') + '. Mi mensaje es: ' + formData.get('message');
        return encodeURIComponent(message);
    }

    function sendWhatsAppMessage(message) {
        window.open('https://wa.me/+5212722468002/?text=' + message, '_blank');
    }
});

