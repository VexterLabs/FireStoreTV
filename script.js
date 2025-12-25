// Simulación de datos (API Mock)
const apps = [
    { id: 1, name: "CyberGuard VPN", category: "Herramientas", rating: 4.8, icon: "🛡️" },
    { id: 2, name: "Pixel Edit Pro", category: "Fotografía", rating: 4.5, icon: "🎨" },
    { id: 3, name: "StreamFlow", category: "Entretenimiento", rating: 4.9, icon: "📺" },
    { id: 4, name: "Nebula Music", category: "Música", rating: 4.7, icon: "🎵" },
    { id: 5, name: "Crypto Pulse", category: "Finanzas", rating: 4.2, icon: "📈" },
    { id: 6, name: "Titan Arena", category: "Juegos", rating: 4.6, icon: "⚔️" },
];

const categories = ["Juegos", "Social", "Productividad", "Educación", "Salud"];

// Función para renderizar apps
function renderApps(appData) {
    const container = document.getElementById('featuredApps');
    container.innerHTML = appData.map(app => `
        <div class="app-card">
            <div class="app-icon">${app.icon}</div>
            <h3>${app.name}</h3>
            <p>${app.category}</p>
            <div style="color: #fbbf24; font-size: 0.8rem; margin-top: 5px;">
                ★ ${app.rating}
            </div>
        </div>
    `).join('');
}

// Función para renderizar categorías
function renderCategories() {
    const container = document.getElementById('categories');
    container.innerHTML = categories.map(cat => `
        <div class="category-pill" style="
            background: var(--card-bg); 
            padding: 10px 20px; 
            border-radius: 50px; 
            border: 1px solid var(--glass);
            cursor: pointer;
            white-space: nowrap;
        ">${cat}</div>
    `).join('');
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons(); // Inicializa iconos
    renderApps(apps);
    renderCategories();

    // Lógica de búsqueda simple
    document.getElementById('appSearch').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = apps.filter(app => 
            app.name.toLowerCase().includes(term) || 
            app.category.toLowerCase().includes(term)
        );
        renderApps(filtered);
    });
});
     
