import { fetchCharacterData } from './api.js';
import { displayCharacterInfo } from './domUtils.js';

// Exporting the function so it can be used in other files
export function setupSearchButton() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', handleSearch); // When you click the button, it calls handleSearch
}

// Async-function that handles the search
async function handleSearch() {
    // Getting the input and convert to lower-case letters, so it's not sensitive to upper-case letters
    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); 

    // If the search-field is empty, call off the function immediately
    if (!searchTerm) {
        return;
    }

    try {
        // Waiting to fetch the character-data from the database
        const characters = await fetchCharacterData(searchTerm);
        
        // If a character is found, send them to the a function that display them i the DOM
        if (characters?.length) {
            displayCharacterInfo(characters);
        } else {
            // Show alert if no character is found
            alert(`The character(s) with the name "${searchTerm}" could not be found.`);
        }
    } catch (error) {
        // All errors are catched and display the alert
        console.error('Error fetching data:', error);
        alert('Error fetching data.');
    }
}

// When the page i loaded, setupSearchButton() runs to add an eventListener to the search-button
window.addEventListener('DOMContentLoaded', setupSearchButton);