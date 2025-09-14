document.addEventListener('DOMContentLoaded', () => {

    const startDate = new Date(Date.UTC(2025, 7, 4, 0, 0, 0));

    // --- Live Timer ----
    function updateTimer() {
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();
        const totalSeconds = Math.floor(diff / 1000);
        const totalHours = Math.floor(totalSeconds / 3600);
        const totalDays = Math.floor(totalHours / 24);
        const totalWeeks = Math.floor(totalDays / 7);
        const months = (now.getUTCFullYear() - startDate.getUTCFullYear()) * 12 + (now.getUTCMonth() - startDate.getUTCMonth());

        const elements = {
            'seconds': totalSeconds,
            'hours': totalHours,
            'days': totalDays,
            'weeks': totalWeeks,
            'months': months
        };

        for (const [id, value] of Object.entries(elements)) {
            const el = document.getElementById(id);
            if (el) {
                el.textContent = value.toLocaleString();
            }
        }
    }

    // --- Daily Quote ---
    const quotes = [
        "Distance is not for the fearful, it is for the bold. It's for those who are willing to spend a lot of time alone in exchange for a little time with the one they love.",
        "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
        "I exist in two places, here and where you are.",
        "Love will travel as far as you let it. It has no limits.",
        "Together forever, never apart. Maybe in distance, but never in heart.",
        "The world was just a place until you, Maao. Now it’s home.",
        "My life was like a Monday morning in November before you came along with the promise of a bank holiday in May.",
        "You turned the quiet hum of my life into a symphony, Maao.",
        "I thought I was quite content, and then you showed up and taught me the meaning of properly chuffed.",
        "Everything was in black and white, and then you, Maao, became my favourite colour.",
        "You are the brilliant, unexpected plot twist in my otherwise predictable story.",
        "Life with you is like finding a tenner in an old coat pocket – a constant, brilliant surprise.",
        "My internal weather forecast was permanently set to 'drizzle' until I met you, Maao.",
        "You’re the 'everything's sorted now' to my cluttered mind.",
        "I didn't know a heart could be this settled, this utterly calm, until you, Maao.",
        "You make the mundane feel like a smashing adventure.",
        "All the best bits of my day have you in them.",
        "You’re the reason my tea tastes better in the morning.",
        "My compass was spinning aimlessly. Then it found its true north: you, Maao.",
        "You make me want to be a better bloke. Not just for you, but because of you.",
        "I fancy you more than a bacon butty on a Sunday morning, Maao.",
        "You’re completely crackers, and I’m utterly bonkers about you.",
        "If you were a biscuit, you’d be a top-tier chocolate hobnob.",
        "Are you a parking ticket? Because you’ve got 'fine' written all over you, and you’re distracting me something rotten.",
        "I’m not saying I’m lost without you, but the satnav of my heart definitely relies on your signal, Maao.",
        "You're my favourite notification.",
        "Let's just stay in, get a takeaway, and be brilliant together.",
        "You're the one I want to be knackered with after a long week.",
        "I’d even queue for you, Maao. And that’s saying something.",
        "You're the gin to my tonic – making everything significantly better.",
        "Life with you is less 'stiff upper lip' and more 'laughing till it hurts'.",
        "I was going to do something productive today, but then I thought of you, Maao. A much better use of my time.",
        "You’ve made me ridiculously, soppily soft. It’s brilliant.",
        "You're the only person I'd share my last Rolo with. No questions asked.",
        "Our love story is my favourite programme on the telly of my mind.",
        "In a world of fleeting moments, you, Maao, are my one constant. My anchor.",
        "Loving you feels like coming home after a long journey and putting the kettle on.",
        "My soul gave a quiet little sigh of 'there you are' the day I met you.",
        "To me, Maao, your name is another word for happiness.",
        "You are the quiet, steady warmth in the core of my being.",
        "I don't just love you; I find you utterly fascinating.",
        "You are the loveliest thought that has ever nested in my mind.",
        "Holding your hand feels like the most natural, important thing my hand could ever do.",
        "With you, Maao, I don't have to pretend. I can just be.",
        "You are the poetry I never knew how to write.",
        "In the grand, sprawling library of my life, your chapter is the one I read over and over.",
        "It’s not about grand gestures. It's the quiet Tuesday evenings with you that I treasure most.",
        "My love for you isn't loud. It's a steady, reliable thing, like the shipping forecast.",
        "You, Maao, are my peace in a world that can be absolute chaos.",
        "You are proof that the best things in life aren't things at all.",
        "If my heart were a garden, you’d be the hardy perennial that blooms all year round.",
        "You are the calm harbour to my stormy sea.",
        "They talk about stars aligning. I think mine just wandered about until they found yours, Maao.",
        "You're not just a spark; you're the entire, roaring fireplace on a winter's night.",
        "My love for you is like the British weather – utterly unpredictable but always there.",
        "You are the ordinance survey map to the best parts of me.",
        "If love is a language, you and I speak the same lovely, rambling dialect.",
        "You are the gentle rain that made my soul grow.",
        "Our love is like a well-worn armchair – comfortable, familiar, and the best place to be.",
        "You, Maao, are the unexpected sunshine that breaks through a cloudy day.",
        "I was a half-written sentence, and you were the perfect word to finish it.",
        "You are the melody my heart hums when it's happy.",
        "If I were a book, you'd be the dog-eared, favourite page.",
        "You are the North Star in my personal, rambling constellation.",
        "My world is a landscape, and you, Maao, are the stunning, unforgettable view.",
        "Your laugh, Maao, is more comforting than the sound of rain on the windowpane.",
        "In your eyes, I see a kindness that could mend the world.",
        "The way you think about things just fascinates me. My mind is better for knowing yours.",
        "Your smile could outshine the Blackpool Illuminations.",
        "There's a strength in your gentleness, Maao, that leaves me in proper awe.",
        "I love watching you when you're completely absorbed in something. It's my favourite sight.",
        "The sound of your voice is my favourite frequency.",
        "Your kindness isn't a grand performance; it's in the quiet, little things you do. It’s brilliant.",
        "Maao, you have a way of making everything alright just by being you.",
        "It’s the daft little expressions you pull that I adore the most.",
        "Your presence is a gift I get to unwrap every single day.",
        "You have a heart full of Sunday mornings.",
        "I adore the way your mind works – it's a wonderful, intriguing place.",
        "Your sense of humour is my favourite brand of magic.",
        "You, my lovely Maao, are made of all the good things.",
        "You, Maao. It's always, simply, you.",
        "You're my absolute favourite.",
        "My heart is utterly, completely yours.",
        "You just make everything better.",
        "Being your chap is the best job I've ever had.",
        "Utterly smitten. That’s me, with you.",
        "You're my brilliant everything, Maao.",
        "My heart is so incredibly full of you.",
        "Maao, you feel like a miracle.",
        "You are, quite simply, the best thing.",
        "I’m so chuffed you’re mine.",
        "You’re my person, Maao.",
        "My favourite place is next to you.",
        "You’re the lovely bit.",
        "My today and all of my tomorrows.",
        "Every love song on the radio finally makes sense, Maao.",
        "I was just pottering along, and then I found you, Maao. My whole world sorted itself out.",
        "Maao. Just your name is enough to make me smile like a loon.",
        "My favourite word in the English language? Maao.",
        "I reckon the meaning of life is just to find your Maao and hold on tight.",
        "The best part of my day is coming home to you, Maao.",
        "I never knew I could love this much until I met you, Maao.",
        "Thank you for being you, Maao. It’s the most wonderful thing in my world.",
        "My heart recognised you, Maao, long before my mind caught up.",
        "Life is a grand adventure, and I’m so glad you’re my co-pilot, Maao.",
        "Of all the people in all the world, I got the best one. I got Maao.",
        "Waking up next to you, Maao, is a dream I get to live every day.",
        "You are my greatest 'what if' that actually came true, Maao.",
        "I would choose you, Maao, in a hundred lifetimes, in any version of reality.",
        "Home isn't a place. It's you, Maao.",
        "The story of us, starring Maao and me, is my favourite.",
        "Let’s grow old and grumpy together, Maao.",
        "I love you more than words can properly say, Maao.",
        "You, Maao, are the best decision I ever made.",
        "My future looks brilliant, because it has you in it, Maao.",
        "You're the perfect end to a rubbish day.",
        "I love our comfortable silences as much as our daft chats.",
        "You're the 'good bit' of every story I tell.",
        "If my feelings were tea, it would be an endless pot just for you.",
        "You make my heart do a funny little jump.",
        "You're a bit of alright, you are.",
        "With you, I’m not just happy, I’m content. There’s a difference.",
        "My favourite view is you, caught in a bit of afternoon sun.",
        "Let's be weird and wonderful together, forever.",
        "You are the answer to questions I never even thought to ask.",
        "I'm not a poet, but for you, Maao, I wish I were.",
        "You have this smashing effect on me.",
        "Loving you is the most sensible thing I've ever done.",
        "You are my favourite chapter.",
        "All I need is you and a good cuppa. That's my perfect world.",
        "You’re the lovely warmth that seeps into my bones.",
        "I’m not just in love with you, I’m in awe of you.",
        "Every day with you is my new favourite day.",
        "You're the reason I look at my phone and smile like an idiot.",
        "I'm keeping you. It's decided.",
        "You are more beautiful than a Cotswold village in the spring.",
        "You've turned my world right side up.",
        "I fancy the absolute pants off you.",
        "You are my quiet little rebellion against a noisy world.",
        "You're the best thing since sliced bread. Genuinely.",
        "With you, even queuing feels like a date.",
        "I'd give you the window seat every time.",
        "You're the only traffic I don't mind being stuck in.",
        "My love, you are a proper gem.",
        "I thought I knew love. Then you came and rewrote the book.",
        "You are my human equivalent of a Sunday lie-in.",
        "I love you more than a Brit loves complaining about the weather.",
        "You're the person I want to tell good news to first.",
        "You're my calm in the middle of the Tube station rush hour of life.",
        "I’m utterly, hopelessly, brilliantly devoted to you.",
        "You’re the only one I want to talk to after a long, knackering day.",
        "Loving you feels like a Sunday roast for the soul.",
        "Our love is my favourite inside joke.",
        "You, Maao, are the lovely bit in the middle of everything.",
        "I’d choose a rainy day in with you over a sunny day out with anyone else.",
        "You’re not just my girlfriend; you’re my favourite mate.",
        "I’m gobsmacked by you, every single day.",
        "Being with you is better than finding out it’s a bank holiday tomorrow.",
        "I love you to the end of the Northern Line and back again.",
        "You’re the one I want to build a glorious blanket fort with.",
        "If my life were a novel, you’d be the dedication at the very start.",
        "You’re the thought that makes me smile when I’m queuing for my morning coffee.",
        "You feel like that first, perfect sip of tea in the morning.",
        "You’re my favourite reason to lose sleep.",
        "I don't just see a future with you, Maao; I see the only future that matters.",
        "Let’s potter through life together, shall we?",
        "I want to see the world, but only if you’re the one holding my hand.",
        "Growing old with you doesn’t sound like a chore; it sounds like the ultimate adventure.",
        "All my future plans are just different ways of saying 'more time with Maao'.",
        "I want to be the old couple on the park bench with you, still laughing at the same silly things.",
        "The future’s a bit of a muddle, but the bit with you in it is crystal clear.",
        "Let's build a life that’s cosy and brilliant and completely ours.",
        "My forever started the day I met you, Maao.",
        "I look forward to all the cups of tea we have yet to share.",
        "I fancy a lifetime of your nonsense, Maao.",
        "Let's make a thousand more memories to get nostalgic about.",
        "You're my final destination.",
        "I want to be your 'always'.",
        "Whatever happens, as long as I have you, it’s sorted.",
        "My favourite project will always be building a life with you.",
        "Let's be each other's constant, through and through.",
        "The thought of all our tomorrows with you makes me the happiest man alive.",
        "I want a lifetime of your 'good mornings'.",
        "My plan is simple: love you, Maao, for the rest of my days.",
        "You and me, Maao. That's the only team I want to be on.",
        "Our forever is my favourite idea.",
        "The best is yet to come, as long as it's with you.",
        "I plan on annoying you with my love for a very, very long time.",
        "With you is where I want to be, now and for all the days after.",
        "You are my grandest adventure and my safest harbour, all at once. My forever Maao."
    ];
    
    const totalDaysForQuote = Math.floor((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const quoteIndex = totalDaysForQuote % quotes.length;
    
    const dailyQuoteEl = document.getElementById('daily-quote');
    if (dailyQuoteEl) {
        dailyQuoteEl.textContent = `"${quotes[quoteIndex]}"`;
    }

    updateTimer();
    setInterval(updateTimer, 1000);


    // --- Leaflet.js Map with New Grey Theme ---
    const herLocation = [20.28, 85.82];
    const myLocation = [22.75, 77.72];
    const centerPoint = [21.5, 81.7];

    const greyMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    });
    
    const satelliteMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri'
    });

    const mapEl = document.getElementById('map');
    if (mapEl) {
        const map = L.map('map', {
            center: centerPoint,
            zoom: 5,
            layers: [greyMap]
        });

        const baseMaps = {
            "Grey View": greyMap,
            "Satellite View": satelliteMap
        };
        L.control.layers(baseMaps).addTo(map);

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
        L.polyline(latlngs, {color: '#ffe4afff', weight: 1.9}).addTo(map);

        const distance = L.latLng(herLocation).distanceTo(L.latLng(myLocation));
        const distanceEl = document.getElementById('distance');
        if (distanceEl) {
            distanceEl.textContent = Math.round(distance / 1000);
        }
    }

    // --- Anime.js Credit Animation ---
    document.querySelectorAll('.ml12').forEach((textWrapper, index) => {
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
