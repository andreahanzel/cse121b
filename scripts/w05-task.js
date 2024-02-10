/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');
let templeList = [];


/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        h3.style.marginTop = '5px';
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        img.style.width = '250px'; // Smaller width
        img.style.height = '200px'; // Smaller height
        img.style.objectFit = 'cover'; // Ensure the image covers the entire container
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
    templeList = await response.json();
    displayTemples(templeList);
};


/* reset Function */

const reset = () => {
    templesElement.innerHTML = '';
};


/* sortBy Function */

const sortBy = (filter) => {
    reset();
    let sortedTemples = templeList;
    switch (filter) {
        case 'utah':
            sortedTemples = templeList.filter(temple => temple.location.includes('Utah'));
            break;
        case 'notutah':
            sortedTemples = templeList.filter(temple => !temple.location.includes('Utah'));
            break;
        case 'older':
            sortedTemples = templeList.filter(temple => new Date(temple.dedicated) < new Date('1950-01-01'));
            break;
        case 'alphabetical':
            sortedTemples = templeList.slice().sort((a, b) => a.templeName.localeCompare(b.templeName));
            break;
        case 'newest':
            sortedTemples = templeList.filter(temple => new Date(temple.dedicated) > new Date('2000-01-01'));
            break;
    }
    displayTemples(sortedTemples);
};


getTemples();

/* Event Listener */

document.querySelector('#filtered').addEventListener('change', (event) => {
    sortBy(event.target.value);
});
