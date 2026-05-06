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
        today: 'The cosmic energy today is charged with ambition and drive. You may feel an irresistible urge to take charge and lead others toward your vision. This is an excellent day for initiating new projects, especially those that require courage and decisive action. Your natural leadership qualities will be amplified, making it easier to inspire those around you.\n\nIn matters of the heart, your passionate nature draws others to you like moths to a flame. However, be mindful of being too impulsive in romantic decisions. Take time to consider the long-term impact of your actions. Career-wise, doors of opportunity are opening, but you must knock confidently and persistently.\n\nFinancial decisions made today will have lasting consequences, so choose wisely. Your innovative thinking could lead to breakthrough solutions to problems that have been troubling you. Trust your instincts when it comes to risk, but balance this with careful planning. The universe is aligning to support your boldest moves.',
        yesterday: 'Yesterday brought valuable lessons in patience and timing. You may have encountered situations where rushing ahead led to setbacks, teaching you the importance of strategic planning. Your resilience in the face of challenges was admirable and did not go unnoticed by those who matter.\n\nRelationship dynamics may have required some delicate navigation, and you handled them with increasing maturity. Financial matters that were weighing on your mind likely gained some clarity. Reflecting on these experiences will serve you well in future endeavors, as you now understand the value of preparation and thoughtful action.',
        tomorrow: 'Tomorrow promises to be a day of significant progress and achievement. The planetary alignment favors forward momentum in both personal and professional spheres. You may receive recognition for work you have been putting in tirelessly, which could open doors to even greater opportunities.\n\nYour social circle expands, bringing new connections that could prove invaluable. In romantic matters, honesty and direct communication will strengthen bonds. Creative projects undertaken now have excellent potential for success, so trust your artistic instincts. Financial outlook improves as long as you maintain the disciplined approach you have been cultivating.'
    },
    'Taurus': {
        today: 'Today brings a grounding energy that encourages you to focus on practical matters. Your innate sense of stability and reliability will be particularly valuable as others seek your guidance. This is an ideal time for organizing your affairs, both at home and in your workplace, creating order from chaos.\n\nFinancial matters look promising, especially regarding long-term investments. Your patience in waiting for the right moment to act is paying off. In relationships, your dependable nature makes you a pillar of strength for loved ones. However, be careful not to become too rigid in your thinking—flexibility can bring unexpected blessings.\n\nYour connection to nature and beauty is heightened today. Spending time outdoors or engaging with art could bring profound peace and inspiration. Career opportunities involving teamwork are favored, as your ability to collaborate harmoniously shines through.',
        yesterday: 'Your practical wisdom was tested yesterday, and you rose to the occasion admirably. Decisions made regarding finances showed remarkable foresight, setting a foundation for future stability. Your calm demeanor helped others navigate their own emotional turbulence.\n\nIn personal relationships, your loyalty and commitment were deeply appreciated by those close to you. Work challenges that seemed overwhelming at first became manageable through your methodical approach. This reflection on your strengths can boost your confidence moving forward, as you recognize the value you bring to every situation.',
        tomorrow: 'Romance and emotional connections take center stage tomorrow. The stars align to bring warmth and affection into your life, possibly from unexpected quarters. Your natural charm and sensuality will be particularly magnetic, drawing people toward you effortlessly.\n\nCreative endeavors flourish under tomorrow\'s celestial influence. Financial matters benefit from careful planning rather than impulsive action. Trust your intuition when it comes to investments, but seek expert advice for major decisions. Home and family matters bring joy and fulfillment—prioritize quality time with loved ones.'
    },
    'Gemini': {
        today: 'Your intellectual curiosity is at its peak today, driving you to seek knowledge and understanding from multiple angles. Communication flows exceptionally well, making this an excellent time for important conversations, negotiations, or expressing your ideas to others.\n\nSocial connections made today could lead to exciting opportunities down the line. Your adaptability allows you to navigate changing circumstances with grace. In romantic matters, playfulness and intellectual stimulation keep relationships fresh and engaging. However, be mindful not to overcommit—your energy, though abundant, has limits.\n\nCareer-wise, your quick thinking and problem-solving abilities are highly valued. Financial decisions benefit from gathering all available information before acting. Trust your versatile nature to handle whatever comes your way with creativity and wit.',
        yesterday: 'Your communication skills were put to the test yesterday, and you handled various interactions with remarkable finesse. The ability to see multiple perspectives helped resolve misunderstandings before they escalated. Social gatherings likely brought interesting conversations and new insights.\n\nWork tasks requiring multitasking were well within your capabilities. Your curious nature led to discovering information that could prove valuable. This day demonstrated your strength in connecting diverse ideas and people, a talent that continues to serve you well in all areas of life.',
        tomorrow: 'Social opportunities abound tomorrow as your natural charisma draws people toward you. Networking events, casual gatherings, or even chance meetings could lead to meaningful connections. Your witty and engaging conversation style makes you a sought-after companion and colleague.\n\nLearning something new or engaging in intellectual pursuits brings satisfaction. Career matters favor those who can communicate effectively and adapt to changing priorities. Financial information comes your way—pay attention to details and opportunities for growth. Romance benefits from honest and open expression of your feelings.'
    },
    'Cancer': {
        today: 'Your emotional sensitivity is heightened today, making you deeply attuned to the feelings of those around you. This empathic quality allows you to offer comfort and support precisely when it is needed most. Your intuition is especially sharp, guiding you in personal decisions with uncanny accuracy.\n\nHome and family matters take precedence, and you will find great fulfillment in nurturing your domestic space. However, be careful not to absorb others\' emotions too deeply—establish healthy boundaries. Financial decisions should be made with your long-term security in mind rather than immediate gratification.\n\nCreative and artistic pursuits bring emotional release and satisfaction. Career matters involving care, counseling, or any role requiring emotional intelligence are favored. Trust your gut feelings—they are your most reliable guide today.',
        yesterday: 'Your nurturing nature was a source of comfort for others yesterday. Family matters that seemed overwhelming became manageable through your patient approach. Your ability to create a welcoming environment did not go unnoticed by those who entered your space.\n\nEmotional intelligence helped navigate complex social dynamics. Work requiring attention to detail and care for others was particularly rewarding. Financial decisions made with consideration for loved ones\' needs proved wise. Yesterday showed how your sensitivity, when balanced with strength, becomes your greatest asset.',
        tomorrow: 'Self-care and emotional well-being take priority tomorrow. The cosmos encourages you to recharge your batteries through activities that bring inner peace. Time spent near water, in nature, or engaging in spiritual practices will be especially restorative.\n\nHome improvements or redecorating projects undertaken now have favorable outcomes. Financial matters benefit from careful consideration rather than rash action. Career moves that align with your values and need for security are favored. In relationships, your depth of feeling creates profound connections.'
    },
    'Leo': {
        today: 'Your natural radiance is amplified today, drawing attention and admiration wherever you go. Leadership opportunities present themselves, and your confidence in taking charge will inspire others to follow your vision. This is an excellent day for creative expression, public speaking, or any endeavor that puts you in the spotlight.\n\nRomantic matters are favored—your warmth and generosity make you irresistible to potential partners. However, ensure that your need for appreciation doesn\'t overshadow the needs of others. Financial investments made now, particularly those related to your passions or creative ventures, show strong potential for growth.\n\nYour charisma helps persuade others to your point of view. Career advancement comes through visibility and bold action. Trust your generous nature, but remember that true leadership also involves serving others\' needs. The universe rewards those who lead with both strength and heart.',
        yesterday: 'Your ability to inspire others was on full display yesterday. Leadership roles, whether formal or informal, brought out your best qualities. Creative projects flourished under your enthusiastic guidance, and others were motivated by your example.\n\nSocial interactions were marked by warmth and genuine interest in others. Romantic gestures, whether given or received, created meaningful moments. Your confidence in pursuing goals attracted positive attention. Yesterday demonstrated how your natural leadership, when combined with authenticity, creates lasting impact.',
        tomorrow: 'Recognition for your talents and efforts is coming your way tomorrow. The planetary alignment suggests that acknowledgment from superiors or public acclaim is highly likely. This validation opens doors to even greater opportunities and platforms for your abilities.\n\nCreative collaborations are especially favored—team up with others who complement your style. Financial gains come through channels that allow you to shine or showcase your leadership. Romantic relationships deepen through shared creative endeavors or grand romantic gestures. Step forward boldly and accept the praise you have earned.'
    },
    'Virgo': {
        today: 'Your analytical mind is exceptionally sharp today, making this an ideal time for detailed work, problem-solving, or any task requiring precision. You will notice patterns and details that others miss, giving you a significant advantage in planning and strategy.\n\nHealth and wellness routines benefit from your disciplined approach. Financial matters require careful review—organize your documents and track your spending meticulously. Relationships benefit from your practical advice and willingness to help others improve their situations.\n\nCareer tasks involving organization, quality control, or research are highly favored. Your ability to improve systems and processes will be recognized and appreciated. Trust your methodical nature, but allow yourself some flexibility—perfection, while admirable, should not paralyze progress.',
        yesterday: 'Your attention to detail prevented potential issues yesterday. Work tasks were completed with remarkable thoroughness, impressing supervisors and colleagues alike. Your ability to spot and fix small problems before they grew was invaluable.\n\nHelping others organize their lives or affairs brought satisfaction. Financial planning showed its worth as you made calculated decisions that will pay dividends. Relationships benefited from your practical approach to solving problems. Yesterday proved that your analytical skills, when applied with care for others, create lasting value.',
        tomorrow: 'Professional matters take center stage tomorrow, and your organizational skills will be in high demand. Opportunities to streamline processes or improve efficiency at work are likely to arise—and your contributions will be well-received. Financial documents, contracts, or important paperwork should be reviewed with your characteristic thoroughness.\n\nHealth routines benefit from optimization and consistency. Relationships strengthen through practical acts of service and reliability. Career advancement comes through demonstrated competence and attention to quality. Trust your ability to bring order to chaos—it is your superpower.'
    },
    'Libra': {
        today: 'Harmony and balance are the themes guiding your day. Your natural diplomatic skills are enhanced, making this an excellent time for resolving conflicts, negotiating agreements, or bringing people together. Your aesthetic sense is heightened, influencing decisions about style, beauty, and environment.\n\nPartnerships and collaborations are favored—seek out allies who share your vision. Romantic relationships benefit from open communication and mutual understanding. However, avoid people-pleasing at the expense of your own needs. Financial decisions should balance practicality with your desire for beauty and quality.\n\nSocial gatherings are likely to be pleasant and harmonious under your influence. Career matters involving mediation, counseling, or any role requiring fairness and justice are particularly favored. Trust your sense of beauty and harmony to guide your choices today.',
        yesterday: 'Your peacemaking abilities were valuable yesterday. Resolving conflicts between others came naturally to you, and your fair approach was appreciated by all parties involved. Creating balance in various aspects of life brought satisfaction.\n\nCollaborative work showed excellent results. Romantic partners valued your ability to see multiple perspectives. Financial decisions made with consideration for others\' needs proved wise. Your quest for harmony, while admirable, also requires asserting your own needs when necessary.',
        tomorrow: 'Relationships and partnerships move into the spotlight tomorrow. The stars favor romantic connections, deepening commitments, or meeting someone significant. Your natural charm and social grace make you particularly appealing in group settings.\n\nCollaborative projects have strong potential for success. Financial matters involving shared resources or partnerships are favored. Career opportunities come through networking and social connections. Balance your desire for harmony with the need to make decisions—sometimes taking a stand is necessary.'
    },
    'Scorpio': {
        today: 'Your intensity and transformative power are amplified today. This is a time of deep insight, where you can penetrate beneath surface appearances to understand hidden truths. Your investigative nature is particularly sharp, making this excellent for research, analysis, or uncovering secrets.\n\nEmotional experiences are profound—you feel things deeply and may experience powerful intuitive flashes. Financial matters involving transformation, such as investments or major purchases, are favored. However, avoid making decisions based on suspicion or mistrust without concrete evidence.\n\nCareer matters requiring strategic thinking or handling complex situations are favored. Your ability to regenerate and rise from challenges is remarkable. Trust your instincts—they are rarely wrong today—but balance this with the wisdom of experience before acting on major decisions.',
        yesterday: 'Your depth of understanding helped navigate complex emotional waters yesterday. Seeing beneath surface dynamics in relationships provided clarity that others missed. Strategic thinking at work resolved issues that had stumped others.\n\nFinancial research or investigation yielded valuable insights. Your ability to transform challenging situations into opportunities was evident. While intensity can be exhausting, yesterday showed how it can also be a powerful tool for growth and renewal when channeled constructively.',
        tomorrow: 'Transformation is the dominant theme tomorrow, and you are well-positioned to embrace positive change. Letting go of old patterns or relationships that no longer serve you will create space for new growth. Your regenerative powers are at their peak.\n\nFinancial investments or career changes made now have strong potential for long-term benefit. Emotional bonds deepen through authentic sharing and vulnerability. Trust in your ability to reinvent yourself—this is your time for renewal and rebirth.'
    },
    'Sagittarius': {
        today: 'Your adventurous spirit and optimism are at their peak today. This is an excellent time for expanding your horizons, whether through travel, education, or exploring new ideas. Your natural enthusiasm inspires others and attracts opportunities for growth and learning.\n\nPhysical activities and outdoor pursuits bring particular satisfaction. Your philosophical nature is heightened, making this a good time for reflection on life\'s bigger questions. Financial risks taken now should be calculated and aligned with your long-term vision.\n\nTeaching, mentoring, or sharing knowledge with others is especially favored. Career opportunities involving travel, international connections, or publishing are likely. Your ability to see the positive side of challenges helps you navigate obstacles with grace and humor.',
        yesterday: 'Your positive outlook helped navigate uncertainties yesterday. Approaching challenges as adventures rather than burdens led to creative solutions. Social interactions brought laughter and new perspectives that lightened heavy situations.\n\nLearning opportunities, whether formal or informal, were particularly rewarding. Your ability to inspire others through your example was noted. Financial decisions made with optimism and faith in the future showed wisdom. Your adventurous spirit, when balanced with practical planning, opens doors others might miss.',
        tomorrow: 'Expansion and growth characterize tomorrow\'s energy. New opportunities in education, travel, or publishing present themselves. Your natural wisdom and life experience make you a valuable resource for others seeking guidance.\n\nFinancial matters related to international affairs, higher education, or long-distance ventures are favored. Romantic connections may develop through shared interests in philosophy, travel, or spirituality. Career advancement comes through taking calculated risks and demonstrating your expertise. Embrace the journey—the universe supports your boldest explorations.'
    },
    'Capricorn': {
        today: 'Your disciplined and ambitious nature is powerfully supported today. Long-term goals that require patience and persistent effort move forward significantly. Your practical wisdom and ability to build solid foundations are especially valued in both personal and professional contexts.\n\nCareer matters involving authority, management, or strategic planning are favored. Financial decisions should be made with careful consideration of long-term implications rather than short-term gains. Your reputation for reliability and hard work continues to strengthen.\n\nRelationships benefit from your stability and commitment, though remember to express affection openly. Professional recognition for your achievements is likely. Trust your capacity for sustained effort—it builds the foundations others envy and respect.',
        yesterday: 'Your perseverance in the face of challenges was admirable yesterday. Long-term projects showed measurable progress through your consistent effort. Financial discipline prevented unnecessary expenses and strengthened your overall position.\n\nLeadership roles, whether formal or informal, brought out your best qualities. Others relied on your practical judgment and steady hand. Yesterday demonstrated how ambition, tempered with wisdom and patience, creates lasting success and earns genuine respect.',
        tomorrow: 'Professional advancement and recognition are strongly favored tomorrow. Your dedication and hard work come to the attention of those in positions of authority. Career opportunities involving greater responsibility or leadership roles present themselves.\n\nFinancial matters related to building wealth, investments, or long-term security are auspicious. Relationships deepen through mutual respect and shared commitment to future goals. Your reputation for reliability opens doors that others find closed. Continue building—your solid foundation will support the structures you envision.'
    },
    'Aquarius': {
        today: 'Your innovative and forward-thinking mind operates at exceptional capacity today. Unique solutions to old problems emerge seemingly from nowhere. This is an ideal time for technological projects, group collaborations, or any endeavor requiring original thinking.\n\nHumanitarian impulses and concern for collective well-being are heightened. Social causes or community involvement bring particular satisfaction. Your ability to see the big picture helps others understand complex situations.\n\nFinancial matters benefit from unconventional approaches and thinking outside traditional frameworks. Career opportunities involving innovation, cutting-edge fields, or future-oriented projects are favored. Trust your eccentricity—it is often the source of your greatest breakthroughs.',
        yesterday: 'Your unique perspective was valuable yesterday. Seeing solutions others missed provided innovative approaches to problems. Group projects or collaborative efforts benefited from your ability to coordinate diverse ideas and people.\n\nTechnology or forward-thinking initiatives showed promise. Social interactions were marked by intellectual stimulation and progressive conversations. Financial decisions made with consideration of future trends rather than current fads proved wise. Your individuality, while sometimes challenging to explain, is precisely what makes you irreplaceable.',
        tomorrow: 'Networking and social connections bring significant opportunities tomorrow. Your progressive ideas find receptive audiences, particularly in group settings or online platforms. Collaborations with like-minded innovators have strong potential for groundbreaking results.\n\nFinancial matters related to technology, science, or future industries are favored. Career advancement comes through demonstrating your unique value proposition. Relationships benefit from intellectual stimulation and shared progressive values. Your vision for the future inspires others—embrace your role as a catalyst for change.'
    },
    'Pisces': {
        today: 'Your intuitive and compassionate nature flows with exceptional power today. Empathy allows you to understand others\' feelings without words, making this an ideal time for healing, counseling, or any role requiring emotional sensitivity. Artistic and creative pursuits bring profound fulfillment.\n\nSpiritual insights and dreams may carry important messages. Your connection to the collective unconscious is heightened, bringing awareness of trends before they manifest. Financial decisions should be guided by intuition but balanced with practical reality checks.\n\nHealing energies surround you—helping others recover or find peace is particularly favored. Career matters involving care, arts, or any compassionate service are blessed. Trust your deep knowing—it is your most reliable guide today.',
        yesterday: 'Your compassion provided comfort to many yesterday. Emotional support offered to others was deeply appreciated. Creative or artistic expressions came from a place of deep feeling and resonance.\n\nIntuitive insights proved valuable in navigating uncertain situations. Your ability to sense underlying currents in relationships helped maintain harmony. Work requiring empathy or artistic sensitivity was particularly rewarding. Your connection to something greater than yourself provided guidance and peace to others.',
        tomorrow: 'Spiritual and artistic pursuits are powerfully supported tomorrow. Creative projects begun now have exceptional potential to touch hearts and minds. Your dream life is active—pay attention to recurring symbols or messages as they may contain guidance.\n\nHealing and counseling work is especially favored. Financial matters benefit from intuitive decision-making balanced with practical wisdom. Relationships deepen through soulful connections and shared spiritual exploration. Career opportunities align with your compassionate nature and desire to serve others. Trust the flow—your intuition is your superpower.'
    }
};

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
            const horoscopeText = await getHoroscopeText('Aries', day);
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

function getHoroscopeText(sign, dayOffset) {
    const dayKey = dayOffset === -1 ? 'yesterday' : dayOffset === 1 ? 'tomorrow' : 'today';
    return horoscopeData[sign][dayKey];
}

function parseHoroscopeContent(horoscopeText) {
    const sections = {
        'career': '',
        'relationships': '',
        'finance': '',
        'health': '',
        'personal': ''
    };

    const paragraphs = horoscopeText.split('\n\n');
    
    paragraphs.forEach((paragraph, index) => {
        if (paragraph.toLowerCase().includes('career') || paragraph.toLowerCase().includes('professional') || paragraph.toLowerCase().includes('work') || paragraph.toLowerCase().includes('leadership')) {
            sections.career += paragraph + '\n\n';
        } else if (paragraph.toLowerCase().includes('romantic') || paragraph.toLowerCase().includes('relationship') || paragraph.toLowerCase().includes('love') || paragraph.toLowerCase().includes('partner')) {
            sections.relationships += paragraph + '\n\n';
        } else if (paragraph.toLowerCase().includes('financial') || paragraph.toLowerCase().includes('money') || paragraph.toLowerCase().includes('investment') || paragraph.toLowerCase().includes('career') || paragraph.toLowerCase().includes('invest')) {
            sections.finance += paragraph + '\n\n';
        } else if (paragraph.toLowerCase().includes('health') || paragraph.toLowerCase().includes('wellness') || paragraph.toLowerCase().includes('physical')) {
            sections.health += paragraph + '\n\n';
        } else {
            sections.personal += paragraph + '\n\n';
        }
    });

    return sections;
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

    const horoscopeText = getHoroscopeText(currentSign, currentDay);
    const sections = parseHoroscopeContent(horoscopeText);
    const textElement = display.querySelector('.horoscope-text');

    let contentHTML = '';
    
    if (sections.career) {
        contentHTML += `<h4 class="section-heading"><i class="fas fa-briefcase"></i> Career & Professional</h4>\n<p>${sections.career.trim()}</p>\n`;
    }
    if (sections.relationships) {
        contentHTML += `<h4 class="section-heading"><i class="fas fa-heart"></i> Love & Relationships</h4>\n<p>${sections.relationships.trim()}</p>\n`;
    }
    if (sections.finance) {
        contentHTML += `<h4 class="section-heading"><i class="fas fa-coins"></i> Finance & Money</h4>\n<p>${sections.finance.trim()}</p>\n`;
    }
    if (sections.health) {
        contentHTML += `<h4 class="section-heading"><i class="fas fa-heart-pulse"></i> Health & Wellness</h4>\n<p>${sections.health.trim()}</p>\n`;
    }
    if (sections.personal) {
        contentHTML += `<h4 class="section-heading"><i class="fas fa-star"></i> Personal Growth</h4>\n<p>${sections.personal.trim()}</p>\n`;
    }

    textElement.innerHTML = contentHTML;

    display.querySelectorAll('.day-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const day = parseInt(e.currentTarget.dataset.day);
            setDay(day);
        });
    });
}

async function loadGeneralHoroscope() {
    const horoscopeText = horoscopeData['Aries'].today;
    const sections = parseHoroscopeContent(horoscopeText);
    
    let contentHTML = '';
    
    if (sections.career) {
        contentHTML += `<h4 class="section-heading"><i class="fas fa-briefcase"></i> Career & Professional</h4>\n<p>${sections.career.trim()}</p>\n`;
    }
    if (sections.relationships) {
        contentHTML += `<h4 class="section-heading"><i class="fas fa-heart"></i> Love & Relationships</h4>\n<p>${sections.relationships.trim()}</p>\n`;
    }
    if (sections.finance) {
        contentHTML += `<h4 class="section-heading"><i class="fas fa-coins"></i> Finance & Money</h4>\n<p>${sections.finance.trim()}</p>\n`;
    }
    if (sections.health) {
        contentHTML += `<h4 class="section-heading"><i class="fas fa-heart-pulse"></i> Health & Wellness</h4>\n<p>${sections.health.trim()}</p>\n`;
    }
    if (sections.personal) {
        contentHTML += `<h4 class="section-heading"><i class="fas fa-star"></i> Personal Growth</h4>\n<p>${sections.personal.trim()}</p>\n`;
    }
    
    document.getElementById('generalHoroscopeText').innerHTML = contentHTML;
}

document.addEventListener('DOMContentLoaded', init);