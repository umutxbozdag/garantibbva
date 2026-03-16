// app.js

const axios = require('axios');

// Function to get gold prices from TCMB API
async function getGoldPrices() {
    const url = 'https://api.tcmb.gov.tr/data/GoldQuotes'; // Change to actual TCMB API endpoint
    try {
        const response = await axios.get(url);
        const prices = response.data;
        console.log('Gold Prices:', prices);
    } catch (error) {
        console.error('Error fetching gold prices:', error);
    }
}

// Call the function to get gold prices
getGoldPrices();
