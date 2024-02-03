/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Andrea Toreki",
    photo: "images/me.jpg", 
    favoriteFoods: ['Sushi', 'Lasagna', 'Pepperoni Pizza', 'Fish and Chips', 'Apple Pie'],
    hobbies: ['Coding', 'Hiking', 'Reading', 'Singing'], 
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    { place: 'Bay Area, CA', length: '6 year' },
    { place: 'Budapest,Hungary', length: '15 years' }, 
    { place: 'Gyor, Hungary', length: '15 year' },
    { place: 'Linz, Austria', length: '1 year' },
    { place: 'Los Angeles, CA', length: '2 year' },
);

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.getElementById('photo');
photoElement.src = myProfile.photo;
photoElement.alt = `Photo of ${myProfile.name}`;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.getElementById('favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.getElementById('hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;
    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;
    document.getElementById('places-lived').appendChild(dt);
    document.getElementById('places-lived').appendChild(dd);
});
