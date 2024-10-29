const animais = [
    {numero: 1, nome: "Apapá", img: "./imgs/peixeimg/apapa.jpg", link: "/animal-card/Apapa.html"},
    {numero: 2, nome: "Arraia de água doce", img: "./imgs/peixeimg/ArraiaAguaDoce.jpg", link: "/animal-card/arraia.html"},
    {numero: 3, nome: "Bagre", img: "./imgs/peixeimg/bagre.jpg", link: "/animal-card/bagre.html"},
    {numero: 4, nome: "Cachara", img: "./imgs/peixeimg/cachara.jpg", link: "/animal-card/cachara.html"},
    {numero: 5, nome: "Curimatã", img: "./imgs/peixeimg/curimata.jpg", link: "/animal-card/curimata.html"},
    {numero: 6, nome: "Dourado", img: "./imgs/peixeimg/Dourado.jpg", link: "/animal-card/dourado.html"},
    {numero: 7, nome: "Jaraqui", img: "./imgs/peixeimg/Jaraqui.jpg", link: "/animal-card/jaraqui.html"},
    {numero: 8, nome: "Lambari", img: "./imgs/peixeimg/lambari.jpg", link: "/animal-card/lambari.html"},
    {numero: 9, nome: "Mandi", img: "./imgs/peixeimg/mandi.jpg", link: "/animal-card/mandi.html"},
    {numero: 10, nome: "Matrinxã", img: "./imgs/peixeimg/matrinxa.jpg", link: "/animal-card/matrinxa.html"},
    {numero: 11, nome: "Pacu", img: "./imgs/peixeimg/Pacu.jpg", link: "/animal-card/pacu.html"},
    {numero: 12, nome: "Piau", img: "./imgs/peixeimg/piau.jpg", link: "/animal-card/piau.html"},
    {numero: 13, nome: "Pintado", img: "./imgs/peixeimg/Pintado.jpg", link: "/animal-card/pintado.html"},
    {numero: 14, nome: "Piracanjuba", img: "./imgs/peixeimg/piracanjuba.jpg", link: "/animal-card/piracanjuba.html"},
    {numero: 15, nome: "Pirapitinga", img: "./imgs/peixeimg/Pirapitinga.JPG", link: "/animal-card/pirapitinga.html"},
    {numero: 16, nome: "Pirarucu", img: "./imgs/peixeimg/pirarucu.jpg", link: "/animal-card/pirarucu.html"},
    {numero: 17, nome: "Surubim", img: "./imgs/peixeimg/surubim.jpg", link: "/animal-card/surubim.html"},
    {numero: 18, nome: "Tambaqui", img: "./imgs/peixeimg/Tambaqui.jpg", link: "/animal-card/tambaqui.html"},
    {numero: 19, nome: "Traíra", img: "./imgs/peixeimg/Traira.jpg", link: "/animal-card/Traíra.html"},
    {numero: 20, nome: "Tucunaré", img: "./imgs/peixeimg/tucunare.jpg", link: "/animal-card/tucunare.html"},
    {numero: 21, nome: "Rã-touro", img: "./imgs/anfibiosimg/rã touro.jfif", link: "/animal-card/anfibios/Ra-touro.html"},
    {numero: 22, nome: "Sapo-cururu", img: "./imgs/anfibiosimg/sapo cururu.webp", link: "/animal-card/anfibios/Sapo-cururu.html", apelidos: ["sapo", "cururu", "sapo grande"]},
    {numero: 23, nome: "Salamandra", img: "./imgs/anfibiosimg/salamandra.jpg", link: "/animal-card/anfibios/Salamandra.html"},
    {numero: 24, nome: "Rã-verde", img: "./imgs/anfibiosimg/ra verde.jpg", link: "/animal-card/anfibios/Ra-verde.html"},
    {numero: 25, nome: "Rã-de-vidro", img: "./imgs/anfibiosimg/ra vidro.jfif", link: "/animal-card/anfibios/Ra-de-vidro.html"},
    {numero: 26, nome: "Sapo-de-chifre", img: "./imgs/anfibiosimg/sapo de chifre.jfif", link: "/animal-card/anfibios/Sapo-de-chifre.html"},
    {numero: 27, nome: "Rã-d'água", img: "./imgs/anfibiosimg/ra dgua.webp", link: "/animal-card/anfibios/Ra-dagua.html"},
    {numero: 28, nome: "Sapo-de-patas-amarilhas", img: "./imgs/anfibiosimg/sapo de patas amarilhas.jpg", link: "/animal-card/anfibios/Sapo-de-patas-amarilhas.html"},
    {numero: 29, nome: "Rã-de-flecha", img: "./imgs/anfibiosimg/ra de flechas.webp", link: "/animal-card/anfibios/Ra-de-flecha.html"},
    {numero: 30, nome: "Rã-manteiga", img: "./imgs/anfibiosimg/ra manteiga.webp", link: "/animal-card/anfibios/Ra-manteiga.html"},
    {numero: 31, nome: "Sapo-buey", img: "./imgs/anfibiosimg/sapo buey.jpg", link: "/animal-card/anfibios/Sapo-buey.html"},
    {numero: 32, nome: "Rã-do-mato", img: "./imgs/anfibiosimg/ra do mato.jpg", link: "/animal-card/anfibios/Ra-do-mato.html"},
    {numero: 33, nome: "Sapo-gigante", img: "./imgs/anfibiosimg/sapo gigante.webp", link: "/animal-card/anfibios/Sapo-gigante.html"},
    {numero: 34, nome: "Rã-de-olhos-verdes", img: "./imgs/anfibiosimg/ra de olhos verdes.webp", link: "/animal-card/anfibios/Ra-de-olhos-verdes.html"},
    {numero: 35, nome: "Salamandra-d'água", img: "./imgs/anfibiosimg/salamandra dgua.jfif", link: "/animal-card/anfibios/Salamandra-dagua.html"},
    {numero: 36, nome: "Rã-pimenta", img: "./imgs/anfibiosimg/ra pimenta.webp", link: "/animal-card/anfibios/Ra-pimenta.html"},
    {numero: 37, nome: "Salamandra listrada", img: "./imgs/anfibiosimg/salamandra listrada.webp", link: "/animal-card/anfibios/Salamandra-listrada.html"},
    {numero: 38, nome: "Tritão-de-crista-italiano", img: "./imgs/anfibiosimg/Tritão-de-crista-italiano.webp", link: "/animal-card/anfibios/Tritao-de-crista-italiano.html"},
    {numero: 39, nome: "Tritão-marmoreado-pigmeu", img: "./imgs/anfibiosimg/Tritão-marmoreado-pigmeu.webp", link: "/animal-card/anfibios/Tritao-marmoreado-pigmeu.html"},
    {numero: 40, nome: "Salamandra-lanzai", img: "./imgs/anfibiosimg/salamandra preta.jfif", link: "/animal-card/anfibios/Salamandra-lanzai.html"},
    {numero: 41, nome: "Onça Pintada", img: "./imgs/mamiferosimg/onca-pintada.png", link: "/animal-card/mamiferos/onca-pintada.html",apelidos: ["onca","onça","onca-pintada","onça-pintada"]},
    {numero: 42, nome: "Tamanduá Bandeira", img: "./imgs/mamiferosimg/tamandua-bandeira.png", link: "/animal-card/mamiferos/tamandua-bandeira.html",apelidos: ["tamandua","tamandua bandeira","tamanduá","tamanduá bandeira","tamandua-bandeira","tamanduá-bandeira"]},
    {numero: 43, nome: "Mico-Leão-Dourado", img: "./imgs/mamiferosimg/mico-leao-dourado.png", link: "/animal-card/mamiferos/mico-leao-dourado.html",apelidos: ["mico leao","mico leao dourado","mico-leao-dourado","micoleaodourado","mico leão dourado","mico-leão-dourado"]},
    {numero: 44, nome: "Bicho Preguiça", img: "./imgs/mamiferosimg/bicho-preguica.png", link: "/animal-card/mamiferos/bicho-preguica.html",apelidos: ["bicho preguica","bicho preguiça"]},
    {numero: 45, nome: "Anta", img: "./imgs/mamiferosimg/anta-brasileira.png", link: "/animal-card/mamiferos/anta.html"},
    {numero: 46, nome: "Bugio", img: "./imgs/mamiferosimg/bugio.png", link: "/animal-card/mamiferos/bugio.html"},
    {numero: 47, nome: "Cachorro do mato", img: "./imgs/mamiferosimg/Cachorro-do-mato.png", link: "/animal-card/mamiferos/cachorro-do-mato.html"},
    {numero: 48, nome: "Gambá da orelha preta", img: "./imgs/mamiferosimg/gamba-da-orelha-preta.png", link: "/animal-card/mamiferos/gamba-da-orelha-preta.html"},
    {numero: 49, nome: "Gato maracajá", img: "./imgs/mamiferosimg/gato-maracaja.png", link: "/animal-card/mamiferos/gato-maracaja.html"},
    {numero: 50, nome: "Jaguarundi", img: "./imgs/mamiferosimg/jaguarundi.png", link: "/animal-card/mamiferos/jaguarundi.html"},
    {numero: 51, nome: "Lobo guará", img: "./imgs/mamiferosimg/lobo-guara.png", link: "/animal-card/mamiferos/lobo-guara.html",apelidos: ["loboguara","lobo guara","lobo-guara"]},
    {numero: 52, nome: "Lontra Neotropical", img: "./imgs/mamiferosimg/Lontra-Neotropical.png", link: "/animal-card/mamiferos/lontra-neotropical.html",apelidos: ["lontra"]},
    {numero: 53, nome: "Macaco aranha", img: "./imgs/mamiferosimg/macaco-aranha.png", link: "/animal-card/mamiferos/macaco-aranha.html",apelidos: ["macacoaranha","macaco-aranha"]},
    {numero: 54, nome: "Macaco prego", img: "./imgs/mamiferosimg/macaco-prego.png", link: "/animal-card/mamiferos/macaco-prego.html",apelidos: ["macacoprego","macaco-prego"]},
    {numero: 55, nome: "Porco do Mato", img: "./imgs/mamiferosimg/porco-do-mato.png", link: "/animal-card/mamiferos/porco-do-mato.html"},
    {numero: 56, nome: "Queixada", img: "./imgs/mamiferosimg/queixada.png", link: "/animal-card/mamiferos/queixada.html"},
    {numero: 57, nome: "Raposa-do-Campo", img: "./imgs/mamiferosimg/raposa-do-campo.png", link: "/animal-card/mamiferos/raposa-do-campo.html",apelidos: ["raposa"]},
    {numero: 58, nome: "Tatu-bola", img: "./imgs/mamiferosimg/tatu-bola.png", link: "/animal-card/mamiferos/tatu-bola.html",apelidos: ["tatu", "tatubola","tatu bola"]},
    {numero: 59, nome: "Veado-catingueiro", img: "./imgs/mamiferosimg/veado-catingueiro.png", link: "/animal-card/mamiferos/veado-catingueiro.html",apelidos: ["viado", "veado","catingueiro"]},
    {numero: 60, nome: "Capivara", img: "./imgs/mamiferosimg/capivara.png", link: "/animal-card/mamiferos/capivara.html"},
];
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function pesquisarAnimal() {
    const input = removerAcentos(document.getElementById("searchInput").value.toLowerCase());

    const animalEncontrado = animais.find(animal => 
        removerAcentos(animal.nome.toLowerCase()) === input || 
        (animal.apelidos?.some(apelido => removerAcentos(apelido.toLowerCase()) === input))
    );

    if (animalEncontrado) {
        window.location.href = animalEncontrado.link;
    } else {
        alert("Animal não encontrado. Tente novamente.");
    }
}

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("search-button");

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        searchButton.click();   
    }
});
window.onload = function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = ''; 
};

