const generalHoroscopes = [
    {
        text: "The celestial alignment today creates a harmonious symphony of planetary energies that strongly favor creative expression and meaningful communication. As Mercury forms a supportive aspect with Venus, you'll find that your words flow with unusual grace and authenticity, making this an ideal day for important conversations, collaborative projects, and sharing your ideas with confidence. The stars encourage you to express yourself authentically and connect with others on a deeper, more soulful level. Trust your intuition when making decisions, especially those involving partnerships or group endeavors, and don't hesitate to reach out to old friends or explore new interests that spark your curiosity. This is also an excellent time for artistic pursuits, writing, and any form of self-expression that allows you to share your unique perspective with the world."
    },
    {
        text: "The cosmic energy today supports profound personal growth and deep self-reflection. As the Moon moves through its introspective phase, you'll feel drawn inward to contemplate your life's purpose and examine your emotional landscape. This is an ideal time for meditation, journaling, or any solitary activity that helps you understand your inner self and uncover hidden motivations. The universe is sending you subtle messages through coincidences, synchronicities, and recurring patterns in your daily life - pay close attention to these signs as they may contain important guidance for your journey ahead. Trust the whispers of your intuition and the clarity that emerges from quiet contemplation."
    },
    {
        text: "A powerful surge of motivation and determination fills the air today, creating an optimal moment for tackling ambitious projects and starting something new. Mars provides the drive and courage needed to overcome obstacles, while its harmonious aspect with Saturn ensures that your efforts will be well-founded and sustainable. This is the perfect moment to take initiative on projects that align with your most ambitious goals and long-term vision. Your confidence is exceptionally high today, and others are likely to be inspired by your enthusiasm and natural leadership abilities. Balance your forward momentum with thoughtful planning and strategic thinking to ensure that your bold actions yield lasting results. Take charge of situations that require your unique strengths and don't be afraid to step outside your comfort zone."
    },
    {
        text: "Today's planetary alignment emphasizes relationships, emotional connections, and the importance of harmony in partnerships. Venus in its exalted position brings blessings to all matters of the heart, making this an ideal day for deep conversations, resolving conflicts, and strengthening bonds with loved ones. In business and professional matters, collaboration brings significantly better results than working alone, so seek out partnerships and team-based projects. Nurture your connections by listening with empathy and practicing vulnerability, which will create deeper trust and intimacy. This energy favors compromise, finding win-win solutions, and approaching relationships with a spirit of cooperation rather than competition."
    },
    {
        text: "The stars today bring remarkable clarity and fresh perspectives to complex situations that have been clouding your judgment. Mercury's beneficial aspect with Jupiter expands your mental horizons and helps you see the big picture in matters that have previously seemed confusing or overwhelming. This clarity enables you to make decisions with enhanced confidence and strategic foresight. This is also an excellent day for learning, research, and expanding your knowledge base - particularly in subjects that relate to your career goals or personal interests. Trust the insights that come to you suddenly and use this clarity to communicate your ideas effectively to others."
    },
    {
        text: "A day of exceptional balance and harmony awaits you as the celestial bodies align to bring equilibrium between work and play, action and rest, and giving and receiving. The Libra-ruled sky today encourages fairness in all interactions and finding middle ground in disputes. You may find yourself feeling unusually centered, peaceful, and in tune with your authentic self. Use this stable, harmonious energy to organize different areas of your life, set intentions for the coming weeks, and make decisions that honor your need for both productivity and self-care. Appreciate this rare moment of cosmic equilibrium and let it inspire you to create sustainable routines that serve your highest good."
    },
    {
        text: "Today's cosmic energy stimulates innovation, creative problem-solving, and out-of-the-box thinking in ways that can transform your approach to challenges. Uranus brings unexpected insights and revolutionary ideas that can help you see old problems from entirely new angles. This is an excellent day for brainstorming sessions, creative projects requiring original solutions, and networking with forward-thinking individuals who share your passion for innovation. Embrace the changes that come your way and welcome new perspectives even when they initially seem unconventional. Your ability to think differently today can lead to breakthrough discoveries and solutions that have eluded you until now."
    },
    {
        text: "The universe encourages patience, perseverance, and unwavering faith in your journey today. Saturn's disciplined influence means that progress may seem slower than you'd like, but each small, consistent effort you make will create lasting, solid foundations for future success. Use this time to strengthen your career, relationships, and personal goals through steady, reliable work rather than seeking quick fixes. Trust that everything is unfolding in divine timing and that the universe is supporting your growth even when the pace feels frustrating. This is an ideal day for long-term planning, skill-building, and making progress on projects that matter deeply to you."
    },
    {
        text: "A day of heightened intuition, psychic awareness, and deep spiritual connection. The Moon's mystical energy amplifies your inner knowing and makes you more receptive to subtle messages from the universe. You may receive profound insights, sudden inspirations, or vivid dreams that guide your next steps. Pay attention to gut feelings, recurring thoughts that seem to carry deeper meaning, and synchronicities in your daily life. This is an ideal day for self-care practices, healing work, energy healing, connecting with your higher self through meditation or prayer, and exploring your spiritual gifts. Trust the wisdom that comes through your intuition and honor your sensitivity as a superpower rather than a weakness."
    },
    {
        text: "Today brings opportunities for adventure, exploration, and stepping beyond your familiar boundaries in ways that can catalyze personal growth. Jupiter's expansive energy encourages you to embrace the unknown with confidence and optimism. Whether it's exploring a new physical location, trying a novel activity, or considering a different perspective on life, embrace it with an open heart and curious mind. Growth happens most profoundly outside your comfort zone, and the universe is supporting you in expanding your horizons. This is a perfect day for travel, learning new skills, or taking calculated risks that could lead to exciting discoveries. The world is full of possibilities waiting for you to discover."
    },
    {
        text: "The celestial alignment today favors practical matters, organization, and bringing structure to chaos. Mercury's trine with Saturn enhances your ability to plan effectively, attend to important details, and create systems that support your long-term success. This is an excellent day for planning budgets, organizing your workspace, creating schedules, or tackling tasks that have been on your mind. Your mind is exceptionally sharp and focused, making it easier to see both the big picture and the intricate small steps needed to achieve your objectives. Use this clarity to break down large projects into manageable actions and establish routines that increase your productivity and reduce stress."
    },
    {
        text: "Today brings gentle, nurturing energy that encourages self-compassion, care for others, and creating cozy, supportive environments. Venus in Cancer brings emotional sensitivity and a desire to comfort both yourself and those around you. You may feel drawn to nourishing foods, creating comfortable spaces, and engaging in heartwarming conversations that foster connection and understanding. Allow yourself to slow down and appreciate the simple, often overlooked pleasures of life. Kindness is your superpower today - practice it generously toward yourself and others. This energy supports self-care routines, nurturing relationships through quality time, and creating a home or work environment that feels safe and welcoming."
    },
    {
        text: "A burst of creative energy makes today ideal for artistic pursuits, innovative problem-solving, and imaginative thinking that can transform your approach to challenges. The planets align to support original ideas and help you see situations through a fresh, creative lens. Don't be afraid to take calculated risks in your creative work or to propose unconventional solutions - the universe supports innovation today. Trust your unique vision and allow your imagination to guide your decisions. This is an excellent day for starting new projects, collaborating with other creative minds, or expressing yourself through any artistic medium. Your ability to think outside conventional boundaries can lead to breakthrough discoveries and recognition."
    },
    {
        text: "Today's planetary movements emphasize clarity in communication, the importance of speaking truth, and the transformative power of honest dialogue. Mercury helps you articulate your thoughts with precision and persuade others with logic and grace. Important conversations may arise that lead to resolutions, deeper understanding, and the clearing of misunderstandings. Speak your truth with kindness and integrity, even when it's difficult. Honesty paves the way to positive change and builds trust in your relationships. Listen to others with an open mind and be willing to engage in constructive dialogue that moves everyone forward together."
    },
    {
        text: "The stars today bring beautiful balance between inspired action and thoughtful reflection, between giving and receiving, and between working and resting. This harmonious energy supports all areas of your life, creating flow where activities proceed smoothly and relationships feel more connected. You may find that things come together more easily and that your efforts yield better results with less struggle. Appreciate this moment of balance and peace, and let it inspire you to create sustainable rhythms that honor both your need for productivity and your need for renewal. This is a perfect day for collaborative work, enjoying leisure time, and finding sweet spots in your schedule that serve your well-being."
    },
    {
        text: "A day of new beginnings, fresh perspectives, and the courage to release what no longer serves your highest good. The cosmic energy encourages you to let go of outdated patterns, limiting beliefs, or situations that drain your energy. Whether it's releasing a project that's run its course, a relationship dynamic that no longer benefits you, or a mindset that holds you back, trust that the universe is guiding you toward what aligns with your soul's journey. Embrace the new opportunities and perspectives that emerge from this release. This is a powerful time for setting intentions, making affirmations, or starting completely fresh in any area of your life where you seek transformation and growth."
    },
    {
        text: "Today brings heightened sensitivity, emotional intelligence, and a deeper capacity for empathy and understanding. The Moon's influence amplifies your awareness of others' feelings and your ability to connect on an emotional level. This is a powerful day for empathy, healing work, counseling others, or navigating complex emotional dynamics with grace. Honor your emotions and express them constructively - your sensitivity allows you to read between the lines in any interaction and provide comfort to those who need it. In relationships, practice deep listening and offer support that comes from genuine understanding. This energy favors forgiveness, emotional healing, and strengthening bonds through vulnerability and authentic sharing."
    },
    {
        text: "The celestial alignment today supports leadership, ambitious goal-setting, and taking initiative in your professional life and personal pursuits. Mars provides the assertive energy needed to take charge of situations and pursue your long-held goals with determination. Your energy levels are exceptionally high, and others are likely to look to you for guidance, direction, and inspiration. Lead with confidence and compassion - this combination creates powerful influence. Focus on projects that align with your authentic purpose and make bold moves toward your objectives. This is an ideal day for career advancement, starting new ventures, or asserting yourself in situations where your leadership is needed."
    },
    {
        text: "A day of community, collaboration, and the joy of working together toward shared goals and dreams. The stars encourage you to connect with like-minded individuals, form partnerships, and contribute your unique talents to collective efforts. Networking, teamwork, and group activities bring extra luck and satisfaction to your endeavors. Together, you can achieve more than you ever could alone. This is an excellent day for joining groups, participating in community projects, or simply spending quality time with people who share your values and vision. The energy supports building bridges and creating win-win outcomes through cooperation."
    },
    {
        text: "Today brings opportunities for healing, forgiveness, and the liberating practice of letting go of emotional baggage and old patterns that no longer serve you. The universe supports releasing grudges, unresolved conflicts, or attachments to outcomes that are beyond your control. This is a powerful day for therapy, spiritual cleansing, or simply taking time to reflect and consciously release what you've been holding onto. Free yourself to move forward unencumbered by the weight of the past. This release creates space for new opportunities, healthier relationships, and a lighter spirit. Trust the process of letting go and know that each release brings you closer to your true self."
    },
    {
        text: "The cosmic energy today emphasizes wisdom, learning, expanding your knowledge base, and sharing your understanding with others. Jupiter's benevolent influence makes this an excellent day for education, teaching, mentoring, or any activity that expands your horizons. You may feel drawn to study, read, or explore new subjects that fascinate you. Growth through education is highly favored - pursue certifications, take courses, or dive deep into topics that align with your career goals or personal interests. This is also a perfect day for teaching others, writing, or documenting what you've learned. Your knowledge and experience have value - share them generously with those who can benefit from your wisdom."
    },
    {
        text: "A day of transformation, deep change, and the opportunity to reinvent yourself in alignment with cosmic cycles. The stars support letting go of old to make space for the new. You may feel called to make significant life decisions, change career paths, or shift in your fundamental beliefs or lifestyle. Trust your intuition and have faith that these shifts are aligned with your soul's journey and highest good. This transformational energy supports major life changes, spiritual awakening, or any profound shift in how you approach your existence. Embrace the change rather than resisting it - the universe is conspiring in your favor to elevate you to your next level of consciousness and experience."
    },
    {
        text: "Today brings optimism, enthusiasm, and a radiant positive energy that can attract good fortune and favorable circumstances into your life. The Sun's harmonious aspects create an atmosphere of hope and possibility. Your positive attitude will act as a magnet for opportunities, supportive relationships, and beneficial outcomes. The universe encourages you to look on the bright side, expect good things, and maintain an attitude of gratitude even in the face of challenges. Spread joy and enthusiasm wherever you go - your energy is contagious and will uplift those around you. This is an excellent day for starting new ventures with confidence, socializing with optimism, or pursuing goals with unwavering faith in positive outcomes."
    },
    {
        text: "The celestial alignment today supports practical manifestation, setting powerful intentions, and the magic of bringing your desires into reality through focused thought and inspired action. This is an ideal day for visualization practices, affirmations, or any work with the law of attraction. Your thoughts and words have extra power - use them wisely to create the reality you desire. Focus on what you want to create rather than what you fear. Take inspired action on your dreams and watch as the universe conspires to support your aspirations. This energy favors goal-setting, planning, and the practical steps that bridge the gap between vision and reality. Trust in your ability to manifest and take bold, concrete actions toward your dreams."
    },
    {
        text: "A day of celebration, joy, and gratitude for the blessings and achievements in your life. The stars bring reasons to be grateful and moments that lift your spirit and remind you of your progress. Take time to appreciate your achievements, both big and small - each represents a step forward on your journey. Share your happiness with others - the universe rewards those who celebrate life's blessings and spread positivity. This is an excellent day for social gatherings, expressing gratitude, or simply enjoying the fruits of your hard work. Let your joy be infectious and use this celebratory energy to strengthen bonds with loved ones and inspire those around you with your positive example."
    },
    {
        text: "Today's cosmic energy encourages exploration of spiritual and metaphysical realms, deep contemplation, and connection with universal wisdom. The Moon in mystical houses brings heightened awareness of unseen dimensions and facilitates access to ancient knowledge through meditation, prayer, or philosophical inquiry. Questions about life's purpose, the nature of reality, and your soul's journey may surface with greater clarity. Answers may come through quiet contemplation, dreams, or synchronicities that carry deep meaning. Trust in something greater than yourself and allow your spiritual curiosity to guide you toward profound truths. This is a powerful day for spiritual practices, energy healing, or any activity that deepens your connection to the divine."
    },
    {
        text: "A day of renewed energy, fresh inspiration, and the momentum to carry forward important projects and dreams. The stars support new endeavors, creative pursuits, and taking bold steps toward your aspirations. You may feel a surge of motivation that propels you forward and makes previously daunting tasks seem manageable. Seize this momentum and take decisive action on what matters most to you. This is an excellent day for starting something new, recommitting to stalled projects, or pushing through obstacles that have been slowing your progress. Trust the wave of fresh energy and use it to create positive change in your life. Your initiative today will be rewarded."
    },
    {
        text: "The universe today reminds you of the transformative power of gratitude and appreciation in attracting more blessings into your life. Focusing deeply on what you're thankful for creates a magnetic field that draws similar energies and opportunities toward you. This is a beautiful day for expressing love, sharing kindness, and acknowledging the good in yourself and others. Practice gratitude consciously and watch as your life begins to reflect your positive focus. What you appreciate expands - the universe loves to shower you with more of the same. Create a gratitude practice, even a simple one, and commit to it with consistency. Your thankful heart becomes a powerful magnet for abundance, joy, and meaningful connections with others."
    },
    {
        text: "Today brings clarity about your life path, soul purpose, and confirmation that you're moving in the right direction. You may gain profound insights into your next steps, receive validation of your choices, or feel a deep sense of being on track with your destiny. The stars confirm that your efforts are aligned with cosmic timing and that the universe is supporting your journey. Trust the guidance you receive, whether it comes from within as intuitive knowing or through external signs and synchronicities. The universe is conspiring in your favor to accelerate your progress and remove obstacles from your path. This is an excellent day for making important decisions with confidence, knowing that you're being guided toward your highest good."
    },
    {
        text: "A day of completion, fulfillment, and the satisfaction of achieving significant goals and bringing important chapters to a meaningful close. The stars support wrapping up projects successfully, achieving long-sought objectives, and celebrating accomplishments large and small. This is also an excellent time for reflection - acknowledge how far you've come, the lessons learned, and the growth experienced along the way. Take pride in your achievements without arrogance, and use this completion energy as a springboard for your next chapter. Prepare for what comes next with gratitude and wisdom gained from your experiences."
    },
    {
        text: "Today's celestial energy encourages balance between giving and receiving, creating harmonious flow of energy, resources, and support. The universe reminds you that both generosity and receptivity are essential for creating sustainable abundance and healthy relationships. Be open to accepting help, blessings, and love from others with grace, while also being generous with your time, talents, and resources. This creates a beautiful cycle of abundance that benefits everyone involved. In practical matters, consider how you can contribute to your community while maintaining healthy boundaries. This balanced approach to life attracts reciprocal support and ensures that your needs are also met when you genuinely give to others."
    }
];
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

const getGeneralHoroscope = (dayOffset = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + dayOffset);
    const dayOfMonth = date.getDate();
    const index = (dayOfMonth - 1) % generalHoroscopes.length;
    return {
        text: generalHoroscopes[index].text,
        date: date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }),
        dayOffset: dayOffset
    };
};

const loadGeneralHoroscope = (dayOffset = 0) => {
    try {
        const horoscopeText = document.getElementById('generalHoroscopeText');
        const horoscopeTitle = document.getElementById('generalHoroscopeTitle');
        const horoscope = getGeneralHoroscope(dayOffset);
        
        const titles = {
            '-1': "Yesterday's Cosmic Energy",
            '0': "Today's Cosmic Energy",
            '1': "Tomorrow's Cosmic Energy"
        };
        
        if (horoscopeTitle && titles[dayOffset.toString()]) {
            horoscopeTitle.textContent = titles[dayOffset.toString()];
        }
        
        if (horoscopeText && horoscope.text) {
            horoscopeText.style.opacity = '0';
            setTimeout(() => {
                horoscopeText.textContent = horoscope.text;
                horoscopeText.style.opacity = '1';
            }, 300);
        }
    } catch (error) {
        console.error('Error loading general horoscope:', error);
    }
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
            setTimeout(() => showDetailedHoroscope(sign, 0), 200);
        });
        selector.appendChild(button);
    });
};

const createZodiacCard = (sign) => {
    const card = document.createElement('div');
    card.className = 'zodiac-card';
    
    card.innerHTML = `
        <div class="zodiac-symbol">${sign.symbol}</div>
        <div class="zodiac-info">
            <h2>${sign.name}</h2>
            <p class="zodiac-dates">${sign.dates}<br>${sign.element}</p>
        </div>
    `;
    
    card.addEventListener('click', () => showDetailedHoroscope(sign, 0));
    return card;
};

const getDailyHoroscope = async (sign, dayOffset = 0) => {
    try {
        const date = new Date();
        date.setDate(date.getDate() + dayOffset);
        const dateStr = date.toISOString().split('T')[0];
        
        const signIndex = zodiacSigns.findIndex(s => s.name.toLowerCase() === sign.toLowerCase());
        const generalHoroscopeIndex = (date.getDate() + dayOffset - 1 + 31) % generalHoroscopes.length;
        const baseHoroscope = generalHoroscopes[generalHoroscopeIndex % generalHoroscopes.length];
        
        const response = await fetch(`https://freehoroscopeapi.com/api/v1/get-horoscope/daily?sign=${sign.toLowerCase()}&date=${dateStr}`);
        const data = await response.json();
        
        if (data && data.data && data.horoscope) {
            return {
                main: data.data.horoscope,
                love: dayOffset === 0 
                    ? `Today brings passionate encounters and deep emotional connections for ${sign}. Focus on meaningful relationships and honest communication.`
                    : dayOffset === -1
                        ? `Yesterday brought opportunities for personal growth related to ${sign}. Reflect on those insights.`
                        : `Tomorrow opens doors to new opportunities and romantic connections for ${sign}. Be open to new encounters.`,
                career: dayOffset === 0
                    ? `Professional opportunities emerge through your natural leadership as ${sign}. Take initiative on projects that align with your ambitious goals.`
                    : dayOffset === -1
                        ? `Efforts in your career laid groundwork for today's opportunities as ${sign}. Reflect on progress and build on your strengths.`
                        : `Career advancement is favored for ${sign}. Stay proactive and seek out new challenges.`,
                health: dayOffset === 0
                    ? `Channel your abundant energy into physical activities. Balance intensity with proper rest and recovery.`
                    : dayOffset === -1
                        ? `Physical activities set the stage for today's vitality as ${sign}. Continue your wellness routine.`
                        : `Perfect timing for health improvements and self-care activities for ${sign}.`
            };
        }
        
        const signSpecificHoroscope = {
            main: baseHoroscope.text.replace(/Today/g, dayOffset === -1 ? 'Yesterday' : dayOffset === 1 ? 'Tomorrow' : 'Today').replace(/brings/g, dayOffset === -1 ? 'brought' : dayOffset === 1 ? 'brings' : 'brings'),
            love: dayOffset === 0 
                    ? `Today brings passionate encounters and deep emotional connections. Focus on meaningful relationships and honest communication as ${sign}.`
                    : dayOffset === -1
                        ? `Yesterday brought opportunities for strengthening connections through honest and heartfelt communication as ${sign}. Reflect on those insights.`
                        : `Tomorrow brings opportunities for romantic connections. Be open to new encounters as ${sign}.`,
            career: dayOffset === 0
                    ? `Professional opportunities emerge through your natural leadership as ${sign}. Take initiative on projects that align with your ambitious goals.`
                    : dayOffset === -1
                        ? `Yesterday's work experiences prepared you for today's challenges. Apply those lessons well as ${sign}.`
                        : `Career growth opportunities emerge. Be ready to seize them as ${sign}.`,
            health: dayOffset === 0
                    ? `Take care of your physical and mental well-being. Balance work with relaxation and self-care.`
                    : dayOffset === -1
                        ? `Yesterday's health practices contributed to today's vitality. Maintain your wellness routine as ${sign}.`
                        : `Tomorrow is ideal for health improvements and self-care activities as ${sign}.`
        };
        
        return signSpecificHoroscope;
    } catch (error) {
        console.error('Error fetching horoscope:', error);
        const signIndex = zodiacSigns.findIndex(s => s.name.toLowerCase() === sign.toLowerCase());
        const generalHoroscopeIndex = (date.getDate() + dayOffset - 1 + 31) % generalHoroscopes.length;
        const baseHoroscope = generalHoroscopes[generalHoroscopeIndex % generalHoroscopes.length];
        
        const signSpecificHoroscope = {
            main: baseHoroscope.text.replace(/Today/g, dayOffset === -1 ? 'Yesterday' : dayOffset === 1 ? 'Tomorrow' : 'Today').replace(/brings/g, dayOffset === -1 ? 'brought' : dayOffset === 1 ? 'brings' : 'brings'),
            love: dayOffset === 0 
                    ? `Today brings passionate encounters and deep emotional connections. Focus on meaningful relationships and honest communication as ${sign}.`
                    : dayOffset === -1
                        ? `Yesterday brought opportunities for strengthening connections through honest and heartfelt communication as ${sign}. Reflect on those insights.`
                        : `Tomorrow brings opportunities for romantic connections. Be open to new encounters as ${sign}.`,
            career: dayOffset === 0
                    ? `Professional opportunities emerge through your natural leadership as ${sign}. Take initiative on projects that align with your ambitious goals.`
                    : dayOffset === -1
                        ? `Yesterday's work experiences prepared you for today's challenges. Apply those lessons well as ${sign}.`
                        : `Career growth opportunities emerge. Be ready to seize them as ${sign}.`,
            health: dayOffset === 0
                    ? `Take care of your physical and mental well-being. Balance work with relaxation and self-care.`
                    : dayOffset === -1
                        ? `Yesterday's health practices contributed to today's vitality. Maintain your wellness routine as ${sign}.`
                        : `Tomorrow is ideal for health improvements and self-care activities as ${sign}.`
        };
        
        return signSpecificHoroscope;
    }
};
        }
        
        return {
            main: dayOffset === 0
                ? 'Today brings opportunities for personal growth and meaningful connections.'
                : dayOffset === -1
                    ? 'Yesterday brings opportunities for personal development. Reflect on those insights.'
                    : 'Tomorrow opens doors to new opportunities and connections.',
            love: dayOffset === 0
                ? 'Focus on communication and building strong relationships through honesty and trust.'
                : dayOffset === -1
                    ? 'Relationships offer valuable insights. Build on those strong foundations.'
                    : 'New romantic opportunities may arise. Stay open to meaningful connections.',
            career: dayOffset === 0
                ? 'Professional development is favored. Your skills and talents are in high demand.'
                : dayOffset === -1
                    ? 'Work experiences provide valuable lessons for current challenges. Apply them well.'
                    : 'Career growth opportunities emerge. Be ready to seize them.',
            health: dayOffset === 0
                ? 'Take care of your physical and mental well-being. Balance work with relaxation and self-care.'
                : dayOffset === -1
                    ? 'Health practices strengthen your vitality. Continue your wellness routine.'
                    : 'Perfect timing for health improvements and self-care activities.'
        };
    } catch (error) {
        console.error('Error fetching horoscope:', error);
        return {
            main: dayOffset === 0
                ? 'Today brings opportunities for personal growth and meaningful connections.'
                : dayOffset === -1
                    ? 'Chances for personal development were available. Reflect on those insights today.'
                    : 'Doors to new opportunities and connections open up.',
            love: dayOffset === 0
                ? 'Focus on communication and building strong relationships through honesty and trust.'
                : dayOffset === -1
                    ? 'Relationships provided insights that remain relevant. Build on those foundations.'
                    : 'New romantic opportunities may arise tomorrow. Stay open to connections.',
            career: dayOffset === 0
                ? 'Professional development is favored. Your skills and talents are in high demand.'
                : dayOffset === -1
                    ? 'Work experiences prepared you for current challenges. Use those lessons well.'
                    : 'Career growth opportunities emerge. Be ready to seize them.',
            health: dayOffset === 0
                ? 'Take care of your physical and mental well-being. Balance work with relaxation and self-care.'
                : dayOffset === -1
                    ? 'Health practices contribute to current vitality. Maintain your wellness routine.'
                    : 'Ideal for health improvements and self-care activities.'
        };
    }
};

let currentSelectedSign = null;
let currentDayOffset = 0;

const showDetailedHoroscope = async (sign, dayOffset = 0) => {
    currentSelectedSign = sign;
    currentDayOffset = dayOffset;
    
    const horoscopeDisplay = document.getElementById('horoscopeDisplay');
    const zodiacSelection = document.getElementById('zodiacSelection');
    const zodiacGrid = document.getElementById('zodiacGrid');
    
    const horoscope = await getDailyHoroscope(sign.name, dayOffset);
    const luckyNumbers = generateLuckyNumbers();
    
    const titles = {
        '-1': "Yesterday",
        '0': "Today",
        '1': "Tomorrow"
    };
    
    const detailedHtml = `
        <div class="day-navigation">
            <button class="day-tab ${dayOffset === -1 ? 'active' : ''}" data-day="-1"><i class="fas fa-chevron-left"></i> Yesterday</button>
            <button class="day-tab ${dayOffset === 0 ? 'active' : ''}" data-day="0">Today</button>
            <button class="day-tab ${dayOffset === 1 ? 'active' : ''}" data-day="1">Tomorrow <i class="fas fa-chevron-right"></i></button>
        </div>
        
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
                <h3 class="section-title"><i class="fas fa-star"></i> ${titles[dayOffset.toString()]} Overview</h3>
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
            <h3 class="section-title"><i class="fas fa-clover"></i> Your Lucky Numbers ${titles[dayOffset.toString()]}</h3>
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
    
    attachDayNavigationListeners(sign);
};

const attachDayNavigationListeners = (sign) => {
    const dayTabs = document.querySelectorAll('#horoscopeDisplay .day-tab');
    dayTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const clickedDayOffset = parseInt(tab.getAttribute('data-day'));
            
            if (clickedDayOffset === currentDayOffset) return;
            
            dayTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            showDetailedHoroscope(sign, clickedDayOffset);
        });
    });
};

const hideDetailedHoroscope = () => {
    const horoscopeDisplay = document.getElementById('horoscopeDisplay');
    const zodiacSelection = document.getElementById('zodiacSelection');
    const zodiacGrid = document.getElementById('zodiacGrid');
    
    currentSelectedSign = null;
    currentDayOffset = 0;
    
    horoscopeDisplay.classList.add('hidden');
    zodiacSelection.style.display = 'block';
    zodiacGrid.style.display = 'grid';
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const init = () => {
    try {
        const currentDate = new Date();
        const dateElement = document.getElementById('currentDate');
        if (dateElement) {
            dateElement.textContent = currentDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }

        loadGeneralHoroscope();
        createSignSelector();

        const grid = document.getElementById('zodiacGrid');
        if (grid) {
            zodiacSigns.forEach(sign => {
                grid.appendChild(createZodiacCard(sign));
            });
        }

        const backButton = document.getElementById('backButton');
        if (backButton) {
            backButton.addEventListener('click', hideDetailedHoroscope);
        }

        const dayTabs = document.querySelectorAll('.day-tab');
        dayTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                dayTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const dayOffset = parseInt(tab.getAttribute('data-day'));
                loadGeneralHoroscope(dayOffset);
            });
        });
    } catch (error) {
        console.error('Error initializing horoscope app:', error);
    }
};

document.addEventListener('DOMContentLoaded', init);
