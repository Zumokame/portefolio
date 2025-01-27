// main.js

// Fonction pour charger les projets depuis GitHub
async function loadProjects() {
    const username = 'Zumokame';
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const projects = await response.json();
    console.log("📄 ~ loadProjects ~ projects:", projects)

    const projectGrid = document.getElementById('projectGrid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="https://via.placeholder.com/300x200.png?text=${project.name}" alt="${project.name}">
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description || 'Pas de description disponible.'}</p>
                <a href="${project.html_url}" class="btn" target="_blank">Voir sur GitHub</a>
            </div>
        `;
        projectGrid.appendChild(projectCard);
    });
}

// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Merci pour votre message ! Je vous répondrai bientôt.');
        contactForm.reset();
    });
}

// Charger les projets si on est sur la page des projets
if (window.location.pathname.includes('projets.html')) {
    loadProjects();
}
