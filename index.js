import {
    addMovieToPage,
    renderMoviesList,
    clearInputs,
    getInputValues,
} from "./dom_util.js";

const create = document.getElementById('create');
const findInput = document.getElementById('search-input');
const findButton = document.getElementById('search');
const cancelFindButton = document.getElementById('cancel');
const countReviewsButton = document.getElementById('count-reviews');
const reviewCountDisplay = document.getElementById('review-count');
const sortButton = document.getElementById('sort-button');
const sortOptions = document.getElementById('sort-options');

let movies = []; // Масив для збереження фільмів

// Додавання нового фільму
create.addEventListener('click', (event) => {
    event.preventDefault();
    let value = getInputValues();
    if (value != -1) {
        movies.push(value);
        addMovieToPage(value);
        clearInputs();
    }
});

// Пошук фільму за назвою
findButton.addEventListener("click", () => {
    const foundMovie = movies.filter(
      (movie) => movie.name.toLowerCase().includes(findInput.value.toLowerCase())
    );
    renderMoviesList(foundMovie);
});

// Скасування пошуку
cancelFindButton.addEventListener("click", () => {
    renderMoviesList(movies);
    findInput.value = "";
});

// Підрахунок загальної кількості відгуків
countReviewsButton.addEventListener('click', () => {
    const totalReviews = movies.reduce((sum, movie) => sum + Number(movie.reviews), 0);
    reviewCountDisplay.textContent = `Total number of reviews: ${totalReviews}`;
});

// Сортування фільмів
sortButton.addEventListener('click', () => {
    const sortBy = sortOptions.value;

    if (sortBy === 'name') {
        movies.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'duration') {
        movies.sort((a, b) => Number(a.duration) - Number(b.duration));
    } else if (sortBy === 'reviews') {
        movies.sort((a, b) => Number(a.reviews) - Number(b.reviews));
    }

    renderMoviesList(movies);
});
