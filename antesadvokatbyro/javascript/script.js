// Get the current count from localStorage or set it to 0 if it doesn't exist yet.
let count = localStorage.getItem('count') || 0;

// Limit the count to a maximum of 4.
count = Math.min(count, 3);

// Increase the count by 1.
count++;

// Save the updated count back to localStorage.
localStorage.setItem('count', count);

// Update the count value so that it gets stored in localStorage
count = localStorage.getItem('count') || 0;

// Add or remove the YouTube link based on the count
const navbar = document.querySelector('.mainmenu ul');
const youtubeLink = document.querySelector('.mainmenu ul a[href="https://www.youtube.com/watch?v=xvFZjo5PgG0"]');

if (count === 4) {
  //Ska lägga till länk till navbaren men det funkar inte
  if (!youtubeLink) {
    const newLink = document.createElement('li');
    const link = document.createElement('a');
    link.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
    link.innerText = 'Secret';
    newLink.appendChild(link);
    navbar.appendChild(newLink);
  }
} else {
  if (youtubeLink) {
    navbar.removeChild(youtubeLink);
  }
}