import { showSpinner, hidenSpinner } from "./components/Spinner.js";
import { createCard } from "./components/createdCard.js";
import { deleteCard } from "./components/Delete.js";

let offset = 1;
let limit = 5;

const fetchApi = (id) => {
  fetch(` https://rickandmortyapi.com/api/character/${id}/`)
    .then((response) => response.json())
    .then((data) => {
      showSpinner();
      setTimeout(() => {
        createCard(data);
        hidenSpinner();
        deleteCard(data);
      }, 3000);
      console.log(data);
    })
    .catch((err) => console.log(err));
};
const getCharacters = (offset, limit) => {
  for (let i = offset; i <= offset + limit; i++) {
    fetchApi(i);
  }
};
getCharacters(offset, limit);
