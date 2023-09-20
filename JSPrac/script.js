const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is the glorious text-content";

container.appendChild(content);

// Add a <p> with text and change color to red

const pTag = document.createElement('p');
pTag.textContent = "Hey I'm red!";
pTag.style.color = "red";

container.appendChild(pTag);

// Add a blue <h3> with text
const blueHThree = document.createElement('h3');
blueHThree.textContent = "I'm a blue h3";
blueHThree.style.color = "blue";
container.appendChild(blueHThree)

// Add a new div with a border an pink background

const newDiv = document.createElement('div');
newDiv.style.border = 'solid black 2px';
newDiv.style.backgroundColor = "pink";
container.appendChild(newDiv);

// Add a new h1 in the div
const divH1 = document.createElement('h1');
divH1.textContent = "Im in a div";
newDiv.appendChild(divH1);

// Add a p as well
const divP = document.createElement('p');
divP.textContent = "Me too";
newDiv.appendChild(divP)