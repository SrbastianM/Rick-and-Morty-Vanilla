import { url } from "./components/Api.js";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let infoPersonaje = '';
    data.results.forEach(elem => {
        infoPersonaje += ` 
        <div class="root mt-5 mb-5">
                <div class="card mb-2" style="max-width: 540px;">
                    <div class="row g-2 grid">
                        <div class="col-md-4">
                            <img src="${elem.image}" class="img-fluid rounded-start" alt="${elem.info}">
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">${elem.name}</h5>
                                <p class="card-text">${elem.species}</p>
                                <p class="card-text">${elem.status}</p>
                                <p class="card-text"><small class="text-muted">${elem.location.name}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        `
    });
    document.getElementById('containerBody').innerHTML = infoPersonaje;
    console.log(data);
  })
  .catch((err) => console.log(err));
