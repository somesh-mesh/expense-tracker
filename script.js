// script.js
fetch('mytext.txt')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching the text file:', error));
