// --- Wait for the page to load before running scripts ---
document.addEventListener('DOMContentLoaded', () => {

    const startDate = new Date(Date.UTC(2025, 7, 4, 0, 0, 0));

    // --- Live Timer ---
    function updateTimer() {
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();
        const totalSeconds = Math.floor(diff / 1000);
        const totalHours = Math.floor(totalSeconds / 3600);
        const totalDays = Math.floor(totalHours / 24);
        const totalWeeks = Math.floor(totalDays / 7);
        const months = (now.getUTCFullYear() - startDate.getUTCFullYear()) * 12 + (now.getUTCMonth() - startDate.getUTCMonth());

        document.getElementById('seconds').textContent = totalSeconds.toLocaleString();
        document.getElementById('hours').textContent = totalHours.toLocaleString();
        document.getElementById('days').textContent = totalDays.toLocaleString();
        document.getElementById('weeks').textContent = totalWeeks.toLocaleString();
        document.getElementById('months').textContent = months.toLocaleString();
    }
    
    // --- Daily Quote ---
    const quotes = [
        "Distance is not for the fearful, it is for the bold. It's for those who are willing to spend a lot of time alone in exchange for a little time with the one they love.",
        "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
        "I exist in two places, here and where you are.",
        "Love will travel as far as you let it. It has no limits.",
        "Together forever, never apart. Maybe in distance, but never in heart."
    ];
    
    const totalDaysForQuote = Math.floor((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const quoteIndex = totalDaysForQuote % quotes.length;
    document.getElementById('daily-quote').textContent = `"${quotes[quoteIndex]}"`;

    updateTimer();
    setInterval(updateTimer, 1000);


    // --- Leaflet.js Map ---
    const herLocation = [20.28, 85.82];
    const myLocation = [22.75, 77.72];
    const centerPoint = [21.5, 81.7];

    const map = L.map('map').setView(centerPoint, 5);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	    attribution: 'Tiles &copy; Esri'
    }).addTo(map);

    const svgIcon = L.divIcon({
        html: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                <path fill="#d63384" d="M12 1.5a8.5 8.5 0 0 0-8.5 8.5c0 5.13 8.5 12.5 8.5 12.5s8.5-7.37 8.5-12.5a8.5 8.5 0 0 0-8.5-8.5zm0 11.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" stroke="#fff" stroke-width="0.5"/>
            </svg>`,
        className: "",
        iconSize: [36, 36],
        iconAnchor: [18, 36]
    });
    
    L.marker(herLocation, {icon: svgIcon}).addTo(map).bindPopup('Maao 👩🏻‍🦳');
    L.marker(myLocation, {icon: svgIcon}).addTo(map).bindPopup('Bala 👱🏻‍♂️');

    const latlngs = [herLocation, myLocation];
    L.polyline(latlngs, {color: '#FFF5E1', weight: 3}).addTo(map);

    const distance = L.latLng(herLocation).distanceTo(L.latLng(myLocation));
    document.getElementById('distance').textContent = Math.round(distance / 1000);


    // --- Anime.js Credit Animation ---
    document.querySelectorAll('.ml12').forEach((textWrapper, index) => {
        // Wrap every letter and emoji in a span. The 'u' flag fixes the emoji issue.
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/gu, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: false})
          .add({
            targets: textWrapper.querySelectorAll('.letter'),
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => (index * 500) + 500 + 30 * i 
          });
    });

});
