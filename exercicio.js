//Exercício 1 – Sistema de Login
//Crie um objeto usuario com:
//login
//senha
//tipo
//Depois, exiba a mensagem:
//O login do administrador é admin e a senha é 1234, muito fraca por sinal.

let usuario = {
    login: "admin",
    senha: "1234",
    tipo: "administrador"
};
console.log("O login do " + usuario.tipo + " é " + usuario.login + 
" e a senha é " + usuario.senha + ", muito fraca por sinal.");
//________________________________________________________________________________________
//Exercício 2 – Cadastro de Aluno
//Crie um objeto aluno com:
//nome
//curso
//turma
//Depois, exiba a mensagem:
//O aluno Lucas está matriculado no curso de Desenvolvimento de Sistemas, na turma 2º DS.
let aluno = {
    nome: "Lucas",
    curso: "Desenvolviento de sistemas",
    turma: "2 DS",
};
console.log("O aluno " + aluno.nome + " está matriculado no curso de " + aluno.curso + " na turma " + aluno.turma )

//Exercício 3 – Professor
//Crie um objeto professor com:
//nome
//disciplina
//turno
//Depois, exiba a mensagem:
//O professor Carlos ministra a disciplina de JavaScript no turno da manhã.

let professor = {
    nome: "Carlos",
    disciplina: "JavaScript",
    turno: "manhã",
};
console.log("O professor " + professor.nome + " ministra a disciplina de " + professor.disciplina + " no turno da " + professor.turno)


//Exercício 4 – Empresa
//Crie um objeto empresa com:
//nome
//area
//cidade
//Depois, exiba a mensagem:
//A empresa Tech Solutions atua na área de Tecnologia e fica em Fortaleza.
let empresa = {
    nome: "Tech Solutions",
    area: "Tecnologia",
    cidade: "Fortaleza"
};
console.log("A empresa " + empresa.nome + " atua na área de " + empresa.area + 
" e fica em " + empresa.cidade);
//____________________________________________________________________________________________________________________________________

//Exercício 5 – Computador
//Crie um objeto computador com:
//marca
//processador
//memoria
//Depois, exiba a mensagem:
//O computador da marca Dell possui processador Intel i5 e memória de 8GB.
let computador = {
    marca: "Dell",
    processador: "Intel i5",
    memoria: "8GB",
};

console.log("O computador da marca " + computador.marca + " possui o processador " + computador.processador + " e memória de " + computador.memoria)
//______________________________________________________________________________________________________________________________________

//Exercício 6 – Livro
//Crie um objeto livro com:
//titulo
//autor
//paginas
//Depois, exiba a mensagem:
//O livro JavaScript Básico foi escrito por Ana Silva e possui 200 páginas.

let livro = {
    titulo: "JavaScript",
    autor: "Ana Silva",
    paginas:"200 páginas",
};
console.log("O livro " + livro.titulo + " foi escrito por " + livro.autor + " e possui " + livro.paginas )
//________________________________________________________________________________________________________________________________________

//Exercício 7 – Filme
//Crie um objeto filme com:
//nome
//genero
//ano
//Depois, exiba a mensagem:
//O filme Matrix é do gênero Ficção e foi lançado em 1999.
let filme = {
    nome: "Matrix",
    genero:"Ficção",
    ano:"1999",

};
console.log("O filme " + filme.nome + " é do gênero " + filme.genero + " e foi lançado em " + filme.ano)
//_______________________________________________________________________________________________________________________________________

//Exercício 8 – Jogo
//Crie um objeto jogo com:
//nome
//plataforma
//genero
//Depois, exiba a mensagem:
//O jogo Minecraft roda na plataforma PC e pertence ao gênero Sandbox.
let jogo = {
    nome: "Minecraft",
    plataforma:"PC",
    genero:"Sandbox"
};
console.log("O jogo " + jogo.nome + " roda na plataforma " + jogo.plataforma + " e pertence ao gênero " + jogo.genero )
//_______________________________________________________________________________________________________________________________________

//Exercício 9 – Conta de Usuário
//Crie um objeto conta com:
//usuario
//senha
//nivel
//Depois, exiba a mensagem:
//O usuário eduardo possui nível administrador e utiliza a senha 1234, muito fraca por sinal.
let conta = {
    usuario: "Eduardo",
    senha: "1234",
    nivel: "administrador",
};

console.log("O usuário " + conta.usuario + " possui nivel " + conta.nivel + " e utiliza a senha " + conta.senha + " que é muito fraca por sinal.")

//____________________________________________________________________________________________________________________________________

//Exercício 10 – Cadastro de Usuário
//Crie um objeto chamado conta para representar o cadastro de um usuário.

//O objeto deve possuir as seguintes propriedades:
//usuario
//senha
//nome
//email
//nivel
//curso
//turma
//idade

//Utilize os seguintes dados:
//Usuário: eduardo
//Senha: 1234
//Nome: Eduardo Silva
//E-mail: eduardo@email.com
//Nível: administrador
//Curso: Desenvolvimento de Sistemas
//Turma: DS 2
//Idade: 18

let cadastro = {
    usuario:"Eduardo",
    senha:"1234",
    nome: "Eduardo Silva",
    email: "eduardo@gmail.com",
    nivel:"administrador",
    curso:"Desenvolvimento de Sistemas",
    turma:"DS 2",
    idade:"18",

};

console.log("O usuário " + cadastro.usuario + " de " + cadastro.idade + " anos, está matriculado no curso de " + cadastro.curso + ", na turma " + cadastro.turma + ". Seu nível de acesso é " + cadastro.nivel + " e seu email é " + cadastro.email + ". A senha cadastrada é " + cadastro.senha )

//O usuário eduardo, de 18 anos, está matriculado no curso de Desenvolvimento de Sistemas, turma DS 2. Seu nível de acesso é administrador e seu e-mail é eduardo@email.com. A senha cadastrada é 1234.