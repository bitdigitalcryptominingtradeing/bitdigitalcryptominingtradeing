const ctx = document.getElementById('cryptoChart').getContext('2d');
let cryptoChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'BTC Price (USD)',
            data: [],
            borderColor: 'blue',
            borderWidth: 2
        }]
    }
});

// Fetch Crypto Prices (Using CoinGecko API)
async function fetchCryptoPrice() {
    try {
        let response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        let data = await response.json();
        let btcPrice = data.bitcoin.usd;
        
        // Update Chart
        let now = new Date().toLocaleTimeString();
        cryptoChart.data.labels.push(now);
        cryptoChart.data.datasets[0].data.push(btcPrice);

        // Limit to 10 data points
        if (cryptoChart.data.labels.length > 10) {
            cryptoChart.data.labels.shift();
            cryptoChart.data.datasets[0].data.shift();
        }

        cryptoChart.update();
    } catch (error) {
        console.error("Error fetching crypto data:", error);
    }
}

// Update every 5 seconds
setInterval(fetchCryptoPrice, 5000);
