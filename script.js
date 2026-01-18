/* * Speak Like a Brazilian
 * Core Logic: Game, PWA, Persistence, Theme
 */

// --- 1. GAME DATA (Updated with your full list) ---
const questions = [
    // Basics
    { q: "Water", a: "Água", w: "Suco" },
    { q: "Beer", a: "Cerveja", w: "Vinho" },
    { q: "Beach", a: "Praia", w: "Campo" },
    { q: "Thanks", a: "Obrigado", w: "Por favor" },
    { q: "Hello", a: "Olá", w: "Adeus" },
    { q: "Lunchbox", a: "Marmita", w: "Panela" },
    { q: "Flip-flops", a: "Chinelo", w: "Tênis" },
    { q: "Cell phone", a: "Celular", w: "Telefone fixo" },
    { q: "Keys", a: "Chaves", w: "Carteira" },
    { q: "Wallet", a: "Carteira", w: "Bolsa" },
    { q: "Bus", a: "Ônibus", w: "Metrô" },
    { q: "Subway", a: "Metrô", w: "Avião" },
    { q: "Ticket", a: "Passagem", w: "Bilhete de estacionamento" },
    { q: "Street", a: "Rua", w: "Estrada" },
    { q: "Corner", a: "Esquina", w: "Centro" },
    { q: "Queue/Line", a: "Fila", w: "Mesa" },
    { q: "Change (money)", a: "Troco", w: "Troca" },
    { q: "Receipt", a: "Nota fiscal", w: "Anotação" },
    { q: "ID (document)", a: "RG", w: "CPF" },
    { q: "Taxpayer number", a: "CPF", w: "RG" },
    { q: "Snack", a: "Lanche", w: "Jantar" },
    { q: "Soda", a: "Refrigerante", w: "Suco" },
    { q: "Straw", a: "Canudo", w: "Colher" },
    { q: "Napkin", a: "Guardanapo", w: "Prato" },
    { q: "Knife", a: "Faca", w: "Garfo" },
    { q: "Fork", a: "Garfo", w: "Colher" },
    { q: "Spoon", a: "Colher", w: "Faca" },
    { q: "Plate", a: "Prato", w: "Copo" },
    { q: "Cup/Glass", a: "Copo", w: "Prato" },
    { q: "Bottle", a: "Garrafa", w: "Copo" },
    { q: "Trash can", a: "Lixeira", w: "Gaveta" },
    { q: "Elevator", a: "Elevador", w: "Escada" },
    { q: "Stairs", a: "Escada", w: "Elevador" },
    { q: "Pharmacy", a: "Farmácia", w: "Padaria" },
    { q: "Bakery", a: "Padaria", w: "Açougue" },
    { q: "Butcher shop", a: "Açougue", w: "Peixaria" },
    { q: "Change of clothes", a: "Roupa", w: "Louça" },
    { q: "Shoes", a: "Sapatos", w: "Meias" },
    { q: "Jacket", a: "Jaqueta", w: "Camiseta" },
    { q: "Shorts", a: "Bermuda", w: "Calça" },
    { q: "Flip (bus card)", a: "Cartão de ônibus", w: "Carteira de motorista" },
    { q: "Driver's license", a: "Carteira de motorista", w: "Carteira de trabalho" },
    { q: "Work card", a: "Carteira de trabalho", w: "Carteira de estudante" },
    { q: "Holiday", a: "Feriado", w: "Fim de semana" },
    { q: "Weekend", a: "Fim de semana", w: "Feriado" },

    // Slang & Everyday
    { q: "Cool!", a: "Legal!", w: "Chato!" },
    { q: "What's up?", a: "E aí?", w: "E agora?" },
    { q: "I'm thirsty", a: "Tô com sede", w: "Tô com sono" },
    { q: "I'm sleepy", a: "Tô com sono", w: "Tô acordado" },
    { q: "I'm tired", a: "Tô cansado", w: "Tô animado" },
    { q: "I'm in a hurry", a: "Tô com pressa", w: "Tô de boa" },
    { q: "Wait a sec", a: "Pera aí", w: "Agora!" },
    { q: "No worries", a: "De boa", w: "Nem pensar" },
    { q: "All good?", a: "Tudo certo?", w: "Tudo errado?" },
    { q: "Let's hang out", a: "Vamos dar um rolê", w: "Vamos trabalhar" },
    { q: "That's awesome", a: "Da hora", w: "Chato" },
    { q: "I'm broke", a: "Tô sem grana", w: "Tô rico" },
    { q: "It's crowded", a: "Tá lotado", w: "Tá vazio" },
    { q: "I'm kidding", a: "Tô zoando", w: "Tô falando sério" },
    { q: "No way!", a: "Nem ferrando!", w: "Com certeza!" },
    { q: "So expensive", a: "Tá caro pra caramba", w: "Tá baratinho" },
    { q: "Great job", a: "Mandou bem", w: "Mandou mal" },
    { q: "It's a mess", a: "Tá uma bagunça", w: "Tá organizado" },
    { q: "Hold my spot", a: "Guarda meu lugar", w: "Pega meu lugar" },
    { q: "Let's go already", a: "Partiu", w: "Ficou" },
    { q: "I'm annoyed", a: "Tô bolado", w: "Tô feliz" },
    { q: "Chill", a: "Fica de boa", w: "Fica tenso" },
    { q: "Crowd", a: "Muvuca", w: "Vazio" },

    // Phrases
    { q: "Could you help me?", a: "Você pode me ajudar, por favor?", w: "Você pode me atrapalhar?" },
    { q: "Do you accept card?", a: "Aceita cartão ou só dinheiro?", w: "Aceita cheque?" },
    { q: "I'm just looking", a: "Tô só dando uma olhada, valeu", w: "Quero comprar tudo" },
    { q: "I'm running late", a: "Tô chegando, mas vou me atrasar", w: "Já cheguei faz tempo" },
    { q: "Any cash discount?", a: "Tem desconto no dinheiro?", w: "Tem aumento no dinheiro?" },
    { q: "I'll be right back", a: "Já volto", w: "Não volto" },
    { q: "It bugged", a: "Não tá funcionando, acho que bugou", w: "Tá perfeito" },
    { q: "Send me your location", a: "Me manda a sua localização", w: "Me manda um desenho" },
    { q: "Deal, see you then", a: "Fechado, até lá", w: "Aberto, até nunca" },
    { q: "Next time on me", a: "Na próxima eu pago", w: "Na próxima você paga" },
    { q: "I'll transfer via Pix", a: "Vou te mandar por Pix", w: "Vou te mandar por cheque" },
    { q: "I'm just teasing", a: "Tô só brincando", w: "Tô xingando" }
];

// --- 2. STATE ---
const state = {
    currentIndex: JSON.parse(localStorage.getItem('slb_game_state'))?.index || 0,
    score: JSON.parse(localStorage.getItem('slb_game_state'))?.score || 0
};

// --- 3. AUDIO LOGIC (TTS) ---
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'pt-BR';
        msg.rate = 0.85; // Natural Brazilian flow
        window.speechSynthesis.speak(msg);
    }
}

// --- 4. CORE FUNCTIONS ---
function loadQuestion() {
    const elements = {
        qText: document.getElementById('question-text'),
        options: document.getElementById('options-container'),
        gameContainer: document.getElementById('game-container'),
        upsell: document.getElementById('game-upsell')
    };

    if (state.currentIndex >= questions.length) {
        elements.gameContainer.classList.add('hidden');
        elements.upsell.classList.remove('hidden');
        return;
    }

    const current = questions[state.currentIndex];
    elements.qText.textContent = current.q;
    elements.options.innerHTML = '';

    const choices = [current.a, current.w].sort(() => Math.random() - 0.5);

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'game-btn';
        btn.innerHTML = `<span>${choice}</span><span class="audio-icon-btn">🔊</span>`;
        
        btn.onclick = () => {
            speak(choice);
            // Pequeno delay para a pessoa ouvir antes da cor mudar
            setTimeout(() => handleAnswer(btn, choice, current.a), 600);
        };
        elements.options.appendChild(btn);
    });

    updateProgress();
}

function handleAnswer(btn, selected, correct) {
    const allBtns = document.querySelectorAll('.game-btn');
    allBtns.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct', 'pulse-audio');
        state.score += 10;
        if(navigator.vibrate) navigator.vibrate(50);
    } else {
        btn.classList.add('wrong');
        allBtns.forEach(b => {
            if (b.textContent.includes(correct)) b.classList.add('correct');
        });
        if(navigator.vibrate) navigator.vibrate([50, 50, 50]);
    }

    state.currentIndex++;
    localStorage.setItem('slb_game_state', JSON.stringify({index: state.currentIndex, score: state.score}));

    setTimeout(() => {
        loadQuestion();
    }, 1500);
}

function updateProgress() {
    const fill = document.getElementById('progress-fill');
    const score = document.getElementById('score-display');
    fill.style.width = `${(state.currentIndex / questions.length) * 100}%`;
    score.textContent = `Score: ${state.score}`;
}

// --- 5. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Theme, Streak and PWA logic remain the same as previous response
    loadQuestion();
    
    // Streak Logic
    const streakEl = document.getElementById('streak-counter');
    const start = localStorage.getItem('slb_start') || new Date().toISOString();
    localStorage.setItem('slb_start', start);
    const days = Math.floor((new Date() - new Date(start)) / 86400000) + 1;
    streakEl.textContent = `Day ${days}`;
});


// --- 2. STATE MANAGEMENT ---
const state = {
    currentIndex: 0,
    score: 0,
    history: JSON.parse(localStorage.getItem('slb_game_state')) || { index: 0, score: 0 }
};

// Restore previous state if valid
if (state.history.index < questions.length) {
    state.currentIndex = state.history.index;
    state.score = state.history.score;
}

// --- 3. DOM ELEMENTS ---
const elements = {
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    scoreDisplay: document.getElementById('score-display'),
    progressFill: document.getElementById('progress-fill'),
    themeToggle: document.getElementById('theme-toggle'),
    streakCounter: document.getElementById('streak-counter'),
    installBtn: document.getElementById('install-btn'),
    gameUpsell: document.getElementById('game-upsell'),
    gameContainer: document.getElementById('game-container')
};

// --- 4. GAME LOGIC ---

function initGame() {
    updateUI();
    loadQuestion();
}

function updateUI() {
    elements.scoreDisplay.textContent = `Score: ${state.score}`;
    const progress = (state.currentIndex / questions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
}

function loadQuestion() {
    if (state.currentIndex >= questions.length) {
        showCompletion();
        return;
    }

    const currentQ = questions[state.currentIndex];
    elements.questionText.textContent = currentQ.q;
    
    // Randomize options
    const options = Math.random() < 0.5 
        ? [currentQ.a, currentQ.w] 
        : [currentQ.w, currentQ.a];

    elements.optionsContainer.innerHTML = '';
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'game-btn';
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(btn, opt, currentQ.a);
        elements.optionsContainer.appendChild(btn);
    });
}

function handleAnswer(btn, selected, correct) {
    // Disable all buttons to prevent double click
    const allBtns = elements.optionsContainer.querySelectorAll('.game-btn');
    allBtns.forEach(b => b.disabled = true);

    if (selected === correct) {
        // Correct
        btn.classList.add('correct');
        state.score += 10;
        
        // Vibration for mobile
        if(navigator.vibrate) navigator.vibrate(50);
    } else {
        // Wrong
        btn.classList.add('wrong');
        if(navigator.vibrate) navigator.vibrate([50, 50, 50]);
        
        // Highlight the correct one
        allBtns.forEach(b => {
            if (b.textContent === correct) b.classList.add('correct');
        });
    }

    // Advance
    state.currentIndex++;
    saveProgress();
    
    setTimeout(() => {
        updateUI();
        loadQuestion();
    }, 1200);
}

function saveProgress() {
    localStorage.setItem('slb_game_state', JSON.stringify({
        index: state.currentIndex,
        score: state.score
    }));
}

function showCompletion() {
    elements.gameContainer.classList.add('hidden');
    elements.gameUpsell.classList.remove('hidden');
    // Celebrate
    confettiEffect();
}

// Simple confetti fallback (visual cue)
function confettiEffect() {
    elements.scoreDisplay.textContent = `🏆 FINAL SCORE: ${state.score}`;
    elements.scoreDisplay.style.color = 'var(--secondary)';
}

// --- 5. STREAK LOGIC ---

function initStreak() {
    const now = new Date();
    let firstVisit = localStorage.getItem('slb_first_visit');

    if (!firstVisit) {
        firstVisit = now.toISOString();
        localStorage.setItem('slb_first_visit', firstVisit);
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(firstVisit);
    const diffDays = Math.round(Math.abs((now - firstDate) / oneDay));
    
    elements.streakCounter.textContent = `Day ${diffDays + 1}`;
}

// --- 6. THEME TOGGLE ---

function initTheme() {
    const savedTheme = localStorage.getItem('slb_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        elements.themeToggle.textContent = '🌙';
    } else {
        elements.themeToggle.textContent = '☀️';
    }

    elements.themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('slb_theme', isLight ? 'light' : 'dark');
        elements.themeToggle.textContent = isLight ? '🌙' : '☀️';
    });
}

// --- 7. PWA INSTALL ---

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    elements.installBtn.classList.remove('hidden');
});

elements.installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            elements.installBtn.classList.add('hidden');
        }
        deferredPrompt = null;
    }
});

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    initStreak();
    initTheme();
});
