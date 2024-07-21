const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "o que a marcinha está fazendo?",
        alternativas: [
            {
                texto: "Assistindo dorama",
                afirmacao: "positivo"
            },
            {
                texto:  "matando um cachorro no sonho dela",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "depois de passar 8 horas assistindo dorama, marcinha decide fazer outra coisa.",
        alternativas: [
            {
                texto: "dormir para trabalhar no dia seguinte",
                afirmacao: "positivo"
            },
            {
                texto: "continuar assistindo",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "no dia seguinte, marcinha chega ao trabalho e ve a sueli batendo no eder, o que fazer?",
        alternativas: [
            {
                texto: "gritar para eles pararem a briga",
                afirmacao: "positivo"
            },
            {
                texto: "bater nos dois",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "a gerente chegou com todo o barulho, o que a marcinha deve fazer?",
        alternativas: [
            {
                texto: "se acalmar e explicar o que aconteceu",
                afirmacao: "positivo"
            },
            {
                texto: "se desesperar e dizer que a culpa nao é dela",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "depois de todo o tumulto, marcinha decide esfriar a cabeça comendo alguma coisa",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "positivo"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "negativo"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

mostraPergunta();