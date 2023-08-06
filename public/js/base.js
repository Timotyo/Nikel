const nome = "Arthur Timm";
let nome2 = "";
let pessoaDefault = {
    nome: "Arthur Timm",
    idade: "19",
    trabalho: "Desempregado"
}

let nomes = ["Arthur Timm", "João Mario", "Pedro Pascal"];
let pessoas = [
    {
        nome: "Arthur Timm",
    idade: "19",
    trabalho: "Desempregado"
    },
    {
        nome: "João Mario",
    idade: "26",
    trabalho: "Futebanaldo"
    }
];

function alterarNome() {
    nome2 = "Maria silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Vamos alterar recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("--------IMPRIMOR PESSOAS--------")
    pessoas.forEach((item)=> {
      console.log("Nome");
      console.log(item.nome);  

      console.log("Idade:");
      console.log(item.idade);
    
     console.log("Trabalho:");
      console.log(item.trabalho);
     
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Pascal",
    idade: "45",
    trabalho:"Aposentado"
});

console.log(pessoas);

//imprimirPessoa(pessoaDefault);


//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva Pereira");

//alterarNome();