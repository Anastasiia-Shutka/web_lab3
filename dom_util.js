const inputName = document.getElementById('input-name');
const inputDuration = document.getElementById('input-duration');
const inputReviews = document.getElementById('input-reviews');
const itemsContainer = document.getElementById('items-container');

// Шаблон для відображення фільму
const movieTemplate = ({ id, name, duration, reviews }) => `
<li id="${id}" class="card mb-3 movie-card">
  <img
    src="play-button-red-icon.png"
    class="movie-container__image card-img-top" alt="movie poster" style="width=45px">
  <div class="card-body">
    <p class="card-title">Name: ${name}</p>
    <p class="card-text-duration">Duration: ${duration} minutes</p>
    <p class="card-text-reviews">Reviews: ${reviews}</p>
    <button id="${id}-edit" type="button" class="btn-info">
      Edit
    </button>
  </div>
</li>`;

// Очищення полів вводу
export const clearInputs = () => {
  inputName.value = "";
  inputDuration.value = "";
  inputReviews.value = "";
};

// Додавання фільму на сторінку
export const addMovieToPage = ({ id, name, duration, reviews }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    movieTemplate({ id, name, duration, reviews })
  );
};

// Отримання значень з полів вводу
export const getInputValues = () => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    name: inputName.value,
    duration: inputDuration.value,
    reviews: inputReviews.value,
  };
};

// Відображення списку фільмів
export const renderMoviesList = (movies) => {
  itemsContainer.innerHTML = ""; // Очищення контейнера

  for (const movie of movies) {
    addMovieToPage(movie); // Додавання кожного фільму
  }
};
