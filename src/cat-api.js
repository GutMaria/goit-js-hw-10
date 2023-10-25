import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_nbDpU1qcjOjwGVJZCuTkD0kncD8qZSwjCGrP3KTDX7sI9dlwuKvRY9fu8uNEUaPp';

const URL = 'https://api.thecatapi.com/v1/';
const loader = document.querySelector('.loader');
const loaderError = document.querySelector('.error');

// function fetchBreeds() {
//   loader.hidden = false;
//   return axios
//     .get(`${URL}breeds`)
//     .then(response => {
//       loader.hidden = true;
//       return response.data;
//     })
//     .catch(() => {
//       loader.hidden = true;
//       loaderError.hidden = false;
//       return [];
//       // ----------------Чи треба повертати пустий масив ????
//     });
// }

// function fetchCatByBreed(breedId) {
//   loader.hidden = false;
//   loaderError.hidden = true;

//   return axios
//     .get(`${URL}images123/search?breed_ids=${breedId}`)
//     .then(response => {
//       loader.hidden = true;
//       return response.data;
//     })
//     .catch(() => {
//       loader.hidden = true;
//       loaderError.hidden = false;
//       // console.error(error);
//       return [];
//     });
// }

// export { fetchBreeds, fetchCatByBreed };

// Пробую створити класс для роботи з АРІ-----------------

export default class ApiService {
  constructor() {}

  fetchBreeds() {
    loader.hidden = false;
    return axios
      .get(`${URL}breeds`)
      .then(response => {
        loader.hidden = true;
        return response.data;
      })
      .catch(() => {
        loader.hidden = true;
        loaderError.hidden = false;
        return [];
      });
  }

  fetchCatByBreed(breedId) {
    loader.hidden = false;
    loaderError.hidden = true;

    return axios
      .get(`${URL}images/search?breed_ids=${breedId}`)
      .then(response => {
        loader.hidden = true;
        return response.data;
      })
      .catch(() => {
        loader.hidden = true;
        loaderError.hidden = false;
        // console.error(error);
        return [];
      });
  }
}
