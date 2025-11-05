// Данные проектов
const projectsData = {
    1: {
        title: "UPY-01",
        description: "Первый проект, разработанный в рамках курса Фронтенд и бэкенд разработка, а именно во время самых первых практик, в самом начале семестра. Данный проект создан для освоения базы HTML и CSS.",
        technologies: ["HTML5", "CSS3"],
        liveLink: "https://alupli.github.io/Upy-01/",
        githubLink: "https://github.com/alupLi/Upy-01",
        screenshots: []
    },
    2: {
        title: "UPY-02",
        description: "Второй проект, разработанный в рамках курса Фронтенд и бэкенд разработка, как результат работы, проделанной с 7-ой по 12-ую практику. Он расширил знания о HTML и CSS, познакомил с Bootstrap и дал начало освоению JavaScript для работы сайта.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        liveLink: "https://alupli.github.io/frontend-and-backend-practice/",
        githubLink: "https://github.com/alupLi/frontend-and-backend-practice",
        screenshots: [
            "../assets/images/projects/UPY-02/UPY-02_screenshot_1.png",
            "../assets/images/projects/UPY-02/UPY-02_screenshot_2.png", 
            "../assets/images/projects/UPY-02/UPY-02_screenshot_3.png"
        ]
    },
};

// Инициализация модального окна
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card-large');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Открытие модального окна
    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project');
            openModal(projectId);
        });
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Фильтрация проектов
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Обновляем активную кнопку
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Фильтруем проекты
            filterProjects(filter);
        });
    });

    function openModal(projectId) {
        const project = projectsData[projectId];
        if (!project) return;

        const modalBody = document.querySelector('.modal-body');

        // Скриншоты
        let screenshotsHtml;
        if (project.screenshots && project.screenshots.length > 0) {
            screenshotsHtml = project.screenshots.map((screenshot, index) =>
            `<div class="screenshot-item">
                <img src="${screenshot}" alt="Скриншот ${project.title} ${index + 1}" class="project-screenshot">
            </div>`
            ).join('');
        }
        else {
            screenshotsHtml =
            `<div class="screenshot-item screenshot-placeholder">
                <div class="screenshot-content">
                    <p>Скриншоты пока не добавлены</p>
                    <div class="placeholder-icon">📷</div>
                </div>
            </div>`;
        }

        // Генерируем технологии
        const techHtml = project.technologies.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p class="project-description">${project.description}</p>
            
            <div class="project-tech">
                ${techHtml}
            </div>
            
            <h3>Скриншоты</h3>
            <div class="project-gallery">
                ${screenshotsHtml}
            </div>
            
            <div class="project-links">
                <a href="${project.liveLink}" target="_blank" class="project-link">
                    🌐 Живая версия
                </a>
                <a href="${project.githubLink}" target="_blank" class="project-link github">
                    💻 Исходный код
                </a>
            </div>
        `;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function filterProjects(filter) {
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Закрытие по ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

