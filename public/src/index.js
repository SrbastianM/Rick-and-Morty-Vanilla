import { url } from "./components/Api.js";
import { Card } from "./components/Card.js";


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let infoPersonaje = '';
    data.results.forEach(elem => {
        infoPersonaje += Card(elem);
    });
    document.getElementById('containerBody').innerHTML = infoPersonaje;
    console.log(data);
  })
  .catch((err) => console.log(err));
