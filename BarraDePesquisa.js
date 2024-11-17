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
    {numero: 61, nome: "Aperema", img: "./imgs/repteisimg/aperema.jpg" ,link: "/animal-card/repteis/Aperema.html"},
    {numero: 62, nome: "Cascavel",img: "./imgs/repteisimg/cascavel.jpg" ,link: "/animal-card/repteis/cascavel.html",apelidos: ["Cascavel de bico", "Cascavel do nordeste"]},
    {numero: 63, nome: "Cobra do Milho",img: "./imgs/repteisimg/COBRA-DO-MILHO.jpg" ,link: "./animal-card/repteis/cobra-do-milho.html"},
    {numero: 64, nome: "Cotiarinha",img: "./imgs/repteisimg/cotiarinha.jpg" ,link: "./animal-card/repteis/cotiarinha.html"},
    {numero: 65, nome: "Dragão Barbudo",img: "./imgs/repteisimg/Dragão-barbudo.jpg" ,link: "./animal-card/repteis/Dragão-barbudo.html"},
    {numero: 66, nome: "Gecko Leopardo",img: "./imgs/repteisimg/GeckoLeopardo.jpg" ,link: "./animal-card/repteis/Gecko-leopardo.html",apelidos: ["Gecko"]},
    {numero: 67, nome: "Iguana",img: "./imgs/repteisimg/iguana.jpg" ,link: "./animal-card/repteis/Iguana.html"},
    {numero: 68, nome: "Jabuti Piranga",img: "./imgs/repteisimg/Jabuti-piranga.jpg" ,link: "./animal-card/repteis/Jabuti-piranga.html"},
    {numero: 69, nome: "Jabuti Tinga",img: "./imgs/repteisimg/Jabuti-tinga.jpg" ,link: "./animal-card/repteis/Jabuti-tinga.html"},
    {numero: 70, nome: "Jacaré do Pantanal",img: "./imgs/repteisimg/JacaréPantanal.jpg" ,link: "./animal-card/repteis/Jacaré-do-pantanal.html",apelidos: ["Jacaré"]},
    {numero: 71, nome: "Jacaré Tinga",img: "./imgs/repteisimg/Jacaré-tinga.jpg" ,link: "./animal-card/repteis/Jacaré-tinga.html"},
    {numero: 72, nome: "Jararaca Caiçaca ",img: "./imgs/repteisimg/Jararaca-caiçaca.jpg" ,link: "./animal-card/repteis/Jararaca-caiçaca.html"},
    {numero: 73, nome: "Jararaca Pintada",img: "./imgs/repteisimg/Jararaca-pintada.jpg" ,link: "./animal-card/repteis/jararaca-pintada.html"},
    {numero: 74, nome: "Jararacuçu",img: "./imgs/repteisimg/jararacucu.jpg" ,link: "./animal-card/repteis/Jararacuçu.html"},
    {numero: 75, nome: "Jiboia Arco Íris",img: "./imgs/repteisimg/Jiboia-arco-iris.jpg" ,link: "./animal-card/repteis/Jiboia-arco-íris.html"},
    {numero: 76, nome: "Jiboia",img: "./imgs/repteisimg/Jiboia.jpg" ,link: "/animal-card/repteis/Jiboia.html",apelidos: ["Jiboia"]},
    {numero: 77, nome: "Muçuã",img: "./imgs/repteisimg/Muçua.jpg" ,link: "./animal-card/repteis/Muçuã.html",apelidos: ["Mucua"]},
    {numero: 78, nome: "Sucuri Verde",img: "./imgs/repteisimg/Sucuri.jpg" ,link: "./animal-card/repteis/Sucuri-verde.html",apelidos: ["Sucuri","Anaconda"]},
    {numero: 79, nome: "Tartaruga da Amazônia",img: "./imgs/repteisimg/Tartaruga-da-amazonia.jpg" ,link: "./animal-card/repteis/Tartaruga-da-Amazônia.html",apelidos: ["Tartaruga"]},
    {numero: 80, nome: "Tigre d’água sul americano",img: "./imgs/repteisimg/Tigre-dgua.jpg" ,link: "./animal-card/repteis/Tigre-d’água-sul-americano.html",apelidos: ["Tigre da agua", "Tigre de agua", "Tigre de agua sul americano" , "Tigre de agua sul americana","Tigre da agua sul americana","Tigre da agua sul americano"]},
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
window.onload = function() {
    const logoLink = document.querySelector('.navbar .logo a');

    const logoImg = document.createElement('img');
    logoImg.src = '/imgs/logo/logo-png-branca.png';
    logoImg.setAttribute('style', 'height: 40px; position: relative; right: 180px;');

    logoLink.prepend(logoImg);
};
const link = document.createElement("link");
link.rel = "icon";
link.href = "/imgs/logo/laranja-escrita.png";

// Adiciona o elemento ao <head>
document.head.appendChild(link);



