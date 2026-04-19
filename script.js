// --- Data Database ---
const menuItems = [
    // --- Food: Voorgerechten ---
    { id: 'carpaccio', name: 'Gouwe Carpaccio', type: 'food', mood: 'Fancy', hunger: 'Voorgerecht', price: '€11', image: 'menus/images/food/voorgerechten/carpaccio.png' },
    { id: 'soep', name: 'Soep van het Moment', type: 'food', mood: 'Gezellig', hunger: 'Voorgerecht', price: '€6,50', image: 'menus/images/food/voorgerechten/soep_van_het_moment.png' },
    { id: 'broodplankje', name: 'Broodplankje', type: 'food', mood: 'Delen', hunger: 'Voorgerecht', price: '€6,50', image: 'menus/images/food/voorgerechten/broodplankje.png' },

    // --- Food: Hoofdgerechten ---
    { id: 'hamburger', name: 'Gouwe Hamburger', type: 'food', mood: 'Gezellig', hunger: 'Grote trek', price: '€17,50', image: 'menus/images/food/hoofdgerechten/hamburger.png' },
    { id: 'vegaburger', name: 'Vegetarische Burger', type: 'food', mood: 'Bewust', hunger: 'Grote trek', price: '€17,50', image: 'menus/images/food/hoofdgerechten/vegaburger.png' },
    { id: 'cordonbleu', name: 'Cordon Bleu (kip)', type: 'food', mood: 'Gezellig', hunger: 'Grote trek', price: '€17,50', image: 'menus/images/food/hoofdgerechten/cordon_bleu.png' },
    { id: 'halvekip', name: 'Halve Kip', type: 'food', mood: 'Gezellig', hunger: 'Grote trek', price: '€14,50', image: 'menus/images/food/hoofdgerechten/halve_kip.png' },
    { id: 'saté', name: 'Saté van Kip', type: 'food', mood: 'Gezellig', hunger: 'Grote trek', price: '€16,50', image: 'menus/images/food/hoofdgerechten/sate_van_kip.png' },
    { id: 'biefstuk', name: 'Ierse Biefstuk', type: 'food', mood: 'Fancy', hunger: 'Grote trek', price: '€20', image: 'menus/images/food/hoofdgerechten/ierse_biefstuk.png' },
    { id: 'schnitzel', name: 'XXL Schnitzel', type: 'food', mood: 'Gezellig', hunger: 'Extreem', price: '€19,50', image: 'menus/images/food/hoofdgerechten/xxl_schnitzel.png' },
    { id: 'spareribs', name: 'Spareribs', type: 'food', mood: 'Gezellig', hunger: 'Extreem', price: '€19,50', image: 'menus/images/food/hoofdgerechten/spareribs.png' },
    { id: 'kindermenu', name: 'Kindermenu', type: 'food', mood: 'Gezellig', hunger: 'Voorgerecht', price: '€7,50', image: 'menus/images/food/hoofdgerechten/kindermenu.png' },

    // --- Food: Nagerechten ---
    { id: 'dameblanche', name: 'Dame Blanche', type: 'food', mood: 'Fancy', hunger: 'Nagerecht', price: '€7,50', image: 'menus/images/food/nagerechten/dame_blanche.png' },
    { id: 'lavacake', name: 'Chocolade Lavacake', type: 'food', mood: 'Fancy', hunger: 'Nagerecht', price: '€7,50', image: 'menus/images/food/nagerechten/lavacake.png' },

    // --- Food: Borrel & Snacks ---
    { id: 'kaasplank', name: 'Kaasplankje', type: 'food', mood: 'Delen', hunger: 'Borrel', price: '€11,50', image: 'menus/images/food/koude_snacks/kaasplankje.png' },
    { id: 'worstplankje', name: 'Worstplankje', type: 'food', mood: 'Delen', hunger: 'Borrel', price: '€11,50', image: 'menus/images/food/koude_snacks/worstplankje.png' },
    { id: 'kaasworst', name: 'Kaas- en Worstplankje', type: 'food', mood: 'Delen', hunger: 'Borrel', price: '€15', image: 'menus/images/food/koude_snacks/kaas_en_worstplankje.png' },
    { id: 'nootjes', name: 'Nootjes', type: 'food', mood: 'Gezellig', hunger: 'Borrel', price: '€3,50', image: 'menus/images/food/koude_snacks/nootjes.png' },
    { id: 'bittergarnituur', name: 'Gemengd Bittergarnituur', type: 'food', mood: 'Delen', hunger: 'Borrel', price: 'V.a. €8', image: 'menus/images/food/warme_snacks/bittergarnituur.png' },
    { id: 'sushi', name: 'Verse Sushi', type: 'food', mood: 'Fancy', hunger: 'Borrel', price: 'Wisselend', image: 'menus/images/food/sushi/verse_sushi.png' },

    // --- Beers: Krachtig & Blond ---
    { id: 'duvel', name: 'Duvel', type: 'beer', vibe: 'Krachtig', alcohol: 'Zwaar (8+ %)', price: '€5,00', image: 'menus/images/beers/Krachtig_en_Blond/duvel.png' },
    { id: 'tripel', name: 'Westmalle Tripel', type: 'beer', vibe: 'Krachtig', alcohol: 'Zwaar (8+ %)', price: '€5,50', image: 'menus/images/beers/Krachtig_en_Blond/westmalle_tripel.png' },
    { id: 'affligemdubbel', name: 'Affligem Dubbel', type: 'beer', vibe: 'Krachtig', alcohol: 'Zwaar (8+ %)', price: '€5,00', image: 'menus/images/beers/Krachtig_en_Blond/affligem_dubbel.png' },
    { id: 'lagoudale', name: 'La Goudale', type: 'beer', vibe: 'Krachtig', alcohol: 'Zwaar (8+ %)', price: '€5,50', image: 'menus/images/beers/Krachtig_en_Blond/la_goudale.png' },
    { id: 'affligemblond', name: 'Affligem Blond', type: 'beer', vibe: 'Fris', alcohol: 'Normaal (~5%)', price: '€4,50', image: 'menus/images/beers/Krachtig_en_Blond/affligem_blond.png' },
    { id: 'brugsezot', name: 'Brugse Zot Blond', type: 'beer', vibe: 'Fruitig', alcohol: 'Normaal (~5%)', price: '€5,00', image: 'menus/images/beers/Krachtig_en_Blond/brugse_zot.png' },
    { id: 'oedipus', name: 'Oedipus', type: 'beer', vibe: 'Fruitig', alcohol: 'Normaal (~5%)', price: '€5,00', image: 'menus/images/beers/Krachtig_en_Blond/oedipus.png' },
    { id: 'heineken', name: 'Heineken Pilsner', type: 'beer', vibe: 'Fris', alcohol: 'Normaal (~5%)', price: '€3,20', image: 'menus/images/beers/Krachtig_en_Blond/heineken.png' },

    // --- Beers: Fruitig & Fris ---
    { id: 'weizen', name: 'Brand Weizen', type: 'beer', vibe: 'Fruitig', alcohol: 'Normaal (~5%)', price: '€4,50', image: 'menus/images/beers/fruitig_en_fris/brand_weizen.png' },
    { id: 'wit', name: 'Affligem Belgisch Wit', type: 'beer', vibe: 'Fruitig', alcohol: 'Licht (<5%)', price: '€4,50', image: 'menus/images/beers/fruitig_en_fris/affligem_wit.png' },
    { id: 'texels', name: 'Texels Skumkoppe', type: 'beer', vibe: 'Fruitig', alcohol: 'Normaal (~5%)', price: '€5,00', image: 'menus/images/beers/fruitig_en_fris/texels_skumkoppe.png' },
    { id: 'corona', name: 'Corona', type: 'beer', vibe: 'Fris', alcohol: 'Licht (<5%)', price: '€4,00', image: 'menus/images/beers/fruitig_en_fris/corona.png' },
    { id: 'radler', name: 'Amstel Radler', type: 'beer', vibe: 'Fris', alcohol: 'Licht (<5%)', price: '€3,50', image: 'menus/images/beers/fruitig_en_fris/amstel_radler.png' },

    // --- Beers: Alcoholvrij ---
    { id: 'heineken00', name: 'Heineken 0.0', type: 'beer', vibe: 'Fris', alcohol: 'Alcoholvrij', price: '€3,20', image: 'menus/images/beers/alcoholvrij/heineken_00.png' },
    { id: 'radler00', name: 'Amstel Radler 0.0%', type: 'beer', vibe: 'Fris', alcohol: 'Alcoholvrij', price: '€3,50', image: 'menus/images/beers/alcoholvrij/amstel_radler_00.png' },
    { id: 'affligem00', name: 'Affligem Blond 0.0%', type: 'beer', vibe: 'Fris', alcohol: 'Alcoholvrij', price: '€3,50', image: 'menus/images/beers/alcoholvrij/affligem_blond_00.png' },
    { id: 'texels00', name: 'Texels Skumkoppe 0.0%', type: 'beer', vibe: 'Fruitig', alcohol: 'Alcoholvrij', price: '€4,00', image: 'menus/images/beers/alcoholvrij/texels_skumkoppe_00.png' },
    { id: 'desperados', name: 'Desperados Virgin', type: 'beer', vibe: 'Fris', alcohol: 'Alcoholvrij', price: '€3,50', image: 'menus/images/beers/alcoholvrij/desperados_virgin.png' },

    // --- Wines: Wit ---
    { id: 'sauvignon', name: 'Osadia Sauvignon Blanc', type: 'wine', color: 'Wit', taste: 'Droog & Fris', price: 'Glas €5', image: 'menus/images/wines/wit/osadia_sauvignon_blanc.png' },
    { id: 'verdejo', name: 'La Lustrosa Verdejo', type: 'wine', color: 'Wit', taste: 'Droog & Fris', price: 'Glas €5', image: 'menus/images/wines/wit/la_lustrosa_verdejo.png' },
    { id: 'pinotgrigio', name: "Ca' Del Doge Pinot Grigio", type: 'wine', color: 'Wit', taste: 'Droog & Fris', price: 'Glas €5', image: 'menus/images/wines/wit/cadel_doge_pinot_grigio.png' },
    { id: 'chardonnay', name: 'Luis Felipe Chardonnay', type: 'wine', color: 'Wit', taste: 'Vol & Rond', price: 'Glas €5', image: 'menus/images/wines/wit/luis_felipe_chardonnay.png' },
    { id: 'zoet', name: 'Kloster Krone Zoet', type: 'wine', color: 'Wit', taste: 'Zoet', price: 'Glas €5', image: 'menus/images/wines/wit/kloster_krone_zoete.png' },

    // --- Wines: Rosé ---
    { id: 'rose', name: 'Abadia Real Rosé', type: 'wine', color: 'Rosé', taste: 'Droog & Fris', price: 'Glas €5', image: 'menus/images/wines/rose/abadia_real.png' },

    // --- Wines: Rood ---
    { id: 'merlot', name: 'Luis Felipe Merlot', type: 'wine', color: 'Rood', taste: 'Zacht & Soepel', price: 'Glas €5', image: 'menus/images/wines/rood/luis_felipe_merlot.png' },
    { id: 'cabernet', name: 'Xanadu Cabernet Sauvignon', type: 'wine', color: 'Rood', taste: 'Stevig', price: 'Glas €6,50', image: 'menus/images/wines/rood/xanadu_cabernet.png' },
    { id: 'malbec', name: 'Navarro Correas Malbec', type: 'wine', color: 'Rood', taste: 'Stevig', price: 'Glas €7,50', image: 'menus/images/wines/rood/navarro_malbec.png' },

    // --- Wines: Mousserend ---
    { id: 'prosecco', name: 'Lisetto Prosecco', type: 'wine', color: 'Mousserend', taste: 'Feestelijk', price: 'Piccolo €7,50', image: 'menus/images/wines/Mousserend/lisetto_prosecco.png' }
];

// --- Application State ---
let currentQuestionIndex = 0;
let userPreferences = {};
let currentPath = 'start'; // Can be 'food', 'beer', 'wine', 'start'

// --- Question Trees ---
const questions = {
    start: [
        {
            id: 'category',
            text: 'Heb je honger of dorst?',
            options: [
                { id: 'food', text: 'Ik heb trek in iets!', emoji: '🍔' },
                { id: 'beer', text: 'Tijd voor een biertje.', emoji: '🍺' },
                { id: 'wine', text: 'Doe mij maar wijn.', emoji: '🍷' }
            ]
        }
    ],
    food: [
        {
            id: 'hunger',
            text: 'Hoeveel trek heb je?',
            options: [
                { id: 'Voorgerecht', text: 'Een klein begin / Voorgerecht', emoji: '🥗' },
                { id: 'Grote trek', text: 'Een flinke maaltijd', emoji: '🍽️' },
                { id: 'Extreem', text: 'Ik gooi alles naar binnen!', emoji: '🍖' },
                { id: 'Borrel', text: 'Gewoon lekker borrelen', emoji: '🧀' },
                { id: 'Nagerecht', text: 'Iets zoets als nagerecht', emoji: '🍰' }
            ]
        },
        {
            id: 'mood',
            text: 'Wat is de go-to vibe?',
            options: [
                { id: 'Gezellig', text: 'Gezellig & Klassiek', emoji: '🍻' },
                { id: 'Fancy', text: 'Lekker chic!', emoji: '✨' },
                { id: 'Delen', text: 'Samen delen is beter', emoji: '🤝' },
                { id: 'Bewust', text: 'Liever geen vlees', emoji: '🌱' }
            ]
        }
    ],
    beer: [
        {
            id: 'alcohol',
            text: 'Alcohol of liever niet?',
            options: [
                { id: 'Alcoholvrij', text: 'Doe mij maar 0.0%', emoji: '🚫' },
                { id: 'Licht (<5%)', text: 'Lekker doordrinkbaar (Radler/Wit)', emoji: '🍋' },
                { id: 'Normaal (~5%)', text: 'Een standaard pils of weizen', emoji: '🍺' },
                { id: 'Zwaar (8+ %)', text: 'Maak hem maar krachtig!', emoji: '💪' }
            ]
        },
        {
            id: 'vibe',
            text: 'Waar heb je zin in?',
            options: [
                { id: 'Fris', text: 'Fris & Dorstlessend', emoji: '❄️' },
                { id: 'Fruitig', text: 'Iets warms of fruitigs', emoji: '🍊' },
                { id: 'Krachtig', text: 'Vol en stevig!', emoji: '🔥' }
            ]
        }
    ],
    wine: [
        {
            id: 'color',
            text: 'Welke kleur pas bij jou vandaag?',
            options: [
                { id: 'Wit', text: 'Wit', emoji: '🥂' },
                { id: 'Rood', text: 'Rood', emoji: '🍷' },
                { id: 'Rosé', text: 'Rosé, lekker koud!', emoji: '🌸' },
                { id: 'Mousserend', text: 'Mousserend, feestje!', emoji: '✨' }
            ]
        },
        {
            id: 'taste',
            text: 'Wat is je favoriete smaakprofiel?',
            options: [
                { id: 'Droog & Fris', text: 'Droog en fris', emoji: '🍋' },
                { id: 'Vol & Rond', text: 'Vol en rond', emoji: '🍑' },
                { id: 'Zoet', text: 'Lekker zoet', emoji: '🍯' },
                { id: 'Zacht & Soepel', text: 'Zacht en soepel', emoji: '🌹' },
                { id: 'Stevig', text: 'Stevig rood', emoji: '🍇' },
                { id: 'Feestelijk', text: 'Feestelijk bubbels!', emoji: '🎉' }
            ]
        }
    ]
};

// --- DOM Elements ---
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQNum = document.getElementById('current-q-num');

// --- Logic ---
startBtn.addEventListener('click', () => {
    userPreferences = {};
    currentPath = 'start';
    currentQuestionIndex = 0;
    
    // Posthog tracking
    if(window.posthog) posthog.capture('quiz_started');

    homeScreen.classList.remove('active');
    homeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizScreen.classList.add('active');
    renderQuestion();
});

backBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        // Clear last preference vaguely (not perfectly accurate for branching, but good enough for 2 steps)
        const keys = Object.keys(userPreferences);
        if(keys.length > 0) {
            delete userPreferences[keys[keys.length - 1]];
        }
        renderQuestion();
    } else if (currentPath !== 'start') {
        currentPath = 'start';
        currentQuestionIndex = 0;
        userPreferences = {};
        renderQuestion();
    } else {
        quizScreen.classList.remove('active');
        quizScreen.classList.add('hidden');
        homeScreen.classList.remove('hidden');
        homeScreen.classList.add('active');
    }
});

restartBtn.addEventListener('click', () => {
    if(window.posthog) posthog.capture('quiz_restarted');
    resultScreen.classList.remove('active');
    resultScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
    homeScreen.classList.add('active');
});

function renderQuestion() {
    const activeQuestions = questions[currentPath];
    const q = activeQuestions[currentQuestionIndex];
    
    // Animate transition
    questionText.style.opacity = '0';
    optionsContainer.style.opacity = '0';
    
    setTimeout(() => {
        questionText.textContent = q.text;
        currentQNum.textContent = (currentPath === 'start' ? 1 : currentQuestionIndex + 2);

        // Update progress bar
        const totalSteps = (currentPath === 'start') ? 3 : questions[currentPath].length + 1;
        const currentStep = (currentPath === 'start') ? 1 : currentQuestionIndex + 2;
        const progressFill = document.getElementById('progress-fill');
        progressFill.style.width = `${(currentStep / totalSteps) * 100}%`;
        
        optionsContainer.innerHTML = '';
        q.options.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = 'option-btn';
            btn.innerHTML = `<span>${opt.text}</span> <span class="emoji">${opt.emoji}</span>`;
            
            btn.addEventListener('click', () => {
                userPreferences[q.id] = opt.id;
                
                // Track answer
                if(window.posthog) posthog.capture('question_answered', { question: q.id, answer: opt.id });

                if (currentPath === 'start') {
                    currentPath = opt.id;
                    currentQuestionIndex = 0;
                    renderQuestion();
                } else {
                    nextQuestion();
                }
            });
            
            optionsContainer.appendChild(btn);
        });
        
        questionText.style.opacity = '1';
        optionsContainer.style.opacity = '1';
    }, 200);
}

function nextQuestion() {
    const activeQuestions = questions[currentPath];
    if (currentQuestionIndex < activeQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const winner = calculateWinner();
    
    quizScreen.classList.remove('active');
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');
    
    document.getElementById('winner-name').textContent = winner.name;
    document.getElementById('winner-price').textContent = winner.price;
    document.getElementById('winner-image').src = winner.image || '';
    
    let reason = "Dit is precies wat je zocht!";
    if(currentPath === 'food') reason = `Omdat je op zoek bent naar een ${userPreferences.hunger.toLowerCase()}!`;
    if(currentPath === 'beer') reason = `Perfect voor jouw trek in een ${userPreferences.vibe.toLowerCase()} biertje.`;
    if(currentPath === 'wine') reason = `De beste keuze voor liefhebbers van ${userPreferences.taste.toLowerCase()}!`;
    
    document.getElementById('winner-reason').textContent = reason;

    // Report to PostHog
    if(window.posthog) {
        posthog.capture('recommendation_given', {
            item_name: winner.name,
            item_type: winner.type,
            preferences: JSON.stringify(userPreferences)
        });
    }
}

function calculateWinner() {
    let bestMatches = [];
    let highestScore = -1;
    
    // Filter out items that do not match the current category path (food, beer, wine)
    const categoryItems = menuItems.filter(item => item.type === currentPath);

    categoryItems.forEach(item => {
        let score = 0;
        
        for (const [key, val] of Object.entries(userPreferences)) {
            // Note: 'category' is not on the item directly, it's 'type'
            if (key === 'category') continue; 
            if (item[key] === val) {
                score += 5;
            }
        }
        
        if (score > highestScore) {
            highestScore = score;
            bestMatches = [item];
        } else if (score === highestScore) {
            bestMatches.push(item);
        }
    });

    // Oracle Destiny (Tie Breaker)
    const randomIndex = Math.floor(Math.random() * bestMatches.length);
    let finalWinner = bestMatches[randomIndex] || categoryItems[0];
    return finalWinner;
}
