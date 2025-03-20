class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
        this.amigos = [];
        this.postagens = [];
    }

    adicionarAmigo(amigo) {
        if (!this.amigos.includes(amigo)) {
            this.amigos.push(amigo);
            amigo.amigos.push(this); // Amizade é recíproca
            console.log(${this.nome} adicionou ${amigo.nome} como amigo.);
        } else {
            console.log(${amigo.nome} já é amigo de ${this.nome}.);
        }
    }

    criarPostagem(mensagem) {
        const postagem = new Postagem(this, mensagem);
        this.postagens.push(postagem);
        console.log(${this.nome} fez uma nova postagem: "${mensagem}");
    }

    exibirPostagens() {
        console.log(Postagens de ${this.nome}:);
        this.postagens.forEach(post => console.log(- ${post.mensagem} (curtidas: ${post.curtidas})));
    }
}

class Postagem {
    constructor(autor, mensagem) {
        this.autor = autor;
        this.mensagem = mensagem;
        this.curtidas = 0;
        this.comentarios = [];
    }

    curtir() {
        this.curtidas++;
        console.log(Postagem de ${this.autor.nome} recebeu uma curtida!);
    }

    comentar(usuario, mensagem) {
        const comentario = new Comentario(usuario, mensagem);
        this.comentarios.push(comentario);
        console.log(${usuario.nome} comentou na postagem de ${this.autor.nome}: "${mensagem}");
    }
}

class Comentario {
    constructor(usuario, mensagem) {
        this.usuario = usuario;
        this.mensagem = mensagem;
    }
}

// Testando a Rede Social
const usuario1 = new Usuario("Alice", "alice@email.com");
const usuario2 = new Usuario("Bob", "bob@email.com");

usuario1.adicionarAmigo(usuario2);
usuario1.criarPostagem("Olá, mundo!");
usuario1.exibirPostagens();

const postagem = usuario1.postagens[0];
postagem.curtir();
usuario2.comentar(postagem, "Muito legal!");