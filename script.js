const zodiacSigns = [
    {
        name: "Aries",
        symbol: "♈",
        dates: "March 21 - April 19",
        element: "Fire",
        color: "#FF6B6B",
        rulingPlanet: "Mars",
        icon: "fa-fire"
    },
    {
        name: "Taurus",
        symbol: "♉",
        dates: "April 20 - May 20",
        element: "Earth",
        color: "#4ECDC4",
        rulingPlanet: "Venus",
        icon: "fa-mountain"
    },
    {
        name: "Gemini",
        symbol: "♊",
        dates: "May 21 - June 20",
        element: "Air",
        color: "#FFE66D",
        rulingPlanet: "Mercury",
        icon: "fa-wind"
    },
    {
        name: "Cancer",
        symbol: "♋",
        dates: "June 21 - July 22",
        element: "Water",
        color: "#95E1D3",
        rulingPlanet: "Moon",
        icon: "fa-droplet"
    },
    {
        name: "Leo",
        symbol: "♌",
        dates: "July 23 - August 22",
        element: "Fire",
        color: "#F7DC6F",
        rulingPlanet: "Sun",
        icon: "fa-sun"
    },
    {
        name: "Virgo",
        symbol: "♍",
        dates: "August 23 - September 22",
        element: "Earth",
        color: "#82E0AA",
        rulingPlanet: "Mercury",
        icon: "fa-leaf"
    },
    {
        name: "Libra",
        symbol: "♎",
        dates: "September 23 - October 22",
        element: "Air",
        color: "#FADBBD8",
        rulingPlanet: "Venus",
        icon: "fa-scale-balanced"
    },
    {
        name: "Scorpio",
        symbol: "♏",
        dates: "October 23 - November 21",
        element: "Water",
        color: "#A569BD",
        rulingPlanet: "Pluto",
        icon: "fa-spider"
    },
    {
        name: "Sagittarius",
        symbol: "♐",
        dates: "November 22 - December 21",
        element: "Fire",
        color: "#F8B500",
        rulingPlanet: "Jupiter",
        icon: "fa-arrow-trend-up"
    },
    {
        name: "Capricorn",
        symbol: "♑",
        dates: "December 22 - January 19",
        element: "Earth",
        color: "#7D6608",
        rulingPlanet: "Saturn",
        icon: "fa-hill"
    },
    {
        name: "Aquarius",
        symbol: "♒",
        dates: "January 20 - February 18",
        element: "Air",
        color: "#5DADE2",
        rulingPlanet: "Uranus",
        icon: "fa-wind"
    },
    {
        name: "Pisces",
        symbol: "♓",
        dates: "February 19 - March 20",
        element: "Water",
        color: "#AED6F1",
        rulingPlanet: "Neptune",
        icon: "fa-droplet"
    }
];

const generateLuckyNumbers = () => {
    const numbers = [];
    while (numbers.length < 5) {
        const num = Math.floor(Math.random() * 99) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
};

const adjustColor = (hex, percent) => {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    const clampR = Math.max(0, Math.min(255, R));
    const clampG = Math.max(0, Math.min(255, G));
    const clampB = Math.max(0, Math.min(255, B));
    return '#' + (clampR * 0x10000 + clampG * 0x100 + clampB).toString(16).padStart(6, '0');
};

const createSignSelector = () => {
    const selector = document.getElementById('signSelector');
    selector.innerHTML = '';

    zodiacSigns.forEach(sign => {
        const button = document.createElement('button');
        button.className = 'sign-option';
        button.style.background = `linear-gradient(135deg, ${sign.color} 0%, ${adjustColor(sign.color, -20)} 100%)`;
        button.innerHTML = `
            <i class="fas ${sign.icon}"></i>
            <span>${sign.name}</span>
            <span style="font-size: 0.7rem; opacity: 0.9;">${sign.symbol}</span>
        `;
        button.addEventListener('click', () => showDetailedHoroscope(sign));
        selector.appendChild(button);
    });
};

const createZodiacCard = (sign) => {
    const card = document.createElement('div');
    card.className = 'zodiac-card';
    card.style.borderColor = sign.color;
    
    const horoscope = getDailyHoroscope(sign.name);
    const luckyNumbers = generateLuckyNumbers();
    
    card.innerHTML = `
        <div class="zodiac-header">
            <div class="zodiac-symbol" style="color: ${sign.color};">${sign.symbol}</div>
            <div class="zodiac-info">
                <h2 style="color: ${sign.color};">${sign.name}</h2>
                <p class="zodiac-dates">${sign.dates} • ${sign.element}</p>
            </div>
        </div>
        <p class="horoscope-text">${horoscope.main.substring(0, 120)}...</p>
        <div class="lucky-numbers">
            ${luckyNumbers.map(num => `<span style="background: ${sign.color};">${num}</span>`).join('')}
        </div>
    `;
    
    card.addEventListener('click', () => showDetailedHoroscope(sign));
    return card;
};

const getDailyHoroscope = (sign) => {
    try {
        const response = await fetch(`https://freehoroscopeapi.com/api/v1/get-horoscope/daily?sign=${sign.toLowerCase()}`);
        const data = await response.json();
        
        if (data && data.data && data.data.horoscope) {
            return {
                main: data.data.horoscope,
                love: 'Today brings passionate encounters and deep emotional connections. Focus on meaningful relationships and honest communication.',
                career: 'Professional opportunities emerge through your natural leadership. Take initiative on projects that align with your ambitious goals.',
                health: 'Channel your abundant energy into physical activities. Balance intensity with proper rest and recovery.'
            };
        }
        
        return {
            main: 'Today brings opportunities for personal growth and meaningful connections.',
            love: 'Focus on communication and building strong relationships through honesty and trust.',
            career: 'Professional development is favored. Your skills and talents are in high demand.',
            health: 'Take care of your physical and mental well-being. Balance work with relaxation and self-care.'
        };
    } catch (error) {
        console.error('Error fetching horoscope:', error);
        return {
            main: 'Today brings opportunities for personal growth and meaningful connections.',
            love: 'Focus on communication and building strong relationships through honesty and trust.',
            career: 'Professional development is favored. Your skills and talents are in high demand.',
            health: 'Take care of your physical and mental well-being. Balance work with relaxation and self-care.'
        };
    }
};

const showDetailedHoroscope = async (sign) => {
    const horoscopeDisplay = document.getElementById('horoscopeDisplay');
    const zodiacSelection = document.getElementById('zodiacSelection');
    const zodiacGrid = document.getElementById('zodiacGrid');
    
    const horoscope = await getDailyHoroscope(sign.name);
    const luckyNumbers = generateLuckyNumbers();
    
    const detailedHtml = `
        <div class="horoscope-header">
            <div class="sign-icon" style="background: ${sign.color};">
                <i class="fas ${sign.icon}"></i>
            </div>
            <div class="sign-title">
                <h2 style="color: ${sign.color};">${sign.name}</h2>
                <p>${sign.dates} • ${sign.element} • Ruled by ${sign.rulingPlanet}</p>
            </div>
        </div>
        
        <div class="horoscope-content">
            <div class="horoscope-section">
                <h3 class="section-title" style="color: ${sign.color};"><i class="fas fa-star"></i> Daily Overview</h3>
                <p>${horoscope.main}</p>
            </div>
            
            <div class="horoscope-section">
                <h3 class="section-title" style="color: ${sign.color};"><i class="fas fa-heart"></i> Love & Relationships</h3>
                <p>${horoscope.love}</p>
            </div>
            
            <div class="horoscope-section">
                <h3 class="section-title" style="color: ${sign.color};"><i class="fas fa-briefcase"></i> Career & Finances</h3>
                <p>${horoscope.career}</p>
            </div>
            
            <div class="horoscope-section">
                <h3 class="section-title" style="color: ${sign.color};"><i class="fas fa-heart-pulse"></i> Health & Wellness</h3>
                <p>${horoscope.health}</p>
            </div>
        </div>
        
        <div class="lucky-numbers-section" style="border-left: 4px solid ${sign.color};">
            <h3 class="section-title" style="color: ${sign.color};"><i class="fas fa-clover"></i> Your Lucky Numbers Today</h3>
            <div class="lucky-numbers">
                ${luckyNumbers.map(num => `<span style="background: ${sign.color};">${num}</span>`).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('detailedHoroscope').innerHTML = detailedHtml;
    horoscopeDisplay.style.display = 'block';
    zodiacSelection.style.display = 'none';
    zodiacGrid.style.display = 'none';
    horoscopeDisplay.scrollIntoView({ behavior: 'smooth' });
};

const hideDetailedHoroscope = () => {
    const horoscopeDisplay = document.getElementById('horoscopeDisplay');
    const zodiacSelection = document.getElementById('zodiacSelection');
    const zodiacGrid = document.getElementById('zodiacGrid');
    
    horoscopeDisplay.style.display = 'none';
    zodiacSelection.style.display = 'block';
    zodiacGrid.style.display = 'grid';
};

const init = () => {
    const currentDate = new Date();
    document.getElementById('currentDate').textContent = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    createSignSelector();

    const grid = document.getElementById('zodiacGrid');
    zodiacSigns.forEach(sign => {
        grid.appendChild(createZodiacCard(sign));
    });

    document.getElementById('backButton').addEventListener('click', hideDetailedHoroscope);
};

document.addEventListener('DOMContentLoaded', init);