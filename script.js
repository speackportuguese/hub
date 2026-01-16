/* * Speak Like a Brazilian
 * Core Logic: Game, PWA, Persistence, Theme
 */

// --- 1. GAME DATA (50 Questions) ---
const questions = [
    // Basics
    { q: "Water", a: "Água", w: "Suco" },
    { q: "Beer", a: "Cerveja", w: "Vinho" },
    { q: "Beach", a: "Praia", w: "Campo" },
    { q: "Thanks", a: "Obrigado", w: "Por favor" },
    { q: "Hello", a: "Olá", w: "Adeus" },
    { q: "Good morning", a: "Bom dia", w: "Boa noite" },
    { q: "Yes", a: "Sim", w: "Não" },
    { q: "Maybe", a: "Talvez", w: "Nunca" },
    { q: "Girl", a: "Menina", w: "Menino" },
    { q: "Boy", a: "Menino", w: "Gato" },
    { q: "Dog", a: "Cachorro", w: "Pássaro" },
    { q: "Cat", a: "Gato", w: "Peixe" },
    { q: "House", a: "Casa", w: "Prédio" },
    { q: "Car", a: "Carro", w: "Ônibus" },
    { q: "Food", a: "Comida", w: "Bebida" },
    { q: "Coffee", a: "Café", w: "Leite" },
    { q: "Party", a: "Festa", w: "Reunião" },
    { q: "Friend", a: "Amigo", w: "Inimigo" },
    { q: "Money", a: "Dinheiro", w: "Cartão" },
    { q: "Kiss", a: "Beijo", w: "Abraço" },
    
    // Intermediate / Slang
    { q: "Where is the bathroom?", a: "Onde fica o banheiro?", w: "Onde está a cozinha?" },
    { q: "How much is it?", a: "Quanto custa?", w: "Que horas são?" },
    { q: "Cool!", a: "Legal!", w: "Chato!" },
    { q: "What's up?", a: "E aí?", w: "E agora?" },
    { q: "Excuse me", a: "Com licença", w: "Desculpa" },
    { q: "I don't understand", a: "Não entendi", w: "Não quero" },
    { q: "Can I have the bill?", a: "A conta, por favor?", w: "O menu, por favor?" },
    { q: "Cheers!", a: "Saúde!", w: "Parabéns!" },
    { q: "Good vibes", a: "Alto astral", w: "Baixo astral" },
    { q: "Boyfriend", a: "Namorado", w: "Marido" },
    { q: "Girlfriend", a: "Namorada", w: "Esposa" },
    { q: "Breakfast", a: "Café da manhã", w: "Almoço" },
    { q: "Lunch", a: "Almoço", w: "Jantar" },
    { q: "Dinner", a: "Jantar", w: "Lanche" },
    { q: "Wait a minute", a: "Espera um pouco", w: "Vamos agora" },
    { q: "I'm hungry", a: "Estou com fome", w: "Estou com sede" },
    { q: "It's hot", a: "Está calor", w: "Está frio" },
    { q: "Beautiful", a: "Lindo", w: "Feio" },
    { q: "Of course", a: "Com certeza", w: "Talvez não" },
    { q: "Let's go!", a: "Bora!", w: "Para!" },
    
    // Phrases
    { q: "Nice to meet you", a: "Prazer em conhecer", w: "Até logo" },
    { q: "I speak a little", a: "Falo um pouco", w: "Falo muito" },
    { q: "Do you have WiFi?", a: "Tem WiFi?", w: "Tem água?" },
    { q: "Help me", a: "Me ajuda", w: "Me deixa" },
    { q: "Be careful", a: "Cuidado", w: "Rápido" },
    { q: "I love Brazil", a: "Eu amo o Brasil", w: "Eu odeio o Brasil" },
    { q: "Everything is good", a: "Tudo joia", w: "Tudo ruim" },
    { q: "Dude/Bro", a: "Mano", w: "Senhor" },
    { q: "Wow!", a: "Nossa!", w: "Credo!" },
    { q: "See you later", a: "Até mais", w: "Adeus para sempre" }
];

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
