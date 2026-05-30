/* Core Functions for FUDOPIA */

const countryFilter = document.getElementById('countryFilter');
const foodGrid = document.getElementById('foodGrid');
const factDisplay = document.getElementById('factDisplay');

/* Render filter buttons for countries */
function renderFilterButtons() {
    const buttons = ["All", ...foodData.map(item => item.country)];
    countryFilter.innerHTML = buttons.map(country =>
        `<button class="filter-btn ${country === 'All' ? 'active' : ''}" onclick="filterFoods('${country}')">${country}</button>`
    ).join('');
}

/* Render food cards with images and descriptions */
function renderFoodCards(country = 'All') {
    let foods = foodData.flatMap(item => item.foods.map(food => ({ ...food, country: item.country, flag: item.flag })));
    if (country !== 'All') {
        foods = foods.filter(food => food.country === country);
    }
    foodGrid.innerHTML = foods.map(food => `
        <div class="country-card">
            <div class="card-img" style="background-image:url('${food.img}')"></div>
            <div class="card-body">
<span class="region-tag">${food.flag} ${food.country}</span>
                <h3>${food.name}</h3>
                <p class="description">${food.desc}</p>
                <p class="why-fav">${food.why}</p>
            </div>
        </div>
    `).join('');
}

/* Filter foods by country */
function filterFoods(country = 'All') {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.classList.toggle('active', button.textContent === country);
    });
    renderFoodCards(country);
}

/* Show or hide sections */
function showSection(sectionId) {
    const sectionIds = ['home','foods','fun-facts','about-us'];
    sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (!section) return;
        section.classList.toggle('section-hidden', id !== sectionId);
    });
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveNav(sectionId);
}

/* Set active navigation link */
function setActiveNav(sectionId) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-target') === sectionId);
    });
}

/* Generate random fun fact */
function generateFact() {
    if (!factDisplay) return;
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factDisplay.textContent = funFacts[randomIndex];
}

/* Initialize the page on load */
document.addEventListener('DOMContentLoaded', () => {
    renderFilterButtons();
    renderFoodCards();
    generateFact();
    showSection('home');

    // Increment adventurer count once per browser (not repeated visitors on same device/browser)
    const countEl = document.getElementById('foodAdventureCount');
    if (countEl) {
        const VISITED_KEY = 'fudopia_adventurer_counted';
        const COUNT_KEY = 'fudopia_adventurer_count';

        let count = Number(localStorage.getItem(COUNT_KEY) || '1');
        const alreadyCounted = localStorage.getItem(VISITED_KEY) === 'true';

        if (!alreadyCounted) {
            count += 1;
            localStorage.setItem(COUNT_KEY, String(count));
            localStorage.setItem(VISITED_KEY, 'true');
        }

        countEl.textContent = String(count);
    }
});
