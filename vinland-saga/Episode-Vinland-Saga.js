// Exemple de données des épisodes
const episodes = [
  { season: 1, episode: 1, title: 'Quelque part ailleurs', image: '/vinland-saga/Episode/ep1.jpg' },
  { season: 1, episode: 2, title: 'Épée', image: '/vinland-saga/Episode/ep2.jpg' },
  { season: 1, episode: 3, title: 'Troll', image: '/vinland-saga/Episode/ep3.jpg' },
  { season: 1, episode: 4, title: 'Un vrai guerrier', image: '/vinland-saga/Episode/ep4.jpg' },
  { season: 1, episode: 5, title: 'Le Fils du Troll', image: '/vinland-saga/Episode/ep5.jpg' },
  { season: 1, episode: 6, title: 'Le voyage commence', image: '/vinland-saga/Episode/ep6.jpg' },
  { season: 1, episode: 7, title: 'Les Normands', image: '/vinland-saga/Episode/ep7.jpg' },
  { season: 1, episode: 8, title: 'Au-delà de la mer', image: '/vinland-saga/Episode/ep8.jpg' },
  { season: 1, episode: 9, title: 'La Bataille du pont de Londres', image: '/vinland-saga/Episode/ep9.jpg' },
  { season: 1, episode: 10, title: 'Ragnarok', image: '/vinland-saga/Episode/ep10.jpg' },
  { season: 1, episode: 11, title: 'Un pari', image: '/vinland-saga/Episode/ep11.jpg' },
  { season: 1, episode: 12, title: 'Le pays sur la rive lointaine', image: '/vinland-saga/Episode/ep12.jpg' },
  { season: 1, episode: 13, title: 'Fils de héros', image: '/vinland-saga/Episode/ep13.jpg' },
  { season: 1, episode: 14, title: 'La Lumière de l\'aube', image: '/vinland-saga/Episode/ep14.jpg' },
  { season: 1, episode: 15, title: 'Après Yule', image: '/vinland-saga/Episode/ep15.jpg' },
  { season: 1, episode: 16, title: 'Histoire de bêtes', image: '/vinland-saga/Episode/ep16.jpg' },
  { season: 1, episode: 17, title: 'Servant', image: '/vinland-saga/Episode/ep17.jpg' },
  { season: 1, episode: 18, title: 'Hors du berceau', image: '/vinland-saga/Episode/ep18.jpg' },
  { season: 1, episode: 19, title: 'Un front uni', image: '/vinland-saga/Episode/ep19.jpg' },
  { season: 1, episode: 20, title: 'Couronne', image: '/vinland-saga/Episode/ep20.jpg' },
  { season: 1, episode: 21, title: 'Réunion', image: '/vinland-saga/Episode/ep21.jpg' },
  { season: 1, episode: 22, title: 'Loup solitaire', image: '/vinland-saga/Episode/ep22.jpg' },
  { season: 1, episode: 23, title: 'Erreur de jugement', image: '/vinland-saga/Episode/ep23.jpg' },
  { season: 1, episode: 24, title: 'Fin Du Prologue', image: '/vinland-saga/Episode/ep24.jpg' },

  { season: 2, episode: 1, title: 'Esclave', image: '/vinland-saga/Episode/ep25.jpg' },
  { season: 2, episode: 2, title: 'La ferme de Ketil', image: '/vinland-saga/Episode/ep26.jpg' },
  { season: 2, episode: 3, title: 'Le Serpent', image: '/vinland-saga/Episode/ep27.jpg' },
  { season: 2, episode: 4, title: 'L’éveil', image: '/vinland-saga/Episode/ep28.jpg' },
  { season: 2, episode: 5, title: 'La voie du sang', image: '/vinland-saga/Episode/ep29.jpg' },
  { season: 2, episode: 6, title: ' Je veux un cheval', image: '/vinland-saga/Episode/ep30.jpg' },
  { season: 2, episode: 7, title: 'Ketil au poing de fer', image: '/vinland-saga/Episode/ep31.jpg' },
  { season: 2, episode: 8, title: 'Un homme vide', image: '/vinland-saga/Episode/ep32.jpg' },
  { season: 2, episode: 9, title: 'Le serment', image: '/vinland-saga/Episode/ep33.jpg' },
  { season: 2, episode: 10, title: 'La malédiction de la couronne', image: '/vinland-saga/Episode/ep34.jpg' },
  { season: 2, episode: 11, title: 'Rois et épées', image: '/vinland-saga/Episode/ep35.jpg' },
  { season: 2, episode: 12, title: ' Pour cet amour perdu', image: '/vinland-saga/Episode/ep36.jpg' },
  { season: 2, episode: 13, title: 'Sombres nuages', image: '/vinland-saga/Episode/ep38.jpg' },
  { season: 2, episode: 14, title: 'Liberté', image: '/vinland-saga/Episode/ep39.jpg' },
  { season: 2, episode: 15, title: 'La tempête', image: '/vinland-saga/Episode/ep40.jpg' },
  { season: 2, episode: 16, title: 'Une raison idéale', image: '/vinland-saga/Episode/ep41.jpg' },
  { season: 2, episode: 17, title: 'Le chemin du retour', image: '/vinland-saga/Episode/ep42.jpg' },
  { season: 2, episode: 18, title: 'Le premier recours', image: '/vinland-saga/Episode/ep43.jpg' },
  { season: 2, episode: 19, title: 'La bataille du domaine de Ketil', image: '/vinland-saga/Episode/ep44.jpg' },
  { season: 2, episode: 20, title: 'Douleur', image: '/vinland-saga/Episode/ep45.jpg' },
  { season: 2, episode: 21, title: 'Le courage', image: '/vinland-saga/Episode/ep46.jpg' },
  { season: 2, episode: 22, title: 'L\'empereur rebelle', image: '/vinland-saga/Episode/ep47.jpg' },
  { season: 2, episode: 23, title: 'Les deux chemins', image: '/vinland-saga/Episode/ep48.jpg' },
  { season: 2, episode: 24, title: 'Retour au pays', image: '/vinland-saga/Episode/ep49.jpg' }
];

const episodeUrls = {
  1: {
    1: 'https://video.sibnet.ru/shell.php?videoid=3647044',
    2: 'https://video.sibnet.ru/shell.php?videoid=3647304',
    3: 'https://video.sibnet.ru/shell.php?videoid=3647443',
    4: 'https://video.sibnet.ru/shell.php?videoid=3662684',
    5: 'https://video.sibnet.ru/shell.php?videoid=3667963',
    6: 'https://video.sibnet.ru/shell.php?videoid=3672944',
    7: 'https://video.sibnet.ru/shell.php?videoid=3676493',
    8: 'https://video.sibnet.ru/shell.php?videoid=3688051',
    9: 'https://video.sibnet.ru/shell.php?videoid=3691477',
    10: 'https://video.sibnet.ru/shell.php?videoid=3702318',
    11: 'https://video.sibnet.ru/shell.php?videoid=3706484',
    12: 'https://video.sibnet.ru/shell.php?videoid=3710539',
    13: 'https://video.sibnet.ru/shell.php?videoid=3717142',
    14: 'https://video.sibnet.ru/shell.php?videoid=3721647',
    15: 'https://video.sibnet.ru/shell.php?videoid=3726383',
    16: 'https://video.sibnet.ru/shell.php?videoid=3730909',
    17: 'https://video.sibnet.ru/shell.php?videoid=3736885',
    18: 'https://video.sibnet.ru/shell.php?videoid=3748880',
    19: 'https://video.sibnet.ru/shell.php?videoid=3756834',
    20: 'https://video.sibnet.ru/shell.php?videoid=3762340',
    21: 'https://video.sibnet.ru/shell.php?videoid=3767329',
    22: 'https://video.sibnet.ru/shell.php?videoid=3772512',
    23: 'https://video.sibnet.ru/shell.php?videoid=3776730',
    24: 'https://video.sibnet.ru/shell.php?videoid=3782231',
  },
  2: {
    1:'https://video.sibnet.ru/shell.php?videoid=5011334',
    2:'https://video.sibnet.ru/shell.php?videoid=5018542',
    3:'https://video.sibnet.ru/shell.php?videoid=5026395',
    4:'https://sendvid.com/embed/q4xrt2ce',
    5:'https://sendvid.com/embed/egkh9pry',
    6:'https://video.sibnet.ru/shell.php?videoid=5060798',
    7:'https://video.sibnet.ru/shell.php?videoid=5069061',
    8:'https://video.sibnet.ru/shell.php?videoid=5075067',
    9:'https://video.sibnet.ru/shell.php?videoid=5081387',
    10:'https://video.sibnet.ru/shell.php?videoid=5088885',
    11:'https://video.sibnet.ru/shell.php?videoid=5095328',
    12:'https://video.sibnet.ru/shell.php?videoid=5004408',
    13:'https://video.sibnet.ru/shell.php?videoid=5101840',
    14:'https://video.sibnet.ru/shell.php?videoid=5108510',
    15:'https://video.sibnet.ru/shell.php?videoid=5116560',
    16:'https://video.sibnet.ru/shell.php?videoid=5123255',
    17:'https://video.sibnet.ru/shell.php?videoid=5129963',
    18:'https://video.sibnet.ru/shell.php?videoid=5140997',
    19:'https://video.sibnet.ru/shell.php?videoid=5149336',
    20:'https://video.sibnet.ru/shell.php?videoid=5155922',
    21:'https://video.sibnet.ru/shell.php?videoid=5163016',
    22:'https://video.sibnet.ru/shell.php?videoid=5169663',
    23:'https://video.sibnet.ru/shell.php?videoid=5176400',
    24:'https://video.sibnet.ru/shell.php?videoid=5052406',
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
      <a href="/vinland-saga/Episode.html?saison=${season}">
        <div class="season-card-image-container">
          <img src="/vinland-saga/Season/season${season}.jpg" alt="Saison ${season}" />
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

function setActiveSeason(season) {
  const dropdownLinks = document.querySelectorAll('.dropdown-content a');
  dropdownLinks.forEach(link => {
    const seasonNumber = link.textContent.match(/\d+/);
    if (seasonNumber && seasonNumber[0] == season) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  showEpisodesInOnePiece(season);
}

document.addEventListener('DOMContentLoaded', () => {
  showSeasons();

  const urlParams = new URLSearchParams(window.location.search);
  const saison = urlParams.get('saison') || 1; // Par défaut, saison 1

  // Mettre à jour le dropdown pour afficher la saison active
  setActiveSeason(parseInt(saison));
});