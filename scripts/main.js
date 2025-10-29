// Основной JavaScript файл
document.addEventListener('DOMContentLoaded', function () {
    // Фильтрация проектов
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Удаляем активный класс у всех кнопок
            filterBtns.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');

            // Здесь можно добавить логику фильтрации проектов
            console.log('Фильтр: ' + this.textContent);
        });
    });

    // Анимация прогресс-баров при скролле
    const animateProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    };

    // Запускаем анимацию при загрузке страницы
    animateProgressBars();
});