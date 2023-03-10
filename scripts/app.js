const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieReleaseDate = document.querySelector('.userInputMovieReleaseDate');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieReleaseDateToDisplay = document.querySelector('.movieReleaseDate');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let releaseDateInStorage = localStorage.getItem('releaseDate');

if(titleInStorage && imageUrlInStorage && releaseDateInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieReleaseDateToDisplay.textContent = releaseDateInStorage
    container.style.backgroundImage = `linear-gradient(rgba(52, 52, 92, 0.655), rgba(77, 56, 56, 0.582)), url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let releaseDateInput = movieReleaseDate.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('releaseDate', releaseDateInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(52, 52, 92, 0.655), rgba(77, 56, 56, 0.582)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieReleaseDate.value = '';
});