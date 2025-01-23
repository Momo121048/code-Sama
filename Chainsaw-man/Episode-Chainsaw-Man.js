// Exemple de données des épisodes
const episodes = [
  { season: 1, episode: 1, title: 'Le chien et la tronçonneuse', image: '/Chainsaw-man/Episode/ep1.jpg'  },
  { season: 1, episode: 2, title: 'Arrivée à Tokyo', image: '/Chainsaw-man/Episode/ep2.jpg', },
  { season: 1, episode: 3, title: 'Le destin de Miaouche', image: '/Chainsaw-man/Episode/ep3.jpg' },
  { season: 1, episode: 4, title: 'Sauvetage', image: '/Chainsaw-man/Episode/ep4.jpg' },
  { season: 1, episode: 5, title: 'Le démon-flingues', image: '/Chainsaw-man/Episode/ep5.jpe' },
  { season: 1, episode: 6, title: 'Tuez Denji !', image: '/Chainsaw-man/Episode/ep6.jpe'},
  { season: 1, episode: 7, title: 'Le goût d’un baiser', image: '/Chainsaw-man/Episode/ep7.jpg' },
  { season: 1, episode: 8, title: 'Coups de feu', image: '/Chainsaw-man/Episode/ep8.jpe' },
  { season: 1, episode: 9, title: 'Depuis Kyoto', image: '/Chainsaw-man/Episode/ep9.jpg' },
  { season: 1, episode: 10, title: 'Amochés, lessivés', image: '/Chainsaw-man/Episode/ep10.jpe', },
  { season: 1, episode: 11, title: 'Début de l’opération', image: '/Chainsaw-man/Episode/ep11.jpg', },
  { season: 1, episode: 12, title: 'Katana vs tronçonneuse', image: '/Chainsaw-man/Episode/ep12.jpg', },
];  

const episodeUrls = {
  1: {
  // Saison 1//
    1: 'https://video.sibnet.ru/shell.php?videoid=4917119',
    2:'https://video.sibnet.ru/shell.php?videoid=4924112',
    3:'https://video.sibnet.ru/shell.php?videoid=4930200',
    4:'https://video.sibnet.ru/shell.php?videoid=4937193',
    5:'https://video.sibnet.ru/shell.php?videoid=4946487',
    6:'https://video.sibnet.ru/shell.php?videoid=4953642',
    7:'https://video.sibnet.ru/shell.php?videoid=4960013',
    8:'https://video.sibnet.ru/shell.php?videoid=4966147',
    9:'https://video.sibnet.ru/shell.php?videoid=4971892',
    10:'https://video.sibnet.ru/shell.php?videoid=4977932',
    11:'https://video.sibnet.ru/shell.php?videoid=4984462',
    12:'https://video.sibnet.ru/shell.php?videoid=4991819',
  },
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
      <a href="/Chainsaw-man/Episode.html?saison=${season}">
        <div class="season-card-image-container">
          <img src="/Chainsaw-man/Season/season${season}.jpg" alt="Saison ${season}" />
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