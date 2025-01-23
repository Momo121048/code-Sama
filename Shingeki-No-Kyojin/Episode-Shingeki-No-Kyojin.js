// Exemple de données des épisodes
const episodes = [
  { season: 1, episode: 1, title: 'À toi qui vis 2000 ans plus ...', image: '/Shingeki-No-Kyojin/Episode/ep1.jpg'  },
  { season: 1, episode: 2, title: 'Ce jour-là', image: '/Shingeki-No-Kyojin/Episode/ep2.jpg', },
  { season: 1, episode: 3, title: 'Une faible étincelle dans le désespoir', image: '/Shingeki-No-Kyojin/Episode/ep3.jpg' },
  { season: 1, episode: 4, title: 'Le soir de la cérémonie de fin ...', image: '/Shingeki-No-Kyojin/Episode/ep4.jpg' },
  { season: 1, episode: 5, title: 'Première bataille', image: '/Shingeki-No-Kyojin/Episode/ep5.jpg' },
  { season: 1, episode: 6, title: 'Une petite lame', image: '/Shingeki-No-Kyojin/Episode/ep6.jpg'},
  { season: 1, episode: 7, title: 'Courte lame', image: '/Shingeki-No-Kyojin/Episode/ep7.jpg' },
  { season: 1, episode: 8, title: 'J\'entend les battements de ton cœur', image: '/Shingeki-No-Kyojin/Episode/ep8.jpg' },
  { season: 1, episode: 9, title: 'Qu\'est-il advenu du bras gauche ?', image: '/Shingeki-No-Kyojin/Episode/ep9.jpg' },
  { season: 1, episode: 10, title: 'Répondre', image: '/Shingeki-No-Kyojin/Episode/ep10.jpg', },
  { season: 1, episode: 11, title: 'Idole', image: '/Shingeki-No-Kyojin/Episode/ep11.jpg', },
  { season: 1, episode: 12, title: 'Blessure', image: '/Shingeki-No-Kyojin/Episode/ep12.jpg' },
  { season: 1, episode: 13, title: 'Désir primitif', image: '/Shingeki-No-Kyojin/Episode/ep13.jpg' },
  { season: 1, episode: 14, title: 'On ne peut pas le regarder dans les yeux', image: '/Shingeki-No-Kyojin/Episode/ep14.jpg' },
  { season: 1, episode: 15, title: 'Unité d\'intervention', image: '/Shingeki-No-Kyojin/Episode/ep15.jpg' },
  { season: 1, episode: 16, title: 'Ce qu\'il faut faire maintenant', image: '/Shingeki-No-Kyojin/Episode/ep16.jpg' },
  { season: 1, episode: 17, title: 'Le Titan féminin', image: '/Shingeki-No-Kyojin/Episode/ep17.jpg' },
  { season: 1, episode: 18, title: 'La forêt des arbres géants', image: '/Shingeki-No-Kyojin/Episode/ep18.jpg' },
  { season: 1, episode: 19, title: 'Morsure', image: '/Shingeki-No-Kyojin/Episode/ep19.jpg' },
  { season: 1, episode: 20, title: 'Erwin Smith', image: '/Shingeki-No-Kyojin/Episode/ep20.jpg' },
  { season: 1, episode: 21, title: 'Coup dur', image: '/Shingeki-No-Kyojin/Episode/ep21.jpg' },
  { season: 1, episode: 22, title: 'Les vaincus', image: '/Shingeki-No-Kyojin/Episode/ep22.jpg' },
  { season: 1, episode: 23, title: 'Sourire', image: '/Shingeki-No-Kyojin/Episode/ep23.jpg' },
  { season: 1, episode: 24, title: 'Pitié', image: '/Shingeki-No-Kyojin/Episode/ep24.jpg' },
  { season: 1, episode: 25, title: 'Mur', image: '/Shingeki-No-Kyojin/Episode/ep25.jpg' },

  { season: 2, episode: 1, title: 'Le Titan bestial', image: '/Shingeki-No-Kyojin/Episode/ep26.jpg' },
{ season: 2, episode: 2, title: 'De retour au village', image: '/Shingeki-No-Kyojin/Episode/ep27.jpg' },
{ season: 2, episode: 3, title: 'Direction Sud-ouest', image: '/Shingeki-No-Kyojin/Episode/ep28.jpg' },
{ season: 2, episode: 4, title: 'Soldats', image: '/Shingeki-No-Kyojin/Episode/ep29.jpg' },
{ season: 2, episode: 5, title: 'Historia', image: '/Shingeki-No-Kyojin/Episode/ep30.jpg' },
{ season: 2, episode: 6, title: 'Guerriers', image: '/Shingeki-No-Kyojin/Episode/ep31.jpg' },
{ season: 2, episode: 7, title: 'Percussion, projection, préhension', image: '/Shingeki-No-Kyojin/Episode/ep32.jpg' },
{ season: 2, episode: 8, title: 'Poursuite', image: '/Shingeki-No-Kyojin/Episode/ep33.jpg' },
{ season: 2, episode: 9, title: 'Paroles', image: '/Shingeki-No-Kyojin/Episode/ep34.jpg' },
{ season: 2, episode: 10, title: 'Enfants', image: '/Shingeki-No-Kyojin/Episode/ep35.jpg' },
{ season: 2, episode: 11, title: 'Assaut', image: '/Shingeki-No-Kyojin/Episode/ep36.jpg' },
{ season: 2, episode: 12, title: 'Cri', image: '/Shingeki-No-Kyojin/Episode/ep37.jpg' },

{ season: 3, episode: 1, title: 'Colonne de fumée', image: '/Shingeki-No-Kyojin/Episode/ep38.jpg' },
{ season: 3, episode: 2, title: 'Douleur', image: '/Shingeki-No-Kyojin/Episode/ep39.jpg' },
{ season: 3, episode: 3, title: 'Souvenirs', image: '/Shingeki-No-Kyojin/Episode/ep40.jpg' },
{ season: 3, episode: 4, title: 'Confiance', image: '/Shingeki-No-Kyojin/Episode/ep41.jpg' },
{ season: 3, episode: 5, title: 'Réponse', image: '/Shingeki-No-Kyojin/Episode/ep42.jpg' },
{ season: 3, episode: 6, title: 'Crime', image: '/Shingeki-No-Kyojin/Episode/ep43.jpg' },
{ season: 3, episode: 7, title: 'Souhait', image: '/Shingeki-No-Kyojin/Episode/ep44.jpg' },
{ season: 3, episode: 8, title: 'Le Rempart d’Orvud', image: '/Shingeki-No-Kyojin/Episode/ep45.jpg' },
{ season: 3, episode: 9, title: 'La reine de ces murs', image: '/Shingeki-No-Kyojin/Episode/ep46.jpg' },
{ season: 3, episode: 10, title: 'L\'amitié', image: '/Shingeki-No-Kyojin/Episode/ep47.jpg' },
{ season: 3, episode: 11, title: 'Un simple spectateur', image: '/Shingeki-No-Kyojin/Episode/ep48.jpg' },
{ season: 3, episode: 12, title: 'A la veille de la reconquête', image: '/Shingeki-No-Kyojin/Episode/ep49.jpg' },
{ season: 3, episode: 13, title: 'La cité où tout a commencé', image: '/Shingeki-No-Kyojin/Episode/ep50.jpg' },
{ season: 3, episode: 14, title: 'La lance foudroyante', image: '/Shingeki-No-Kyojin/Episode/ep51.jpg' },
{ season: 3, episode: 15, title: 'Irruption', image: '/Shingeki-No-Kyojin/Episode/ep52.jpg' },
{ season: 3, episode: 16, title: 'Match parfait', image: '/Shingeki-No-Kyojin/Episode/ep53.jpg' },
{ season: 3, episode: 17, title: 'Héroïque', image: '/Shingeki-No-Kyojin/Episode/ep54.jpg' },
{ season: 3, episode: 18, title: 'Soleil de minuit', image: '/Shingeki-No-Kyojin/Episode/ep55.jpg' },
{ season: 3, episode: 19, title: 'Le sous-sol', image: '/Shingeki-No-Kyojin/Episode/ep56.jpg' },
{ season: 3, episode: 20, title: 'Ce jour de mon enfance', image: '/Shingeki-No-Kyojin/Episode/ep57.jpg' },
{ season: 3, episode: 21, title: 'Le titan assaillant', image: '/Shingeki-No-Kyojin/Episode/ep58.jpg' },
{ season: 3, episode: 22, title: 'De l\'autre côté', image: '/Shingeki-No-Kyojin/Episode/ep5-89.jpg' },

{ season: 4, episode: 1, title: 'De l\'autre côté de la mer', image: '/Shingeki-No-Kyojin/Episode/ep59.jpg' },
{ season: 4, episode: 2, title: 'Train de nuit', image: '/Shingeki-No-Kyojin/Episode/ep60.jpg' },
{ season: 4, episode: 3, title: 'La porte de l\'espoir', image: '/Shingeki-No-Kyojin/Episode/ep61.jpg' },
{ season: 4, episode: 4, title: 'De main en main', image: '/Shingeki-No-Kyojin/Episode/ep62.jpg' },
{ season: 4, episode: 5, title: 'Déclaration de guerre', image: '/Shingeki-No-Kyojin/Episode/ep63.jpg' },
{ season: 4, episode: 6, title: 'Le Titan Marteau', image: '/Shingeki-No-Kyojin/Episode/ep64.jpg' },
{ season: 4, episode: 7, title: 'L\'assaut', image: '/Shingeki-No-Kyojin/Episode/ep65.jpg' },
{ season: 4, episode: 8, title: 'Balle mortelle', image: '/Shingeki-No-Kyojin/Episode/ep66.jpg' },
{ season: 4, episode: 9, title: 'Les mercenaires', image: '/Shingeki-No-Kyojin/Episode/ep67.jpg' },
{ season: 4, episode: 10, title: 'De beaux principes', image: '/Shingeki-No-Kyojin/Episode/ep68.jpg' },
{ season: 4, episode: 11, title: 'Imposture', image: '/Shingeki-No-Kyojin/Episode/ep69.jpg' },
{ season: 4, episode: 12, title: 'Le guide', image: '/Shingeki-No-Kyojin/Episode/ep70.jpg' },
{ season: 4, episode: 13, title: 'Les enfants de la forêt', image: '/Shingeki-No-Kyojin/Episode/ep71.jpg' },
{ season: 4, episode: 14, title: 'Sauvagerie', image: '/Shingeki-No-Kyojin/Episode/ep72.jpg' },
{ season: 4, episode: 15, title: 'La seule solution', image: '/Shingeki-No-Kyojin/Episode/ep73.jpg' },
{ season: 4, episode: 16, title: 'Ciel et terre', image: '/Shingeki-No-Kyojin/Episode/ep74.jpg' },
{ season: 4, episode: 17, title: 'Condamnation', image: '/Shingeki-No-Kyojin/Episode/ep75.jpg' },
{ season: 4, episode: 18, title: 'Ruse', image: '/Shingeki-No-Kyojin/Episode/ep76.jpg' },
{ season: 4, episode: 19, title: 'L\'aîné et le cadet', image: '/Shingeki-No-Kyojin/Episode/ep77.jpg' },
{ season: 4, episode: 20, title: 'Les souvenirs de l\'avenir', image: '/Shingeki-No-Kyojin/Episode/ep78.jpg' },
{ season: 4, episode: 21, title: 'De toi, il y a 2 000 ans', image: '/Shingeki-No-Kyojin/Episode/ep79.jpg' },
{ season: 4, episode: 22, title: 'Le dégel', image: '/Shingeki-No-Kyojin/Episode/ep80.jpg' },
{ season: 4, episode: 23, title: 'Le coucher du Soleil', image: '/Shingeki-No-Kyojin/Episode/ep81.jpg' },
{ season: 4, episode: 24, title: 'Amour-Propre', image: '/Shingeki-No-Kyojin/Episode/ep82.jpg' },
{ season: 4, episode: 25, title: 'La nuit du Final', image: '/Shingeki-No-Kyojin/Episode/ep83.jpg' },
{ season: 4, episode: 26, title: 'Traîtres', image: '/Shingeki-No-Kyojin/Episode/ep84.jpg' },
{ season: 4, episode: 27, title: 'Rétrospection', image: '/Shingeki-No-Kyojin/Episode/ep85.jpg' },
{ season: 4, episode: 28, title: 'L\'aube de l\'humanité', image: '/Shingeki-No-Kyojin/Episode/ep86.jpg' },
{ season: 4, episode: 29, title: 'Le Grand Terrassement', image: '/Shingeki-No-Kyojin/Episode/ep87.jpg' },
{ season: 4, episode: 30, title: 'Un long rêve ', image: '/Shingeki-No-Kyojin/Episode/ep88.jpg' }
];  

const episodeUrls = {
  1: {
    1:'https://video.sibnet.ru/shell.php?videoid=4665161',
    2:'https://video.sibnet.ru/shell.php?videoid=4665172',
    3:'https://video.sibnet.ru/shell.php?videoid=4665174',
    4:'https://video.sibnet.ru/shell.php?videoid=4665180',
    5:'https://video.sibnet.ru/shell.php?videoid=4665184',
    6:'https://video.sibnet.ru/shell.php?videoid=4665188',
    7:'https://video.sibnet.ru/shell.php?videoid=4665201',
    8:'https://video.sibnet.ru/shell.php?videoid=4665206',
    9:'https://video.sibnet.ru/shell.php?videoid=4665211',
    10:'https://video.sibnet.ru/shell.php?videoid=4665219',
    11:'https://video.sibnet.ru/shell.php?videoid=4665227',
    12:'https://video.sibnet.ru/shell.php?videoid=4665235',
    13:'https://video.sibnet.ru/shell.php?videoid=4665240',
    14:'https://video.sibnet.ru/shell.php?videoid=4665250',
    15:'https://video.sibnet.ru/shell.php?videoid=4665272',
    16:'https://video.sibnet.ru/shell.php?videoid=4665294',
    17:'https://video.sibnet.ru/shell.php?videoid=4665322',
    18:'https://video.sibnet.ru/shell.php?videoid=4665346',
    19:'https://video.sibnet.ru/shell.php?videoid=4665165',
    20:'https://video.sibnet.ru/shell.php?videoid=4665367',
    21:'https://video.sibnet.ru/shell.php?videoid=4665394',
    22:'https://video.sibnet.ru/shell.php?videoid=4665422',
    23:'https://video.sibnet.ru/shell.php?videoid=4665446',
    24:'https://video.sibnet.ru/shell.php?videoid=4665474',
    25:'https://video.sibnet.ru/shell.php?videoid=4665193',
  },
  2: {
    1:'https://video.sibnet.ru/shell.php?videoid=4667854',
		2:'https://video.sibnet.ru/shell.php?videoid=4667857',
		3:'https://video.sibnet.ru/shell.php?videoid=4667866',
		4:'https://video.sibnet.ru/shell.php?videoid=4667870',
		5:'https://video.sibnet.ru/shell.php?videoid=4667873',
		6:'https://video.sibnet.ru/shell.php?videoid=4667876',
		7:'https://video.sibnet.ru/shell.php?videoid=4667878',
		8:'https://video.sibnet.ru/shell.php?videoid=4667882',
		9:'https://video.sibnet.ru/shell.php?videoid=4667885',
		10:'https://video.sibnet.ru/shell.php?videoid=4667888',
		11:'https://video.sibnet.ru/shell.php?videoid=4667890',
		12:'https://video.sibnet.ru/shell.php?videoid=4667893',
  },
  3: {
    1:'https://video.sibnet.ru/shell.php?videoid=4667842',
		2:'https://video.sibnet.ru/shell.php?videoid=4667845',
		3:'https://video.sibnet.ru/shell.php?videoid=4667847',
		4:'https://video.sibnet.ru/shell.php?videoid=4667849',
		5:'https://video.sibnet.ru/shell.php?videoid=4667851',
		6:'https://video.sibnet.ru/shell.php?videoid=4667852',
		7:'https://video.sibnet.ru/shell.php?videoid=4667855',
		8:'https://video.sibnet.ru/shell.php?videoid=4667858',
		9:'https://video.sibnet.ru/shell.php?videoid=4667868',
		10:'https://video.sibnet.ru/shell.php?videoid=4667871',
		11:'https://video.sibnet.ru/shell.php?videoid=4667874',
		12:'https://video.sibnet.ru/shell.php?videoid=4667877',
		13:'https://video.sibnet.ru/shell.php?videoid=4667880',
		14:'https://video.sibnet.ru/shell.php?videoid=4667883',
		15:'https://video.sibnet.ru/shell.php?videoid=4667886',
		16:'https://video.sibnet.ru/shell.php?videoid=4667889',
		17:'https://video.sibnet.ru/shell.php?videoid=4667891',
		18:'https://video.sibnet.ru/shell.php?videoid=4667894',
		19:'https://video.sibnet.ru/shell.php?videoid=4667898',
		20:'https://video.sibnet.ru/shell.php?videoid=4667900',
		21:'https://video.sibnet.ru/shell.php?videoid=4667901',
		22:'https://video.sibnet.ru/shell.php?videoid=4667902',
  },
  4: {
    1:'https://video.sibnet.ru/shell.php?videoid=4667832',
    2:'https://video.sibnet.ru/shell.php?videoid=4667839',
    3:'https://video.sibnet.ru/shell.php?videoid=4667844',
    4:'https://video.sibnet.ru/shell.php?videoid=4667846',
    5:'https://video.sibnet.ru/shell.php?videoid=5315403',
    6:'https://video.sibnet.ru/shell.php?videoid=4667850',
    7:'https://video.sibnet.ru/shell.php?videoid=4667853',
    8:'https://video.sibnet.ru/shell.php?videoid=4667856',
    9:'https://video.sibnet.ru/shell.php?videoid=4667869',
    10:'https://video.sibnet.ru/shell.php?videoid=4667872',
    11:'https://video.sibnet.ru/shell.php?videoid=4667875',
    12:'https://video.sibnet.ru/shell.php?videoid=4667879',
    13:'https://video.sibnet.ru/shell.php?videoid=4667884',
    14:'https://video.sibnet.ru/shell.php?videoid=4667887',
    15:'https://video.sibnet.ru/shell.php?videoid=4667892',
    16:'https://video.sibnet.ru/shell.php?videoid=4667835',
    17:'https://video.sibnet.ru/shell.php?videoid=4667173',
    18:'https://video.sibnet.ru/shell.php?videoid=4667177',
    19:'https://video.sibnet.ru/shell.php?videoid=4667179',
    20:'https://video.sibnet.ru/shell.php?videoid=4666257',
    21:'https://video.sibnet.ru/shell.php?videoid=4666259',
    22:'https://video.sibnet.ru/shell.php?videoid=4667184',
    23:'https://video.sibnet.ru/shell.php?videoid=4667186',
    24:'https://video.sibnet.ru/shell.php?videoid=4667188',
    25:'https://video.sibnet.ru/shell.php?videoid=4667192',
    26:'https://video.sibnet.ru/shell.php?videoid=4666260',
    27:'https://video.sibnet.ru/shell.php?videoid=4667194',
    28:'https://video.sibnet.ru/shell.php?videoid=4667174',
    29:'https://video.sibnet.ru/shell.php?videoid=5066576',
    30:'https://video.sibnet.ru/shell.php?videoid=5308770',

  },
};

/// Mise à jour des liens vidéo pour chaque épisode
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
      <a href="/Shingeki-No-Kyojin/Episode.html?saison=${season}">
        <div class="season-card-image-container">
          <img src="/Shingeki-No-Kyojin/Season/season${season}.jpg" alt="Saison ${season}" />
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