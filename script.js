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
    
   / --- Daily Quote ---
const quotes = [
"Distance is not for the fearful, it is for the bold. It's for those who are willing to spend a lot of time alone in exchange for a little time with the one they love.",
"The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
"I exist in two places, here and where you are.",
"Love will travel as far as you let it. It has no limits.",
"Together forever, never apart. Maybe in distance, but never in heart."
"The world was just a place until you, Maao. Now it’s home."
"My life was like a Monday morning in November before you came along with the promise of a bank holiday in May."
"You turned the quiet hum of my life into a symphony, Maao."
"I thought I was quite content, and then you showed up and taught me the meaning of properly chuffed."
"Everything was in black and white, and then you, Maao, became my favourite colour."
"You are the brilliant, unexpected plot twist in my otherwise predictable story."
"Life with you is like finding a tenner in an old coat pocket – a constant, brilliant surprise."
"My internal weather forecast was permanently set to 'drizzle' until I met you, Maao."
"You’re the 'everything's sorted now' to my cluttered mind."
"I didn't know a heart could be this settled, this utterly calm, until you, Maao."
"You make the mundane feel like a smashing adventure."
"All the best bits of my day have you in them."
"You’re the reason my tea tastes better in the morning."
"My compass was spinning aimlessly. Then it found its true north: you, Maao."
"You make me want to be a better bloke. Not just for you, but because of you."
"I fancy you more than a bacon butty on a Sunday morning, Maao."
"You’re completely crackers, and I’m utterly bonkers about you."
"If you were a biscuit, you’d be a top-tier chocolate hobnob."
"Are you a parking ticket? Because you’ve got 'fine' written all over you, and you’re distracting me something rotten."
"I’m not saying I’m lost without you, but the satnav of my heart definitely relies on your signal, Maao."
"You're my favourite notification."
"Let's just stay in, get a takeaway, and be brilliant together."
"You're the one I want to be knackered with after a long week."
"I’d even queue for you, Maao. And that’s saying something."
"You're the gin to my tonic – making everything significantly better."
"Life with you is less 'stiff upper lip' and more 'laughing till it hurts'."
"I was going to do something productive today, but then I thought of you, Maao. A much better use of my time."
"You’ve made me ridiculously, soppily soft. It’s brilliant."
"You're the only person I'd share my last Rolo with. No questions asked."
"Our love story is my favourite programme on the telly of my mind."
"In a world of fleeting moments, you, Maao, are my one constant. My anchor."
"Loving you feels like coming home after a long journey and putting the kettle on."
"My soul gave a quiet little sigh of 'there you are' the day I met you."
"To me, Maao, your name is another word for happiness."
"You are the quiet, steady warmth in the core of my being."
"I don't just love you; I find you utterly fascinating."
"You are the loveliest thought that has ever nested in my mind."
"Holding your hand feels like the most natural, important thing my hand could ever do."
"With you, Maao, I don't have to pretend. I can just be."
"You are the poetry I never knew how to write."
"In the grand, sprawling library of my life, your chapter is the one I read over and over."
"It’s not about grand gestures. It's the quiet Tuesday evenings with you that I treasure most."
"My love for you isn't loud. It's a steady, reliable thing, like the shipping forecast."
"You, Maao, are my peace in a world that can be absolute chaos."
"You are proof that the best things in life aren't things at all."
"If my heart were a garden, you’d be the hardy perennial that blooms all year round."
"You are the calm harbour to my stormy sea."
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
