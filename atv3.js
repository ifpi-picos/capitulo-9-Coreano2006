class Musica {
    constructor(titulo, artista, duracao, arquivo) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
        this.arquivo = arquivo;
    }

    reproduzir() {
        console.log(` Reproduzindoo: ${this.titulo} - ${this.artista}`);
    }

    pausar() {
        console.log(` Música pausada: ${this.titulo}`);
    }
}

class Artista {
    constructor(nome, foto) {
        this.nome = nome;
        this.foto = foto;
        this.musicas = [];
    }

    listaDeMusicas() {
        console.log(` músicas de ${this.nome}:`);
        this.musicas.forEach(musica => console.log(` ${musica.titulo} - ${musica.duracao} min`));
    }

    adicionarMusica(musica) {
        this.musicas.push(musica);
        console.log(` Música adicionada ao artista ${this.nome}: ${musica.titulo}`);
    }

    removerMusica(musica) {
        this.musicas = this.musicas.filter(m => m !== musica);
        console.log(` Música removida do artista ${this.nome}: ${musica.titulo}`);
    }
}

class Playlist {
    constructor(nome) {
        this.nome = nome;
        this.musicas = [];
        this.musicaAtual = 0;
    }

    adicionarMusica(musica) {
        this.musicas.push(musica);
        console.log(` Música adicionada à playlistttt ${this.nome}: ${musica.titulo}`);
    }

    removerMusica(musica) {
        this.musicas = this.musicas.filter(m => m !== musica);
        console.log(` Música removida da playlist ${this.nome}: ${musica.titulo}`);
    }

    reproduzir() {
        if (this.musicas.length === 0) {
            console.log("n tem Nenhuma música na playlist para reproduzir.");
            return;
        }
        console.log(Tocando agora: ${this.musicas[this.musicaAtual].titulo} - ${this.musicas[this.musicaAtual].artista});
    }

    avancarMusica() {
        if (this.musicaAtual < this.musicas.length - 1) {
            this.musicaAtual++;
            this.reproduzir();
        } else {
            console.log("caracaaa Já está na última música da playlist.");
        }
    }

    voltarMusica() {
        if (this.musicaAtual > 0) {
            this.musicaAtual--;
            this.reproduzir();
        } else {
            console.log("voteee Já está na primeira música da playlist.");
        }
    }
}

//musicas
const musica1 = new Musica("Blinding Lights", "The Weeknd", 3.22, "blinding_lights.mp3");
const musica2 = new Musica("Shape of You", "Ed Sheeran", 4.00, "shape_of_you.mp3");

// artistas
const artista1 = new Artista("The Weeknd", "weeknd.jpg");
const artista2 = new Artista("Ed Sheeran", "edsheeran.jpg");

// Adicionando músicas aos artistas
artista1.adicionarMusica(musica1);
artista2.adicionarMusica(musica2);

// Listando músicas de um artista
artista1.listaDeMusicas();

// criar playlist
const minhaPlaylist = new Playlist("Minhas Favoritas");

// Adicionando músicas à playlist
minhaPlaylist.adicionarMusica(musica1);
minhaPlaylist.adicionarMusica(musica2);

// Testando 
minhaPlaylist.reproduzir();
minhaPlaylist.avancarMusica();
minhaPlaylist.voltarMusica();