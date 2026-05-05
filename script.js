const generalHoroscopes = [
    {
        text: "Today brings a harmonious alignment of planets that favors creativity and communication. The stars encourage you to express yourself authentically and connect with others on a deeper level. Trust your intuition when making decisions, and don't hesitate to reach out to old friends or explore new interests."
    },
    {
        text: "The cosmic energy today supports personal growth and self-reflection. This is an ideal time for meditation, journaling, or any activity that helps you understand your inner self. The universe is sending you subtle messages through coincidences and synchronicities - pay attention to them."
    },
    {
        text: "A powerful surge of motivation and determination fills the air today. This is the perfect moment to tackle ambitious projects or start something new. Your confidence is high, and others are likely to be inspired by your enthusiasm. Balance your drive with thoughtful planning for best results."
    },
    {
        text: "Today's planetary alignment emphasizes relationships and emotional connections. Deep conversations may arise, leading to greater understanding and closeness with loved ones. In business, collaboration brings better results than working alone. Nurture your connections and practice empathy."
    },
    {
        text: "The stars today bring clarity and perspective to complex situations. What seemed confusing may now become clear, helping you make decisions with confidence. This is also a good day for learning, research, and expanding your knowledge base. Trust the process of discovery."
    },
    {
        text: "A day of balance and harmony awaits. The celestial bodies align to bring equilibrium between work and play, action and rest. You may find yourself feeling unusually centered and peaceful. Use this stable energy to organize your life and set intentions for the coming weeks."
    },
    {
        text: "Today's cosmic energy stimulates innovation and out-of-the-box thinking. Solutions to old problems may appear suddenly and unexpectedly. This is an excellent day for brainstorming, creative projects, and networking with like-minded individuals. Embrace change and welcome new perspectives."
    },
    {
        text: "The universe encourages patience and perseverance today. Progress may seem slow, but steady effort will bring lasting results. Use this time to strengthen foundations in your career, relationships, or personal goals. Trust that everything is unfolding in divine timing."
    },
    {
        text: "A day of heightened intuition and spiritual awareness. You may receive insights or inspirations that guide your next steps. Pay attention to dreams, recurring thoughts, and gut feelings. This is an ideal day for self-care, healing practices, and connecting with your higher self."
    },
    {
        text: "Today brings opportunities for adventure and exploration. The stars encourage you to step out of your comfort zone and try something new. Whether it's a new place, new activity, or new way of thinking, embrace the unknown with an open heart. Growth happens outside familiar territory."
    },
    {
        text: "The celestial alignment today favors practical matters and organization. This is an excellent day for planning, budgeting, and tackling tasks that require attention to detail. Your mind is sharp and focused, making it easier to see the big picture and the small steps needed to get there."
    },
    {
        text: "Today brings gentle, nurturing energy that encourages self-compassion and care for others. You may feel drawn to comfort foods, cozy spaces, and heartwarming conversations. Allow yourself to slow down and appreciate the simple pleasures of life. Kindness is your superpower today."
    },
    {
        text: "A burst of creative energy makes today ideal for artistic pursuits, problem-solving, and imaginative thinking. The universe supports innovation and original ideas. Don't be afraid to take calculated risks - the stars are aligned in your favor. Trust your unique vision."
    },
    {
        text: "Today's planetary movements emphasize clarity, communication, and truth-seeking. Important conversations may arise, leading to resolutions and deeper understanding. Speak your truth with kindness, and listen to others with an open mind. Honesty paves the way to positive change."
    },
    {
        text: "The stars today bring balance between action and reflection, giving and receiving, working and resting. This harmonious energy supports all areas of life. You may find that things flow more smoothly and relationships feel more connected. Appreciate this moment of balance and peace."
    },
    {
        text: "A day of new beginnings and fresh perspectives. The cosmic energy encourages you to release what no longer serves you and embrace the new. Whether it's a project, relationship, or mindset, trust that the universe is guiding you toward what aligns with your highest good."
    },
    {
        text: "Today brings heightened sensitivity and emotional awareness. You may feel more in tune with your feelings and the emotions of those around you. This is a powerful day for empathy, healing, and deepening relationships. Honor your emotions and express them constructively."
    },
    {
        text: "The celestial alignment today supports leadership, ambition, and taking initiative. You may feel inspired to take charge of a situation or pursue a long-held goal. Your energy levels are high, and others are likely to look to you for guidance. Lead with confidence and compassion."
    },
    {
        text: "A day of community, collaboration, and shared purpose. The stars encourage you to connect with others and work together toward common goals. Networking, teamwork, and group activities bring extra luck and satisfaction. Together, you can achieve more than alone."
    },
    {
        text: "Today brings opportunities for healing, forgiveness, and letting go. The universe supports releasing old patterns, grudges, and anything holding you back. This is a powerful day for therapy, spiritual practices, or simply taking time for reflection. Free yourself to move forward."
    },
    {
        text: "The cosmic energy today emphasizes wisdom, learning, and expanding your horizons. You may feel drawn to study, read, or explore new subjects. This is an excellent day for teaching, mentoring, or sharing knowledge with others. Growth through education is highly favored."
    },
    {
        text: "A day of transformation and deep change. The stars support letting go of the old to make space for the new. You may feel called to make significant life decisions or changes. Trust your intuition and have faith that these shifts are aligned with your soul's journey."
    },
    {
        text: "Today brings optimism, enthusiasm, and positive energy. The universe encourages you to look on the bright side and expect good things. Your positive attitude will attract opportunities and favorable circumstances. Spread joy and gratitude wherever you go."
    },
    {
        text: "The celestial alignment today supports practical magic and manifestation. This is an ideal day for setting intentions, visualizing your goals, and taking inspired action. Your thoughts and words have extra power - use them wisely to create the reality you desire."
    },
    {
        text: "A day of celebration and joy. The stars bring reasons to be grateful and moments that lift your spirit. Take time to appreciate your achievements, big and small. Share your happiness with others - the universe rewards those who celebrate life's blessings."
    },
    {
        text: "Today's cosmic energy encourages exploration of the spiritual and metaphysical realms. You may feel drawn to meditation, prayer, or philosophical inquiry. Questions about life's purpose may surface, and answers may come through quiet contemplation. Trust in something greater than yourself."
    },
    {
        text: "A day of renewed energy and fresh inspiration. The stars support new projects, creative endeavors, and taking bold steps toward your dreams. You may feel a surge of motivation that propels you forward. Seize this momentum and take action on what matters most to you."
    },
    {
        text: "The universe today reminds you of the power of gratitude and appreciation. Focusing on what you're thankful for will attract more blessings into your life. This is a beautiful day for expressing love, sharing kindness, and acknowledging the good in yourself and others."
    },
    {
        text: "Today brings clarity about your life path and purpose. You may gain insights into your next steps or receive confirmation that you're on the right track. Trust the guidance you receive, whether it comes from within or through external signs. The universe is supporting your journey."
    },
    {
        text: "A day of completion and fulfillment. The stars support wrapping up projects, achieving goals, and celebrating accomplishments. This is also an excellent time for reflection - acknowledge how far you've come and prepare for the next chapter with gratitude and wisdom."
    },
    {
        text: "Today's celestial energy encourages balance between giving and receiving. The universe reminds you that both are essential for harmony. Be open to accepting help and blessings while also being generous with others. This creates a beautiful cycle of abundance and connection."
    }
];

const getGeneralHoroscope = () => {
    const dayOfMonth = new Date().getDate();
    const index = (dayOfMonth - 1) % generalHoroscopes.length;
    return generalHoroscopes[index];
};

const loadGeneralHoroscope = () => {
    const horoscopeText = document.getElementById('generalHoroscopeText');
    const horoscope = getGeneralHoroscope();
    
    horoscopeText.style.opacity = '0';
    setTimeout(() => {
        horoscopeText.textContent = horoscope.text;
        horoscopeText.style.opacity = '1';
    }, 300);
};

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
        button.innerHTML = `
            <i class="fas ${sign.icon}"></i>
            <span>${sign.name}</span>
            <span>${sign.symbol}</span>
        `;
        button.addEventListener('click', () => {
            button.classList.add('active');
            setTimeout(() => showDetailedHoroscope(sign), 200);
        });
        selector.appendChild(button);
    });
};

const createZodiacCard = (sign) => {
    const card = document.createElement('div');
    card.className = 'zodiac-card';
    
    const luckyNumbers = generateLuckyNumbers();
    
    card.innerHTML = `
        <div class="zodiac-header">
            <div class="zodiac-symbol">${sign.symbol}</div>
            <div class="zodiac-info">
                <h2>${sign.name}</h2>
                <p class="zodiac-dates">${sign.dates} • ${sign.element}</p>
            </div>
        </div>
        <p class="horoscope-text">Click to see today's horoscope and lucky numbers</p>
        <div class="lucky-numbers">
            ${luckyNumbers.map(num => `<span>${num}</span>`).join('')}
        </div>
    `;
    
    card.addEventListener('click', () => showDetailedHoroscope(sign));
    return card;
};

const getDailyHoroscope = async (sign) => {
    try {
        const response = await fetch(`https://freehoroscopeapi.com/api/v1/get-horoscope/daily?sign=${sign.toLowerCase()}`);
        const data = await response.json();
        
        if (data && data.data && data.horoscope) {
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
            <div class="sign-icon">
                <i class="fas ${sign.icon}"></i>
            </div>
            <div class="sign-title">
                <h2>${sign.name}</h2>
                <p>${sign.dates} • ${sign.element} • Ruled by ${sign.rulingPlanet}</p>
            </div>
        </div>
        
        <div class="horoscope-content">
            <div class="horoscope-section">
                <h3 class="section-title"><i class="fas fa-star"></i> Daily Overview</h3>
                <p>${horoscope.main}</p>
            </div>
            
            <div class="horoscope-section">
                <h3 class="section-title"><i class="fas fa-heart"></i> Love & Relationships</h3>
                <p>${horoscope.love}</p>
            </div>
            
            <div class="horoscope-section">
                <h3 class="section-title"><i class="fas fa-briefcase"></i> Career & Finances</h3>
                <p>${horoscope.career}</p>
            </div>
            
            <div class="horoscope-section">
                <h3 class="section-title"><i class="fas fa-heart-pulse"></i> Health & Wellness</h3>
                <p>${horoscope.health}</p>
            </div>
        </div>
        
        <div class="lucky-numbers-section">
            <h3 class="section-title"><i class="fas fa-clover"></i> Your Lucky Numbers Today</h3>
            <div class="lucky-numbers">
                ${luckyNumbers.map(num => `<span>${num}</span>`).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('detailedHoroscope').innerHTML = detailedHtml;
    horoscopeDisplay.classList.remove('hidden');
    horoscopeDisplay.classList.add('fade-in');
    zodiacSelection.style.display = 'none';
    zodiacGrid.style.display = 'none';
    horoscopeDisplay.scrollIntoView({ behavior: 'smooth' });
};

const hideDetailedHoroscope = () => {
    const horoscopeDisplay = document.getElementById('horoscopeDisplay');
    const zodiacSelection = document.getElementById('zodiacSelection');
    const zodiacGrid = document.getElementById('zodiacGrid');
    
    horoscopeDisplay.classList.add('hidden');
    zodiacSelection.style.display = 'block';
    zodiacGrid.style.display = 'grid';
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const init = () => {
    const currentDate = new Date();
    document.getElementById('currentDate').textContent = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    loadGeneralHoroscope();
    createSignSelector();

    const grid = document.getElementById('zodiacGrid');
    zodiacSigns.forEach(sign => {
        grid.appendChild(createZodiacCard(sign));
    });

    document.getElementById('backButton').addEventListener('click', hideDetailedHoroscope);
};

document.addEventListener('DOMContentLoaded', init);