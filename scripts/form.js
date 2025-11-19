// Âàëèäàöèÿ ôîðìû êîíòàêòîâ
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Валидация формы
            if (name === '' || email === '' || message === '') {
                const emptyFields = [];
                if (name === '') {
                    document.getElementById('name').setAttribute('aria-invalid', 'true');
                    emptyFields.push('имя');
                }
                if (email === '') {
                    document.getElementById('email').setAttribute('aria-invalid', 'true');
                    emptyFields.push('email');
                }
                if (message === '') {
                    document.getElementById('message').setAttribute('aria-invalid', 'true');
                    emptyFields.push('сообщение');
                }
                
                alert(`Пожалуйста, заполните поля: ${emptyFields.join(', ')}`);
                return;
            }

            if (!isValidEmail(email)) {
                alert('Ïîæàëóéñòà, ââåäèòå êîððåêòíûé email');
                return;
            }

            // Åñëè âñå ïðîâåðêè ïðîéäåíû
            alert('Ñîîáùåíèå îòïðàâëåíî!');
            contactForm.reset();
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
