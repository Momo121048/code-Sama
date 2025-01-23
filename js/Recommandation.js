// Exemple de données recommandées
const recommendedAnimes = [
  { title: "Your Name", image: "/image/image/yourname.png", year: "2016", genre: "Animation", type: "Animé , Film", link: "/Your-Name/Your-Name.html" },
  { title: "One Piece", image: "/image/image/one-piece.jpg", year: "1999", genre: "Animation", type: "Animé", link: "/One-Piece/One-Piece.html" },
  { title: "Jujutsu Kaisen", image: "/image/image/jujutsu-kaisen.jpe", year: "2020", genre: "Animation", type: "Animé", link: "/Jujutsu Kaisen/Jujutsu Kaisen.html" },
  { title: "Hunter Hunter", image: "/image/image/hunter-x-hunter.png", year: "2011", genre: "Animation", type: "Animé", link: "/details/hunter-x-hunter" },
  { title: "Solo Leveling", image: "/image/image/solo-leveling.jpg", year: "2024", genre: "Animation", type: "Animé", link: "/Solo-Leveling/Solo-Leveling.html" },
  { title: "Chainsaw Man", image: "/image/image/chainsaw-man.jpg", year: "2022", genre: "Animation", type: "Animé", link: "/Chainsaw-man/Chainsaw-Man.html" },
  { title: "Shangri la Frontier", image: "/image/image/Shangri-la-Frontier.jpg", year: "2023", genre: "Animation", type: "Animé", link: "/Shangri-la-Frontier/Shangri-la-Frontier.html" },
  { title: "L'Attaque des Titans", image: "/image/image/L'Attaque-des-Titans.jpg", year: "2013", genre: "Animation", type: "Animé", link: "/Shingeki-No-Kyojin/Shingeki-No-Kyojin.html" },
  { title: "DanDaDan", image: "/image/image/Dan-Da-Dan.jpg", year: "2024", genre: "Animation", type: "Animé", link: "/Dan-Da-Dan/Dan-Da-Dan.html" },
  { title: "Vinland Saga", image: "/image/image/Vinland-Saga.jpg", year: "2019", genre: "Animation", type: "Animé", link: "/vinland-saga/Vinland-Saga.html" },
  { title: "Dr Stone", image: "/image/image/Dr-stone.jpg", year: "2019", genre: "Animation", type: "Animé", link: "/Dr-Stone/Dr-Stone.html" },
  { title: "Death Note", image: "/image/image/Death-Note.jpg", year: "2006", genre: "Animation", type: "Animé", link: "/Death-Note/Death-Note.html" },
  { title: "Samurai Champloo", image: "/image/image/samurai-champloo.jpg", year: "2004", genre: "Animation", type: "Animé", link: "/Samurai-Champloo/Samurai-Champloo.html" },
  { title: "Naruto", image: "/image/image/Naruto.jpg", year: "2002", genre: "Animation", type: "Animé", link: "/Naruto/Naruto.html" },
  { title: "Bleach", image: "/image/image/Bleach.jpg", year: "2004", genre: "Animation", type: "Animé", link: "/Bleach/Bleach.html" },
  { title: "One Punch Man", image: "/image/image/One-Punch-Man.jpg", year: "2015", genre: "Animation", type: "Animé", link: "/One-Punch-Man/One-Punch-Man.html" },
  { title: "Demon Slayer", image: "/image/image/Demon-Slayer.jpg", year: "2019", genre: "Animation", type: "Animé", link: "/Demon-Slayer/Demon-Slayer.html" },
  { title: "Black Clover", image: "/image/image/Black-Clover.jpg", year: "2017", genre: "Animation", type: "Animé", link: "/Black-Clover/Black-Clover.html" },
  { title: "My Hero Academia", image: "/image/image/My-Hero-Academia.jpg", year: "2016", genre: "Animation", type: "Animé", link: "/My-Hero-Academia/My-Hero-Academia.html" },
  { title: "Tokyo Revengers", image: "/image/image/Tokyo-Revengers.jpg", year: "2021", genre: "Animation", type: "Animé", link: "/Tokyo-Revengers/Tokyo-Revengers.html" },
  { title: "Naruto Shippuden", image: "/image/image/Naruto-Shippuden.jpg", year: "2007", genre: "Animation", type: "Animé", link: "/Naruto-Shippuden/Naruto-Shippuden.html" },
  // Ajoutez plus de données ici
];

// Fonction pour ajouter un anime à la Watchlist
function addToWatchlist(anime) {
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  watchlist = watchlist.filter(item => item.title !== anime.title); // Supprime l'ancienne entrée si elle existe
  watchlist.unshift(anime); // Ajoute la nouvelle entrée en haut de la liste
  localStorage.setItem('watchlist', JSON.stringify(watchlist));
}

// Fonction pour supprimer un anime de la Watchlist
function removeFromWatchlist(title) {
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  watchlist = watchlist.filter(anime => anime.title !== title);
  localStorage.setItem('watchlist', JSON.stringify(watchlist));
  displayWatchlist(); // Mettre à jour l'affichage de la Watchlist
}

// Fonction pour mélanger les éléments d'un tableau
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Mélangez les animes recommandés
const shuffledAnimes = shuffle(recommendedAnimes);

// Variables pour la pagination
let currentPage = 0;
const itemsPerPage = 20;

// Fonction pour afficher les animes recommandés
function displayAnimes(page) {
  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const selectedAnimes = shuffledAnimes.slice(start, end);

  const recommendedContainer = document.querySelector('.recommended-container');
  recommendedContainer.innerHTML = ''; // Efface le contenu précédent

  selectedAnimes.forEach(anime => {
    const card = document.createElement('div');
    card.classList.add('recommended-card');
    card.innerHTML = `
      <a href="${anime.link}">
        <img src="${anime.image}" alt="${anime.title}" />
        <div class="media-overlay1">
          <i class='bx bxs-right-arrow-circle'></i>
        </div>
        <div class="media-info">
          <div class="media-details">
            <p class="media-year">${anime.year}</p>
          </div>
          <h3 class="media-title">${anime.title}</h3>
          <p class="media-genre">${anime.genre}</p>
          <p class="media-type">${anime.type}</p>
        </div>
      </a>
    `;
    recommendedContainer.appendChild(card);
  });

  // Gérer la visibilité des boutons
  const prevPageButton = document.getElementById('prev-page-button');
  const nextPageButton = document.getElementById('next-page-button');

  prevPageButton.style.display = page === 0 ? 'none' : 'block';
  nextPageButton.style.display = end >= shuffledAnimes.length ? 'none' : 'block';
}

// Affiche la première page d'animes recommandés au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  displayAnimes(currentPage);

  // Ajoute un écouteur d'événement au bouton "Page Suivante"
  const nextPageButton = document.getElementById('next-page-button');
  nextPageButton.addEventListener('click', () => {
    currentPage++;
    displayAnimes(currentPage);
  });

  // Ajoute un écouteur d'événement au bouton "Page Précédente"
  const prevPageButton = document.getElementById('prev-page-button');
  prevPageButton.addEventListener('click', () => {
    currentPage--;
    displayAnimes(currentPage);
  });
});