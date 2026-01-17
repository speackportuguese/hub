/* * Speak Like a Brazilian
 * Core Logic: Game, PWA, Persistence, Theme
 */

// --- 1. GAME DATA (50 Questions) ---
const questions = [
    // Basics (originais)
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

    // Basics (novos - apenas palavras, bem do dia a dia BR)
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

    // Intermediate / Slang (originais)
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

    // Intermediate / Slang (novos - cotidiano + gíria leve)
    { q: "I'm thirsty", a: "Tô com sede", w: "Tô com sono" },
    { q: "I'm sleepy", a: "Tô com sono", w: "Tô acordado" },
    { q: "I'm tired", a: "Tô cansado", w: "Tô animado" },
    { q: "I'm in a hurry", a: "Tô com pressa", w: "Tô de boa" },
    { q: "Wait a sec", a: "Pera aí", w: "Agora!" },
    { q: "No worries", a: "De boa", w: "Nem pensar" },
    { q: "All good?", a: "Tudo certo?", w: "Tudo errado?" },
    { q: "Let's hang out", a: "Vamos dar um rolê", w: "Vamos trabalhar" },
    { q: "That's awesome", a: "Da hora", w: "Chato" },
    { q: "Really?", a: "Sério mesmo?", w: "Tanto faz?" },
    { q: "I'm broke", a: "Tô sem grana", w: "Tô rico" },
    { q: "It's crowded", a: "Tá lotado", w: "Tá vazio" },
    { q: "I'm kidding", a: "Tô zoando", w: "Tô falando sério" },
    { q: "Calm down", a: "Fica tranquilo", w: "Se desespera" },
    { q: "No way!", a: "Nem ferrando!", w: "Com certeza!" },
    { q: "So expensive", a: "Tá caro pra caramba", w: "Tá baratinho" },
    { q: "Great job", a: "Mandou bem", w: "Mandou mal" },
    { q: "Let's get started", a: "Bora começar", w: "Bora terminar" },
    { q: "It's a mess", a: "Tá uma bagunça", w: "Tá organizado" },
    { q: "Good vibes only", a: "Só alto astral", w: "Baixo astral" },
    { q: "Hold my spot", a: "Guarda meu lugar", w: "Pega meu lugar" },
    { q: "Are you serious?", a: "Você tá falando sério?", w: "Você tá brincando?" },
    { q: "Just in case", a: "Por via das dúvidas", w: "Com certeza" },
    { q: "Take it easy", a: "Vai com calma", w: "Vai correndo" },
    { q: "Let's go already", a: "Partiu", w: "Ficou" },
    { q: "It's weird", a: "Tá esquisito", w: "Tá perfeito" },
    { q: "I'm annoyed", a: "Tô bolado", w: "Tô feliz" },
    { q: "Chill", a: "Fica de boa", w: "Fica tenso" },
    { q: "Too much talk", a: "Muita enrolação", w: "Direto ao ponto" },
    { q: "Crowd", a: "Muvuca", w: "Vazio" },

    // Phrases (originais)
    { q: "Nice to meet you", a: "Prazer em conhecer", w: "Até logo" },
    { q: "I speak a little", a: "Falo um pouco", w: "Falo muito" },
    { q: "Do you have WiFi?", a: "Tem WiFi?", w: "Tem água?" },
    { q: "Help me", a: "Me ajuda", w: "Me deixa" },
    { q: "Be careful", a: "Cuidado", w: "Rápido" },
    { q: "I love Brazil", a: "Eu amo o Brasil", w: "Eu odeio o Brasil" },
    { q: "Everything is good", a: "Tudo joia", w: "Tudo ruim" },
    { q: "Dude/Bro", a: "Mano", w: "Senhor" },
    { q: "Wow!", a: "Nossa!", w: "Credo!" },
    { q: "See you later", a: "Até mais", w: "Adeus para sempre" },

    // Phrases (novas - naturais, mais complexas, coloquiais)
    { q: "Could you help me, please?", a: "Você pode me ajudar, por favor?", w: "Você pode me atrapalhar, por favor?" },
    { q: "Where can I top up my transit card?", a: "Onde recarrego meu cartão de transporte?", w: "Onde compro carro?" },
    { q: "Can you recommend a good place to eat?", a: "Você recomenda um lugar bom pra comer?", w: "Você recomenda não comer?" },
    { q: "Do you accept card or only cash?", a: "Aceita cartão ou só dinheiro?", w: "Aceita cheque ou só pix?" },
    { q: "Can you split the bill, please?", a: "Pode dividir a conta, por favor?", w: "Pode triplicar a conta?" },
    { q: "I'm just looking, thanks", a: "Tô só dando uma olhada, valeu", w: "Quero comprar tudo" },
    { q: "I'm running a bit late", a: "Tô chegando, mas vou me atrasar um pouco", w: "Já cheguei faz tempo" },
    { q: "Let me know when you get here", a: "Me avisa quando chegar", w: "Não fala nada quando chegar" },
    { q: "Do you have any discount in cash?", a: "Tem desconto no dinheiro?", w: "Tem aumento no dinheiro?" },
    { q: "Is there a cheaper option?", a: "Tem opção mais em conta?", w: "Tem opção mais cara?" },
    { q: "I'm starving, let's eat something", a: "Tô morrendo de fome, vamos comer alguma coisa", w: "Tô sem fome, vamos comer" },
    { q: "It's really hot today, right?", a: "Hoje tá muito calor, né?", w: "Hoje tá nevando, né?" },
    { q: "I didn't quite get it, can you repeat?", a: "Não peguei direito, pode repetir?", w: "Não ouvi e tá ótimo" },
    { q: "I'll be right back", a: "Já volto", w: "Não volto" },
    { q: "Let's meet at the corner bakery", a: "Vamos nos encontrar na padaria da esquina", w: "Vamos nos perder no mercado" },
    { q: "It's not working, I think it bugged", a: "Não tá funcionando, acho que bugou", w: "Tá perfeito, só não liga" },
    { q: "Send me your location", a: "Me manda a sua localização", w: "Me manda um desenho" },
    { q: "I'm not sure, let me check", a: "Não tenho certeza, deixa eu conferir", w: "Tenho certeza sem ver" },
    { q: "If anything, call me", a: "Qualquer coisa, me chama", w: "Qualquer coisa, me esquece" },
    { q: "Deal, see you then", a: "Fechado, até lá", w: "Aberto, até nunca" },
    { q: "It was close, but it worked out", a: "Foi por pouco, mas deu certo", w: "Foi fácil e deu errado" },
    { q: "Next time it's on me", a: "Na próxima eu pago", w: "Na próxima você paga em dobro" },
    { q: "That place is always packed", a: "Aquele lugar vive lotado", w: "Aquele lugar vive vazio" },
    { q: "The traffic is terrible today", a: "O trânsito tá horrível hoje", w: "O trânsito tá lindo hoje" },
    { q: "I'm trying to save money this month", a: "Tô tentando economizar esse mês", w: "Tô queimando dinheiro" },
    { q: "Do you have a plug to charge here?", a: "Tem tomada pra carregar aqui?", w: "Tem sofá pra dormir aqui?" },
    { q: "Let's leave a bit earlier to avoid traffic", a: "Vamos sair um pouco mais cedo pra fugir do trânsito", w: "Vamos sair tarde pra pegar trânsito" },
    { q: "It's raining a lot, take an umbrella", a: "Tá chovendo pra caramba, leva um guarda-chuva", w: "Tá sol, leva um casaco" },
    { q: "We can split a ride app", a: "A gente pode rachar um app de corrida", w: "A gente pode correr a pé" },
    { q: "Thanks, that helped a lot", a: "Valeu, ajudou demais", w: "Piorou tudo" },
    { q: "Sorry, it wasn't on purpose", a: "Foi mal, não foi de propósito", w: "Foi ótimo, foi de propósito" },
    { q: "Let me think for a minute", a: "Deixa eu pensar um minuto", w: "Não preciso pensar" },
    { q: "I can't today, maybe tomorrow", a: "Hoje não dá, talvez amanhã", w: "Hoje dá e amanhã também não" },
    { q: "Can you speak a bit slower?", a: "Pode falar um pouco mais devagar?", w: "Pode falar gritando?" },
    { q: "Send it to me on WhatsApp", a: "Manda pra mim no WhatsApp", w: "Manda por fax" },
    { q: "I'll transfer by Pix", a: "Vou te mandar por Pix", w: "Vou te mandar por cheque" },
    { q: "Did you get the notification?", a: "Você recebeu a notificação?", w: "Você comeu a notificação?" },
    { q: "Do you have change?", a: "Você tem troco?", w: "Você tem troca?" },
    { q: "Is there a line?", a: "Tem fila?", w: "Tem sofá?" },
    { q: "I'm just teasing", a: "Tô só brincando", w: "Tô xingando" },
    { q: "Take a quick look", a: "Dá uma olhadinha rapidinho", w: "Fecha os olhos" },
    { q: "Let's go, time's running", a: "Bora, o tempo tá correndo", w: "Para, o tempo parou" },
    { q: "Everything's fine on my side", a: "Aqui tá tudo certo", w: "Aqui tá tudo errado" },
    { q: "If it doesn't work, we try again", a: "Se não der certo, a gente tenta de novo", w: "Se não der certo, desiste pra sempre" },
    { q: "Send me a voice message", a: "Me manda um áudio", w: "Me manda uma carta" },
    { q: "I'll call you in a bit", a: "Daqui a pouco eu te ligo", w: "Nunca mais te ligo" }
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
