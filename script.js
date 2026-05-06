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

const horoscopeData = {
    'Aries': {
        today: 'Today is perfect for new beginnings. Your energy is high and people are drawn to your confidence.',
        yesterday: 'Yesterday was a day of reflection. You learned valuable lessons about patience.',
        tomorrow: 'Tomorrow brings exciting opportunities for career advancement. Stay focused.'
    },
    'Taurus': {
        today: 'Financial matters look positive today. Consider saving rather than spending.',
        yesterday: 'You showed great strength yesterday in difficult situations.',
        tomorrow: 'Romance is in the air tomorrow. Keep an open heart and mind.'
    },
    'Gemini': {
        today: 'Communication flows easily today. It\'s a great time for important conversations.',
        yesterday: 'Your adaptability helped you navigate challenges yesterday.',
        tomorrow: 'Tomorrow brings social opportunities. Network and connect with others.'
    },
    'Cancer': {
        today: 'Home and family take priority today. Create a peaceful environment.',
        yesterday: 'Your emotional intelligence was a strength yesterday.',
        tomorrow: 'Tomorrow favors self-care. Take time for yourself.'
    },
    'Leo': {
        today: 'Your creativity shines today. Express yourself boldly and confidently.',
        yesterday: 'You inspired others yesterday with your passion.',
        tomorrow: 'Recognition for your hard work is coming tomorrow.'
    },
    'Virgo': {
        today: 'Details matter today. Your analytical skills will solve important problems.',
        yesterday: 'Your organization skills were impressive yesterday.',
        tomorrow: 'Tomorrow is perfect for planning and preparation.'
    },
    'Libra': {
        today: 'Balance and harmony are your focus today. Seek compromise in conflicts.',
        yesterday: 'Your diplomacy helped resolve tensions yesterday.',
        tomorrow: 'Partnerships bring positive energy tomorrow.'
    },
    'Scorpio': {
        today: 'Your intuition is strong today. Trust your gut feelings.',
        yesterday: 'Your depth and insight impressed others yesterday.',
        tomorrow: 'Transformation is possible tomorrow. Embrace change.'
    },
    'Sagittarius': {
        today: 'Adventure calls today. Explore new ideas and experiences.',
        yesterday: 'Your optimism lifted spirits yesterday.',
        tomorrow: 'Learning opportunities present themselves tomorrow.'
    },
    'Capricorn': {
        today: 'Career focus pays off today. Your dedication doesn\'t go unnoticed.',
        yesterday: 'Your discipline was admirable yesterday.',
        tomorrow: 'Long-term plans gain momentum tomorrow.'
    },
    'Aquarius': {
        today: 'Innovation is key today. Think outside conventional solutions.',
        yesterday: 'Your unique perspective was valuable yesterday.',
        tomorrow: 'Community involvement brings fulfillment tomorrow.'
    },
    'Pisces': {
        today: 'Your compassion heals today. Offer support to those in need.',
        yesterday: 'Your creativity was inspiring yesterday.',
        tomorrow: 'Spiritual growth is favored tomorrow. Meditate or reflect.'
    }
};

let currentSign = null;
let currentDay = 0;

function init() {
    displayCurrentDate();
    renderZodiacGrid();
    setupEventListeners();
    loadGeneralHoroscope();
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

    document.querySelectorAll('.day-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const day = parseInt(e.currentTarget.dataset.day);
            setDay(day);
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

function updateHoroscope() {
    const sign = zodiacSigns.find(s => s.name === currentSign);
    const horoscope = horoscopeData[currentSign];
    
    let dayText = 'Today';
    if (currentDay === -1) dayText = 'Yesterday';
    if (currentDay === 1) dayText = 'Tomorrow';

    const dayKey = currentDay === -1 ? 'yesterday' : currentDay === 1 ? 'tomorrow' : 'today';

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
                <p>${horoscope[dayKey]}</p>
            </div>
        </div>
    `;

    display.querySelectorAll('.day-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const day = parseInt(e.currentTarget.dataset.day);
            setDay(day);
        });
    });
}

function loadGeneralHoroscope() {
    document.getElementById('generalHoroscopeText').textContent = horoscopeData['Aries'].today;
}

document.addEventListener('DOMContentLoaded', init);