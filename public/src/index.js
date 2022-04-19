import { showSpinner, hidenSpinner } from "./components/Spinner.js"; 
import { createCard } from "./components/createdCard.js";

const fetchApi = (id) => {
  fetch(` https://rickandmortyapi.com/api/character/${id}/`)
    .then((response) => response.json())
    .then((data) => {
      createCard(data);
      hidenSpinner();
      console.log(data);
    })
    .catch((err) => console.log(err));
}
const getCharacters = (number) => {
  showSpinner();
  for(let i = 1; i <= number; i++) {
    fetchApi(i);
  }
}
getCharacters(6);