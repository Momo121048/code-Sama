// Exemple de données des épisodes
const episodes = [
  { season: 1, episode: 1, title: 'Renaissance', image: '/Death-Note/Episode/ep1.jpg'  },
  { season: 1, episode: 2, title: 'Confrontation', image: '/Death-Note/Episode/ep2.jpg' },
  { season: 1, episode: 3, title: 'Pacte', image: '/Death-Note/Episode/ep3.jpg' },
  { season: 1, episode: 4, title: 'Poursuite', image: '/Death-Note/Episode/ep4.jpg' },
  { season: 1, episode: 5, title: 'Tactique', image: '/Death-Note/Episode/ep5.jpg' },
  { season: 1, episode: 6, title: 'Déchirure', image: '/Death-Note/Episode/ep6.jpg' },
  { season: 1, episode: 7, title: 'Temps couvert', image: '/Death-Note/Episode/ep7.jpg' },
  { season: 1, episode: 8, title: 'Regard', image: '/Death-Note/Episode/ep8.jpg' },
  { season: 1, episode: 9, title: 'Contact', image: '/Death-Note/Episode/ep9.jpg' },
  { season: 1, episode: 10, title: 'Doute', image: '/Death-Note/Episode/ep10.jpg' },
  { season: 1, episode: 11, title: 'Assaut', image: '/Death-Note/Episode/ep11.jpg' },
  { season: 1, episode: 12, title: 'Amour', image: '/Death-Note/Episode/ep12.jpg' },
  { season: 1, episode: 13, title: 'Confession', image: '/Death-Note/Episode/ep13.jpg' },
  { season: 1, episode: 14, title: 'Ami', image: '/Death-Note/Episode/ep14.jpg' },
  { season: 1, episode: 15, title: 'Pari', image: '/Death-Note/Episode/ep15.jpg' },
  { season: 1, episode: 16, title: 'Décision', image: '/Death-Note/Episode/ep16.jpg' },
  { season: 1, episode: 17, title: 'Exécution', image: '/Death-Note/Episode/ep17.jpg' },
  { season: 1, episode: 18, title: 'Allié', image: '/Death-Note/Episode/ep18.jpg' },
  { season: 1, episode: 19, title: 'Matsuda', image: '/Death-Note/Episode/ep19.jpg' },
  { season: 1, episode: 20, title: 'Expédient', image: '/Death-Note/Episode/ep20.jpg' },
  { season: 1, episode: 21, title: 'Performance', image: '/Death-Note/Episode/ep21.jpg' },
  { season: 1, episode: 22, title: 'Conduite', image: '/Death-Note/Episode/ep22.jpg' },
  { season: 1, episode: 23, title: 'Frénésie', image: '/Death-Note/Episode/ep23.jpg' },
  { season: 1, episode: 24, title: 'Résurrection', image: '/Death-Note/Episode/ep24.jpg' },
  { season: 1, episode: 25, title: 'Silence', image: '/Death-Note/Episode/ep25.jpg' },
  { season: 1, episode: 26, title: 'Reprise', image: '/Death-Note/Episode/ep26.jpg' },
  { season: 1, episode: 27, title: 'Enlèvement', image: '/Death-Note/Episode/ep27.jpg' },
  { season: 1, episode: 28, title: 'Impatience', image: '/Death-Note/Episode/ep28.jpg' },
  { season: 1, episode: 29, title: 'Père', image: '/Death-Note/Episode/ep29.jpg' },
  { season: 1, episode: 30, title: 'Justice', image: '/Death-Note/Episode/ep30.jpg' },
  { season: 1, episode: 31, title: 'Transfert', image: '/Death-Note/Episode/ep31.jpg' },
  { season: 1, episode: 32, title: 'Choix', image: '/Death-Note/Episode/ep32.jpg' },
  { season: 1, episode: 33, title: 'Arrogance', image: '/Death-Note/Episode/ep33.jpg' },
  { season: 1, episode: 34, title: 'Vigilance', image: '/Death-Note/Episode/ep34.jpg' },
  { season: 1, episode: 35, title: 'Tentative de meurtre', image: '/Death-Note/Episode/ep35.jpg' },
  { season: 1, episode: 36, title: '28 janvier', image: '/Death-Note/Episode/ep36.jpg' },
  { season: 1, episode: 37, title: 'Le Nouveau monde', image: '/Death-Note/Episode/ep37.jpg' }
];  

const episodeUrls = {
  1: {
    1: 'https://video.sibnet.ru/shell.php?videoid=4670054',
    2: 'https://video.sibnet.ru/shell.php?videoid=4670056',
    3: 'https://video.sibnet.ru/shell.php?videoid=4670057',
    4: 'https://sendvid.com/embed/3tvfpyyp',
    5: 'https://video.sibnet.ru/shell.php?videoid=4670061',
    6: 'https://video.sibnet.ru/shell.php?videoid=4670063',
    7: 'https://video.sibnet.ru/shell.php?videoid=4670067',
    8: 'https://video.sibnet.ru/shell.php?videoid=4670071',
    9: 'https://video.sibnet.ru/shell.php?videoid=4670075',
    10: 'https://video.sibnet.ru/shell.php?videoid=4670078',
    11: 'https://video.sibnet.ru/shell.php?videoid=4670085',
    12: 'https://video.sibnet.ru/shell.php?videoid=4670094',
    13: 'https://video.sibnet.ru/shell.php?videoid=4670100',
    14: 'https://video.sibnet.ru/shell.php?videoid=4670104',
    15: 'https://video.sibnet.ru/shell.php?videoid=4670109',
    16: 'https://video.sibnet.ru/shell.php?videoid=4670114',
    17: 'https://video.sibnet.ru/shell.php?videoid=4670117',
    18: 'https://video.sibnet.ru/shell.php?videoid=4670119',
    19: 'https://video.sibnet.ru/shell.php?videoid=4670121',
    20: 'https://video.sibnet.ru/shell.php?videoid=4670123',
    21: 'https://video.sibnet.ru/shell.php?videoid=4670125',
    22: 'https://video.sibnet.ru/shell.php?videoid=4670127',
    23: 'https://video.sibnet.ru/shell.php?videoid=4670129',
    24: 'https://video.sibnet.ru/shell.php?videoid=4670131',
    25: 'https://video.sibnet.ru/shell.php?videoid=4670133',
    26: 'https://video.sibnet.ru/shell.php?videoid=4670136',
    27: 'https://video.sibnet.ru/shell.php?videoid=4670138',
    28: 'https://video.sibnet.ru/shell.php?videoid=4670143',
    29: 'https://video.sibnet.ru/shell.php?videoid=4670146',
    30: 'https://video.sibnet.ru/shell.php?videoid=4670151',
    31: 'https://video.sibnet.ru/shell.php?videoid=4670160',
    32: 'https://video.sibnet.ru/shell.php?videoid=4670165',
    33: 'https://video.sibnet.ru/shell.php?videoid=4670170',
    34: 'https://video.sibnet.ru/shell.php?videoid=4670173',
    35: 'https://video.sibnet.ru/shell.php?videoid=4670175',
    36: 'https://video.sibnet.ru/shell.php?videoid=4670178',
    37: 'https://video.sibnet.ru/shell.php?videoid=4670053',
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
      <a href="/Death-Note/Episode.html?saison=${season}">
        <div class="season-card-image-container">
          <img src="/Death-Note/Season/season${season}.jpg" alt="Saison ${season}" />
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