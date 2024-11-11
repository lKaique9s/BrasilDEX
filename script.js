
const animaisUnicos = [
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
    {numero: 22, nome: "Sapo-cururu", img: "./imgs/anfibiosimg/sapo cururu.webp", link: "/animal-card/anfibios/Sapo-cururu.html"},
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
    {numero: 41, nome: "Onça Pintada", img: "./imgs/mamiferosimg/onca-pintada.png", link: "/animal-card/mamiferos/onca-pintada.html"},
    {numero: 42, nome: "Tamanduá Bandeira", img: "./imgs/mamiferosimg/tamandua-bandeira.png", link: "/animal-card/mamiferos/tamandua-bandeira.html"},
    {numero: 43, nome: "Mico-Leão-Dourado", img: "./imgs/mamiferosimg/mico-leao-dourado.png", link: "/animal-card/mamiferos/mico-leao-dourado.html"},
    {numero: 44, nome: "Bicho Preguiça", img: "./imgs/mamiferosimg/bicho-preguica.png", link: "/animal-card/mamiferos/bicho-preguica.html"},
    {numero: 45, nome: "Anta", img: "./imgs/mamiferosimg/anta-brasileira.png", link: "/animal-card/mamiferos/anta.html"},
    {numero: 46, nome: "Bugio", img: "./imgs/mamiferosimg/bugio.png", link: "/animal-card/mamiferos/bugio.html"},
    {numero: 47, nome: "Cachorro do mato", img: "./imgs/mamiferosimg/Cachorro-do-mato.png", link: "/animal-card/mamiferos/cachorro-do-mato.html"},
    {numero: 48, nome: "Gambá da orelha preta", img: "./imgs/mamiferosimg/gamba-da-orelha-preta.png", link: "/animal-card/mamiferos/gamba-da-orelha-preta.html"},
    {numero: 49, nome: "Gato maracajá", img: "./imgs/mamiferosimg/gato-maracaja.png", link: "/animal-card/mamiferos/gato-maracaja.html"},
    {numero: 50, nome: "Jaguarundi", img: "./imgs/mamiferosimg/jaguarundi.png", link: "/animal-card/mamiferos/jaguarundi.html"},
    {numero: 51, nome: "Lobo guará", img: "./imgs/mamiferosimg/lobo-guara.png", link: "/animal-card/mamiferos/lobo-guara.html"},
    {numero: 52, nome: "Lontra Neotropical", img: "./imgs/mamiferosimg/Lontra-Neotropical.png", link: "/animal-card/mamiferos/lontra-neotropical.html"},
    {numero: 53, nome: "Macaco aranha", img: "./imgs/mamiferosimg/macaco-aranha.png", link: "/animal-card/mamiferos/macaco-aranha.html"},
    {numero: 54, nome: "Macaco prego", img: "./imgs/mamiferosimg/macaco-prego.png", link: "/animal-card/mamiferos/macaco-prego.html"},
    {numero: 55, nome: "Porco do Mato", img: "./imgs/mamiferosimg/porco-do-mato.png", link: "/animal-card/mamiferos/porco-do-mato.html"},
    {numero: 56, nome: "Queixada", img: "./imgs/mamiferosimg/queixada.png", link: "/animal-card/mamiferos/queixada.html"},
    {numero: 57, nome: "Raposa-do-Campo", img: "./imgs/mamiferosimg/raposa-do-campo.png", link: "/animal-card/mamiferos/raposa-do-campo.html"},
    {numero: 58, nome: "Tatu-bola", img: "./imgs/mamiferosimg/tatu-bola.png", link: "/animal-card/mamiferos/tatu-bola.html"},
    {numero: 59, nome: "Veado-catingueiro", img: "./imgs/mamiferosimg/veado-catingueiro.png", link: "/animal-card/mamiferos/veado-catingueiro.html"},
    {numero: 60, nome: "Capivara", img: "./imgs/mamiferosimg/capivara.png", link: "/animal-card/mamiferos/capivara.html"},
];
const curiosidades = [
    { numero: 1, curiosidade: "O Apapá é conhecido por sua coloração vibrante e pode crescer até 30 cm." },
    { numero: 2, curiosidade: "A Arraia de água doce possui um sistema de eletrorrecepção que a ajuda a detectar presas." },
    { numero: 3, curiosidade: "O Bagre é um peixe de água doce que pode viver até 20 anos." },
    { numero: 4, curiosidade: "A Cachara é um predador ágil e pode atingir tamanhos de até 1,5 metros." },
    { numero: 5, curiosidade: "O Curimatã é um peixe importante na dieta de várias comunidades ribeirinhas." },
    { numero: 6, curiosidade: "O Dourado é famoso por sua luta e é um dos peixes mais procurados por pescadores." },
    { numero: 7, curiosidade: "O Jaraqui é um peixe que pode ser encontrado em águas de rios e igarapés." },
    { numero: 8, curiosidade: "O Lambari é um dos peixes mais populares para aquarismo." },
    { numero: 9, curiosidade: "O Mandi tem uma pele bastante sensível e é um peixe de fundo." },
    { numero: 10, curiosidade: "A Matrinxã é muito apreciada na culinária local e é uma excelente fonte de proteína." },
    { numero: 11, curiosidade: "O Pacu possui dentes que se assemelham a molares humanos, adaptados para triturar sementes." },
    { numero: 12, curiosidade: "O Piau é conhecido por sua resistência e é um peixe que se adapta facilmente a diferentes ambientes." },
    { numero: 13, curiosidade: "O Pintado é um dos peixes mais saborosos e procurados na pesca esportiva." },
    { numero: 14, curiosidade: "A Piracanjuba é famosa por seu sabor delicado e é um peixe migratório." },
    { numero: 15, curiosidade: "A Pirapitinga é um peixe que se destaca pela sua carne branca e saborosa." },
    { numero: 16, curiosidade: "O Pirarucu é um dos maiores peixes de água doce do mundo, podendo chegar a 3 metros." },
    { numero: 17, curiosidade: "O Surubim é conhecido por sua força e agilidade na água." },
    { numero: 18, curiosidade: "O Tambaqui é famoso por sua carne e também é um dos peixes mais pescados na Amazônia." },
    { numero: 19, curiosidade: "A Traíra é um peixe predador que se alimenta de outros peixes e pequenos animais." },
    { numero: 20, curiosidade: "O Tucunaré é muito popular entre os pescadores por sua luta e beleza." },
    { numero: 21, curiosidade: "A Rã-touro é conhecida por seu grande tamanho e voracidade." },
    { numero: 22, curiosidade: "O Sapo-cururu é famoso por seu canto característico e é encontrado em várias regiões do Brasil." },
    { numero: 23, curiosidade: "A Salamandra é um animal importante para o controle de insetos." },
    { numero: 24, curiosidade: "A Rã-verde é uma das espécies mais comuns no Brasil e pode ser encontrada em vários habitats." },
    { numero: 25, curiosidade: "A Rã-de-vidro é conhecida por sua pele transparente, que permite ver seus órgãos internos." },
    { numero: 26, curiosidade: "O Sapo-de-chifre é conhecido por sua aparência única e é encontrado em florestas tropicais." },
    { numero: 27, curiosidade: "A Rã-d'água é uma espécie aquática que se adapta bem a diferentes ambientes." },
    { numero: 28, curiosidade: "O Sapo-de-patas-amarilhas é conhecido por suas patas amarelas e seu canto distinto." },
    { numero: 29, curiosidade: "A Rã-de-flecha possui cores brilhantes que a ajudam a se camuflar em seu habitat." },
    { numero: 30, curiosidade: "A Rã-manteiga é uma das maiores rãs do Brasil e pode ser encontrada em ambientes úmidos." },
    { numero: 31, curiosidade: "O Sapo-buey é conhecido por seu tamanho e pelos sons altos que produz." },
    { numero: 32, curiosidade: "A Rã-do-mato é uma espécie de rã que habita áreas florestais e se destaca por seu canto." },
    { numero: 33, curiosidade: "O Sapo-gigante é uma das maiores espécies de sapos do mundo e pode pesar até 3 kg." },
    { numero: 34, curiosidade: "A Rã-de-olhos-verdes possui olhos brilhantes e é encontrada em áreas tropicais." },
    { numero: 35, curiosidade: "A Salamandra-d'água é uma espécie aquática que vive em ambientes úmidos." },
    { numero: 36, curiosidade: "A Rã-pimenta é conhecida por seu sabor picante e é encontrada em várias regiões do Brasil." },
    { numero: 37, curiosidade: "A Salamandra listrada possui listras distintas e é uma espécie noturna." },
    { numero: 38, curiosidade: "O Tritão-de-crista-italiano é conhecido por suas cristas e cores vibrantes." },
    { numero: 39, curiosidade: "O Tritão-marmoreado-pigmeu é uma espécie pequena e difícil de encontrar." },
    { numero: 40, curiosidade: "A Salamandra-lanzai é uma espécie endêmica e pode ser encontrada em áreas florestais." },
    { numero: 41, curiosidade: "A Onça Pintada é o maior felino das Américas e é conhecida por seu padrão de pelagem único." },
    { numero: 42, curiosidade: "O Tamanduá Bandeira possui uma língua longa, que pode medir até 60 cm." },
    { numero: 43, curiosidade: "O Mico-Leão-Dourado é uma espécie ameaçada e é conhecido por seu pelagem dourada." },
    { numero: 44, curiosidade: "O Bicho Preguiça é famoso por seu movimento lento e estilo de vida arborícola." },
    { numero: 45, curiosidade: "A Anta é o maior mamífero terrestre da América do Sul e é herbívora." },
    { numero: 46, curiosidade: "O Bugio é conhecido por seu vocal forte, que pode ser ouvido a grandes distâncias." },
    { numero: 47, curiosidade: "O Cachorro do mato é um predador que se alimenta de pequenos animais." },
    { numero: 48, curiosidade: "O Gambá da orelha preta é conhecido por sua habilidade de se defender com o mau cheiro." },
    { numero: 49, curiosidade: "O Gato maracajá é um felino ágil e é encontrado nas florestas tropicais." },
    { numero: 50, curiosidade: "O Jaguarundi é um felino de corpo esguio, conhecido por sua rapidez." },
    { numero: 51, curiosidade: "O Lobo guará é um canídeo que se alimenta de frutas e pequenos animais." },
    { numero: 52, curiosidade: "A Lontra Neotropical é conhecida por sua habilidade de nadar e brincar na água." },
    { numero: 53, curiosidade: "O Macaco aranha é famoso por suas longas pernas e cauda preênsil." },
    { numero: 54, curiosidade: "O Macaco prego é conhecido por sua inteligência e comportamento social." },
    { numero: 55, curiosidade: "O Porco do Mato é um herbívoro e pode ser encontrado em florestas e campos." },
    { numero: 56, curiosidade: "A Queixada é um porco do mato que se destaca por seu focinho e dentes afiados." },
    { numero: 57, curiosidade: "A Raposa-do-Campo é um predador que se alimenta de pequenos mamíferos." },
    { numero: 58, curiosidade: "O Tatu-bola é conhecido por sua capacidade de se encolher em uma bola." },
    { numero: 59, curiosidade: "O Veado-catingueiro é uma espécie de veado que vive em áreas de cerrado." },
    { numero: 60, curiosidade: "A Capivara é o maior roedor do mundo e é frequentemente encontrada em grupos." },
];


function getRandomAnimalIndices() {
    const randomIndices = new Set();
    while (randomIndices.size < 2) {
        const randomIndex = Math.floor(Math.random() * animaisUnicos.length);
        randomIndices.add(randomIndex);
    }
    return Array.from(randomIndices);
}

function displayRandomAnimals() {
    const [index1, index2] = getRandomAnimalIndices();
    
    const animal1 = animaisUnicos[index1];
    const animal2 = animaisUnicos[index2];

    const curiosidade1 = curiosidades.find(c => c.numero === animal1.numero)?.curiosidade;
    const curiosidade2 = curiosidades.find(c => c.numero === animal2.numero)?.curiosidade;
    
    const animalContainer = document.getElementById("random-animals");
    animalContainer.innerHTML = '';

    const card1 = document.createElement("div");
    card1.className = "animal-card";
    card1.innerHTML = `
        <img src="${animal1.img}" alt="${animal1.nome}">
        <h2>${animal1.nome}</h2>
        <p>${curiosidade1}</p>
        <a href="${animal1.link}" class="cta-button">Ver Mais</a>
    `;

    const card2 = document.createElement("div");
    card2.className = "animal-card";
    card2.innerHTML = `
        <img src="${animal2.img}" alt="${animal2.nome}">
        <h2>${animal2.nome}</h2>
        <p>${curiosidade2}</p>
        <a href="${animal2.link}" class="cta-button">Ver Mais</a>
    `;

    animalContainer.appendChild(card1);
    animalContainer.appendChild(card2);
}

document.addEventListener("DOMContentLoaded", function() {
    displayRandomAnimals();
});


