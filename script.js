/* * Speak Like a Brazilian
 * Core Logic: Game, PWA, Persistence, Theme, and Numeric Audio Handling
 */

// --- 1. GAME DATA (123 Questions mapped to IDs for assets/songs/X.mp3) ---
const questions = [
    { id: 1, q: "Water", a: "Água", w: "Suco" },
    { id: 2, q: "Beer", a: "Cerveja", w: "Vinho" },
    { id: 3, q: "Beach", a: "Praia", w: "Campo" },
    { id: 4, q: "Thanks", a: "Obrigado", w: "Por favor" },
    { id: 5, q: "Hello", a: "Olá", w: "Adeus" },
    { id: 6, q: "Lunchbox", a: "Marmita", w: "Panela" },
    { id: 7, q: "Flip-flops", a: "Chinelo", w: "Tênis" },
    { id: 8, q: "Cell phone", a: "Celular", w: "Telefone fixo" },
    { id: 9, q: "Keys", a: "Chaves", w: "Carteira" },
    { id: 10, q: "Wallet", a: "Carteira", w: "Bolsa" },
    { id: 11, q: "Bus", a: "Ônibus", w: "Metrô" },
    { id: 12, q: "Subway", a: "Metrô", w: "Avião" },
    { id: 13, q: "Ticket", a: "Passagem", w: "Bilhete de estacionamento" },
    { id: 14, q: "Street", a: "Rua", w: "Estrada" },
    { id: 15, q: "Corner", a: "Esquina", w: "Centro" },
    { id: 16, q: "Queue/Line", a: "Fila", w: "Mesa" },
    { id: 17, q: "Change (money)", a: "Troco", w: "Troca" },
    { id: 18, q: "Receipt", a: "Nota fiscal", w: "Anotação" },
    { id: 19, q: "ID (document)", a: "RG", w: "CPF" },
    { id: 20, q: "Taxpayer number", a: "CPF", w: "RG" },
    { id: 21, q: "Snack", a: "Lanche", w: "Jantar" },
    { id: 22, q: "Soda", a: "Refrigerante", w: "Suco" },
    { id: 23, q: "Straw", a: "Canudo", w: "Colher" },
    { id: 24, q: "Napkin", a: "Guardanapo", w: "Prato" },
    { id: 25, q: "Knife", a: "Faca", w: "Garfo" },
    { id: 26, q: "Fork", a: "Garfo", w: "Colher" },
    { id: 27, q: "Spoon", a: "Colher", w: "Faca" },
    { id: 28, q: "Plate", a: "Prato", w: "Copo" },
    { id: 29, q: "Cup/Glass", a: "Copo", w: "Prato" },
    { id: 30, q: "Bottle", a: "Garrafa", w: "Copo" },
    { id: 31, q: "Trash can", a: "Lixeira", w: "Gaveta" },
    { id: 32, q: "Elevator", a: "Elevador", w: "Escada" },
    { id: 33, q: "Stairs", a: "Escada", w: "Elevador" },
    { id: 34, q: "Pharmacy", a: "Farmácia", w: "Padaria" },
    { id: 35, q: "Bakery", a: "Padaria", w: "Açougue" },
    { id: 36, q: "Butcher shop", a: "Açougue", w: "Peixaria" },
    { id: 37, q: "Change of clothes", a: "Roupa", w: "Louça" },
    { id: 38, q: "Shoes", a: "Sapatos", w: "Meias" },
    { id: 39, q: "Jacket", a: "Jaqueta", w: "Camiseta" },
    { id: 40, q: "Shorts", a: "Bermuda", w: "Calça" },
    { id: 41, q: "Flip (bus card)", a: "Cartão de ônibus", w: "Carteira de motorista" },
    { id: 42, q: "Driver's license", a: "Carteira de motorista", w: "Carteira de trabalho" },
    { id: 43, q: "Work card", a: "Carteira de trabalho", w: "Carteira de estudante" },
    { id: 44, q: "Holiday", a: "Feriado", w: "Fim de semana" },
    { id: 45, q: "Weekend", a: "Fim de semana", w: "Feriado" },
    { id: 46, q: "Cool!", a: "Legal!", w: "Chato!" },
    { id: 47, q: "What's up?", a: "E aí?", w: "E agora?" },
    { id: 48, q: "I'm thirsty", a: "Tô com sede", w: "Tô com sono" },
    { id: 49, q: "I'm sleepy", a: "Tô com sono", w: "Tô acordado" },
    { id: 50, q: "I'm tired", a: "Tô cansado", w: "Tô animado" },
    { id: 51, q: "I'm in a hurry", a: "Tô com pressa", w: "Tô de boa" },
    { id: 52, q: "Wait a sec", a: "Pera aí", w: "Agora!" },
    { id: 53, q: "No worries", a: "De boa", w: "Nem pensar" },
    { id: 54, q: "All good?", a: "Tudo certo?", w: "Tudo errado?" },
    { id: 55, q: "Let's hang out", a: "Vamos dar um rolê", w: "Vamos trabalhar" },
    { id: 56, q: "That's awesome", a: "Da hora", w: "Chato" },
    { id: 57, q: "I'm broke", a: "Tô sem grana", w: "Tô rico" },
    { id: 58, q: "It's crowded", a: "Tá lotado", w: "Tá vazio" },
    { id: 59, q: "I'm kidding", a: "Tô zoando", w: "Tô falando sério" },
    { id: 60, q: "No way!", a: "Nem ferrando!", w: "Com certeza!" },
    { id: 61, q: "So expensive", a: "Tá caro pra caramba", w: "Tá baratinho" },
    { id: 62, q: "Great job", a: "Mandou bem", w: "Mandou mal" },
    { id: 63, q: "It's a mess", a: "Tá uma bagunça", w: "Tá organizado" },
    { id: 64, q: "Hold my spot", a: "Guarda meu lugar", w: "Pega meu lugar" },
    { id: 65, q: "Let's go already", a: "Partiu", w: "Ficou" },
    { id: 66, q: "I'm annoyed", a: "Tô bolado", w: "Tô feliz" },
    { id: 67, q: "Chill", a: "Fica de boa", w: "Fica tenso" },
    { id: 68, q: "Crowd", a: "Muvuca", w: "Vazio" },
    { id: 69, q: "Could you help me?", a: "Você pode me ajudar, por favor?", w: "Você pode me atrapalhar?" },
    { id: 70, q: "Do you accept card?", a: "Aceita cartão ou só dinheiro?", w: "Aceita cheque?" },
    { id: 71, q: "I'm just looking", a: "Tô só dando uma olhada, valeu", w: "Quero comprar tudo" },
    { id: 72, q: "I'm running late", a: "Tô chegando, mas vou me atrasar", w: "Já cheguei faz tempo" },
    { id: 73, q: "Any cash discount?", a: "Tem desconto no dinheiro?", w: "Tem aumento no dinheiro?" },
    { id: 74, q: "I'll be right back", a: "Já volto", w: "Não volto" },
    { id: 75, q: "It bugged", a: "Não tá funcionando, acho que bugou", w: "Tá perfeito" },
    { id: 76, q: "Send me location", a: "Me manda a sua localização", w: "Me manda um desenho" },
    { id: 77, q: "Deal, see you then", a: "Fechado, até lá", w: "Aberto, até nunca" },
    { id: 78, q: "Next time on me", a: "Na próxima eu pago", w: "Na próxima você paga" },
    { id: 79, q: "Transfer via Pix", a: "Vou te mandar por Pix", w: "Vou te mandar por cheque" },
    { id: 80, q: "I'm just teasing", a: "Tô só brincando", w: "Tô xingando" },
    { id: 81, q: "Nice to meet you", a: "Prazer em conhecer", w: "Até logo" },
    { id: 82, q: "I speak a little", a: "Falo um pouco", w: "Falo muito" },
    { id: 83, q: "Do you have WiFi?", a: "Tem WiFi?", w: "Tem água?" },
    { id: 84, q: "Help me", a: "Me ajuda", w: "Me deixa" },
    { id: 85, q: "Be careful", a: "Cuidado", w: "Rápido" },
    { id: 86, q: "I love Brazil", a: "Eu amo o Brasil", w: "Eu odeio o Brasil" },
    { id: 87, q: "Everything is good", a: "Tudo joia", w: "Tudo ruim" },
    { id: 88, q: "Dude/Bro", a: "Mano", w: "Senhor" },
    { id: 89, q: "Wow!", a: "Nossa!", w: "Credo!" },
    { id: 90, q: "See you later", a: "Até mais", w: "Adeus para sempre" },
    { id: 91, q: "Recommend food?", a: "Você recomenda um lugar bom pra comer?", w: "Você recomenda não comer?" },
    { id: 92, q: "Split the bill?", a: "Pode dividir a conta, por favor?", w: "Pode triplicar a conta?" },
    { id: 93, q: "Let me know", a: "Me avisa quando chegar", w: "Não fala nada" },
    { id: 94, q: "Cheaper option?", a: "Tem opção mais em conta?", w: "Tem opção mais cara?" },
    { id: 95, q: "I'm starving", a: "Tô morrendo de fome, vamos comer", w: "Tô sem fome" },
    { id: 96, q: "Hot today, right?", a: "Hoje tá muito calor, né?", w: "Hoje tá nevando, né?" },
    { id: 97, q: "Repeat please?", a: "Não peguei direito, pode repetir?", w: "Não ouvi e tá ótimo" },
    { id: 98, q: "Corner bakery", a: "Vamos nos encontrar na padaria", w: "Vamos nos perder" },
    { id: 99, q: "Not sure", a: "Não tenho certeza, deixa eu conferir", w: "Tenho certeza sem ver" },
    { id: 100, q: "Call me", a: "Qualquer coisa, me chama", w: "Qualquer coisa, me esquece" },
    { id: 101, q: "Close one", a: "Foi por pouco, mas deu certo", w: "Foi fácil e deu errado" },
    { id: 102, q: "Packed place", a: "Aquele lugar vive lotado", w: "Aquele lugar vive vazio" },
    { id: 103, q: "Terrible traffic", a: "O trânsito tá horrível hoje", w: "O trânsito tá lindo" },
    { id: 104, q: "Saving money", a: "Tô tentando economizar esse mês", w: "Tô queimando dinheiro" },
    { id: 105, q: "Charging plug?", a: "Tem tomada pra carregar aqui?", w: "Tem sofá pra dormir?" },
    { id: 106, q: "Avoid traffic", a: "Vamos sair cedo pra fugir do trânsito", w: "Vamos sair tarde" },
    { id: 107, q: "Take umbrella", a: "Tá chovendo pra caramba, leva guarda-chuva", w: "Tá sol, leva casaco" },
    { id: 108, q: "Split a ride", a: "A gente pode rachar um app", w: "A gente pode correr a pé" },
    { id: 109, q: "Helped a lot", a: "Valeu, ajudou demais", w: "Piorou tudo" },
    { id: 110, q: "Not on purpose", a: "Foi mal, não foi de propósito", w: "Foi ótimo, foi de propósito" },
    { id: 111, q: "Think a minute", a: "Deixa eu pensar um minuto", w: "Não preciso pensar" },
    { id: 112, q: "Maybe tomorrow", a: "Hoje não dá, talvez amanhã", w: "Hoje dá e amanhã também" },
    { id: 113, q: "Speak slower?", a: "Pode falar um pouco mais devagar?", w: "Pode falar gritando?" },
    { id: 114, q: "Send on WhatsApp", a: "Manda pra mim no WhatsApp", w: "Manda por fax" },
    { id: 115, q: "Got notification?", a: "Você recebeu a notificação?", w: "Você comeu a notificação?" },
    { id: 116, q: "Have change?", a: "Você tem troco?", w: "Você tem troca?" },
    { id: 117, q: "Is there a line?", a: "Tem fila?", w: "Tem sofá?" },
    { id: 118, q: "Quick look", a: "Dá uma olhadinha rapidinho", w: "Fecha os olhos" },
    { id: 119, q: "Time's running", a: "Bora, o tempo tá correndo", w: "Para, o tempo parou" },
    { id: 120, q: "Fine on my side", a: "Aqui tá tudo certo", w: "Aqui tá tudo errado" },
    { id: 121, q: "Try again", a: "Se não der certo, a gente tenta de novo", w: "Desiste pra sempre" },
    { id: 122, q: "Voice message", a: "Me manda um áudio", w: "Me manda uma carta" },
    { id: 123, q: "Call in a bit", a: "Daqui a pouco eu te ligo", w: "Nunca mais te ligo" }
];

// --- 2. STATE MANAGEMENT ---
const state = {
    currentIndex: 0,
    score: 0,
    history: JSON.parse(localStorage.getItem('slb_game_state')) || { index: 0, score: 0 }
};

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

// --- 4. AUDIO HANDLER ---
function playAudio(choiceText, questionId) {
    const currentQ = questions.find(q => q.id === questionId);
    let audioFile = "";

    // Mapeamento: Correta = ID.mp3 | Errada = ID_w.mp3
    if (choiceText === currentQ.a) {
        audioFile = `assets/songs/${questionId}.mp3`;
    } else {
        audioFile = `assets/songs/${questionId}_w.mp3`;
    }

    const audio = new Audio(audioFile);
    audio.play().catch(err => console.error("Arquivo de áudio não encontrado:", audioFile));
}

// --- 5. GAME LOGIC ---

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
        // Criar Row para alinhar áudio e botão
        const row = document.createElement('div');
        row.className = 'option-row';

        // Botão de Ouvir
        const listenBtn = document.createElement('button');
        listenBtn.className = 'listen-btn';
        listenBtn.innerHTML = '🔊';
        listenBtn.onclick = (e) => {
            e.stopPropagation(); // Evita disparar o clique da resposta
            playAudio(opt, currentQ.id);
        };

        // Botão de Resposta
        const answerBtn = document.createElement('button');
        answerBtn.className = 'game-btn';
        answerBtn.textContent = opt;
        answerBtn.onclick = () => handleAnswer(answerBtn, opt, currentQ.a);

        row.appendChild(listenBtn);
        row.appendChild(answerBtn);
        elements.optionsContainer.appendChild(row);
    });
}

function handleAnswer(btn, selected, correct) {
    const allAnswerBtns = elements.optionsContainer.querySelectorAll('.game-btn');
    const allListenBtns = elements.optionsContainer.querySelectorAll('.listen-btn');
    
    allAnswerBtns.forEach(b => b.disabled = true);
    allListenBtns.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct');
        state.score += 10;
        if(navigator.vibrate) navigator.vibrate(50);
    } else {
        btn.classList.add('wrong');
        if(navigator.vibrate) navigator.vibrate([50, 50, 50]);
        allAnswerBtns.forEach(b => {
            if (b.textContent === correct) b.classList.add('correct');
        });
    }

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
    elements.scoreDisplay.textContent = `🏆 FINAL SCORE: ${state.score}`;
}

// --- 6. STREAK LOGIC ---

function initStreak() {
    const now = new Date();
    let firstVisit = localStorage.getItem('slb_first_visit');

    if (!firstVisit) {
        firstVisit = now.toISOString();
        localStorage.setItem('slb_first_visit', firstVisit);
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(firstVisit);
    const diffDays = Math.floor(Math.abs((now - firstDate) / oneDay));
    
    elements.streakCounter.textContent = `Day ${diffDays + 1}`;
}

// --- 7. THEME TOGGLE ---

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

// --- 8. PWA INSTALL ---

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if(elements.installBtn) elements.installBtn.classList.remove('hidden');
});

if(elements.installBtn) {
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
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    initStreak();
    initTheme();
});
