// Exemple de données des épisodes
const episodes = [
  { season: 1, episode: 1, title: 'Serait-ce une romance qui commence ?', image: '/Dan-Da-Dan/Episode/ep1.jpg'  },
  { season: 1, episode: 2, title: 'On dirait bien un extraterrestre !', image: '/Dan-Da-Dan/Episode/ep2.jpg', },
  { season: 1, episode: 3, title: 'Le choc des vioques', image: '/Dan-Da-Dan/Episode/ep3.jpg' },
  { season: 1, episode: 4, title: 'Dégommons Mémé-Turbo !', image: '/Dan-Da-Dan/Episode/ep4.jpg' },
  { season: 1, episode: 5, title: 'Où sont passées ses baloches ?', image: '/Dan-Da-Dan/Episode/ep5.jpg' },
  { season: 1, episode: 6, title: 'Celle-là, c\'est un danger', image: '/Dan-Da-Dan/Episode/ep6.jpg'},
  { season: 1, episode: 7, title: 'Un monde plus doux', image: '/Dan-Da-Dan/Episode/ep7.jpg' },
  { season: 1, episode: 8, title: 'Un étrange sentiment', image: '/Dan-Da-Dan/Episode/ep8.jpg' },
  { season: 1, episode: 9, title: ' Fusion ! Serpo + Démon de Dover + Nessy !', image: '/Dan-Da-Dan/Episode/ep9.jpg' },
  { season: 1, episode: 10, title: ' La mutilation de bétail, vous connaissez ?', image: '/Dan-Da-Dan/Episode/ep10.jpg', },
  { season: 1, episode: 11, title: 'Premier Amour', image: '/Dan-Da-Dan/Episode/ep11.jpg', },
  { season: 1, episode: 12, title: 'En route pour la maison maudite !', image: '/Dan-Da-Dan/Episode/ep12.jpg' },

];  

const episodeUrls = {
  1: {
    1:'https://video.sibnet.ru/shell.php?videoid=5710658',
    2:'https://video.sibnet.ru/shell.php?videoid=5719157',
    3:'https://video.sibnet.ru/shell.php?videoid=5728387',
    4:'https://video.sibnet.ru/shell.php?videoid=5736965',
    5:'https://video.sibnet.ru/shell.php?videoid=5744163',
    6:'https://video.sibnet.ru/shell.php?videoid=5751426',
    7:'https://video.sibnet.ru/shell.php?videoid=5758230',
    8:'https://oneupload.to/embed-et8ly4toj97d.html',
    9:'https://video.sibnet.ru/shell.php?videoid=5768541',
    10:'https://video.sibnet.ru/shell.php?videoid=5772492',
    11:'https://video.sibnet.ru/shell.php?videoid=5777903',
    12:'https://video.sibnet.ru/shell.php?videoid=5700630',
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
      <a href="/Dan-Da-Dan/Episode.html?saison=${season}">
        <div class="season-card-image-container">
          <img src="/Dan-Da-Dan/Season/season${season}.jpg" alt="Saison ${season}" />
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