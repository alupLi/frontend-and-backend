// Валидация формы контактов
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Простая валидация
            if (name === '' || email === '' || message === '') {
                alert('Пожалуйста, заполните все поля');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Пожалуйста, введите корректный email');
                return;
            }

            // Если все проверки пройдены
            alert('Сообщение отправлено!');
            contactForm.reset();
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});