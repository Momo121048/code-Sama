// Exemple de données des épisodes
// Example episodes data
const episodes = [
  { season: 1, episode: 1, title: 'East Blue', image: 'https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/one-piece.jpg'  },
  { season: 1, episode: 2, title: 'Alabasta', image: '/One-Piece/Episode/s2.jpg', },
  { season: 1, episode: 3, title: 'Ile Céleste', image: '/One-Piece/Episode/s3.jpg' },
  { season: 1, episode: 4, title: 'Water Seven', image: '/One-Piece/Episode/s4.jpg' },
  { season: 1, episode: 5, title: 'Thriller Bark', image: '/One-Piece/Episode/s5.jpg' },
  { season: 1, episode: 6, title: 'Guerre au Sommet', image: '/One-Piece/Episode/s6.jpg'},
  { season: 1, episode: 7, title: 'Ile des Hommes-Poissons', image: '/One-Piece/Episode/s7.jpg' },
  { season: 1, episode: 8, title: 'Dressrosa', image: '/One-Piece/Episode/s8.jpg' },
  { season: 1, episode: 9, title: 'Ile Tougato', image: '/One-Piece/Episode/s9.jpg' },
  { season: 1, episode: 10, title: 'Pays de Wano', image: '/One-Piece/Episode/s10.jpg', },
  { season: 1, episode: 11, title: 'Egghead', image: '/One-Piece/Episode/s11.jpg', },
  { season: 1, episode: 12, title: 'Film', image: '/One-Piece/Episode/s12.jpg', },
];

// Définir les liens pour chaque épisode
const episodeLinks = {
  1: 'Arc/East Blue.html',
  2: 'One-Piece/Arc/Alabasta.html',
  3: 'One-Piece/Arc/Ile Celeste.html',
  4: 'One-Piece/Arc/Water Seven.html',
  5: 'One-Piece/Arc/Thriller Bark.html',
  6: 'One-Piece/Arc/Guerre au Sommet.html',
  7: 'One-Piece/Arc/Ile des Hommes-Poissons.html',
  8: 'One-Piece/Arc/Dressrosa.html',
  9: 'One-Piece/Arc/Ile Tougato.html',
  10: 'One-Piece/Arc/Pays de Wano.html',
  11: 'One-Piece/Arc/Egghead.html',
  12: 'One-Piece/Arc/Film.html',
  // Ajouter d'autres épisodes et leurs liens ici
};

// Mettre à jour les liens des épisodes en fonction de l'épisode
episodes.forEach(episode => {
  if (episodeLinks[episode.episode]) {
    episode.link = episodeLinks[episode.episode];
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
      <a href="${ep.link}">
        <div class="episode-image-container">
          <img src="${ep.image}" alt="${ep.title}" />
          <div class="media-overlay2">
            <i class='bx bxs-right-arrow-circle'></i>
          </div>
        </div>
      </a>
        <p class="episode-title">${ep.title}</p>
      
    `;
    episodesList.appendChild(episodeElement);
  });
}

// Appeler les fonctions pour afficher les épisodes de la saison 1 par défaut
document.addEventListener('DOMContentLoaded', () => {
  showEpisodesInOnePiece(1);
});