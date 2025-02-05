// Criando um array de alunos com nome e notas
const alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [6, 5, 7] },
    { nome: "Carlos", notas: [4, 3, 5] },
    { nome: "Diana", notas: [9, 8, 10] },
    { nome: "Eduardo", notas: [5, 6, 5] },
    { nome: "Fernanda", notas: [7, 7, 8] }
];

// Função para calcular a média das notas
function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}

// Função para exibir os alunos na lista
function exibirAlunos(lista) {
    const listaAlunos = document.getElementById("lista-alunos");
    listaAlunos.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos

    lista.forEach(aluno => {
        const media = calcularMedia(aluno.notas);
        const li = document.createElement("li");

        // Criando os elementos de nome e nota
        const nomeSpan = document.createElement("span");
        nomeSpan.textContent = aluno.nome;

        const notaSpan = document.createElement("span");
        notaSpan.textContent = media.toFixed(2); // Mostra a média com 2 casas decimais
        notaSpan.classList.add("nota");

        // Adiciona a classe de aprovado ou reprovado
        if (media >= 6) {
            notaSpan.classList.add("aprovado");
        } else {
            notaSpan.classList.add("reprovado");
        }

        // Adiciona os elementos à lista
        li.appendChild(nomeSpan);
        li.appendChild(notaSpan);
        listaAlunos.appendChild(li);
    });
}

// Executa a função para exibir os alunos
exibirAlunos(alunos);
