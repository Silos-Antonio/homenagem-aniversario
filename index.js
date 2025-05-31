document.addEventListener('DOMContentLoaded', () => {
    // Elementos do Presente
    const laco = document.getElementById('laco');
    const fitaEsquerda = document.querySelector('.fita-esquerda');
    const fitaDireita = document.querySelector('.fita-direita');
    const fitaCentral = document.getElementById("fita-central");
    const embrulho = document.querySelector('.embrulho-presente');
    const emojiEl = document.getElementById('emoji');
    const musicaPresenteEl = document.getElementById('musicaPresente'); // Certifique-se que existe no HTML

    // Elementos do Conteúdo Inicial e Quiz
    const conteudoInicial = document.getElementById('conteudo-inicial');
    const btnInicio = document.getElementById('btn-inicio');
    const containerQuiz = document.getElementById('container-quiz');
    // const tituloQuizEl = document.getElementById('titulo-quiz'); // Descomente se usar
    // const subtituloQuizEl = document.getElementById('subtitulo-quiz'); // Descomente se usar
    const perguntaEl = document.getElementById('pergunta');
    const containerOpcoes = document.getElementById('container-opcoes');
    const feedbackEl = document.getElementById('feedback');
    const mensagemConfirmacao = document.getElementById('confirmacao-identidade');

    // --- CONFIGURAÇÕES DO QUIZ ---
    const questions = [
        {
            question: "Qual foi o lugar exato do nosso primeiro beijo inesquecível? 😏",
            options: ["No cinema escurinho", "Em uma avenida", "Em um show", "Na porta da sua casa antiga"],
            answer: "Em uma avenida"
        },
        {
            question: "Qual seu nível de beleza segundo MINHA opinião? 👀",
            options: ["Absurdo", "Extremo", "Ilimitado", "Todas as opções anteriores"],
            answer: "Todas as opções anteriores"
        },
        {
            question: "Qual a sua comida favorita? Essa vai ser difícil. 😂",
            options: ["Pizza", "Lasanha", "Um BKzinho", "Todas são maravilhosas!"],
            answer: "Lasanha"
        },
        {
            question: "Qual foi nosso primeiro apelido carinhoso? 🤗",
            options: ["Bebê", "Mozu", "ChuChu", "Mozão"],
            answer: "Mozu"
        },
    ];

    let currentQuestionIndex = 0;
    let correctAnswersCount = 0;
    const minCorrectAnswers = 2;

    // --- FUNÇÕES DO QUIZ ---
    function iniciarQuiz() {
        conteudoInicial.style.display = 'none';
        containerQuiz.style.display = 'block';
        currentQuestionIndex = 0;
        correctAnswersCount = 0;
        feedbackEl.textContent = '';
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            perguntaEl.textContent = currentQuestion.question;
            containerOpcoes.innerHTML = '';
            feedbackEl.textContent = '';
            currentQuestion.options.forEach(optionText => {
                const button = document.createElement('button');
                button.textContent = optionText;
                button.classList.add('btn-opcao');
                button.addEventListener('click', () => handleAnswer(optionText, currentQuestion.answer));
                containerOpcoes.appendChild(button);
            });
        } else {
            showQuizResult();
        }
    }

    function handleAnswer(selectedOption, correctAnswer) {
        Array.from(containerOpcoes.children).forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correta');
            } else if (btn.textContent === selectedOption) {
                btn.classList.add('incorreta');
            }
        });
        if (selectedOption === correctAnswer) {
            feedbackEl.textContent = "Acertou! 😍";
            feedbackEl.style.color = "#90ee90";
            correctAnswersCount++;
        } else {
            feedbackEl.textContent = "Ops, não foi essa... 🤔";
            feedbackEl.style.color = "#ff9999";
        }
        currentQuestionIndex++;
        setTimeout(() => {
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showQuizResult();
            }
        }, 2000);
    }

    function showQuizResult() {
        containerQuiz.style.display = 'none';
        mensagemConfirmacao.style.display = 'block';
        if (correctAnswersCount >= minCorrectAnswers) {
            mensagemConfirmacao.querySelector('h2').textContent = "❤️ Identidade confirmada! Não, não eram 47 perguntas de verdade. Era só para testar sua curiosidade... 😏";
            mensagemConfirmacao.querySelector('p').textContent = "Você provou que é você mesma!";
            if(emojiEl) emojiEl.textContent = '🌹';
        } else {
            mensagemConfirmacao.querySelector('h2').textContent = "Identidade Quase Lá... 😄";
            mensagemConfirmacao.querySelector('p').textContent = "Algumas escaparam, mas seu charme me convenceu! Como eu sei que só você vai poder ter acesso à essa página, pode abrir o presente, vai!";
            if(emojiEl) emojiEl.textContent = '💖';
        }
        setTimeout(() => {
            mensagemConfirmacao.style.display = 'none';
            embrulho.style.display = 'flex';
            laco.classList.add('interacao-pulso');
        }, 7000);
    }

    // --- LÓGICA DE ABERTURA DO PRESENTE ---
    function openPresent() {
        laco.removeEventListener('click', openPresent);
        laco.classList.remove('interacao-pulso');

        laco.style.transform = 'translateY(-60px) scale(0.7)';
        laco.style.opacity = '0';
        laco.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';

        if(fitaEsquerda) fitaEsquerda.classList.add('animar-recolher');
        if(fitaDireita) fitaDireita.classList.add('animar-recolher');
        if(fitaCentral) fitaCentral.classList.add('animar-recolher');

        // Redireciona após a animação e início da música
        setTimeout(() => {
            // MUITO IMPORTANTE: Verifique se "index.html" é o nome correto da sua página de homenagem.
            window.location.href = "homenagem.html"; 
        }, 1200); // Tempo para animações e início da música
    } // <<<< FIM CORRETO DA FUNÇÃO openPresent

    // --- INICIALIZAÇÃO --- <<<< AGORA ESTÁ DENTRO DO DOMContentLoaded
    if(containerQuiz) containerQuiz.style.display = 'none';
    if(mensagemConfirmacao) mensagemConfirmacao.style.display = 'none';
    if(embrulho) embrulho.style.display = 'none';

    if(btnInicio) {
        btnInicio.addEventListener('click', iniciarQuiz);
    }

    if(laco) {
        laco.addEventListener('click', openPresent);
    }

}); // <<<< FIM CORRETO DO 'DOMContentLoaded'
