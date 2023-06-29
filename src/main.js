import { getFilms, sortDataYear, sortDataTitle } from './data.js';

let films = getFilms();
console.log(films);
const filmsContainer = document.getElementById('films-container');
const welcomeContainer = document.getElementById('welcome');
const filterButton = document.getElementById('filter-button');
const sortSelect = document.getElementById('sort-select');
const filterContainer = document.getElementById('filter-container')
const searchInput = document.getElementById('search-input');
const searchContainer = document.getElementById('search-container')

function sortFilms() {
  const sortOrder = sortSelect.value; // Obtiene el valor seleccionado: "asc" o "desc"
  if (sortOrder === 'asc' || sortOrder === 'desc') {
    films = sortDataTitle(films, sortOrder === 'asc');
  } else if (sortOrder === 'yearAsc' || sortOrder === 'yearDesc') {
    films = sortDataYear(films, sortOrder === 'yearAsc');
  }
  // Vuelve a generar el contenido HTML de las películas ordenadas
  const filmList = films
    .map((film) => {
      return `
        <div class="film-container">
          <img src="${film.poster}" alt="${film.title} Poster">
          <h3>${film.title}</h3>
          <p>${film.release_date}</p>
        </div>
      `;
    })
    .join('');

  filmsContainer.innerHTML = filmList;
}
function showFilterOptions() {
  filterContainer.style.display = 'block';
  sortSelect.addEventListener('change', sortFilms);
  
}
filterButton.addEventListener('click', showFilterOptions);

// Función para mostrar el contenedor de películas
function showFilmsContainer() {
  filmsContainer.style.display = 'block';
  filterContainer.style.display = 'block';
  searchContainer.style.display = 'block';
  welcomeContainer.style.display = 'none';
}
function showSearch() {
  searchInput.style.display = 'block';
}
function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();

  // Filtra las películas que coincidan con el término de búsqueda
  const filteredFilms = films.filter((film) => {
    const filmTitle = film.title.toLowerCase();
    return filmTitle.includes(searchTerm);
  });

  // Genera el HTML de las películas filtradas y actualiza el contenido del contenedor de películas
  const filmList = filteredFilms
    .map((film) => {
      return `
        <div class="film-container">
          <img src="${film.poster}" alt="${film.title} Poster">
          <h3>${film.title}</h3>
          <p>${film.release_date}</p>
        </div>
      `;
    })
    .join('');

  filmsContainer.innerHTML = filmList;
}


//al presionar movies.

const moviesButton = document.getElementById('movies-button');
moviesButton.addEventListener('click', () => {
  showFilmsContainer();
  showFilterOptions();
  showSearch();
});
searchInput.addEventListener('input', performSearch);
//const moviesButton = document.getElementById('movies-button');
//moviesButton.addEventListener('click', showFilmsContainer); //cuando el botón sea clickeado, se llamará a la función showFilmsContainer.

const filmList = films.map(film => { //El map()método crea una nueva matriz con los resultados de llamar a una función proporcionada en cada elemento de la matriz que llama.  
  return `
      <div class="film-container">
        <img src="${film.poster}" alt="${film.title} Poster">
        <h3>${film.title}</h3>
        <p>${film.release_date}</p>
        </div>
        `;
}).join(''); // Combina todos los elementos del array en una sola cadena de texto, separados por una cadena vacía
// Agrega el contenido HTML al elemento <div>
filmsContainer.innerHTML = filmList; //para meterle al div la lista que hicimos. Reemplaza filmsContainer con la lista que acabamos de hacer.
    
const ghiblipediaButton = document.getElementById('ghiblipedia');

ghiblipediaButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});
//¿main no es donde se maneja la logica?
/*import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);*/