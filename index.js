const perguntas = [
    {
        pergunta: "Quam escreveu o livro O Senhor dos Anéis?",
        respostas: [
            "C.S. Lewis",
            "H. G. Hells",
            "J.R.R. Tolkien",
        ],
        correta: 2
    },
    {
        pergunta: "Quantos livros compõe a série?",
        respostas: [
            "3 livros",
            "1 livro",
            "6 livros",
        ],
        correta: 2
    },
    {
        pergunta: "Quem matou Gandalf?",
        respostas: [
            "Sauron",
            "Saruman",
            "Balrog",
        ],
        correta: 2
    },
    {
        pergunta: "Quem foi amigo de Frodo Bolseiro em sua caminhada para a Terra Sombria?",
        respostas: [
            "Pippin",
            "Aragorn",
            "Samwise Gamgee",
        ],
        correta: 2
    },
    {
        pergunta: "Qual o nome da criatura que foi dominado pelo Um Anel?",
        respostas: [
            "Smaug",
            "Galadriel",
            "Gollum",
        ],
        correta: 2
    },
    {
        pergunta: "Qual o nome do Elfo que fez parte da Sociedade do Anel?",
        respostas: [
            "Elrond",
            "Thranduil",
            "Legolas",
        ],
        correta: 2
    },
    {
        pergunta: "Quantos aneis foram dado aos homens?",
        respostas: [
            "9",
            "7",
            "3",
        ],
        correta: 0
    },
    {
        pergunta: "Qual o nome do Reino de Aragorn?",
        respostas: [
            "Rohan",
            "Gondor",
            "Valfenda",
        ],
        correta: 1
    },
    {
        pergunta: "Qual o nome do Mago da floresta?",
        respostas: [
            "Saruman",
            "Radagast",
            "Alatar",
        ],
        correta: 1
    },
    {
        pergunta: "Qual foi amigo de Frodo Bolseiro no condado?",
        respostas: [
            "Peregrin Took",
            "Gimli",
            "Boromir",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta


    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        // arrow function
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }


        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()



    quiz.appendChild(quizItem)
}