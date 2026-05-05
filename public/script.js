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
        color: "#FADBD8",
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

const planetaryPositions = {
    Aries: [
        {
            sun: "15° Taurus - 2nd House",
            moon: "23° Capricorn - 10th House",
            mercury: "5° Taurus - 2nd House",
            venus: "28° Aries - 1st House",
            mars: "12° Cancer - 4th House",
            jupiter: "19° Cancer - 4th House",
            saturn: "8° Aries - 1st House",
            uranus: "27° Taurus - 2nd House",
            neptune: "2° Pisces - 12th House",
            pluto: "1° Aquarius - 11th House",
            aspects: "Sun trine Jupiter • Moon sextile Venus • Mars square Saturn"
        },
        {
            sun: "22° Taurus - 2nd House",
            moon: "18° Capricorn - 10th House",
            mercury: "12° Taurus - 2nd House",
            venus: "5° Taurus - 2nd House",
            mars: "25° Cancer - 4th House",
            jupiter: "24° Cancer - 4th House",
            saturn: "15° Aries - 1st House",
            uranus: "2° Gemini - 3rd House",
            neptune: "12° Pisces - 12th House",
            pluto: "8° Aquarius - 11th House",
            aspects: "Sun conjunct Venus • Moon trine Mars • Venus sextile Neptune"
        }
    ],
    Taurus: [
        {
            sun: "15° Taurus - 1st House",
            moon: "23° Capricorn - 9th House",
            mercury: "5° Taurus - 1st House",
            venus: "28° Taurus - 1st House",
            mars: "12° Cancer - 3rd House",
            jupiter: "19° Cancer - 3rd House",
            saturn: "8° Taurus - 1st House",
            uranus: "27° Taurus - 1st House",
            neptune: "2° Pisces - 11th House",
            pluto: "1° Aquarius - 10th House",
            aspects: "Sun trine Pluto • Moon sextile Mercury • Mars conjunct Jupiter"
        },
        {
            sun: "22° Taurus - 1st House",
            moon: "18° Capricorn - 9th House",
            mercury: "12° Taurus - 1st House",
            venus: "5° Taurus - 1st House",
            mars: "25° Cancer - 3rd House",
            jupiter: "24° Cancer - 3rd House",
            saturn: "15° Taurus - 1st House",
            uranus: "2° Gemini - 2nd House",
            neptune: "12° Pisces - 11th House",
            pluto: "8° Aquarius - 10th House",
            aspects: "Sun sextile Neptune • Venus trine Mars • Moon square Pluto"
        }
    ],
    Gemini: [
        {
            sun: "15° Taurus - 12th House",
            moon: "23° Capricorn - 8th House",
            mercury: "5° Taurus - 12th House",
            venus: "28° Taurus - 12th House",
            mars: "12° Cancer - 2nd House",
            jupiter: "19° Cancer - 2nd House",
            saturn: "8° Taurus - 12th House",
            uranus: "27° Taurus - 12th House",
            neptune: "2° Pisces - 10th House",
            pluto: "1° Aquarius - 9th House",
            aspects: "Mercury trine Saturn • Venus square Mars • Sun conjunct Uranus"
        },
        {
            sun: "22° Taurus - 12th House",
            moon: "18° Capricorn - 8th House",
            mercury: "12° Taurus - 12th House",
            venus: "5° Taurus - 12th House",
            mars: "25° Cancer - 2nd House",
            jupiter: "24° Cancer - 2nd House",
            saturn: "15° Taurus - 12th House",
            uranus: "2° Gemini - 1st House",
            neptune: "12° Pisces - 10th House",
            pluto: "8° Aquarius - 9th House",
            aspects: "Moon sextile Sun • Venus trine Pluto • Mercury square Neptune"
        }
    ],
    Cancer: [
        {
            sun: "15° Taurus - 11th House",
            moon: "23° Capricorn - 7th House",
            mercury: "5° Taurus - 11th House",
            venus: "28° Taurus - 11th House",
            mars: "12° Cancer - 1st House",
            jupiter: "19° Cancer - 1st House",
            saturn: "8° Taurus - 11th House",
            uranus: "27° Taurus - 11th House",
            neptune: "2° Pisces - 9th House",
            pluto: "1° Aquarius - 8th House",
            aspects: "Moon trine Jupiter • Sun sextile Mars • Venus opposite Pluto"
        },
        {
            sun: "22° Taurus - 11th House",
            moon: "18° Capricorn - 7th House",
            mercury: "12° Taurus - 11th House",
            venus: "5° Taurus - 11th House",
            mars: "25° Cancer - 1st House",
            jupiter: "24° Cancer - 1st House",
            saturn: "15° Taurus - 11th House",
            uranus: "2° Gemini - 12th House",
            neptune: "12° Pisces - 9th House",
            pluto: "8° Aquarius - 8th House",
            aspects: "Sun trine Venus • Mars sextile Neptune • Moon square Uranus"
        }
    ],
    Leo: [
        {
            sun: "15° Taurus - 10th House",
            moon: "23° Capricorn - 6th House",
            mercury: "5° Taurus - 10th House",
            venus: "28° Taurus - 10th House",
            mars: "12° Cancer - 12th House",
            jupiter: "19° Cancer - 12th House",
            saturn: "8° Taurus - 10th House",
            uranus: "27° Taurus - 10th House",
            neptune: "2° Pisces - 8th House",
            pluto: "1° Aquarius - 7th House",
            aspects: "Sun conjunct Uranus • Venus trine Mars • Moon sextile Saturn"
        },
        {
            sun: "22° Taurus - 10th House",
            moon: "18° Capricorn - 6th House",
            mercury: "12° Taurus - 10th House",
            venus: "5° Taurus - 10th House",
            mars: "25° Cancer - 12th House",
            jupiter: "24° Cancer - 12th House",
            saturn: "15° Taurus - 10th House",
            uranus: "2° Gemini - 11th House",
            neptune: "12° Pisces - 8th House",
            pluto: "8° Aquarius - 7th House",
            aspects: "Mars conjunct Jupiter • Venus square Saturn • Sun trine Neptune"
        }
    ],
    Virgo: [
        {
            sun: "15° Taurus - 9th House",
            moon: "23° Capricorn - 5th House",
            mercury: "5° Taurus - 9th House",
            venus: "28° Taurus - 9th House",
            mars: "12° Cancer - 11th House",
            jupiter: "19° Cancer - 11th House",
            saturn: "8° Taurus - 9th House",
            uranus: "27° Taurus - 9th House",
            neptune: "2° Pisces - 7th House",
            pluto: "1° Aquarius - 6th House",
            aspects: "Mercury trine Pluto • Venus sextile Jupiter • Moon square Mars"
        },
        {
            sun: "22° Taurus - 9th House",
            moon: "18° Capricorn - 5th House",
            mercury: "12° Taurus - 9th House",
            venus: "5° Taurus - 9th House",
            mars: "25° Cancer - 11th House",
            jupiter: "24° Cancer - 11th House",
            saturn: "15° Taurus - 9th House",
            uranus: "2° Gemini - 10th House",
            neptune: "12° Pisces - 7th House",
            pluto: "8° Aquarius - 6th House",
            aspects: "Sun sextile Mars • Venus conjunct Mercury • Moon trine Neptune"
        }
    ],
    Libra: [
        {
            sun: "15° Taurus - 8th House",
            moon: "23° Capricorn - 4th House",
            mercury: "5° Taurus - 8th House",
            venus: "28° Taurus - 8th House",
            mars: "12° Cancer - 10th House",
            jupiter: "19° Cancer - 10th House",
            saturn: "8° Taurus - 8th House",
            uranus: "27° Taurus - 8th House",
            neptune: "2° Pisces - 6th House",
            pluto: "1° Aquarius - 5th House",
            aspects: "Venus trine Uranus • Sun square Pluto • Mars sextile Saturn"
        },
        {
            sun: "22° Taurus - 8th House",
            moon: "18° Capricorn - 4th House",
            mercury: "12° Taurus - 8th House",
            venus: "5° Taurus - 8th House",
            mars: "25° Cancer - 10th House",
            jupiter: "24° Cancer - 10th House",
            saturn: "15° Taurus - 8th House",
            uranus: "2° Gemini - 9th House",
            neptune: "12° Pisces - 6th House",
            pluto: "8° Aquarius - 5th House",
            aspects: "Moon trine Venus • Jupiter sextile Neptune • Mercury square Mars"
        }
    ],
    Scorpio: [
        {
            sun: "15° Taurus - 7th House",
            moon: "23° Capricorn - 3rd House",
            mercury: "5° Taurus - 7th House",
            venus: "28° Taurus - 7th House",
            mars: "12° Cancer - 9th House",
            jupiter: "19° Cancer - 9th House",
            saturn: "8° Taurus - 7th House",
            uranus: "27° Taurus - 7th House",
            neptune: "2° Pisces - 5th House",
            pluto: "1° Aquarius - 4th House",
            aspects: "Mars conjunct Pluto • Venus sextile Uranus • Sun trine Saturn"
        },
        {
            sun: "22° Taurus - 7th House",
            moon: "18° Capricorn - 3rd House",
            mercury: "12° Taurus - 7th House",
            venus: "5° Taurus - 7th House",
            mars: "25° Cancer - 9th House",
            jupiter: "24° Cancer - 9th House",
            saturn: "15° Taurus - 7th House",
            uranus: "2° Gemini - 8th House",
            neptune: "12° Pisces - 5th House",
            pluto: "8° Aquarius - 4th House",
            aspects: "Sun sextile Jupiter • Moon trine Mars • Venus square Neptune"
        }
    ],
    Sagittarius: [
        {
            sun: "15° Taurus - 6th House",
            moon: "23° Capricorn - 2nd House",
            mercury: "5° Taurus - 6th House",
            venus: "28° Taurus - 6th House",
            mars: "12° Cancer - 8th House",
            jupiter: "19° Cancer - 8th House",
            saturn: "8° Taurus - 6th House",
            uranus: "27° Taurus - 6th House",
            neptune: "2° Pisces - 4th House",
            pluto: "1° Aquarius - 3rd House",
            aspects: "Jupiter trine Sun • Venus square Mars • Mercury sextile Saturn"
        },
        {
            sun: "22° Taurus - 6th House",
            moon: "18° Capricorn - 2nd House",
            mercury: "12° Taurus - 6th House",
            venus: "5° Taurus - 6th House",
            mars: "25° Cancer - 8th House",
            jupiter: "24° Cancer - 8th House",
            saturn: "15° Taurus - 6th House",
            uranus: "2° Gemini - 7th House",
            neptune: "12° Pisces - 4th House",
            pluto: "8° Aquarius - 3rd House",
            aspects: "Moon trine Venus • Uranus sextile Neptune • Sun conjunct Pluto"
        }
    ],
    Capricorn: [
        {
            sun: "15° Taurus - 5th House",
            moon: "23° Capricorn - 1st House",
            mercury: "5° Taurus - 5th House",
            venus: "28° Taurus - 5th House",
            mars: "12° Cancer - 7th House",
            jupiter: "19° Cancer - 7th House",
            saturn: "8° Taurus - 5th House",
            uranus: "27° Taurus - 5th House",
            neptune: "2° Pisces - 3rd House",
            pluto: "1° Aquarius - 2nd House",
            aspects: "Saturn trine Venus • Sun sextile Moon • Mars square Uranus"
        },
        {
            sun: "22° Taurus - 5th House",
            moon: "18° Capricorn - 1st House",
            mercury: "12° Taurus - 5th House",
            venus: "5° Taurus - 5th House",
            mars: "25° Cancer - 7th House",
            jupiter: "24° Cancer - 7th House",
            saturn: "15° Taurus - 5th House",
            uranus: "2° Gemini - 6th House",
            neptune: "12° Pisces - 3rd House",
            pluto: "8° Aquarius - 2nd House",
            aspects: "Venus conjunct Mercury • Jupiter trine Mars • Neptune sextile Pluto"
        }
    ],
    Aquarius: [
        {
            sun: "15° Taurus - 4th House",
            moon: "23° Capricorn - 12th House",
            mercury: "5° Taurus - 4th House",
            venus: "28° Taurus - 4th House",
            mars: "12° Cancer - 6th House",
            jupiter: "19° Cancer - 6th House",
            saturn: "8° Taurus - 4th House",
            uranus: "27° Taurus - 4th House",
            neptune: "2° Pisces - 2nd House",
            pluto: "1° Aquarius - 1st House",
            aspects: "Uranus trine Sun • Moon square Venus • Mars sextile Jupiter"
        },
        {
            sun: "22° Taurus - 4th House",
            moon: "18° Capricorn - 12th House",
            mercury: "12° Taurus - 4th House",
            venus: "5° Taurus - 4th House",
            mars: "25° Cancer - 6th House",
            jupiter: "24° Cancer - 6th House",
            saturn: "15° Taurus - 4th House",
            uranus: "2° Gemini - 5th House",
            neptune: "12° Pisces - 2nd House",
            pluto: "8° Aquarius - 1st House",
            aspects: "Sun sextile Neptune • Venus trine Pluto • Mercury square Saturn"
        }
    ],
    Pisces: [
        {
            sun: "15° Taurus - 3rd House",
            moon: "23° Capricorn - 11th House",
            mercury: "5° Taurus - 3rd House",
            venus: "28° Taurus - 3rd House",
            mars: "12° Cancer - 5th House",
            jupiter: "19° Cancer - 5th House",
            saturn: "8° Taurus - 3rd House",
            uranus: "27° Taurus - 3rd House",
            neptune: "2° Pisces - 1st House",
            pluto: "1° Aquarius - 12th House",
            aspects: "Neptune trine Venus • Sun sextile Mars • Moon conjunct Uranus"
        },
        {
            sun: "22° Taurus - 3rd House",
            moon: "18° Capricorn - 11th House",
            mercury: "12° Taurus - 3rd House",
            venus: "5° Taurus - 3rd House",
            mars: "25° Cancer - 5th House",
            jupiter: "24° Cancer - 5th House",
            saturn: "15° Taurus - 3rd House",
            uranus: "2° Gemini - 4th House",
            neptune: "12° Pisces - 1st House",
            pluto: "8° Aquarius - 12th House",
            aspects: "Venus square Mars • Sun trine Jupiter • Mercury sextile Neptune"
        }
    ]
};

const horoscopes = {
    Aries: [
        {
            main: "The Sagittarius Moon aspects Chiron before entering Capricorn, which means you're in a powerful period for personal growth. Reflect on your aspirations and recognize if you need to grow a bit. Don't kid yourself when Neptune stirs confusion. Balance your dreams with practical thinking to make sure they don't unravel. If you find yourself comparing with peers, it might generate self-doubt while Mercury squares Pluto. Focus on your most valuable qualities instead of others' achievements. The nodes of fate offer levity later tonight, helping you combat negative thoughts. Release fear so you can plan for your future with a clear and optimistic mind. This Moon placement in your adventure house (9th) is pushing you to explore new possibilities and take risks, while the Mercury-Pluto square challenges your thinking patterns. Meanwhile, Mars in Cancer creates emotional intensity that needs careful channeling. With Saturn in Aries also active, you'll feel driven to prove yourself professionally.",
            love: "Your passionate nature shines bright today in romantic pursuits. If you're single, someone new might catch your eye. For those in relationships, take time to appreciate your partner's unique qualities. Venus in Aries amplifies your natural charm, which is making you especially attractive right now. Meanwhile, the Moon moving through your relationship sector (9th house) encourages you to seek meaningful emotional connections. With Mars in Cancer influencing your emotional responses, you might feel extra passionate and protective in love. The Cancer energy makes you more nurturing while Venus adds the spark of attraction.",
            career: "Leadership opportunities emerge naturally today. Trust your instincts when making decisions at work. Your innovative ideas could impress supervisors and colleagues alike. Saturn in Aries is strengthening your professional foundation, which gives you the discipline you need. Mars in Cancer's supportive aspect to Jupiter creates favorable conditions for taking initiative and demonstrating leadership abilities. Jupiter's position in your career house (4th) is expanding your professional horizons and bringing luck through collaborative efforts. This Jupiter-Mars connection in water signs creates an emotionally supportive work environment where your intuition helps you navigate office dynamics.",
            health: "Channel your abundant energy into physical activities that challenge you. Consider trying a new workout routine that builds both strength and endurance. Mars in Cancer is energizing your physical vitality, while the Moon-Neptune connection encourages holistic wellness practices that honor both body and spirit. However, watch for emotional overwhelm as the water signs intensify your sensitivity. The Mercury in Taurus position suggests grounding your energy through practical wellness routines that complement your naturally high stamina."
        },
        {
            main: "Today brings exciting opportunities for personal growth and development. Your natural leadership skills will be tested in a positive way, potentially opening doors to new responsibilities and recognition. Sun and Mercury in Taurus are grounding your energy in practical matters, which is making you feel more steady and thoughtful. Mars in Cancer's harmonious aspects are creating supportive conditions for your ambitious endeavors. The Moon's influence on your communication (3rd house) supports clear expression of your ideas. With these earth and water planets working together, you're finding balance between practical ambition and emotional intelligence. The Venus position in Taurus (2nd house) supports your ability to create beauty and harmony in your surroundings.",
            love: "Romantic energies are high today. Single Aries may encounter someone intriguing, while those in relationships might experience renewed passion. Open communication strengthens existing bonds. Venus in Taurus is creating stability in relationships, which helps you feel more secure. The Moon's position in your social sector enhances opportunities for meaningful connections with like-minded individuals. Mars in Cancer's gentle influence on love (5th house) creates protective and nurturing energy in your romantic life. The Taurus Venus energy adds sensuality while the Cancer Mars brings protective instincts to your love life.",
            career: "Professional advancement looks promising. Your enthusiasm and drive catch the attention of superiors. Don't be afraid to showcase your talents and propose innovative solutions to workplace challenges. Jupiter in Cancer is expanding opportunities in collaborative projects, while Saturn in Aries provides the discipline needed to turn your innovative ideas into tangible achievements. Mercury in Taurus's position in your finance house (2nd) supports methodical thinking about money matters. With the Moon in your 9th house of adventure, you're being called to explore new career paths through networking.",
            health: "Your vitality is strong, making it perfect for intense physical activities. Balance exercise with proper rest and nutrition to maintain optimal performance levels. Mars in Cancer is boosting your physical stamina, which is giving you extra energy. The supportive aspects between planets are encouraging you to establish sustainable wellness routines that serve you long-term. With the Moon in your health house (6th), you're more emotionally aware of how physical wellness affects your overall state of being. The Sun in Taurus encourages patience in building physical strength gradually."
        }
    ],
    Taurus: [
        {
            main: "You'll feel as if a weight has been lifted today, thanks to a sweet connection between Sagittarius Moon and Chiron. Don't be afraid to confront your demons, putting in effort to heal and move on. The Moon's debut in Capricorn offers glimmers of hope, and the universe may send opportunities your way. However, it might be best to pull back and review your options while Neptune is activated. Negative self-talk needs to be addressed when Mercury squares Pluto, but this process could get messy. Connect with peers who believe in your vision to improve morale once the nodes of fate activate tonight. The Moon's journey through your career and public reputation house (10th) is bringing clarity to professional matters, while the challenging Mercury-Pluto square is demanding deeper reflection on your financial and material concerns. With Saturn in Taurus, you have the discipline to make wise choices.",
            love: "Emotional stability in relationships becomes your focus today. Take time to nurture existing connections and be open to meaningful conversations with your partner. The Moon-Neptune connection is enhancing your emotional sensitivity, which makes you more attuned to your partner's feelings. Venus in Taurus's position in your 1st house encourages self-love that naturally attracts healthy relationships. The Taurus energy in your love sector (7th house) creates steady, sensual romantic energy. This Venus position gives you natural charm and the Moon adds emotional depth, creating a perfect balance for romantic expression.",
            career: "Financial prospects improve significantly today. Consider long-term investments over quick gains. Your practical approach to problem-solving earns respect in professional circles. Saturn in Taurus is providing stability in financial matters, which is helping you make more calculated decisions. Jupiter in Cancer's supportive aspect creates abundant opportunities for growth in your chosen field. This Jupiter-Saturn connection in earth signs helps you build lasting financial security through patient, methodical accumulation. The Taurus earth energy in your finance house (2nd) supports your natural ability to accumulate and manage resources wisely.",
            health: "Pay attention to your physical well-being by establishing consistent routines. Yoga or meditation could provide a perfect balance between physical and mental health. The Moon's movement through Capricorn is encouraging disciplined wellness practices, which aligns with your practical nature. The healing aspect between Chiron and the Moon supports recovery from any ongoing physical concerns. With Neptune in your 6th house of health, be mindful of how your imagination affects your physical wellness habits. The Capricorn Moon energy makes your health routines more structured and goal-oriented."
        },
        {
            main: "Financial stability is within reach as beneficial planetary alignments favor material security. Focus on long-term investments rather than seeking immediate returns. Your practical nature serves you well today, helping you make sound decisions about money and resources. Sun and Mercury in your 1st house are amplifying your Taurean qualities of patience and practicality, which is making you more grounded. Venus also in Taurus strengthens your natural talents for building lasting value and security. The combined earth energy from Sun, Mercury, Venus, and Saturn creates a very practical foundation for your day. This concentration of earth signs in your personal houses creates stability.",
            love: "Your romantic life experiences a harmonious phase today. Express your affection through quality time and thoughtful gestures. Single Taurus might find deep connections through shared values. Venus in Taurus is creating harmonious energy in your relationship sector, which is making your love life feel more stable and secure. The Moon's trine to Venus supports emotional fulfillment through nurturing connections. This Venus-Moon harmony in earth signs creates lasting romantic bonds. With the Sun and Mercury also in Taurus, your romantic expression is naturally sensual and grounded.",
            career: "Professional opportunities that align with your values appear today. Your reliability and dedication make you invaluable to your team. Consider taking on responsibilities that showcase your organizational skills. Saturn in Taurus is grounding your professional pursuits in reality, which is helping you build a solid foundation. Jupiter in Cancer's trine aspect is bringing expansion and recognition for your steady, methodical approach. This earth sign energy makes you patient and thorough in building your career path. With Jupiter in your career house (10th), professional recognition becomes more likely through your steady efforts.",
            health: "Embrace wellness activities that connect you with nature today. Gardening, hiking, or outdoor exercises could provide both physical benefits and mental rejuvenation. Venus in Taurus is encouraging pleasure through physical activities, which is making exercise feel more enjoyable. The stabilizing influence of Saturn supports establishing sustainable, long-term wellness habits. The Taurus connection in your health house (6th) makes your wellness practices a natural part of your daily routine. The earth energy from multiple Taurus placements makes your approach to health both sensual and practical."
        }
    ],
    Gemini: [
        {
            main: "Communication flows effortlessly today, with Mercury in harmonious aspect supporting your natural gift for expression. Your quick wit and adaptability are highlighted, making this an excellent day for networking, negotiations, and collaborative projects. The stars favor intellectual pursuits and social interactions that stimulate your mind. However, be mindful of spreading yourself too thin. Focus on prioritizing your commitments and giving full attention to what truly matters. Your versatility is a strength, but maintaining depth in your pursuits yields better results. The Mercury influence in your communication houses (3rd and 9th) makes networking and socializing particularly effective today.",
            love: "Romantic conversations spark new connections today. Your charm and wit attract admirers, which is making you especially charming right now. Existing relationships benefit from open and honest communication about feelings and desires. Venus's influence is enhancing your romantic expression, which is helping you connect on a deeper emotional level. The Venus position in your social sector (11th house) supports light, flirtatious romantic connections that showcase your Gemini wit and charm.",
            career: "Professional networking proves highly beneficial today. Your ability to adapt to different situations and people impresses colleagues and clients. Consider proposing innovative ideas at team meetings. Mercury's harmonious aspect is supporting your communication skills, which is making negotiations and collaborations flow more smoothly. With the Moon in your career house (10th), your ability to communicate ideas publicly is enhanced.",
            health: "Mental stimulation is essential for your well-being today. Engage in puzzles, learn new skills, or participate in intellectual discussions. Balance mental activity with physical movement. The intellectual stimulation you're feeling is supporting your overall mental health, while physical movement keeps you energized. The Gemini air energy makes your approach to wellness both intellectual and active."
        },
        {
            main: "New learning opportunities present themselves from unexpected sources today. Embrace knowledge and expand your horizons through diverse channels. Your curiosity is at its peak, making this an ideal time to explore subjects that have always interested you. The stars indicate favorable conditions for educational pursuits, whether formal or informal. Don't hesitate to seek out mentors or teachers who can guide your intellectual journey. The more you learn, the more doors will open for personal and professional growth. This is perfect time to satisfy your intellectual curiosity. The Mercury-Pluto square challenges your learning process but also makes you dig deeper into subjects.",
            love: "Social connections bring potential romantic developments today. Your playful nature attracts those who appreciate intellectual stimulation and meaningful conversations. You might meet someone through group activities or social events, as Mercury's position is enhancing your communication and wit in romantic contexts. The Venus in Taurus creates stability in love through shared pleasures and activities.",
            career: "Your adaptability and quick learning abilities become valuable assets in the workplace today. Take on projects that allow you to showcase your versatility and problem-solving skills. Your natural curiosity is opening doors to new knowledge and skills that can advance your career. With Jupiter in your education house (9th), learning new things brings expansion to your professional capabilities.",
            health: "Variety in your physical activities keeps you engaged and motivated today. Try mixing different types of exercise to prevent boredom and maintain enthusiasm for fitness. The mental stimulation from your intellectual pursuits is complementing your physical wellness, creating a balanced approach to health. The Gemini air energy makes your fitness routine more dynamic and varied."
        }
    ],
    Cancer: [
        {
            main: "Home and family matters bring comfort and security today. The nurturing Moon in your chart enhances your emotional sensitivity and intuition. Focus on creating a warm, supportive environment for yourself and your loved ones. This is an excellent time to strengthen family bonds through quality time and meaningful conversations. The stars also suggest that addressing emotional wounds from the past can lead to healing and closure. Trust your instincts when dealing with personal matters, as your intuition is particularly strong today. The Moon-ruled Cancer energy makes your home life especially peaceful and nurturing today.",
            love: "Your emotional intelligence deepens connections in romantic relationships today. Create intimate moments that foster trust and understanding. For singles, meeting someone through family or close friends is favored. The Moon's influence is making you more emotionally available for meaningful connections. Venus in Aries position in your social sector (11th house) creates passionate, dynamic romantic opportunities that excite your naturally nurturing nature.",
            career: "Your caring nature makes you a valuable team member today. Leadership opportunities that involve mentoring or supporting others emerge naturally. Your ability to understand others' needs is highly appreciated. Your intuition is guiding you to read people's emotions and respond appropriately. The Moon in your career house (10th) enhances your ability to manage workplace relationships with emotional intelligence.",
            health: "Emotional well-being directly impacts physical health today. Practice self-care routines that nurture your mind and body. Water-based activities like swimming could be particularly therapeutic. The Moon's nurturing energy is supporting emotional healing, which positively affects your physical wellness. The Cancer water sign energy makes your holistic approach to health especially effective today."
        },
        {
            main: "Your intuition is particularly strong today, guiding you through personal and professional decisions. Trust your gut feelings, especially when dealing with matters close to your heart. The stars suggest that paying attention to your inner voice will help you navigate complex situations with wisdom and grace. This is also an excellent time for emotional reflection and self-discovery. Consider journaling or meditation to connect more deeply with your inner thoughts and feelings. The Cancer influence from Moon and Neptune heightens your psychic awareness and emotional insights.",
            love: "Deep emotional connections become a priority today. Express your feelings openly and honestly with your partner. Single Cancers might find romance in familiar, comforting settings. Your sensitive nature is attracting partners who value emotional depth and nurturing qualities. The Moon position in your 7th house supports intimate, committed romantic relationships and family-oriented love.",
            career: "Your sensitivity to others' needs makes you an exceptional listener and problem-solver today. Use this gift to navigate workplace relationships and resolve conflicts diplomatically. Your intuition is helping you anticipate people's needs before they express them. The Neptune influence in your career house (6th) enhances your ability to handle work with compassion and understanding.",
            health: "Nurturing activities support your overall well-being today. Cooking nourishing meals, creating a peaceful living space, or spending time near water can restore balance and vitality. Your natural inclination toward self-care is supporting overall health and wellness practices. The Cancer water energy makes your approach to health both nurturing and protective. With multiple water-ruled planets (Moon and Neptune), your emotional state strongly influences your physical health."
        }
    ],
    Leo: [
        {
            main: "Your charisma is magnetic today, drawing people to you naturally. The Sun's influence in your chart enhances your leadership qualities and creative expression. Use your natural charm to inspire and lead others toward positive change. This is an excellent day for self-expression, whether through artistic pursuits, public speaking, or simply being authentically yourself. The stars favor activities that put you in the spotlight and allow you to showcase your unique talents and personality. The Sun-ruled Leo energy makes you the natural center of attention and creative vision.",
            love: "Romance blossoms as your confidence and warmth attract admirers today. Single Leos might meet someone special who appreciates their authenticity. Couples experience renewed passion and appreciation. The Sun in your 1st house boosts your romantic confidence and makes you especially attractive. With Mars in your 12th house of hidden desires, your romantic life takes on passionate intensity and depth.",
            career: "Creative projects receive favorable attention and recognition today. Your innovative ideas and enthusiastic approach impress supervisors and colleagues. Take on leadership roles that allow you to inspire others. The Sun's position in your creativity house (5th) enhances your ability to express yourself professionally. With Jupiter in your 11th house, your leadership gains recognition and expansion.",
            health: "Your vitality and energy levels are high today, perfect for physical activities that challenge and energize you. Consider dance, sports, or creative movement exercises. The Sun's energy is boosting your overall vitality and enthusiasm. The Leo fire sign energy makes your approach to fitness both powerful and playful. With the Sun and Mars both active, your physical stamina is exceptionally strong today."
        },
        {
            main: "Creative projects receive favorable attention and acclaim today. Showcase your talents without hesitation and let your true personality shine through in everything you do. The stars indicate that this is an excellent time to pursue artistic endeavors, performance opportunities, or any creative expression that brings you joy. Your confidence and natural leadership abilities are at their peak, making it easier to take calculated risks and step into the spotlight. Don't be afraid to let your passion guide your actions. This is your time to shine. The Sun in your 5th house supports creative self-expression while Jupiter expands your social recognition of your creative work.",
            love: "Your warm-hearted nature attracts romantic opportunities today. Express your love generously through grand gestures and thoughtful surprises. Existing relationships deepen as you share your authentic self. The Venus position in your romance sector (5th house) creates passionate, dramatic romantic moments. The Sun-Venus combination makes your love life especially vibrant and expressive.",
            career: "Recognition for your creative contributions is likely today. Your ability to inspire others becomes a valuable leadership quality. Consider mentoring colleagues or leading collaborative projects. The Sun's influence on your career makes you naturally authoritative and confident. With Jupiter in your 11th house expanding your network, your creative projects gain wider visibility and support.",
            health: "Physical activities that combine movement with creativity, such as dance or performance arts, provide excellent outlets for your abundant energy today. Your vitality is strong, making this the perfect time for expressive physical activities that align with your creative nature. The Sun's energy makes your approach to health both dynamic and disciplined. With the Sun and Venus both active, you're inspired to make fitness both beautiful and enjoyable."
        }
    ],
    Virgo: [
        {
            main: "Attention to detail pays off significantly today. Your meticulous approach to tasks and challenges will be greatly appreciated by those around you. The stars favor activities that require precision, analysis, and careful planning. This is an excellent time to tackle complex problems that others might find overwhelming. Your analytical mind and practical nature make you especially adept at breaking down difficult situations into manageable components. Trust your judgment when making decisions, as your careful consideration leads to successful outcomes. The Mercury-ruled Virgo energy makes your analytical skills especially sharp today.",
            love: "Your practical approach to relationships creates stability and trust today. Show love through acts of service and thoughtful attention to your partner's needs. Single Virgos might connect with someone who values reliability. The Mercury position in your 9th house of philosophy makes your approach to love more intellectual and thoughtful. The Virgo earth energy creates a caring, detail-oriented approach to romantic matters.",
            career: "Your organizational skills and attention to detail make you indispensable today. Projects that require careful planning and execution are favored. Consider proposing efficient systems that improve workplace productivity. The Mercury influence in your career house (6th) enhances your ability to analyze work processes and create efficient solutions. With Saturn in Virgo, your work ethic becomes even more structured and productive.",
            health: "Establishing health routines that combine physical care with mental discipline benefits you greatly today. Yoga, Pilates, or structured fitness programs align perfectly with your methodical nature. The Mercury energy supports your ability to track wellness details and create systematic health plans. The earth sign energy makes your approach to health both practical and organized."
        },
        {
            main: "Health and wellness take priority today, encouraging you to establish positive routines that benefit both body and mind. The stars suggest that focusing on self-care and creating healthy habits will have long-lasting positive effects. This is an excellent time to review your diet, exercise routine, and overall lifestyle choices. Small, consistent changes made today can lead to significant improvements in your overall well-being. Listen to your body's needs and honor them with appropriate care and attention. The Mercury-Neptune influence encourages holistic wellness approaches that address both physical and spiritual health.",
            love: "Demonstrate affection through practical support and helpful actions today. Your partner appreciates your thoughtful, problem-solving approach to relationship challenges. The Neptune position in your 7th house of partnerships adds a compassionate, intuitive dimension to your romantic expression. The Virgo detail-oriented nature shows love through service and attention to specifics.",
            career: "Your problem-solving abilities shine when faced with complex workplace challenges today. Analytical thinking and attention to detail help you identify solutions others might miss. The Mercury influence on your daily work (6th house) makes you exceptionally efficient and thorough. With Mercury in Virgo, your analytical mind is perfectly suited to diagnose and solve workplace problems systematically.",
            health: "Nutrition becomes a key focus today. Research healthy eating habits and meal planning that align with your body's needs. Consider consulting with nutritionists for personalized advice. The earth sign energy makes your dietary choices more grounded and sensible. The Virgo energy supports creating meal plans and tracking nutritional intake for optimal health."
        }
    ],
    Libra: [
        {
            main: "Balance and harmony are your focus today, guiding you toward seeking compromise in conflicts and finding middle ground in disagreements. Venus's influence enhances your natural diplomatic skills, making this an excellent time for negotiation and relationship building. The stars favor activities that promote peace, cooperation, and mutual understanding. Use your charm and tact to navigate tense situations and bring opposing viewpoints together. Your ability to see multiple perspectives becomes a valuable asset in both personal and professional relationships. The Venus-ruled Libra energy makes your social skills especially effective today.",
            love: "Your romantic nature seeks harmony and balance in relationships today. Create beautiful experiences with your partner, focusing on shared activities that bring joy and aesthetic pleasure. Venus's position in your 1st house supports romantic expression and personal magnetism. The Venus influence makes you especially charming and attractive in love. With the Moon in your 5th house, your emotional needs in romance become more pronounced and must be addressed through partnership.",
            career: "Partnerships and collaborations bring mutual benefits and success today. Your ability to work well with others and mediate conflicts becomes highly valued in professional settings. The Venus position in your career house (7th) supports working with others in creative or social capacities. With Jupiter in your 11th house, your professional networks expand and bring beneficial connections.",
            health: "Balance is key to your well-being today. Find equilibrium between work and rest, activity and relaxation. Activities like Tai Chi or gentle yoga promote both physical and mental harmony. The Venus energy supports creating beauty in all areas of life, including your health routines. The Libra air energy makes your wellness practices both social and balanced. With Venus in your 1st house, self-care becomes an important priority for maintaining overall health."
        },
        {
            main: "Partnerships bring mutual benefits and shared success today. Collaborate with others to achieve goals that might be challenging to accomplish alone. The stars indicate that working in teams or with trusted partners will lead to better results than going solo. Your natural ability to see different perspectives and find common ground makes you an excellent mediator and team player. Focus on building relationships based on mutual respect and understanding. The connections you strengthen now will prove valuable in the future. The Venus-Moon harmony supports relationship success in all areas.",
            love: "Shared experiences strengthen romantic bonds today. Plan activities that both partners enjoy equally. Your diplomatic nature helps navigate relationship challenges with grace and understanding. The Venus position in your 1st house makes your romantic life naturally beautiful and harmonious. With the Moon in your 7th house, your romantic partnerships benefit from emotional maturity and commitment.",
            career: "Collaborative projects thrive under your guidance today. Your ability to balance different opinions and find win-win solutions makes you an excellent team leader or partner. The Venus influence on your career supports creative collaborations and artistic partnerships. With Jupiter in your 11th house, your team projects gain support and expansion through collective effort.",
            health: "Engage in activities that promote balance and symmetry in your body and mind today. Partner sports or exercise routines that require coordination and cooperation align well with your energies. The Venus energy supports aesthetic wellness practices that make health both beautiful and balanced. The Libra emphasis on harmony extends to creating balanced, visually appealing fitness environments."
        }
    ],
    Scorpio: [
        {
            main: "Transformation is possible today as powerful planetary alignments support profound personal growth. Embrace change and let go of what no longer serves your highest good. The stars indicate that this is an excellent time for deep reflection, psychological exploration, and releasing old patterns. Your intensity and passion can be channeled into productive transformation rather than destructive behaviors. Trust your intuition when navigating complex emotional territory, as your instincts are especially sharp today. The Pluto-ruled Scorpio energy makes your transformative abilities particularly potent today.",
            love: "Your magnetic intensity attracts romantic interest today. Emotional depth and authenticity in relationships create powerful bonds. For singles, meeting someone who appreciates your passionate nature is favored. The Pluto position in your 4th house creates intense, transformative romantic experiences that go beyond the surface level. The Scorpio water energy makes your romantic life especially deep and meaningful.",
            career: "Your investigative skills and ability to uncover hidden truths become valuable assets today. Projects requiring research, analysis, or problem-solving benefit from your thorough approach. The Pluto influence in your career house (6th) supports strategic thinking and the ability to transform work situations. With Mars in your 9th house, your investigative abilities are enhanced with emotional insight.",
            health: "Emotional release activities support your well-being today. Consider journaling, therapy, or deep conversations that allow you to process and transform intense emotions constructively. The Pluto-Neptune combination in water signs supports deep psychological healing and emotional wellness. The Scorpio intensity makes your therapeutic work especially effective today."
        },
        {
            main: "Your investigative skills are sharp today, enabling you to dig deep and uncover hidden truths or solve mysteries. The stars favor activities that require research, analysis, and penetrating insight. Use this energy to tackle complex problems, whether in your personal life or professional endeavors. Your intuition is exceptionally strong, guiding you toward discoveries that others might miss. Don't be afraid to explore beneath the surface of situations to understand the deeper dynamics at play. The Pluto energy supports deep psychological investigation and transformation.",
            love: "Passionate connections deepen as you reveal your authentic self to your partner today. Emotional intimacy and trust strengthen through honest, vulnerable conversations. Your intense nature is creating powerful emotional bonds that transform relationships. The Pluto position in your 4th house brings depth and regeneration to romantic matters. This transformative energy supports soul-level connections that evolve over time.",
            career: "Your ability to see beyond surface-level information makes you invaluable in roles requiring strategic analysis today. Consider taking on projects that allow you to showcase your investigative talents. The Pluto influence supports your ability to research and implement fundamental changes. With Mercury in your 8th house, your investigative reports and strategic thinking are enhanced.",
            health: "Transformative practices like meditation, breathwork, or energy healing support your journey toward greater self-awareness and emotional balance today. The Pluto-Neptune water combination supports deep spiritual and psychological wellness work. The Scorpio ability to regenerate and transform extends to your overall health practices. The transformative Pluto energy supports complete renewal of old health patterns."
        }
    ],
    Sagittarius: [
        {
            main: "Adventure and exploration call to you today, encouraging you to step out of your comfort zone and try something new. The stars favor activities that expand your horizons, whether through travel, education, or intellectual pursuits. Your optimistic nature is heightened, making this an excellent time to pursue new experiences with enthusiasm. Don't be afraid to take calculated risks in pursuit of your goals. The universe supports your journey toward personal growth and discovery. Embrace the unknown with confidence and curiosity. The Jupiter-ruled Sagittarius energy makes your adventurous spirit especially strong today.",
            love: "Your adventurous spirit attracts those who share your love of exploration today. Plan exciting experiences with your partner, from spontaneous road trips to trying new cuisines together. The Jupiter position in your 7th house supports romantic expansion and joyful experiences. The Sagittarius fire energy adds enthusiasm and adventure to your love life.",
            career: "Opportunities for professional growth through travel or education appear today. Your enthusiasm and big-picture thinking inspire colleagues and impress supervisors. Consider presenting innovative ideas. The Jupiter influence in your career house (9th) supports international or higher education opportunities. With Mars in your 5th house, your pioneering abilities expand your professional horizons.",
            health: "Physical activities that involve exploration and movement energize you today. Hiking, outdoor sports, or trying new fitness routines align perfectly with your adventurous nature. The Jupiter energy supports physical expansion and trying new wellness approaches. The Sagittarius fire sign energy makes your fitness both dynamic and exploratory."
        },
        {
            main: "Optimism brings positive outcomes today as Jupiter's influence amplifies your natural hopeful outlook. Maintain a positive attitude and watch opportunities unfold before you. The stars suggest that your ability to see the bright side of situations will help you overcome challenges and attract favorable circumstances. This is an excellent time to set ambitious goals and believe in your ability to achieve them. Your enthusiasm is contagious, inspiring others around you to adopt a more positive perspective. The Jupiter-Sun connection in fire signs creates beneficial, energizing effects throughout your day.",
            love: "Your optimistic nature creates joyful romantic experiences today. Share laughter and adventure with your partner. Single Sagittarians might find romance through shared interests or group activities. The Jupiter position in your 7th house supports broadening your romantic horizons through travel and meeting new people. The Sagittarius spirit adds joy and expansiveness to your love life.",
            career: "Your visionary thinking and positive attitude open doors to new professional opportunities today. Don't hesitate to pitch big ideas that align with your values and long-term goals. The Jupiter influence supports your professional growth and expansion. With Jupiter in your 9th house, international or long-distance opportunities become more accessible. The Jupiter energy makes your career path naturally expansive and optimistic.",
            health: "Activities that combine physical movement with mental stimulation keep you engaged and motivated today. Consider sports that require strategy and skill development. The Jupiter energy supports your overall wellness through enthusiasm and positive thinking. The Sagittarius fire energy makes your health practices both adventurous and enjoyable. With Jupiter in your 3rd house, your intellectual engagement supports mental and physical well-being simultaneously."
        }
    ],
    Capricorn: [
        {
            main: "Career advancement is possible today as Saturn's influence strengthens your professional foundation. Your hard work and dedication are being recognized by those in positions of authority. The stars favor activities that demonstrate your reliability, ambition, and practical wisdom. This is an excellent time to take on additional responsibilities or propose projects that showcase your leadership potential. Your disciplined approach to achieving goals sets you apart from others who might lack your persistence and strategic thinking. The Saturn-ruled Capricorn energy makes your work ethic especially strong today.",
            love: "Your commitment and reliability strengthen romantic bonds today. Show love through consistent actions and building a stable future together. Single Capricorns might attract partners who value security and ambition. The Saturn position in your 4th house supports serious, committed romantic relationships. The Capricorn earth energy makes your approach to love steady and enduring.",
            career: "Professional recognition and advancement opportunities arise today. Your ability to create long-term strategic plans impresses supervisors. Consider taking on projects that demonstrate your leadership capabilities. The Saturn influence on your career house (10th) supports building your professional reputation systematically. With Jupiter in your 7th house, your professional ambitions gain long-term support and recognition.",
            health: "Structured fitness routines and disciplined health practices serve you well today. Establish sustainable habits that support your long-term physical and mental well-being goals. The Saturn energy supports methodical, long-term wellness approaches. The Capricorn earth energy makes your health practices both structured and persistent. With Saturn in your health house (6th), your daily routines become even more productive and health-oriented."
        },
        {
            main: "Practical planning leads to success today as Mercury and Saturn align to support your methodical approach to goal achievement. Set clear objectives and work systematically toward them with patience and persistence. The stars indicate that taking a strategic approach to challenges will yield the best results. Break down large goals into smaller, manageable steps and celebrate each milestone along the way. Your natural ability to see the big picture while attending to important details makes you especially effective at turning dreams into reality. The Mercury-Saturn earth connection creates very practical energy.",
            love: "Demonstrate love through practical support and building a secure future together today. Your partner appreciates your thoughtful, long-term approach to relationship building. The Saturn position in your 4th house supports lasting romantic commitments based on mutual responsibility. The Capricorn earth energy makes your romantic expression both reliable and devoted.",
            career: "Your strategic thinking and organizational skills become valuable assets in navigating complex workplace challenges today. Propose efficient systems that improve productivity and team effectiveness. The Saturn influence supports systematic work processes. With Mercury in your 10th house, your career planning and strategic thinking are enhanced. The earth sign energy makes your professional approach both methodical and thorough.",
            health: "Establish consistent health routines that balance physical activity with proper nutrition and rest today. Long-term planning for your health goals yields sustainable results. The Saturn energy supports disciplined wellness practices. The Capricorn earth energy makes your approach to health both practical and sustainable. With Saturn in your health house (6th), your body responds especially well to structured routines and disciplined practices."
        }
    ],
    Aquarius: [
        {
            main: "Innovation and originality are highlighted today as Uranus's influence sparks your unconventional thinking. Think outside the box and propose unique solutions to problems. The stars favor activities that allow you to express your individuality and challenge the status quo. Your progressive ideas and forward-thinking approach are especially valued in today's environment. Don't be afraid to stand out from the crowd and embrace your authentic self. The world needs your innovative perspective now more than ever. The Uranus-ruled Aquarius energy makes your inventive abilities especially potent today.",
            love: "Your unique personality attracts romantic interest today. Look for partners who appreciate your individuality and share your progressive values. Intellectual stimulation is key to romantic compatibility. The Uranus position in your 1st house supports unconventional, freedom-loving romantic connections. The Aquarius air energy makes your approach to love progressive and independent.",
            career: "Your innovative ideas and technological aptitude become valuable assets today. Consider proposing creative solutions to workplace challenges or leading projects that embrace new technologies. The Uranus influence on your career house (6th) supports innovative work approaches. With Saturn in your 1st house adding structure to your ideas, you can manifest original concepts practically.",
            health: "Unconventional fitness approaches might appeal to you today. Explore alternative wellness practices or cutting-edge health technologies that align with your forward-thinking nature. The Uranus energy supports breaking traditional health patterns and finding new wellness methods. The Aquarius air energy makes your fitness routines both unique and intellectually stimulating."
        },
        {
            main: "Humanitarian causes resonate deeply with you today, inspiring you to make a positive difference in the world. Consider volunteering your time or supporting worthy causes that align with your values. The stars suggest that your contribution to community or global efforts will be especially meaningful and impactful. Your idealistic nature and belief in collective progress can inspire others to join in creating positive change. Use your voice and influence to advocate for causes you believe in. The Uranus position in your 11th house supports group-oriented humanitarian work. The Aquarius vision for social progress makes you an effective change-maker today.",
            love: "Shared values and humanitarian interests create strong romantic connections today. Look for partners who share your vision for making the world a better place. Intellectual and emotional equality is essential in relationships. The Uranus position in your 11th house supports progressive, group-oriented romantic connections. The Aquarius idealism attracts partners who share your commitment to making the world better.",
            career: "Your progressive thinking and ability to see the bigger picture make you valuable in roles involving social impact or innovation today. Consider projects that align with your humanitarian values. The Uranus influence supports revolutionary approaches to traditional career structures. With Jupiter in your 11th house, your community-focused career gains widespread recognition.",
            health: "Group fitness activities or community wellness programs might appeal to your social nature today. Consider joining sports teams or exercise groups that combine physical activity with social connection. The Uranus energy supports collective wellness initiatives and group-based health activities. The Aquarius air energy makes your health approach both community-oriented and innovative."
        }
    ],
    Pisces: [
        {
            main: "Your empathy and compassion are your greatest strengths today, allowing you to connect deeply with others and offer meaningful support. The stars favor activities that involve helping, healing, and emotional connection. Your sensitivity to the feelings and needs of those around you makes you an exceptional friend, partner, and confidant. Use this gift to spread kindness and understanding in your interactions. Small acts of compassion can have ripple effects that create positive change in your community and beyond. The Neptune-ruled Pisces energy makes your intuitive and compassionate abilities especially strong today.",
            love: "Your compassionate nature creates deep, meaningful romantic connections today. Emotional intimacy and understanding strengthen bonds. Single Pisces might find romance through artistic or spiritual communities. The Neptune position in your 1st house supports spiritual, soulful romantic connections. The Pisces water energy makes your love life especially intuitive and compassionate.",
            career: "Your creativity and emotional intelligence become valuable assets in the workplace settings today. Roles involving healing, counseling, or artistic expression suit your natural talents perfectly. The Neptune influence on your career house (6th) supports work with imagination and emotional intelligence. With Jupiter in your 11th house, your artistic and healing abilities gain professional recognition.",
            health: "Water-based activities like swimming or water aerobics support your physical and emotional well-being today. Creative expression through art, music, or writing provides essential emotional release. The Neptune energy supports holistic wellness practices that connect physical, mental, and spiritual health. The Pisces water sign energy makes your approach to health both healing and fluid."
        },
        {
            main: "Your sensitivity to the emotional currents around you is heightened today. This makes you an exceptional listener and counselor, but be careful not to absorb others' negativity. The stars suggest that setting healthy emotional boundaries will allow you to help others without depleting your own energy. Trust your intuition when making decisions, as your inner guidance is particularly strong now. This is an excellent time for artistic expression, meditation, or spiritual practices that connect you with your deeper self. The Neptune influence in your 1st house enhances your psychic abilities and emotional intelligence.",
            love: "Deep emotional and spiritual connections define your romantic experiences today. Your intuitive nature helps you understand your partner's needs before they express them. Single Pisces might encounter someone who appreciates your depth and compassion. The Neptune position supports soulful, transcendent romantic experiences. The water sign energy makes your love life especially intuitive and emotionally profound.",
            career: "Your imagination and emotional intelligence make you valuable in creative or healing professions today. Consider artistic projects, counseling, or roles that require empathy and understanding. The Neptune influence enhances your ability to work with creativity and compassion. With Jupiter in your 11th house expanding your creative network, your artistic work reaches wider audiences.",
            health: "Emotional and spiritual wellness are particularly important today. Practices like meditation, yoga, or spending time near water can restore balance and clarity. Your sensitivity means you're affected by your environment, so create peaceful surroundings that support your well-being. The Neptune energy supports holistic healing practices that address mind, body, and spirit. The Pisces water sign energy makes your approach to health both intuitive and healing."
        }
    ]
};

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

const getDailyHoroscope = async (sign) => {
    try {
        const response = await fetch(`/api/horoscope/${sign.toLowerCase()}`);
        const data = await response.json();
        if (data.success) {
            return {
                main: data.data.horoscope,
                love: generateHoroscopeSection(sign, 'love'),
                career: generateHoroscopeSection(sign, 'career'),
                health: generateHoroscopeSection(sign, 'health')
            };
        } else {
            console.warn('API request failed, using fallback');
            return fallbackHoroscope(sign);
        }
    } catch (error) {
        console.error('Error fetching horoscope:', error);
        return fallbackHoroscope(sign);
    }
};

const generateHoroscopeSection = (sign, type) => {
    const sections = {
        love: {
            'Aries': 'Today brings passionate encounters and deep emotional connections. Your ruling planet Mars energizes romance, making this an excellent time for bold romantic gestures and meaningful conversations.',
            'Taurus': 'Love and harmony surround you today. Venus, your ruling planet, enhances beauty and pleasure in relationships. Create romantic moments through thoughtful gestures and quality time together.',
            'Gemini': 'Communication lights up your romantic life. Mercury\'s influence makes conversations sparkling and connections meaningful. Share your thoughts freely - someone special is listening.',
            'Cancer': 'Your emotional intelligence is heightened in love. The Moon\'s nurturing energy creates deep, intimate bonds. Trust your instincts when expressing affection to loved ones.',
            'Leo': 'Your magnetic charm attracts romantic attention. The Sun\'s presence makes you naturally radiant and confident in love matters. Let your heart lead - passion follows naturally.',
            'Virgo': 'Thoughtful gestures strengthen relationships today. Mercury\'s analytical approach helps you express love through acts of service and meaningful support. Show you care through practical kindness.',
            'Libra': 'Balance and harmony define your romantic energy. Venus brings diplomatic skills to relationships, creating peaceful partnerships and beautiful, balanced connections.',
            'Scorpio': 'Intensity and passion deepen love bonds today. Pluto\'s transformative energy brings emotional depth and powerful connections. Trust your powerful intuition in matters of the heart.',
            'Sagittarius': 'Adventure and optimism enhance romance. Jupiter expands your social circle and brings opportunities for exciting romantic experiences. Be open to spontaneous romantic encounters.',
            'Capricorn': 'Commitment and reliability strengthen love. Saturn\'s serious energy helps you build lasting, meaningful relationships through dedication and patient emotional investment.',
            'Aquarius': 'Innovation and originality attract unique partners. Uranus brings unconventional romantic energy - expect surprising and exciting connections that break from tradition.',
            'Pisces': 'Dreamy romance and emotional connections flourish. Neptune\'s mystical energy enhances intuition and brings soulful, transcendent love experiences. Trust your vivid imagination in love.'
        },
        career: {
            'Aries': 'Leadership opportunities emerge naturally today. Mars gives you the drive to take initiative and impress with bold, decisive actions. Your pioneering spirit is especially valued in professional settings.',
            'Taurus': 'Financial prospects improve with careful planning. Venus helps you build lasting value and material security. Patient, methodical work leads to significant professional gains.',
            'Gemini': 'Communication skills drive career success. Mercury enhances your ability to network, negotiate, and present ideas effectively. Your adaptability impresses supervisors and clients.',
            'Cancer': 'Emotional intelligence aids professional growth. Moon\'s nurturing energy makes you an exceptional team player. Your intuition helps read workplace dynamics accurately.',
            'Leo': 'Creative leadership shines in career today. Sun\'s presence commands attention and respect. Your natural charisma makes you an inspiring leader and confident presenter.',
            'Virgo': 'Attention to detail brings professional recognition. Mercury\'s analytical skills help you solve complex problems. Your methodical approach earns respect from colleagues and supervisors.',
            'Libra': 'Diplomatic skills advance career prospects. Venus helps you build valuable professional relationships and mediate conflicts successfully. Your balanced approach is highly valued.',
            'Scorpio': 'Investigative abilities reveal career opportunities. Pluto brings transformative energy - perfect for research, analysis, and uncovering hidden professional advantages.',
            'Sagittarius': 'Optimism opens new career paths. Jupiter expands your professional horizons and brings opportunities for growth, learning, and advancement through enthusiasm.',
            'Capricorn': 'Disciplined work ethic leads to success. Saturn strengthens your professional foundation. Your methodical approach to goal achievement earns recognition and long-term stability.',
            'Aquarius': 'Innovation drives career progress. Uranus brings unconventional ideas and technological aptitude. Your original thinking helps solve problems creatively and impressively.',
            'Pisces': 'Creativity and intuition guide career success. Neptune enhances imagination and emotional intelligence in professional settings. Trust your artistic and healing abilities.'
        },
        health: {
            'Aries': 'Channel abundant energy into challenging physical activities. Mars strengthens physical vitality - perfect for competitive sports or intense workouts that build stamina.',
            'Taurus': 'Sensory wellness practices bring balance. Venus encourages nurturing the body through massage, comfortable environments, and beauty routines that feel luxurious yet restorative.',
            'Gemini': 'Mental stimulation supports overall health. Mercury benefits intellectual wellness through puzzles, learning, and communication. Balance mental activity with regular physical movement.',
            'Cancer': 'Emotional wellness directly impacts physical health. Moon\'s nurturing energy supports healing through water-based activities, meditation, and creating peaceful, restorative environments.',
            'Leo': 'Vitality and enthusiasm energize physical activities. Sun boosts energy levels - perfect for expressive movement, dance, or competitive sports that showcase your natural radiance.',
            'Virgo': 'Health routines benefit from analytical planning. Mercury supports systematic wellness through careful nutrition tracking, structured exercise programs, and health monitoring apps.',
            'Libra': 'Balance is key to your well-being today. Venus encourages harmonious wellness through partner exercises, yoga, and activities that bring both beauty and health benefits.',
            'Scorpio': 'Transformative wellness practices support deep healing. Pluto brings regeneration energy - perfect for releasing old patterns, emotional release work, and powerful therapeutic activities.',
            'Sagittarius': 'Adventure and exploration boost physical vitality. Jupiter encourages trying new activities, outdoor sports, and wellness routines that feel expansive and joyful rather than restrictive.',
            'Capricorn': 'Structured health routines bring lasting results. Saturn supports disciplined wellness through consistent schedules, goal-oriented fitness, and methodical approaches to physical and mental health.',
            'Aquarius': 'Innovative wellness approaches suit your needs. Uranus brings unconventional fitness ideas, cutting-edge health technologies, and unique approaches to wellness that break from tradition.',
            'Pisces': 'Holistic wellness practices integrate mind and body. Neptune supports spiritual wellness through meditation, energy healing, water therapy, and practices that connect physical, mental, and emotional health.'
        }
    };
    return sections[type][sign] || `${sign} - Focus on ${type} today with careful attention to details and thoughtful action.`;
};

const fallbackHoroscope = (sign) => {
    const today = new Date().getDate();
    const horoscopeList = horoscopes[sign];
    return {
        main: horoscopeList[today % horoscopeList.length],
        love: generateHoroscopeSection(sign, 'love'),
        career: generateHoroscopeSection(sign, 'career'),
        health: generateHoroscopeSection(sign, 'health')
    };
};

const getPlanetaryPositions = (sign) => {
    const today = new Date().getDate();
    const positionsList = planetaryPositions[sign];
    return positionsList[today % positionsList.length];
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

const showDetailedHoroscope = async (sign) => {
    const horoscopeDisplay = document.getElementById('horoscopeDisplay');
    const zodiacSelection = document.getElementById('zodiacSelection');
    const zodiacGrid = document.getElementById('zodiacGrid');
    
    const horoscope = await getDailyHoroscope(sign.name);
    const luckyNumbers = generateLuckyNumbers();
    const planets = getPlanetaryPositions(sign.name);
    
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
        
        <div class="planetary-positions">
            <h3 class="section-title" style="color: ${sign.color};"><i class="fas fa-globe"></i> Planetary Positions Today</h3>
            <div class="planets-grid">
                <div class="planet-card">
                    <div class="planet-name">☀️ Sun</div>
                    <div class="planet-position">${planets.sun}</div>
                </div>
                <div class="planet-card">
                    <div class="planet-name">🌙 Moon</div>
                    <div class="planet-position">${planets.moon}</div>
                </div>
                <div class="planet-card">
                    <div class="planet-name">☿ Mercury</div>
                    <div class="planet-position">${planets.mercury}</div>
                </div>
                <div class="planet-card">
                    <div class="planet-name">♀ Venus</div>
                    <div class="planet-position">${planets.venus}</div>
                </div>
                <div class="planet-card">
                    <div class="planet-name">♂ Mars</div>
                    <div class="planet-position">${planets.mars}</div>
                </div>
                <div class="planet-card">
                    <div class="planet-name">♃ Jupiter</div>
                    <div class="planet-position">${planets.jupiter}</div>
                </div>
                <div class="planet-card">
                    <div class="planet-name">♄ Saturn</div>
                    <div class="planet-position">${planets.saturn}</div>
                </div>
                <div class="planet-card">
                    <div class="planet-name">♅ Uranus</div>
                    <div class="planet-position">${planets.uranus}</div>
                </div>
                <div class="planet-card">
                    <div class="planet-name">♆ Neptune</div>
                    <div class="planet-position">${planets.neptune}</div>
                </div>
                <div class="planet-card">
                    <div class="planet-name">♇ Pluto</div>
                    <div class="planet-position">${planets.pluto}</div>
                </div>
            </div>
            <div class="aspects-info" style="background: ${sign.color}20;">
                <h4><i class="fas fa-asterisk"></i> Key Aspects</h4>
                <p>${planets.aspects}</p>
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