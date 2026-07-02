document.addEventListener('DOMContentLoaded', () => {
   
    // 1. MODO ESCURO
    const btnDarkMode = document.getElementById('toggle-dark-mode');
   
    if (btnDarkMode) {
        btnDarkMode.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
           
            if (document.body.classList.contains('dark-mode')) {
                btnDarkMode.textContent = '☀️ Modo Claro';
            } else {
                btnDarkMode.textContent = '🌓 Modo Escuro';
            }
        });
    }

    // 2. VALIDADOR DO QUIZ
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');

    if (quizForm && quizResult) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede a página de dar F5

            // Pega o input marcado
            const selected = document.querySelector('input[name="quiz-answer"]:checked');
           
            if (!selected) return;

            const resposta = selected.value;

            // Reseta classes antigas
            quizResult.className = '';
            quizResult.style.display = 'block'; // Torna visível

            // Verifica e manipula o DOM
            if (resposta === 'correta') {
                quizResult.textContent = '✅ Resposta Correta! Mídias bombásticas criadas por IA exigem verificação rigorosa antes do compartilhamento para frear a desinformação.';
                quizResult.classList.add('correct');
            } else {
                quizResult.textContent = '❌ Ops, resposta incorreta! Compartilhar sem checar ou acreditar cegamente alimenta redes de desinformação automatizada por IA.';
                quizResult.classList.add('wrong');
            }
        });
    }

    // --- NOVAS FUNCIONALIDADES ADICIONADAS ABAIXO ---

    // 3. INTERATIVIDADE DO CHECKLIST ANTI-FAKE
    const checkboxes = document.querySelectorAll('.checklist-ia input[type="checkbox"]');
   
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const total = checkboxes.length;
            const marcados = document.querySelectorAll('.checklist-ia input[type="checkbox"]:checked').length;
           
            // Adiciona um efeito visual no texto do item marcado (opcional via CSS)
            if (checkbox.checked) {
                checkbox.parentElement.style.opacity = '0.6';
            } else {
                checkbox.parentElement.style.opacity = '1';
            }

            // Se todos os filtros de segurança forem marcados, exibe um alerta de "Cidadão Digital Seguro"
            if (marcados === total) {
                setTimeout(() => {
                    alert('🛡️ Excelente! Você aplicou todos os filtros de segurança. Conteúdo verificado e seguro para navegação!');
                }, 300);
            }
        });
    });

    // 4. ANIMAÇÃO SUAVE AO ROLAR A PÁGINA (SCROLL REVEAL)
    // Seleciona todas as seções principais da página
    const sections = document.querySelectorAll('main section');

    const revealSections = () => {
        const triggerBottom = window.innerHeight * 0.85; // Define o ponto de ativação na tela

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            // Se a seção entrar na área visível, adiciona a classe que ativa a animação
            if (sectionTop < triggerBottom) {
                section.classList.add('active-reveal');
            }
        });
    };

    // Executa uma vez ao carregar para garantir que o topo já apareça animado
    revealSections();
   
    // Escuta o evento de scroll do navegador
    window.addEventListener('scroll', revealSections);
});
