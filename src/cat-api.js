import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_nbDpU1qcjOjwGVJZCuTkD0kncD8qZSwjCGrP3KTDX7sI9dlwuKvRY9fu8uNEUaPp';

const URL = 'https://api.thecatapi.com/v1/';

function fetchBreeds() {
  return axios
    .get(`${URL}breeds`)
    .then(response => response.data)
    .catch(error => console.error(error));
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`${URL}images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => console.error(error));
}

export { fetchBreeds, fetchCatByBreed };
