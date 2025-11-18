// ==========================================
// NAVEGAÇÃO ENTRE PÁGINAS
// ==========================================

const mainPage = document.getElementById('mainPage');
const featuresPage = document.getElementById('featuresPage');
const exploreButton = document.getElementById('exploreButton');
const backButton = document.getElementById('backButton');

exploreButton.addEventListener('click', function() {
    mainPage.style.display = 'none';
    featuresPage.style.display = 'flex';
    window.scrollTo(0, 0);
});

backButton.addEventListener('click', function() {
    featuresPage.style.display = 'none';
    mainPage.style.display = 'flex';
    window.scrollTo(0, 0);
});

// ==========================================
// CONFIGURAÇÕES - PERSONALIZE AQUI
// ==========================================

// Data de início do relacionamento
const startDate = new Date('2023-12-04T16:44:44');

// Data do próximo aniversário (mês e dia)
const anniversaryMonth = 12; // Dezembro
const anniversaryDay = 4;

// Motivos aleatórios para "Por que eu te amo"
const loveReasons = [
    "Porque seu sorriso ilumina meu dia ☀️",
    "Porque você me faz ser uma pessoa melhor 🌟",
    "Porque seu abraço é o meu lugar favorito 🤗",
    "Porque você me entende como ninguém 💭",
    "Porque cada momento ao seu lado é especial ✨",
    "Porque você me faz rir até nas horas difíceis 😄",
    "Porque seu carinho aquece meu coração 💝",
    "Porque você é meu melhor amigo e amor 👫",
    "Porque você me apoia em tudo 💪",
    "Porque você é simplesmente incrível 🌈",
    "Porque acordar pensando em você é maravilhoso 🌅",
    "Porque você me completa de um jeito único 🧩",
    "Porque seus olhos me fazem esquecer o mundo 👁️",
    "Porque você é meu porto seguro ⚓",
    "Porque cada dia com você é uma aventura 🎢"
];

// ==========================================
// CRONÔMETRO PRINCIPAL
// ==========================================

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('timer').textContent = 
        `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

updateTimer();
setInterval(updateTimer, 1000);

// ==========================================
// CONTADOR REGRESSIVO PARA ANIVERSÁRIO
// ==========================================

function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Próximo aniversário
    let nextAnniversary = new Date(currentYear, anniversaryMonth - 1, anniversaryDay);
    
    // Se já passou este ano, conta para o próximo
    if (now > nextAnniversary) {
        nextAnniversary = new Date(currentYear + 1, anniversaryMonth - 1, anniversaryDay);
    }
    
    const diff = nextAnniversary - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').textContent = 
        `${days} dias, ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ==========================================
// CONTADOR DE "EU TE AMO"
// ==========================================

let loveCount = parseInt(localStorage.getItem('loveCount')) || 0;
document.getElementById('loveCount').textContent = loveCount;

document.getElementById('loveButton').addEventListener('click', function() {
    loveCount++;
    localStorage.setItem('loveCount', loveCount);
    document.getElementById('loveCount').textContent = loveCount;
    
    // Animação do botão
    this.style.transform = 'scale(1.2)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
    
    // Cria um coração flutuante no clique
    createFloatingHeart(event.clientX, event.clientY);
});

// ==========================================
// MODAL DA CARTA DE AMOR
// ==========================================

const modal = document.getElementById('letterModal');
const letterButton = document.getElementById('letterButton');
const closeModal = document.getElementById('closeModal');

letterButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// ==========================================
// GERADOR DE MOTIVOS ALEATÓRIOS
// ==========================================

document.getElementById('reasonButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * loveReasons.length);
    const reasonText = document.getElementById('reasonText');
    
    // Animação de fade
    reasonText.style.opacity = '0';
    
    setTimeout(() => {
        reasonText.textContent = loveReasons[randomIndex];
        reasonText.style.opacity = '1';
    }, 300);
});

// ==========================================
// CORAÇÕES FLUTUANTES ANIMADOS
// ==========================================

function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '♥';
    heart.className = 'floating-heart';
    heart.style.left = (x || Math.random() * window.innerWidth) + 'px';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    
    document.getElementById('floatingHearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Cria corações continuamente
setInterval(() => {
    createFloatingHeart();
}, 2000);

// Cria alguns corações iniciais
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        createFloatingHeart();
    }, i * 400);
}

// ==========================================
// ADICIONAR FOTO À GALERIA
// ==========================================

// Exemplo de como adicionar fotos programaticamente
// Descomente e personalize conforme necessário

/*
const photos = [
    { url: 'foto1.jpg', caption: 'Primeiro encontro ♥' },
    { url: 'foto2.jpg', caption: 'Nosso primeiro beijo ♥' },
    { url: 'foto3.jpg', caption: 'Viagem inesquecível ♥' },
    { url: 'foto4.jpg', caption: 'Momento especial ♥' }
];

const gallery = document.getElementById('gallery');
gallery.innerHTML = ''; // Limpa a galeria

photos.forEach(photo => {
    const polaroid = document.createElement('div');
    polaroid.className = 'polaroid';
    polaroid.innerHTML = `
        <div class="photo-container">
            <img src="${photo.url}" alt="Nossa foto">
        </div>
        <div class="caption">${photo.caption}</div>
    `;
    gallery.appendChild(polaroid);
});
*/

// ==========================================
// EFEITO SMOOTH SCROLL NA GALERIA
// ==========================================

const galleryScroll = document.querySelector('.gallery-scroll');
if (galleryScroll) {
    galleryScroll.style.scrollBehavior = 'smooth';
}