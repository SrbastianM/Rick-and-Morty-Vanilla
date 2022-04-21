const createCard = (character) => {
    const rootCard = document.createElement('div');
    rootCard.classList.add('root', 'mt-5', 'mb-5') // 1 Madre
  
    const cardDistribution = document.createElement('div');
    cardDistribution.classList.add('card', 'mb-2', 'style="max-width:540px;');  // debajo de aqui 

    
    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('value', character.id)
    deleteButton.setAttribute('id', 'id-Button')
    deleteButton.classList.add('btn-close')

    cardDistribution.appendChild(deleteButton);

    
    const cardRow = document.createElement('div');
    cardRow.classList.add('row', 'g-2',  'grid') // OwO
    rootCard.appendChild(cardDistribution);
    
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('col-md-4')
    
    const image = document.createElement('img');
    image.classList.add('img-fluid', 'rounded-start');
    image.src = character.image
  
    const cardBodyDistribution = document.createElement('div');
    cardBodyDistribution.classList.add('col-md-6'); //BodyDistribution
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardId = document.createElement('div');
    cardId.setAttribute('id', 'card-id')
    cardId.classList.add('card-text')
    cardId.textContent = character.id
    
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = character.name
    
  
    const cardName = document.createElement('p');
    cardName.classList.add('card-text');
    cardName.textContent = character.species
  
    const cardStatus = document.createElement('p');
    cardStatus.classList.add('card-text');
    cardStatus.textContent = character.status
  
    const cardSmallTexContainer = document.createElement('p')
    cardSmallTexContainer.classList.add('card-text')
  
    const smallText = document.createElement('small')
    smallText.classList.add('text-muted')
    smallText.textContent = character.location.name
  
    cardSmallTexContainer.appendChild(smallText);
  
    cardDistribution.appendChild(cardRow); //Card distribution recibe los parametros para la card
    cardRow.appendChild(imageContainer); //hijo numero 3 recibe la imagein
  
    cardRow.appendChild(cardBodyDistribution)
    cardBodyDistribution.appendChild(cardBody)
    
    cardBody.appendChild(cardId);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardName)
    cardBody.appendChild(cardStatus)
    cardBody.appendChild(cardSmallTexContainer)
  
    imageContainer.appendChild(image);
    containerBody.appendChild(rootCard);
  
}

export { createCard };