// Esse arquivo controla a interatividade do site

// 1. Função para o efeito de "Reflexão" no botão do topo
const botaoHero = document.getElementById('btn-interativo');

botaoHero.addEventListener('click', () => {
    // Muda a cor do botão aleatoriamente para dar um feedback visual
    botaoHero.style.backgroundColor = '#ffffff';
    botaoHero.style.color = '#ff007f';
    
    // Mostra um alerta com uma mensagem inspiradora baseada nos slides
    alert("O Planeta não é um supermercado infinito! Vamos produzir com inteligência.");
    
    // Volta ao normal depois de 1 segundo
    setTimeout(() => {
        botaoHero.style.backgroundColor = '#ff007f';
        botaoHero.style.color = '#ffffff';
    }, 1000);
});

// 2. Efeito ao clicar nas seções de tecnologia para destacar o conteúdo
const features = document.querySelectorAll('.feature-item');

features.forEach(item => {
    item.addEventListener('click', () => {
        // Remove destaque de todos
        features.forEach(f => f.style.borderColor = '#ff007f');
        
        // Destaca apenas o que foi clicado com uma cor neon
        item.style.borderColor = '#00ffcc'; // Um azul turquesa para destacar
        item.style.transform = 'scale(1.05)';
    });
});

// 3. Revelar mensagem de agradecimento ao chegar no final
window.addEventListener('scroll', () => {
    const finalSection = document.getElementById('contato');
    const mensagem = document.getElementById('mensagem-final');
    
    // Verifica se a seção de conclusão está visível na tela
    const posicao = finalSection.getBoundingClientRect();
    
    if(posicao.top < window.innerHeight && posicao.bottom >= 0) {
        mensagem.classList.remove('hidden');
        mensagem.style.animation = 'fadeIn 2s';
    }
});

// Mensagem no console para ajudar o estudante a ver se o código carregou
console.log("Site 'Futuro Sustentável' carregado com sucesso! Bons estudos!");