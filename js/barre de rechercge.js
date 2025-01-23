const animes = [
    {
        title: 'One Piece',
        altNames: ['One Piece Red'],
        image: '/image/image/one-piece.jpg',
        url: '/One-piece/One-piece.html',
        summary: 'Il fut un temps où Gold Roger était le plus grand de tous les pirates, le "Roi des Pirates" ...'
    },
    {
        title: 'Solo Leveling',
        altNames: [''],
        image: '/image/image/solo-leveling.jpg',
        url: '/Solo-Leveling/Solo-Leveling.html',
        summary: 'Ce qui ne vous tue pas vous rend plus fort ! Mais ce dicton ne s\'applique pas  ...'
    },
    {
        title: 'Jujustu Kaisen',
        altNames: ['JJk'],
        image: '/image/image/jujutsu-kaisen.jpe',
        url: '/Jujutsu Kaisen/Jujutsu Kaisen.html',
        summary: 'Souffrance, regrets, humiliations... les sentiments négatifs que ...'
    },
    {
        title: 'Chainsaw Man',
        altNames: ['CSM'],
        image: '/image/image/chainsaw-man.jpg',
        url: '/Chainsaw-man/Chainsaw-Man.html',
        summary: 'Dans un monde où les démons naissent des peurs humaines, Denji ...'
    },
    {
        title: 'Your Name',
        altNames: ['Kimi no na WA'],
        image: '/image/image/yourname.png',
        url: '/Your-Name/Your-Name.html',
        summary: 'Mitsuha Miyamizu, une lycéenne, aspire à vivre la vie d un garçon dans la ...'
    },
    {
        title: 'Shangri la Frontier',
        altNames: ['SHANGRI-LA FRONTIER', 'KUSOGE HUNTER', 'KAMIGE NI IDOMAN TO SU', 'SHANGRI-LA FRONTIER', 'CRAPPY GAME HUNTER CHALLENGES GOD-TIER GAME'],
        image: '/image/image/Shangri-la-Frontier.jpg',
        url: '/Shangri-la-Frontier/Shangri-la-Frontier.html',
        summary: 'Dans un monde où les jeux vidéo buggués font le bonheur des joueurs audacieux, Sunraku ...'
    },
    {
        title: 'L\'Attaque des Titans',
        altNames: ['SNK', 'ATTACK ON TITAN', 'ATTAQUE DES TITANS', 'AOT', 'Shingeki no Kyojin'],
        image: '/image/image/L\'Attaque-des-Titans.jpg',
        url: '/Shingeki No Kyojin/Shingeki-No-Kyojin.html',
        summary: 'Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les ...'
    },
    {
        title: 'DanDaDan',
        altNames: ['Dan-Da-Dan'],
        image: '/image/image/Dan-Da-Dan.jpg',
        url: '/Dan-Da-Dan/Dan-Da-Dan.html',
        summary: 'Momo Ayase et Ken Takakura sont tous deux lycéens ...'
    },
    {
        title: 'Vinland Saga',
        altNames: [''],
        image: '/image/image/Vinland-Saga.jpg',
        url: '/vinland-saga/Vinland-Saga.html',
        summary: 'Thorfinn est le fils de l\'un des plus grands guerriers ...'
    },
    {
        title: 'Death Note',
        altNames: [],
        image: '/image/image/Death-Note.jpg',
        url: '/Death-Note/Death-Note.html',
        summary:'Après avoir trouvé un mystérieux carnet, un lycéen japonais découvre qu il a le ... '
    },
    // Ajoutez d'autres animes ici, avec ou sans noms alternatifs
];

function filterAnimes() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const resultsList = document.getElementById('resultsList');

    // Effacer les résultats précédents
    resultsList.innerHTML = '';

    // Cacher la liste si l'input est vide
    if (filter.trim() === '') {
        resultsList.style.display = 'none';
        return;
    }

    // Filtrer les résultats (et limiter à 5)
    const filteredAnimes = animes.filter(anime => {
        return anime.title.toLowerCase().includes(filter) ||
            anime.altNames.some(altName => altName.toLowerCase().includes(filter));
    }).slice(0, 5); // Limiter à 5 résultats

    // Ajouter chaque anime dans la liste
    filteredAnimes.forEach(anime => {
        const li = document.createElement('li');
        li.classList.add('result-item'); // Classe pour le style

        const link = document.createElement('a');
        link.href = anime.url;
        link.style.textDecoration = 'none';
        link.style.display = 'flex';
        link.style.alignItems = 'center';

        const img = document.createElement('img');
        img.src = anime.image;
        img.alt = anime.title;
        img.classList.add('result-image'); // Classe pour le style

        const details = document.createElement('div');
        details.style.display = 'flex';
        details.style.flexDirection = 'column';

        const title = document.createElement('div');
        title.classList.add('result-title'); // Classe pour le style
        title.textContent = anime.title;

        const summary = document.createElement('div');
        summary.classList.add('result-summary'); // Classe pour le style
        summary.textContent = anime.summary;

        details.appendChild(title);
        details.appendChild(summary);

        link.appendChild(img);
        link.appendChild(details);
        li.appendChild(link);
        resultsList.appendChild(li);
    });

    // Afficher les résultats
    resultsList.style.display = 'block';
}

// Activer le filtre lors de la saisie
document.getElementById('searchInput').addEventListener('input', filterAnimes);
