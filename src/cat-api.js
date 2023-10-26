import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_nbDpU1qcjOjwGVJZCuTkD0kncD8qZSwjCGrP3KTDX7sI9dlwuKvRY9fu8uNEUaPp';

const URL = 'https://api.thecatapi.com/v1/';

// Створюємо класс для роботи з АРІ(виконує тільки запити на сервер, без обробки помилок-----------------

export default class ApiService {
  constructor() {}

  fetchBreeds() {
    return axios.get(`${URL}breeds`).then(response => response.data);
  }

  fetchCatByBreed(breedId) {
    return axios
      .get(`${URL}images/search?breed_ids=${breedId}`)
      .then(response => response.data[0]);
  }
}
