class Livro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponivel = true;
    }
}

class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.livrosEmprestados = [];
    }

    emprestarLivro(livro) {
        if (livro.disponivel) {
            livro.disponivel = false;
            this.livrosEmprestados.push(livro);
            console.log(${this.nome} emprestou o livro: ${livro.titulo});
        } else {
            console.log(O livro "${livro.titulo}" não está disponível.);
        }
    }

    devolverLivro(livro) {
        const index = this.livrosEmprestados.indexOf(livro);
        if (index !== -1) {
            livro.disponivel = true;
            this.livrosEmprestados.splice(index, 1);
            console.log(${this.nome} devolveu o livro: ${livro.titulo});
        } else {
            console.log(O livro "${livro.titulo}" não foi emprestado por ${this.nome}.);
        }
    }
}

class Biblioteca {
    constructor(nome) {
        this.nome = nome;
        this.livros = [];
        this.usuarios = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(Livro "${livro.titulo}" adicionado à biblioteca.);
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
        console.log(Usuário "${usuario.nome}" adicionado à biblioteca.);
    }

    exibirLivrosDisponiveis() {
        console.log("Livros disponíveis:");
        this.livros.forEach(livro => {
            if (livro.disponivel) {
                console.log(- ${livro.titulo} por ${livro.autor});
            }
        });
    }

    buscarLivroPorTitulo(titulo) {
        return this.livros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    }

    buscarUsuarioPorNome(nome) {
        return this.usuarios.find(usuario => usuario.nome.toLowerCase() === nome.toLowerCase());
    }
}

// Criar biblioteca
const minhaBiblioteca = new Biblioteca("Biblioteca Central");

// Função para exibir o menu
function exibirMenu() {
    let opcao;
    do {
        opcao = prompt(`
        Bem-vindo à ${minhaBiblioteca.nome}
        Escolha uma opção:
        1. Adicionar livro
        2. Cadastrar usuário
        3. Emprestar livro
        4. Devolver livro
        5. Exibir livros disponíveis
        6. Sair
        `);

        switch (opcao) {
            case '1':
                adicionarNovoLivro();
                break;
            case '2':
                cadastrarNovoUsuario();
                break;
            case '3':
                emprestarLivroParaUsuario();
                break;
            case '4':
                devolverLivroDoUsuario();
                break;
            case '5':
                minhaBiblioteca.exibirLivrosDisponiveis();
                break;
            case '6':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '6');
}

// Função para adicionar um novo livro
function adicionarNovoLivro() {
    const titulo = prompt("Digite o título do livro:");
    const autor = prompt("Digite o autor do livro:");
    const isbn = prompt("Digite o ISBN do livro:");
    if (titulo && autor && isbn) {
        const novoLivro = new Livro(titulo, autor, isbn);
        minhaBiblioteca.adicionarLivro(novoLivro);
    } else {
        console.log("Dados inválidos. O livro não foi adicionado.");
    }
}

// Função para cadastrar um novo usuário
function cadastrarNovoUsuario() {
    const nome = prompt("Digite o nome do usuário:");
    if (nome) {
        const novoUsuario = new Usuario(nome);
        minhaBiblioteca.adicionarUsuario(novoUsuario);
    } else {
        console.log("Nome inválido. O usuário não foi cadastrado.");
    }
}

// Função para emprestar um livro a um usuário
function emprestarLivroParaUsuario() {
    const nomeUsuario = prompt("Digite o nome do usuário:");
    const tituloLivro = prompt("Digite o título do livro:");

    const usuario = minhaBiblioteca.buscarUsuarioPorNome(nomeUsuario);
    const livro = minhaBiblioteca.buscarLivroPorTitulo(tituloLivro);

    if (usuario && livro) {
        usuario.emprestarLivro(livro);
    } else {
        console.log("Usuário ou livro não encontrado.");
    }
}

// Função para devolver um livro de um usuário
function devolverLivroDoUsuario() {
    const nomeUsuario = prompt("Digite o nome do usuário:");
    const tituloLivro = prompt("Digite o título do livro:");

    const usuario = minhaBiblioteca.buscarUsuarioPorNome(nomeUsuario);
    const livro = minhaBiblioteca.buscarLivroPorTitulo(tituloLivro);

    if (usuario && livro) {
        usuario.devolverLivro(livro);
    } else {
        console.log("Usuário ou livro não encontrado.");
    }
}

// Iniciar menu
exibirMenu();