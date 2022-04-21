import { showSpinner, hidenSpinner } from "./components/Spinner.js"; 
import { createCard } from "./components/createdCard.js";
//import { deleteCard } from "./components/Delete.js";

let offset = 1;
let limit = 5;


const fetchApi = (id) => {
  fetch(` https://rickandmortyapi.com/api/character/${id}/`)
    .then((response) => response.json())
    .then((data) => {
      createCard(data);
      hidenSpinner();
      //deleteCard(data);
      console.log(data);
    })
    .catch((err) => console.log(err));
}
const getCharacters = (offset, limit) => {
  showSpinner();
  for(let i = offset; i <= offset + limit; i++) {
    fetchApi(i);
  }
}
getCharacters(offset, limit);
