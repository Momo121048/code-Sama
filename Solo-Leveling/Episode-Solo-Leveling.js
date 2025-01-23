// Exemple de données des épisodes
const episodes = [
  { season: 1, episode: 1, title: 'J\'ai l\'habitude', image: '/Solo-Leveling/Episode/ep1.jpg'  },
  { season: 1, episode: 2, title: 'Si j\'avais une chance de plus', image: '/Solo-Leveling/Episode/ep2.jpg', },
  { season: 1, episode: 3, title: 'C\'est comme un jeu', image: '/Solo-Leveling/Episode/ep3.jpg' },
  { season: 1, episode: 4, title: 'Je dois devenir plus fort', image: '/Solo-Leveling/Episode/ep4.jpg' },
  { season: 1, episode: 5, title: 'Une bonne affaire', image: '/Solo-Leveling/Episode/ep5.jpg' },
  { season: 1, episode: 6, title: 'La vraie chasse commence', image: '/Solo-Leveling/Episode/ep6.jpg'},
  { season: 1, episode: 7, title: 'Voyons jusqu\'où je peux aller', image: '/Solo-Leveling/Episode/ep7.jpg' },
  { season: 1, episode: 8, title: 'C\'est frustrant', image: '/Solo-Leveling/Episode/ep8.jpg' },
  { season: 1, episode: 9, title: 'Vous avez caché vos compétences', image: '/Solo-Leveling/Episode/ep9.jpg' },
  { season: 1, episode: 10, title: 'Qu est-ce que c\'est ? Un Picnic ?', image: '/Solo-Leveling/Episode/ep10.jpg', },
  { season: 1, episode: 11, title: 'Un chevalier qui défend un trône vacant.', image: '/Solo-Leveling/Episode/ep11.jpg', },
  { season: 1, episode: 12, title: 'S\'élever', image: '/Solo-Leveling/Episode/ep12.jpg' },
  { season: 2, episode: 1, title: 'Tu n\'es pas de rang E, n\'est-ce pas ?', image: '/Solo-Leveling/Episode/ep13.jpg' },
  { season: 2, episode: 2, title: 'Je suppose que vous n\'êtes pas au courant.', image: '/Solo-Leveling/Episode/ep14.jpg' }
];  

const episodeUrls = {
  1: {
    1: 'https://video.sibnet.ru/shell.php?videoid=5453998',
    2: 'https://video.sibnet.ru/shell.php?videoid=5397577',
    3: 'https://video.sibnet.ru/shell.php?videoid=5406329',
    4: 'https://video.sibnet.ru/shell.php?videoid=5414604',
    5: 'https://video.sibnet.ru/shell.php?videoid=5421264',
    6: 'https://video.sibnet.ru/shell.php?videoid=5428101',
    7: 'https://video.sibnet.ru/shell.php?videoid=5444576',
    8: 'https://video.sibnet.ru/shell.php?videoid=5453063',
    9: 'https://video.sibnet.ru/shell.php?videoid=5461770',
    10: 'https://video.sibnet.ru/shell.php?videoid=5470382',
    11: 'https://video.sibnet.ru/shell.php?videoid=5479260',
    12: 'https://video.sibnet.ru/shell.php?videoid=5487838',
  },
  2: {
    1: 'https://video.sibnet.ru/shell.php?videoid=5790524',
    2:  'https://video.sibnet.ru/shell.php?videoid=5795961',
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
      <a href="/Solo-Leveling/Episode.html?saison=${season}">
        <div class="season-card-image-container">
          <img src="/Solo-Leveling/Season/season${season}.jpg" alt="Saison ${season}" />
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