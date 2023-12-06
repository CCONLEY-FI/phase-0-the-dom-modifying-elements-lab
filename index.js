

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.textContent = "Chris is the champion";

const mainElement = document.querySelector('#main');
mainElement.appendChild(newHeader);
mainElement.remove('main');
