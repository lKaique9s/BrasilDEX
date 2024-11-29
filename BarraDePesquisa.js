const animais = [
    {numero: 1, nome: "Apapá", img: "/imgs/peixeimg/apapa.jpg", link: "/animal-card/Apapa.html"},
    {numero: 2, nome: "Arraia de água doce", img: "/imgs/peixeimg/ArraiaAguaDoce.jpg", link: "/animal-card/arraia.html"},
    {numero: 3, nome: "Bagre", img: "/imgs/peixeimg/bagre.jpg", link: "/animal-card/bagre.html"},
    {numero: 4, nome: "Cachara", img: "/imgs/peixeimg/cachara.jpg", link: "/animal-card/cachara.html"},
    {numero: 5, nome: "Curimatã", img: "/imgs/peixeimg/curimata.jpg", link: "/animal-card/curimata.html"},
    {numero: 6, nome: "Dourado", img: "/imgs/peixeimg/Dourado.jpg", link: "/animal-card/dourado.html"},
    {numero: 7, nome: "Jaraqui", img: "/imgs/peixeimg/Jaraqui.jpg", link: "/animal-card/jaraqui.html"},
    {numero: 8, nome: "Lambari", img: "/imgs/peixeimg/lambari.jpg", link: "/animal-card/lambari.html"},
    {numero: 9, nome: "Mandi", img: "/imgs/peixeimg/mandi.jpg", link: "/animal-card/mandi.html"},
    {numero: 10, nome: "Matrinxã", img: "/imgs/peixeimg/matrinxa.jpg", link: "/animal-card/matrinxa.html"},
    {numero: 11, nome: "Pacu", img: "/imgs/peixeimg/Pacu.jpg", link: "/animal-card/pacu.html"},
    {numero: 12, nome: "Piau", img: "/imgs/peixeimg/piau.jpg", link: "/animal-card/piau.html"},
    {numero: 13, nome: "Pintado", img: "/imgs/peixeimg/Pintado.jpg", link: "/animal-card/pintado.html"},
    {numero: 14, nome: "Piracanjuba", img: "/imgs/peixeimg/piracanjuba.jpg", link: "/animal-card/piracanjuba.html"},
    {numero: 15, nome: "Pirapitinga", img: "/imgs/peixeimg/Pirapitinga.JPG", link: "/animal-card/pirapitinga.html"},
    {numero: 16, nome: "Pirarucu", img: "/imgs/peixeimg/pirarucu.jpg", link: "/animal-card/pirarucu.html"},
    {numero: 17, nome: "Surubim", img: "/imgs/peixeimg/surubim.jpg", link: "/animal-card/surubim.html"},
    {numero: 18, nome: "Tambaqui", img: "/imgs/peixeimg/Tambaqui.jpg", link: "/animal-card/tambaqui.html"},
    {numero: 19, nome: "Traíra", img: "/imgs/peixeimg/Traira.jpg", link: "/animal-card/Traíra.html"},
    {numero: 20, nome: "Tucunaré", img: "/imgs/peixeimg/tucunare.jpg", link: "/animal-card/tucunare.html"},
    {numero: 21, nome: "Rã-touro", img: "/imgs/anfibiosimg/rã touro.jfif", link: "/animal-card/anfibios/Ra-touro.html"},
    {numero: 22, nome: "Sapo-cururu", img: "/imgs/anfibiosimg/sapo cururu.webp", link: "/animal-card/anfibios/Sapo-cururu.html", apelidos: ["sapo", "cururu", "sapo grande"]},
    {numero: 23, nome: "Salamandra", img: "/imgs/anfibiosimg/salamandra.jpg", link: "/animal-card/anfibios/Salamandra.html"},
    {numero: 24, nome: "Rã-verde", img: "/imgs/anfibiosimg/ra verde.jpg", link: "/animal-card/anfibios/Ra-verde.html"},
    {numero: 25, nome: "Rã-de-vidro", img: "/imgs/anfibiosimg/ra vidro.jfif", link: "/animal-card/anfibios/Ra-de-vidro.html"},
    {numero: 26, nome: "Sapo-de-chifre", img: "/imgs/anfibiosimg/sapo de chifre.jfif", link: "/animal-card/anfibios/Sapo-de-chifre.html"},
    {numero: 27, nome: "Rã-d'água", img: "/imgs/anfibiosimg/ra dgua.webp", link: "/animal-card/anfibios/Ra-dagua.html"},
    {numero: 28, nome: "Sapo-de-patas-amarilhas", img: "/imgs/anfibiosimg/sapo de patas amarilhas.jpg", link: "/animal-card/anfibios/Sapo-de-patas-amarilhas.html"},
    {numero: 29, nome: "Rã-de-flecha", img: "/imgs/anfibiosimg/ra de flechas.webp", link: "/animal-card/anfibios/Ra-de-flecha.html"},
    {numero: 30, nome: "Rã-manteiga", img: "/imgs/anfibiosimg/ra manteiga.webp", link: "/animal-card/anfibios/Ra-manteiga.html"},
    {numero: 31, nome: "Sapo-buey", img: "/imgs/anfibiosimg/sapo buey.jpg", link: "/animal-card/anfibios/Sapo-buey.html"},
    {numero: 32, nome: "Rã-do-mato", img: "/imgs/anfibiosimg/ra do mato.jpg", link: "/animal-card/anfibios/Ra-do-mato.html"},
    {numero: 33, nome: "Sapo-gigante", img: "/imgs/anfibiosimg/sapo gigante.webp", link: "/animal-card/anfibios/Sapo-gigante.html"},
    {numero: 34, nome: "Rã-de-olhos-verdes", img: "/imgs/anfibiosimg/ra de olhos verdes.webp", link: "/animal-card/anfibios/Ra-de-olhos-verdes.html"},
    {numero: 35, nome: "Salamandra-d'água", img: "/imgs/anfibiosimg/salamandra dgua.jfif", link: "/animal-card/anfibios/Salamandra-dagua.html"},
    {numero: 36, nome: "Rã-pimenta", img: "/imgs/anfibiosimg/ra pimenta.webp", link: "/animal-card/anfibios/Ra-pimenta.html"},
    {numero: 37, nome: "Salamandra listrada", img: "/imgs/anfibiosimg/salamandra listrada.webp", link: "/animal-card/anfibios/Salamandra-listrada.html"},
    {numero: 38, nome: "Tritão-de-crista-italiano", img: "/imgs/anfibiosimg/Tritão-de-crista-italiano.webp", link: "/animal-card/anfibios/Tritao-de-crista-italiano.html"},
    {numero: 39, nome: "Tritão-marmoreado-pigmeu", img: "/imgs/anfibiosimg/Tritão-marmoreado-pigmeu.webp", link: "/animal-card/anfibios/Tritao-marmoreado-pigmeu.html"},
    {numero: 40, nome: "Salamandra-lanzai", img: "/imgs/anfibiosimg/salamandra preta.jfif", link: "/animal-card/anfibios/Salamandra-lanzai.html"},
    {numero: 41, nome: "Onça Pintada", img: "/imgs/mamiferosimg/onca-pintada.png", link: "/animal-card/mamiferos/onca-pintada.html",apelidos: ["onca","onça","onca-pintada","onça-pintada"]},
    {numero: 42, nome: "Tamanduá Bandeira", img: "/imgs/mamiferosimg/tamandua-bandeira.png", link: "/animal-card/mamiferos/tamandua-bandeira.html",apelidos: ["tamandua","tamandua bandeira","tamanduá","tamanduá bandeira","tamandua-bandeira","tamanduá-bandeira"]},
    {numero: 43, nome: "Mico-Leão-Dourado", img: "/imgs/mamiferosimg/mico-leao-dourado.png", link: "/animal-card/mamiferos/mico-leao-dourado.html",apelidos: ["mico leao","mico leao dourado","mico-leao-dourado","micoleaodourado","mico leão dourado","mico-leão-dourado"]},
    {numero: 44, nome: "Bicho Preguiça", img: "/imgs/mamiferosimg/bicho-preguica.png", link: "/animal-card/mamiferos/bicho-preguica.html",apelidos: ["bicho preguica","bicho preguiça"]},
    {numero: 45, nome: "Anta", img: "/imgs/mamiferosimg/anta-brasileira.png", link: "/animal-card/mamiferos/anta.html"},
    {numero: 46, nome: "Bugio", img: "/imgs/mamiferosimg/bugio.png", link: "/animal-card/mamiferos/bugio.html"},
    {numero: 47, nome: "Cachorro do mato", img: "/imgs/mamiferosimg/Cachorro-do-mato.png", link: "/animal-card/mamiferos/cachorro-do-mato.html"},
    {numero: 48, nome: "Gambá da orelha preta", img: "/imgs/mamiferosimg/gamba-da-orelha-preta.png", link: "/animal-card/mamiferos/gamba-da-orelha-preta.html"},
    {numero: 49, nome: "Gato maracajá", img: "/imgs/mamiferosimg/gato-maracaja.png", link: "/animal-card/mamiferos/gato-maracaja.html"},
    {numero: 50, nome: "Jaguarundi", img: "/imgs/mamiferosimg/jaguarundi.png", link: "/animal-card/mamiferos/jaguarundi.html"},
    {numero: 51, nome: "Lobo guará", img: "/imgs/mamiferosimg/lobo-guara.png", link: "/animal-card/mamiferos/lobo-guara.html",apelidos: ["loboguara","lobo guara","lobo-guara"]},
    {numero: 52, nome: "Lontra Neotropical", img: "/imgs/mamiferosimg/Lontra-Neotropical.png", link: "/animal-card/mamiferos/lontra-neotropical.html",apelidos: ["lontra"]},
    {numero: 53, nome: "Macaco aranha", img: "/imgs/mamiferosimg/macaco-aranha.png", link: "/animal-card/mamiferos/macaco-aranha.html",apelidos: ["macacoaranha","macaco-aranha"]},
    {numero: 54, nome: "Macaco prego", img: "/imgs/mamiferosimg/macaco-prego.png", link: "/animal-card/mamiferos/macaco-prego.html",apelidos: ["macacoprego","macaco-prego"]},
    {numero: 55, nome: "Porco do Mato", img: "/imgs/mamiferosimg/porco-do-mato.png", link: "/animal-card/mamiferos/porco-do-mato.html"},
    {numero: 56, nome: "Queixada", img: "/imgs/mamiferosimg/queixada.png", link: "/animal-card/mamiferos/queixada.html"},
    {numero: 57, nome: "Raposa-do-Campo", img: "/imgs/mamiferosimg/raposa-do-campo.png", link: "/animal-card/mamiferos/raposa-do-campo.html",apelidos: ["raposa"]},
    {numero: 58, nome: "Tatu-bola", img: "/imgs/mamiferosimg/tatu-bola.png", link: "/animal-card/mamiferos/tatu-bola.html",apelidos: ["tatu", "tatubola","tatu bola"]},
    {numero: 59, nome: "Veado-catingueiro", img: "/imgs/mamiferosimg/veado-catingueiro.png", link: "/animal-card/mamiferos/veado-catingueiro.html",apelidos: ["viado", "veado","catingueiro"]},
    {numero: 60, nome: "Capivara", img: "/imgs/mamiferosimg/capivara.png", link: "/animal-card/mamiferos/capivara.html"},
    {numero: 61, nome: "Aperema", img: "/imgs/repteisimg/aperema.jpg" ,link: "/animal-card/repteis/Aperema.html"},
    {numero: 62, nome: "Cascavel",img: "/imgs/repteisimg/cascavel.jpg" ,link: "/animal-card/repteis/cascavel.html",apelidos: ["Cascavel de bico", "Cascavel do nordeste"]},
    {numero: 63, nome: "Cobra do Milho",img: "/imgs/repteisimg/COBRA-DO-MILHO.jpg" ,link: "/animal-card/repteis/cobra-do-milho.html"},
    {numero: 64, nome: "Cotiarinha",img: "/imgs/repteisimg/cotiarinha.jpg" ,link: "/animal-card/repteis/cotiarinha.html"},
    {numero: 65, nome: "Dragão Barbudo",img: "/imgs/repteisimg/Dragão-barbudo.jpg" ,link: "/animal-card/repteis/Dragão-barbudo.html"},
    {numero: 66, nome: "Gecko Leopardo",img: "/imgs/repteisimg/GeckoLeopardo.jpg" ,link: "/animal-card/repteis/Gecko-leopardo.html",apelidos: ["Gecko"]},
    {numero: 67, nome: "Iguana",img: "/imgs/repteisimg/iguana.jpg" ,link: "/animal-card/repteis/Iguana.html"},
    {numero: 68, nome: "Jabuti Piranga",img: "/imgs/repteisimg/Jabuti-piranga.jpg" ,link: "/animal-card/repteis/Jabuti-piranga.html"},
    {numero: 69, nome: "Jabuti Tinga",img: "/imgs/repteisimg/Jabuti-tinga.jpg" ,link: "/animal-card/repteis/Jabuti-tinga.html"},
    {numero: 70, nome: "Jacaré do Pantanal",img: "/imgs/repteisimg/JacaréPantanal.jpg" ,link: "/animal-card/repteis/Jacaré-do-pantanal.html",apelidos: ["Jacaré"]},
    {numero: 71, nome: "Jacaré Tinga",img: "/imgs/repteisimg/Jacaré-tinga.jpg" ,link: "/animal-card/repteis/Jacaré-tinga.html"},
    {numero: 72, nome: "Jararaca Caiçaca ",img: "/imgs/repteisimg/Jararaca-caiçaca.jpg" ,link: "/animal-card/repteis/Jararaca-caiçaca.html"},
    {numero: 73, nome: "Jararaca Pintada",img: "/imgs/repteisimg/Jararaca-pintada.jpg" ,link: "/animal-card/repteis/jararaca-pintada.html"},
    {numero: 74, nome: "Jararacuçu",img: "/imgs/repteisimg/jararacucu.jpg" ,link: "/animal-card/repteis/Jararacuçu.html"},
    {numero: 75, nome: "Jiboia Arco Íris",img: "/imgs/repteisimg/Jiboia-arco-iris.jpg" ,link: "/animal-card/repteis/Jiboia-arco-íris.html"},
    {numero: 76, nome: "Jiboia",img: "/imgs/repteisimg/Jiboia.jpg" ,link: "/animal-card/repteis/Jiboia.html",apelidos: ["Jiboia"]},
    {numero: 77, nome: "Muçuã",img: "/imgs/repteisimg/Muçua.jpg" ,link: "/animal-card/repteis/Muçuã.html",apelidos: ["Mucua"]},
    {numero: 78, nome: "Sucuri Verde",img: "/imgs/repteisimg/Sucuri.jpg" ,link: "/animal-card/repteis/Sucuri-verde.html",apelidos: ["Sucuri","Anaconda"]},
    {numero: 79, nome: "Tartaruga da Amazônia",img: "/imgs/repteisimg/Tartaruga-da-amazonia.jpg" ,link: "/animal-card/repteis/Tartaruga-da-Amazônia.html",apelidos: ["Tartaruga"]},
    {numero: 80, nome: "Tigre d’água sul americano",img: "/imgs/repteisimg/Tigre-dgua.jpg" ,link: "/animal-card/repteis/Tigre-d’água-sul-americano.html",apelidos: ["Tigre da agua", "Tigre de agua", "Tigre de agua sul americano" , "Tigre de agua sul americana","Tigre da agua sul americana","Tigre da agua sul americano"]},
    {numero: 81, nome: "Arara-azul", img: "/imgs/avesimg/arara-azul.webp", link: "/animal-card/aves/araraazul.html"},
    {numero: 82, nome: "Tucano-toco", img: "/imgs/avesimg/tucanotoco.jpg", link: "/animal-card/aves/tucanotoco.html"},
    {numero: 83, nome: "Canário-da-terra", img: "/imgs/avesimg/canario-da-terra-1.jpg", link: "/animal-card/aves/canariodaterra.html"},
    {numero: 84, nome: "Beija-flor-tesoura", img: "/imgs/avesimg/beija-flor-tesourinha-825x960.jpg", link: "/animal-card/aves/beijaflortesoura.html"},
    {numero: 85, nome: "Sabiá-laranjeira", img: "/imgs/avesimg/Sabia-laranjeira.jpg", link: "/animal-card/aves/sabialaranjeira.html"},
    {numero: 86, nome: "Pavão-do-mato", img: "/imgs/avesimg/pavao do mato.jpg", link: "/animal-card/aves/pavaodomato.html"},
    {numero: 87, nome: "Gavião-real", img: "/imgs/avesimg/gaviao.jpeg", link: "/animal-card/aves/gaviao.html"},
    {numero: 88, nome: "Uirapuru-verdadeiro", img: "/imgs/avesimg/uirapuru.jpg", link: "/animal-card/aves/uirapuru.html"},
    {numero: 89, nome: "Papagaio-verdadeiro", img: "/imgs/avesimg/96-papagaio-verdadeiro-3.webp", link: "/animal-card/aves/papagaio.html"},
    {numero: 90, nome: "Curió", img: "/imgs/avesimg/curio.jpg", link: "/animal-card/aves/curio.html"},
    {numero: 91, nome: "Jaçanã", img: "/imgs/avesimg/jacana_jacana_jacana.jpg", link: "/animal-card/aves/jacana.html"},
    {numero: 92, nome: "Urubu-rei", img: "/imgs/avesimg/80-urubu-rei-3.webp", link: "/animal-card/aves/urubu.html"},
    {numero: 93, nome: "Garça-branca-grande", img: "/imgs/avesimg/garca-branca-grande_ardea-alba_garca-branca_1.jpg", link: "/animal-card/aves/garca.html"},
    {numero: 94, nome: "Pica-pau-do-campo", img: "/imgs/avesimg/pica pau.jpg", link: "/animal-card/aves/picapau.html"},
    {numero: 95, nome: "Coruja-buraqueira", img: "/imgs/avesimg/coruja buraqueira.jpeg", link: "/animal-card/aves/coruja.html"},
    {numero: 96, nome: "Jacutinga", img: "/imgs/avesimg/Jacutinga.jpg", link: "/animal-card/aves/jacutinga.html"},
    {numero: 97, nome: "Jandaia-sol", img: "/imgs/avesimg/jandaia-sol-1.jpg", link: "/animal-card/aves/jandaia.html"},
    {numero: 98, nome: "Carcará", img: "/imgs/avesimg/carcará.jpg", link: "/animal-card/aves/carcara.html"},
    {numero: 99, nome: "Maracanã-verdadeira", img: "/imgs/avesimg/maracanã verdadeira.jpg", link: "/animal-card/aves/maracana.html"},
    {numero: 100, nome: "Anu-branco", img: "/imgs/avesimg/Anu-branco.jpg", link: "/animal-card/aves/anubranco.html"}
];
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function adicionarModal() {
    const modalHTML = `
        <div id="customAlert" class="modal" style="display: none;">
            <div class="modal-content">
                <span class="close-button" onclick="fecharModal()">×</span>
                <h2>Ops! Animal não encontrado</h2>
                <p>Por favor, verifique a grafia ou tente outro animal da fauna brasileira!</p>
                <button onclick="fecharModal()">Entendido</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}


function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


function pesquisarAnimal() {
    const inputElement = document.getElementById("searchInput");
    const input = removerAcentos(inputElement.value.toLowerCase());

    const animalEncontrado = animais.find(animal => 
        removerAcentos(animal.nome.toLowerCase()) === input || 
        (animal.apelidos?.some(apelido => removerAcentos(apelido.toLowerCase()) === input))
    );

    if (animalEncontrado) {
        inputElement.value = "";
        window.location.href = animalEncontrado.link;
    } else {
        mostrarModal();
        inputElement.value = "";
    }
}

function mostrarModal() {
    const modal = document.getElementById("customAlert");
    if (modal) {
        modal.style.display = "flex";
    } else {
        console.error("O modal não foi encontrado no documento.");
    }
}

function fecharModal() {
    const modal = document.getElementById("customAlert");
    if (modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", adicionarModal);

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


document.head.appendChild(link);

function atualizarNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.innerHTML = `
            <div class="logo">
                <a href="/home.html"></a>
            </div>
            <ul class="nav-links">
                <a href="/home.html">BrasilDex</a>
                <li><a href="/home.html">Home</a></li>
                <li><a href="/index.html">Coleção</a></li>
                <li><a href="/saibamais.html">Saiba Mais!</a></li>
            </ul>
            <div class="search-bar" id="searchBar">
                <input 
                    type="text" 
                    id="searchInput" 
                    placeholder="Pesquise um animal..."
                    oninput="mostrarSugestoes()"
                    onblur="setTimeout(ocultarSugestoes, 200)"
                    autocomplete="off"
                />
                <button id="search-button" onclick="pesquisarAnimal()">Pesquisar</button>
                <div id="suggestions"></div>
            </div>
            
        `;
    } else {
        console.error('Navbar não encontrada.');
    }
}

function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function mostrarSugestoes() {
    const inputElement = document.getElementById("searchInput");
    const suggestionsContainer = document.getElementById("suggestions");
    const searchBar = inputElement.parentElement; 
    const input = removerAcentos(inputElement.value.toLowerCase());

    suggestionsContainer.innerHTML = "";

    const resultados = animais.filter(animal => 
        removerAcentos(animal.nome.toLowerCase()).includes(input) ||
        (animal.apelidos?.some(apelido => removerAcentos(apelido.toLowerCase()).includes(input)))
    );
    

    resultados.forEach(animal => {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        item.innerHTML = `
            <img src="${animal.img}" alt="${animal.nome}">
            <span>${animal.nome}</span>
        `;
        item.onclick = () => {
            window.location.href = animal.link;
            inputElement.value = "";
        };
        suggestionsContainer.appendChild(item);
    });

    if (resultados.length > 0) {
        suggestionsContainer.style.display = "block";
        suggestionsContainer.style.width = searchBar.offsetWidth + "px"; 
        suggestionsContainer.style.top = searchBar.offsetHeight + "px"; 
    } else {
        suggestionsContainer.style.display = "none";
    }
}

function ocultarSugestoes() {
    const suggestionsContainer = document.getElementById("suggestions");
    if (suggestionsContainer) {
        suggestionsContainer.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", atualizarNavbar);
document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("search-button");

    if (searchInput && searchButton) {
        searchInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                searchButton.click();
            }
        });
    }

    
    if (searchInput) {
        searchInput.value = "";
    }

   
    const logoLink = document.querySelector('');
    if (logoLink) {
        const logoImg = document.createElement('img');
        logoImg.src = '/imgs/logo/logo-png-branca.png';
        logoImg.setAttribute('style', 'height: 40px; position: relative; right: 180px;');
    }
});
window.onload = function () {
    const audioControl = document.createElement('div');
    audioControl.classList.add('audio-controls');

    const audio = document.createElement('audio');
    audio.id = 'background-audio';
    audio.src = '/imgs/EFEITOS SONOROS  NATUREZA_ PÁSSAROS (PARA EDIÇÃO DE VIDEOS ).mp3';
    audio.autoplay = true;
    audio.loop = true;
    audio.style.display = 'none'; 
    document.body.appendChild(audio);

    const loadAudioSettings = () => {
        const savedVolume = localStorage.getItem('audioVolume');
        const isMuted = localStorage.getItem('audioMuted') === 'true';

        if (savedVolume !== null) {
            audio.volume = parseFloat(savedVolume);
            volumeSlider.value = savedVolume;
        }
        audio.muted = isMuted;
        muteButton.innerHTML = isMuted ? '🔊' : '🔇';
    };

    const saveAudioSettings = () => {
        localStorage.setItem('audioVolume', audio.volume);
        localStorage.setItem('audioMuted', audio.muted);
    };

    const playPauseButton = document.createElement('button');
    playPauseButton.innerHTML = '▶️';
    playPauseButton.onclick = function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = '⏸️';
        } else {
            audio.pause();
            playPauseButton.innerHTML = '▶️';
        }
    };
    audioControl.appendChild(playPauseButton);

    const muteButton = document.createElement('button');
    muteButton.innerHTML = '🔇';
    muteButton.onclick = function () {
        audio.muted = !audio.muted;
        muteButton.innerHTML = audio.muted ? '🔊' : '🔇';
        saveAudioSettings(); 
    };
    audioControl.appendChild(muteButton);

    const volumeSlider = document.createElement('input');
    volumeSlider.type = 'range';
    volumeSlider.min = '0';
    volumeSlider.max = '1';
    volumeSlider.step = '0.1';
    volumeSlider.value = '1';
    volumeSlider.oninput = function () {
        audio.volume = volumeSlider.value;
        saveAudioSettings(); 
    };
    audioControl.appendChild(volumeSlider);

    const navbar = document.querySelector('.navbar .search-bar');
    navbar.parentElement.appendChild(audioControl);

    loadAudioSettings();

    window.addEventListener('storage', function (event) {
        if (event.key === 'audioVolume' || event.key === 'audioMuted') {
            loadAudioSettings();
        }
    });
};
