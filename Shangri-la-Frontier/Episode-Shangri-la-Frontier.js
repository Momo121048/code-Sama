// Exemple de données des épisodes
const episodes = [
  { season: 1, episode: 1, title: 'Pourquoi joues-tu aux jeux vidéo ?', image: '/Shangri-la-Frontier/Episode/ep1.jpg'  },
  { season: 1, episode: 2, title: 'Le seul et l\'unique', image: '/Shangri-la-Frontier/Episode/ep2.jpg', },
  { season: 1, episode: 3, title: 'Lycaon, les Dents de la Nuit', image: '/Shangri-la-Frontier/Episode/ep3.jpg' },
  { season: 1, episode: 4, title: 'Une bouse pour se remettre les idées en place', image: '/Shangri-la-Frontier/Episode/ep4.jpg' },
  { season: 1, episode: 5, title: 'Encerclé par les lances du scandale', image: '/Shangri-la-Frontier/Episode/ep5.jpg' },
  { season: 1, episode: 6, title: 'La chevaleresse de la papeterie', image: '/Shangri-la-Frontier/Episode/ep6.jpg'},
  { season: 1, episode: 7, title: 'Vestige antique, désillusion du perdant', image: '/Shangri-la-Frontier/Episode/ep7.jpg' },
  { season: 1, episode: 8, title: '300 secondes de capriccio ', image: '/Shangri-la-Frontier/Episode/ep8.jpg' },
  { season: 1, episode: 9, title: 'Une forêt aux mille couleurs ', image: '/Shangri-la-Frontier/Episode/ep9.jpg' },
  { season: 1, episode: 10, title: 'Un pillage de tombeau pour se motiver !', image: '/Shangri-la-Frontier/Episode/ep10.jpg', },
  { season: 1, episode: 11, title: 'L’éclat véritable', image: '/Shangri-la-Frontier/Episode/ep11.jpg', },
  { season: 1, episode: 12, title: 'Laisser les regrets au passé', image: '/Shangri-la-Frontier/Episode/ep12.jpg', },
  { season: 1, episode: 13, title: 'Ici ne restent que les regrets', image: '/Shangri-la-Frontier/Episode/ep13.jpg', },
  { season: 1, episode: 14, title: 'Et clic', image: '/Shangri-la-Frontier/Episode/ep14.jpg', },
  { season: 1, episode: 15, title: 'Émotions pour un bref instant (1)', image: '/Shangri-la-Frontier/Episode/ep15.jpg', },
  { season: 1, episode: 16, title: 'Émotions pour un bref instant (2)', image: '/Shangri-la-Frontier/Episode/ep16.jpg', },
  { season: 1, episode: 17, title: 'Émotions pour un bref instant (3)', image: '/Shangri-la-Frontier/Episode/ep17.jpg', },
  { season: 1, episode: 18, title: 'Émotions pour un bref instant (4)', image: '/Shangri-la-Frontier/Episode/ep18.jpg', },
  { season: 1, episode: 19, title: 'Monde en marche, héros révélés', image: '/Shangri-la-Frontier/Episode/ep19.jpg', },
  { season: 1, episode: 20, title: 'Le présent et le futur ', image: '/Shangri-la-Frontier/Episode/ep20.jpg', },
  { season: 1, episode: 21, title: 'Emplettes, développement et progression', image: '/Shangri-la-Frontier/Episode/ep21.jpg', },
  { season: 1, episode: 22, title: 'Purificateur d’air ambulant', image: '/Shangri-la-Frontier/Episode/ep22.jpg', },
  { season: 1, episode: 23, title: 'Oiseau et lapins VS chœur de squelettes', image: '/Shangri-la-Frontier/Episode/ep23.jpg', },
  { season: 1, episode: 24, title: 'Un objet rare vaut plus qu’une vie', image: '/Shangri-la-Frontier/Episode/ep24.jpg', },
  { season: 1, episode: 25, title: 'Ceux qui chassaient l’obscurité ', image: '/Shangri-la-Frontier/Episode/ep25.jpg', },

  
  { season: 2, episode: 1, title: '>Semi-nudisme et amis in golem paradise', image: '/Shangri-la-Frontier/Episode/ep26.jpg'  },
  { season: 2, episode: 2, title: 'L’inflexible gardien', image: '/Shangri-la-Frontier/Episode/ep27.jpg', },
  { season: 2, episode: 3, title: 'Intensification de la réunion et avidité en toute amitié', image: '/Shangri-la-Frontier/Episode/ep28.jpg' },
  { season: 2, episode: 4, title: 'Rêver l’impossible, fendre le ciel', image: '/Shangri-la-Frontier/Episode/ep29.jpg' },
  { season: 2, episode: 5, title: 'La faim comme impulsion, la soif comme obsession', image: '/Shangri-la-Frontier/Episode/ep30.jpg' },
  { season: 2, episode: 6, title: 'Après la victoire, le désespoi', image: '/Shangri-la-Frontier/Episode/ep31.jpg'},
  { season: 2, episode: 7, title: 'Ailes jumelles, match nul', image: '/Shangri-la-Frontier/Episode/ep3-12.jpg' },
  { season: 2, episode: 8, title: 'Lion déchainé contre lapin, crabe virtuose de la roulette à pizza', image: '/Shangri-la-Frontier/Episode/ep32.jpg' },
  { season: 2, episode: 9, title: 'Cours, ta frustration comme moteur', image: '/Shangri-la-Frontier/Episode/ep33.jpg' },
  { season: 2, episode: 10, title: 'Le flair du chien de chasse ', image: '/Shangri-la-Frontier/Episode/ep34.jpg' },
  { season: 2, episode: 11, title: 'La flamme de l’ambition (1)', image: '/Shangri-la-Frontier/Episode/ep35.jpg', },
  { season: 2, episode: 12, title: 'La flamme de l’ambition (2)', image: '/Shangri-la-Frontier/Episode/ep36.jpg', },
  { season: 2, episode: 13, title: 'La flamme de l’ambition (3)', image: '/Shangri-la-Frontier/Episode/ep37.jpg', },
  { season: 2, episode: 14, title: 'La flamme de l’ambition (4)', image: '/Shangri-la-Frontier/Episode/ep38.jpg', },
];  

const episodeUrls = {
  1: {
  // Saison 1//
    1: 'https://video.sibnet.ru/shell.php?videoid=5265123',
    2: 'https://video.sibnet.ru/shell.php?videoid=5272690',
    3: 'https://video.sibnet.ru/shell.php?videoid=5281586',
    4: 'https://video.sibnet.ru/shell.php?videoid=5291698',
    5: 'https://video.sibnet.ru/shell.php?videoid=5300897',
    6: 'https://video.sibnet.ru/shell.php?videoid=5309163',
    7:'https://sendvid.com/embed/90rqwdr0',
    8:'https://video.sibnet.ru/shell.php?videoid=5338342',
    9:'https://video.sibnet.ru/shell.php?videoid=5349059',
    10:'https://video.sibnet.ru/shell.php?videoid=5358817',
    11:'https://video.sibnet.ru/shell.php?videoid=5367208',
    12:'https://video.sibnet.ru/shell.php?videoid=5375156',
    13:'https://video.sibnet.ru/shell.php?videoid=5390124',
    14:'https://sendvid.com/embed/mckvy351',
    15:'https://video.sibnet.ru/shell.php?videoid=5407206',
    16:'https://video.sibnet.ru/shell.php?videoid=5415472',
    17:'https://video.sibnet.ru/shell.php?videoid=5421849',
    18:'https://video.sibnet.ru/shell.php?videoid=5428706',
    19:'https://video.sibnet.ru/shell.php?videoid=5436270',
    20:'https://video.sibnet.ru/shell.php?videoid=5445514',
    21:'https://video.sibnet.ru/shell.php?videoid=5453809',
    22:'https://video.sibnet.ru/shell.php?videoid=5462540',
    23:'https://video.sibnet.ru/shell.php?videoid=5471100',
    24:'https://video.sibnet.ru/shell.php?videoid=5480431',
    25:'https://video.sibnet.ru/shell.php?videoid=5488486',
    
  },
  2: {
    //Saison 2//
    1:'https://video.sibnet.ru/shell.php?videoid=5713985',
    2:'https://video.sibnet.ru/shell.php?videoid=5731440',
    3:'https://video.sibnet.ru/shell.php?videoid=5739899',
    4:'https://video.sibnet.ru/shell.php?videoid=5747015',
    5:'https://video.sibnet.ru/shell.php?videoid=5753940',
    6:'https://video.sibnet.ru/shell.php?videoid=5761340',
    7:'https://video.sibnet.ru/shell.php?videoid=5765951',
    8:'https://video.sibnet.ru/shell.php?videoid=5769908',
    9:'https://video.sibnet.ru/shell.php?videoid=5774526',
    10:'https://video.sibnet.ru/shell.php?videoid=5780700',
    11:'https://video.sibnet.ru/shell.php?videoid=5785998',
    12:'https://oneupload.to/embed-dhnaqqno6mko.html',
    13:'https://video.sibnet.ru/shell.php?videoid=5796508',
    14:'https://video.sibnet.ru/shell.php?videoid=5722880',
    // Ajoutez les autres épisodes de la saison 2 ici
  }
};
// Mise à jour des liens vidéo pour chaque épisode
episodes.forEach(episode => {
  if (episodeUrls[episode.season] && episodeUrls[episode.season][episode.episode]) {
    episode.link = episodeUrls[episode.season][episode.episode];
  }
});

function showEpisodesInOnePiece(season) {
  const episodesList = document.getElementById('episodesList');
  if (!episodesList) return; // Exit if the element is not found
  episodesList.innerHTML = ''; // Clear previous episodes

  const filteredEpisodes = episodes.filter(ep => ep.season === season);

  filteredEpisodes.forEach(ep => {
    const episodeElement = document.createElement('div');
    episodeElement.classList.add('episode');
    episodeElement.innerHTML = `
      <div class="episode-image-container">
        <img src="${ep.image}" alt="${ep.title}" />
        <div class="media-overlay2">
          <i class='bx bxs-play-circle'></i>
        </div>
        <p class="episode-number">Saison ${ep.season}  Episode ${ep.episode} </p>
      </div>
      <p class="episode-title">${ep.title}</p>
    `;
    episodeElement.addEventListener('click', () => playEpisode(ep.link));
    episodesList.appendChild(episodeElement);
  });

  // Play the first episode by default
  if (filteredEpisodes.length > 0) {
    playEpisode(filteredEpisodes[0].link);
  }
}

function playEpisode(videoLink) {
  const videoPlayer = document.getElementById('videoPlayer');
  if (videoPlayer) {
    videoPlayer.src = videoLink;
    videoPlayer.play();
  }
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSeasons() {
  const seasonsList = document.getElementById('seasonsList');
  if (!seasonsList) return; // Exit if the element is not found
  seasonsList.innerHTML = ''; // Clear previous seasons

  const seasons = [...new Set(episodes.map(ep => ep.season))]; // Get unique seasons

  seasons.forEach(season => {
    const seasonElement = document.createElement('div');
    seasonElement.classList.add('season-card');
    seasonElement.innerHTML = `
      <a href="/Shangri-la-Frontier/Episode.html?saison=${season}">
        <div class="season-card-image-container">
          <img src="/Shangri-la-Frontier/Season/season${season}.jpg" alt="Saison ${season}" />
          <div class="media-overlay2">
            <i class='bx bxs-right-arrow-circle'></i>
          </div>
        </div>
        <p class="season-card-title">Saison ${season}</p>
        
      </a>
    `;
    seasonsList.appendChild(seasonElement);
  });
}

// Appeler la fonction pour afficher les saisons par défaut
document.addEventListener('DOMContentLoaded', () => {
  showSeasons();

  const urlParams = new URLSearchParams(window.location.search);
  const saison = urlParams.get('saison') || 1; // Par défaut, saison 1

  // Mettre à jour le dropdown pour afficher la saison active
  const dropdownLinks = document.querySelectorAll('.dropdown-content a');
  dropdownLinks.forEach(link => {
    const seasonNumber = link.textContent.match(/\d+/)[0];
    if (seasonNumber == saison) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Afficher les épisodes de la saison active
  showEpisodesInOnePiece(parseInt(saison));
});