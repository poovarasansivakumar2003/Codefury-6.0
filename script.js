document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchbar = document.querySelector('.search-bar');

    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      searchbar.classList.toggle('active');
    });
  });

const apiKey = '2ba6f64978434240b01492498b95e2de'; 
const newsApiUrl = 'https://newsapi.org/v2/top-headlines';
const country = 'india';
const category = 'business'; 

const apiUrl = `${newsApiUrl}?country=${country}&category=${category}&apiKey=${apiKey}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {

    console.log(data);


  })
  .catch(error => {
    console.error('Fetch error:', error);
  });