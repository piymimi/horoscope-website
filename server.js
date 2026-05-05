const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

let horoscopeCache = {};

app.get('/api/horoscope/:sign', async (req, res) => {
    const { sign } = req.params;
    const today = new Date().toISOString().split('T')[0];

    if (!horoscopeCache[today] || !horoscopeCache[today][sign]) {
        try {
            console.log(`Fetching horoscope for ${sign} on ${today}`);
            const response = await fetch(`https://freehoroscopeapi.com/api/v1/get-horoscope/daily?sign=${sign.toLowerCase()}`);
            const data = await response.json();

            if (!horoscopeCache[today]) {
                horoscopeCache[today] = {};
            }
            horoscopeCache[today][sign] = data.data;

            res.json({
                success: true,
                data: data.data,
                cached: false,
                date: today
            });
        } catch (error) {
            console.error('Error fetching horoscope:', error);
            res.status(500).json({
                success: false,
                error: 'Failed to fetch horoscope'
            });
        }
    } else {
        console.log(`Serving cached horoscope for ${sign} on ${today}`);
        res.json({
            success: true,
            data: horoscopeCache[today][sign],
            cached: true,
            date: today
        });
    }
});

app.get('/api/refresh', async (req, res) => {
    try {
        console.log('Refreshing all horoscopes...');
        const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
        const today = new Date().toISOString().split('T')[0];

        for (const sign of signs) {
            try {
                const response = await fetch(`https://freehoroscopeapi.com/api/v1/get-horoscope/daily?sign=${sign}`);
                const data = await response.json();

                if (!horoscopeCache[today]) {
                    horoscopeCache[today] = {};
                }
                horoscopeCache[today][sign] = data.data;
            } catch (error) {
                console.error(`Error refreshing ${sign}:`, error.message);
            }
        }

        res.json({
            success: true,
            message: 'All horoscopes refreshed',
            cache: Object.keys(horoscopeCache[today] || []).length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to refresh horoscopes'
        });
    }
});

app.get('/api/status', (req, res) => {
    const today = new Date().toISOString().split('T')[0];
    res.json({
        date: today,
        cachedSigns: horoscopeCache[today] ? Object.keys(horoscopeCache[today]) : [],
        lastRefresh: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, () => {
    console.log(`Horoscope API Server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}/api/horoscope/[sign]`);
    console.log(`Auto-refresh endpoint: http://localhost:${PORT}/api/refresh`);
    console.log(`Status endpoint: http://localhost:${PORT}/api/status`);
    
    scheduleDailyRefresh();
});

function scheduleDailyRefresh() {
    setInterval(() => {
        refreshHoroscopes();
    }, 24 * 60 * 60 * 1000); 
    
    setTimeout(refreshHoroscopes, 5000);
}

async function refreshHoroscopes() {
    try {
        console.log('⏰ Daily auto-refresh triggered');
        const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
        const today = new Date().toISOString().split('T')[0];

        for (const sign of signs) {
            try {
                const response = await fetch(`https://freehoroscopeapi.com/api/v1/get-horoscope/daily?sign=${sign}`);
                const data = await response.json();

                if (!horoscopeCache[today]) {
                    horoscopeCache[today] = {};
                }
                horoscopeCache[today][sign] = data.data;
                console.log(`✓ Refreshed ${sign}`);
            } catch (error) {
                console.error(`✗ Failed to refresh ${sign}:`, error.message);
            }
        }
        console.log(`✓ Daily refresh complete - ${Object.keys(horoscopeCache[today] || []).length} signs cached`);
    } catch (error) {
        console.error('❌ Daily refresh failed:', error);
    }
}