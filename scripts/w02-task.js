// Step 1: Declare Variables
let fullName = 'Andrea Toreki'; 
const currentYear = new Date().getFullYear(); 
const profilePicture = 'images/me.jpg'; 

// Step 2: Set HTML Element Variables
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.getElementById('img'); 

// Step 3: Adding Content to the Document
if (nameElement) {
    nameElement.innerHTML = `<strong>${fullName}</strong>`; 
}
if (yearElement) {
    yearElement.textContent = currentYear; 
}
if (imageElement) {
    imageElement.setAttribute('src', profilePicture); 
    imageElement.setAttribute('alt', `Profile Image of ${fullName}`);
}

// Step 4: Working with Arrays
let favoriteFoods = ['Pizza', 'Sushi', 'Pasta', 'Salad', 'Banana', 'Apple', 'Strawberries', 'Blueberries', 'Pastries'];
let anotherFavoriteFood = 'Crepes'; 
favoriteFoods.push(anotherFavoriteFood);

if (foodElement) {
    foodElement.innerHTML = favoriteFoods.join(', ') + '<br>';

    favoriteFoods.shift(); 
    foodElement.innerHTML += favoriteFoods.join(', ') + '<br>';

    favoriteFoods.pop(); 
    foodElement.innerHTML += favoriteFoods.join(', ') + '<br>';
}
