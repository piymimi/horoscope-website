const zodiacSigns = [
    { name: 'Aries', symbol: '♈', dates: 'Mar 21 - Apr 19', element: 'fire' },
    { name: 'Taurus', symbol: '♉', dates: 'Apr 20 - May 20', element: 'earth' },
    { name: 'Gemini', symbol: '♊', dates: 'May 21 - Jun 20', element: 'air' },
    { name: 'Cancer', symbol: '♋', dates: 'Jun 21 - Jul 22', element: 'water' },
    { name: 'Leo', symbol: '♌', dates: 'Jul 23 - Aug 22', element: 'fire' },
    { name: 'Virgo', symbol: '♍', dates: 'Aug 23 - Sep 22', element: 'earth' },
    { name: 'Libra', symbol: '♎', dates: 'Sep 23 - Oct 22', element: 'air' },
    { name: 'Scorpio', symbol: '♏', dates: 'Oct 23 - Nov 21', element: 'water' },
    { name: 'Sagittarius', symbol: '♐', dates: 'Nov 22 - Dec 21', element: 'fire' },
    { name: 'Capricorn', symbol: '♑', dates: 'Dec 22 - Jan 19', element: 'earth' },
    { name: 'Aquarius', symbol: '♒', dates: 'Jan 20 - Feb 18', element: 'air' },
    { name: 'Pisces', symbol: '♓', dates: 'Feb 19 - Mar 20', element: 'water' }
];

const horoscopeCache = {
    'Aries': { today: null, yesterday: null, tomorrow: null },
    'Taurus': { today: null, yesterday: null, tomorrow: null },
    'Gemini': { today: null, yesterday: null, tomorrow: null },
    'Cancer': { today: null, yesterday: null, tomorrow: null },
    'Leo': { today: null, yesterday: null, tomorrow: null },
    'Virgo': { today: null, yesterday: null, tomorrow: null },
    'Libra': { today: null, yesterday: null, tomorrow: null },
    'Scorpio': { today: null, yesterday: null, tomorrow: null },
    'Sagittarius': { today: null, yesterday: null, tomorrow: null },
    'Capricorn': { today: null, yesterday: null, tomorrow: null },
    'Aquarius': { today: null, yesterday: null, tomorrow: null },
    'Pisces': { today: null, yesterday: null, tomorrow: null }
};

async function fetchHoroscope(sign, dayOffset) {
    const cacheKey = dayOffset === -1 ? 'yesterday' : dayOffset === 1 ? 'tomorrow' : 'today';
    
    if (horoscopeCache[sign][cacheKey]) {
        return horoscopeCache[sign][cacheKey];
    }

    try {
        const date = new Date();
        date.setDate(date.getDate() + dayOffset);
        const dateString = date.toISOString().split('T')[0];
        
        const response = await fetch(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign.toLowerCase()}`);
        
        if (!response.ok) {
            throw new Error('API request failed');
        }
        
        const data = await response.json();
        horoscopeCache[sign][cacheKey] = data.data.horoscope;
        return data.data.horoscope;
    } catch (error) {
        console.error('Error fetching horoscope:', error);
        return 'Unable to fetch horoscope at this time. Please try again later.';
    }
}

let currentSign = null;
let currentDay = 0;

async function init() {
    displayCurrentDate();
    renderZodiacGrid();
    setupEventListeners();
    await loadGeneralHoroscope();
}

function displayCurrentDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = today.toLocaleDateString('en-US', options);
}

function renderZodiacGrid() {
    const grid = document.getElementById('zodiacGrid');
    grid.innerHTML = zodiacSigns.map(sign => `
        <div class="zodiac-card" data-sign="${sign.name}">
            <div class="zodiac-symbol">${sign.symbol}</div>
            <h3>${sign.name}</h3>
            <p class="zodiac-dates">${sign.dates}</p>
            <p class="zodiac-element">${sign.element}</p>
        </div>
    `).join('');
}

function setupEventListeners() {
    const grid = document.getElementById('zodiacGrid');
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.zodiac-card');
        if (card) {
            currentSign = card.dataset.sign;
            currentDay = 0;
            showHoroscopeDisplay();
            updateHoroscope();
        }
    });

    document.getElementById('backButton').addEventListener('click', () => {
        document.getElementById('horoscopeDisplay').classList.add('hidden');
        document.getElementById('zodiacSelection').classList.remove('hidden');
    });

    document.querySelectorAll('#generalHoroscope .day-tab').forEach(tab => {
        tab.addEventListener('click', async (e) => {
            const day = parseInt(e.currentTarget.dataset.day);
            const horoscopeText = await fetchHoroscope('Aries', day);
            document.getElementById('generalHoroscopeText').textContent = horoscopeText;
            
            const dayLabels = {
                '-1': "Yesterday's Cosmic Energy",
                '0': "Today's Cosmic Energy",
                '1': "Tomorrow's Cosmic Energy"
            };
            
            document.getElementById('generalHoroscopeTitle').textContent = dayLabels[day.toString()];
            
            document.querySelectorAll('#generalHoroscope .day-tab').forEach(t => {
                t.classList.toggle('active', parseInt(t.dataset.day) === day);
            });
        });
    });
}

function showHoroscopeDisplay() {
    document.getElementById('zodiacSelection').classList.add('hidden');
    document.getElementById('horoscopeDisplay').classList.remove('hidden');
}

function setDay(day) {
    currentDay = day;
    
    document.querySelectorAll('.day-tab').forEach(tab => {
        tab.classList.toggle('active', parseInt(tab.dataset.day) === day);
    });

    if (currentSign) {
        updateHoroscope();
    }
}

async function updateHoroscope() {
    const sign = zodiacSigns.find(s => s.name === currentSign);
    
    let dayText = 'Today';
    if (currentDay === -1) dayText = 'Yesterday';
    if (currentDay === 1) dayText = 'Tomorrow';

    const display = document.getElementById('detailedHoroscope');
    display.innerHTML = `
        <div class="day-navigation">
            <button class="day-tab ${currentDay === -1 ? 'active' : ''}" data-day="-1">
                <i class="fas fa-chevron-left"></i> Yesterday
            </button>
            <button class="day-tab ${currentDay === 0 ? 'active' : ''}" data-day="0">Today</button>
            <button class="day-tab ${currentDay === 1 ? 'active' : ''}" data-day="1">
                Tomorrow <i class="fas fa-chevron-right"></i>
            </button>
        </div>
        <div class="detailed-card">
            <div class="zodiac-header">
                <span class="zodiac-symbol-large">${sign.symbol}</span>
                <div>
                    <h2>${sign.name}</h2>
                    <p class="zodiac-date">${sign.dates}</p>
                </div>
            </div>
            <div class="horoscope-text">
                <h3>${dayText}'s Horoscope</h3>
                <p class="loading">Loading horoscope...</p>
            </div>
        </div>
    `;

    const horoscopeText = await fetchHoroscope(currentSign, currentDay);
    const textElement = display.querySelector('.horoscope-text p');
    textElement.textContent = horoscopeText;

    display.querySelectorAll('.day-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const day = parseInt(e.currentTarget.dataset.day);
            setDay(day);
        });
    });
}

async function loadGeneralHoroscope() {
    const horoscopeText = await fetchHoroscope('Aries', 0);
    document.getElementById('generalHoroscopeText').textContent = horoscopeText;
}

document.addEventListener('DOMContentLoaded', init);// Cache bust: 1778082994
