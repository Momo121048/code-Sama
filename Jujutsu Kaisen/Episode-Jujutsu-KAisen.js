// Exemple de données des épisodes
const episodes = [
  { season: 1, episode: 1, title: 'Ryomen Sukuna', image: '/Jujutsu Kaisen/Episode/ep1.jpg'  },
  { season: 1, episode: 2, title: 'Pour moi-même', image: '/Jujutsu Kaisen/Episode/ep2.jpg', },
  { season: 1, episode: 3, title: 'La bâtisseuse', image: '/Jujutsu Kaisen/Episode/ep3.jpg' },
  { season: 1, episode: 4, title: 'Naissance de la matrice', image: '/Jujutsu Kaisen/Episode/ep4.jpg' },
  { season: 1, episode: 5, title: 'Naissance de la matrice (2)', image: '/Jujutsu Kaisen/Episode/ep5.jpg' },
  { season: 1, episode: 6, title: 'Après la pluie', image: '/Jujutsu Kaisen/Episode/ep6.jpg'},
  { season: 1, episode: 7, title: 'Attaque surprise', image: '/Jujutsu Kaisen/Episode/ep7.jpg' },
  { season: 1, episode: 8, title: 'Ennui', image: '/Jujutsu Kaisen/Episode/ep8.jpg' },
  { season: 1, episode: 9, title: 'Petit poisson et retour de bâton', image: '/Jujutsu Kaisen/Episode/ep9.jpg' },
  { season: 1, episode: 10, title: 'Altération absolue', image: '/Jujutsu Kaisen/Episode/ep10.jpg', },
  { season: 1, episode: 11, title: 'Intransigeance', image: '/Jujutsu Kaisen/Episode/ep11.jpg', },
  { season: 1, episode: 12, title: 'Pour toi, un jour', image: '/Jujutsu Kaisen/Episode/ep12.jpg', },
  { season: 1, episode: 13, title: 'À demain', image: '/Jujutsu Kaisen/Episode/ep13.jpg', },
  { season: 1, episode: 14, title: 'Le tournoi - épreuve par équipes (0)', image: '/Jujutsu Kaisen/Episode/ep14.jpg', },
  { season: 1, episode: 15, title: 'Le tournoi - épreuve par équipes (2)', image: '/Jujutsu Kaisen/Episode/ep15.jpg', },
  { season: 1, episode: 16, title: 'Le tournoi - épreuve par équipes (3)', image: '/Jujutsu Kaisen/Episode/ep16.jpg', },
  { season: 1, episode: 17, title: 'Le tournoi - épreuve par équipes (4)', image: '/Jujutsu Kaisen/Episode/ep17.jpg', },
  { season: 1, episode: 18, title: 'Le sage', image: '/Jujutsu Kaisen/Episode/ep18.jpg', },
  { season: 1, episode: 19, title: 'Rayon noir', image: '/Jujutsu Kaisen/Episode/ep19.jpg', },
  { season: 1, episode: 20, title: 'Hors norme', image: '/Jujutsu Kaisen/Episode/ep20.jpg', },
  { season: 1, episode: 21, title: 'Le match de base-ball', image: '/Jujutsu Kaisen/Episode/ep21.jpg', },
  { season: 1, episode: 22, title: 'Instinct grégaire', image: '/Jujutsu Kaisen/Episode/ep22.jpg', },
  { season: 1, episode: 23, title: 'Instinct grégaire (2)', image: '/Jujutsu Kaisen/Episode/ep23.jpg', },
  { season: 1, episode: 24, title: 'Complices', image: '/Jujutsu Kaisen/Episode/ep24.jpg', },
  { season: 1, episode: 25, title: 'Trésor caché', image: '/Jujutsu Kaisen/Episode/ep25.jpg', },
  { season: 1, episode: 26, title: 'Trésor caché (2)', image: '/Jujutsu Kaisen/Episode/ep26.jpg', },
  { season: 1, episode: 27, title: 'Trésor caché (3)', image: '/Jujutsu Kaisen/Episode/ep27.jpg', },
  { season: 1, episode: 28, title: 'Trésor caché (4)', image: '/Jujutsu Kaisen/Episode/ep28.jpg', },
  { season: 1, episode: 29, title: 'Mort prématurée', image: '/Jujutsu Kaisen/Episode/ep29.jpg', },
  { season: 1, episode: 30, title: 'C\'est bien ce que tu crois', image: '/Jujutsu Kaisen/Episode/ep30.jpg', },
  { season: 1, episode: 31, title: 'La veille de la fête', image: '/Jujutsu Kaisen/Episode/ep31.jpg', },
  { season: 1, episode: 32, title: 'Le drame de Shibuya', image: '/Jujutsu Kaisen/Episode/ep32.jpg', },
  { season: 1, episode: 33, title: 'Le drame de Shibuya - Ouverture', image: '/Jujutsu Kaisen/Episode/ep33.jpg', },
  { season: 1, episode: 34, title: 'Confusion', image: '/Jujutsu Kaisen/Episode/ep34.jpg', },
  { season: 1, episode: 35, title: 'Invocation de l\'âme', image: '/Jujutsu Kaisen/Episode/ep35.jpg', },
  { season: 1, episode: 36, title: 'Lame émoussée', image: '/Jujutsu Kaisen/Episode/ep36.jpg', },
  { season: 1, episode: 37, title: 'Les écailles rouges', image: '/Jujutsu Kaisen/Episode/ep37.jpg', },
  { season: 1, episode: 38, title: 'Oscillations', image: '/Jujutsu Kaisen/Episode/ep38.jpg', },
  { season: 1, episode: 39, title: 'Oscillations (2)', image: '/Jujutsu Kaisen/Episode/ep39.jpg', },
  { season: 1, episode: 40, title: 'Un coup de tonnerre', image: '/Jujutsu Kaisen/Episode/ep40.jpg', },
  { season: 1, episode: 41, title: 'Un coup de tonnerre (2)', image: '/Jujutsu Kaisen/Episode/ep41.jpg', },
  { season: 1, episode: 42, title: 'Le bien et le mal', image: '/Jujutsu Kaisen/Episode/ep42.jpg', },
  { season: 1, episode: 43, title: 'Le bien et le mal (2)', image: '/Jujutsu Kaisen/Episode/ep43.jpg', },
  { season: 1, episode: 44, title: 'Le bien et le mal (3)', image: '/Jujutsu Kaisen/Episode/ep44.jpg', },
  { season: 1, episode: 45, title: 'Métamorphose', image: '/Jujutsu Kaisen/Episode/ep45.jpg', },
  { season: 1, episode: 46, title: 'Métamorphose (2)', image: '/Jujutsu Kaisen/Episode/ep46.jpg', },
  { season: 1, episode: 47, title: 'Le drame de Shibuya - Fermeture', image: '/Jujutsu Kaisen/Episode/ep47.jpg', },
  { season:0, episode: 0, title: 'Jujutsu Kaisen 0', image: '/Jujutsu Kaisen/Episode/ep0.jpg', },

];  

const episodeUrls = {
  1: {
  //Jujustu Kaisen Saison 1//
    1: 'https://video.sibnet.ru/shell.php?videoid=4667514',
    2: 'https://video.sibnet.ru/shell.php?videoid=4667523',
    3: 'https://video.sibnet.ru/shell.php?videoid=4667532',
    4: 'https://video.sibnet.ru/shell.php?videoid=4667548',
    5: 'https://video.sibnet.ru/shell.php?videoid=4667557',
    6: 'https://video.sibnet.ru/shell.php?videoid=4667566',
    7: 'https://video.sibnet.ru/shell.php?videoid=4667578',
    8: 'https://video.sibnet.ru/shell.php?videoid=4667599',
    9: 'https://video.sibnet.ru/shell.php?videoid=4667621',
    10: 'https://video.sibnet.ru/shell.php?videoid=4667634',
    11: 'https://video.sibnet.ru/shell.php?videoid=4667642',
    12: 'https://video.sibnet.ru/shell.php?videoid=4667648',
    13: 'https://video.sibnet.ru/shell.php?videoid=4667656',
    14: 'https://video.sibnet.ru/shell.php?videoid=4667663',
    15: 'https://video.sibnet.ru/shell.php?videoid=4667667',
    16: 'https://video.sibnet.ru/shell.php?videoid=4667673',
    17: 'https://video.sibnet.ru/shell.php?videoid=4667683',
    18: 'https://video.sibnet.ru/shell.php?videoid=4667689',
    19: 'https://video.sibnet.ru/shell.php?videoid=4667696',
    20: 'https://video.sibnet.ru/shell.php?videoid=4667717',
    21: 'https://video.sibnet.ru/shell.php?videoid=4667725',
    22: 'https://video.sibnet.ru/shell.php?videoid=4667735',
    23: 'https://video.sibnet.ru/shell.php?videoid=4667746',
    24: 'https://video.sibnet.ru/shell.php?videoid=4667756',
    25: 'https://video.sibnet.ru/shell.php?videoid=5190453',
    26: 'https://video.sibnet.ru/shell.php?videoid=5196965',
    27: 'https://video.sibnet.ru/shell.php?videoid=5203199',
    28: 'https://video.sibnet.ru/shell.php?videoid=5210246',
    29: 'https://video.sibnet.ru/shell.php?videoid=5217464',
    30: 'https://video.sibnet.ru/shell.php?videoid=5238868',
    31: 'https://video.sibnet.ru/shell.php?videoid=5246781',
    32: 'https://video.sibnet.ru/shell.php?videoid=5253009',
    33: 'https://video.sibnet.ru/shell.php?videoid=5258097',
    34: 'https://video.sibnet.ru/shell.php?videoid=5263399',
    35: 'https://video.sibnet.ru/shell.php?videoid=5269261',
    36: 'https://video.sibnet.ru/shell.php?videoid=5277754',
    37: 'https://video.sibnet.ru/shell.php?videoid=5288042',
    38: 'https://video.sibnet.ru/shell.php?videoid=5297930',
    39: 'https://video.sibnet.ru/shell.php?videoid=5305970',
    40: 'https://video.sibnet.ru/shell.php?videoid=5314006',
    41: 'https://video.sibnet.ru/shell.php?videoid=5324440',
    42: 'https://video.sibnet.ru/shell.php?videoid=5334685',
    43: 'https://video.sibnet.ru/shell.php?videoid=5345737',
    44: 'https://video.sibnet.ru/shell.php?videoid=5355176',
    45: 'https://video.sibnet.ru/shell.php?videoid=5364195',
    46: 'https://video.sibnet.ru/shell.php?videoid=5372381',
    47: 'https://video.sibnet.ru/shell.php?videoid=5379934',
    
  },
  0: {
    //Jujustu kaisen 0//
    0: 'https://video.sibnet.ru/shell.php?videoid=4879058',
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
      <a href="/Jujutsu Kaisen/Episode.html?saison=${season}">
        <div class="season-card-image-container">
          <img src="/Jujutsu Kaisen/Season/season${season}.jpg" alt="Saison ${season}" />
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