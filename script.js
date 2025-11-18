// CONFIGURE AQUI: Data de início do relacionamento
const startDate = new Date('2024-01-01T00:00:00');

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

// Atualiza o cronômetro a cada segundo
updateTimer();
setInterval(updateTimer, 1000);