import { fetchCharacterData } from './api.js';
import { displayCharacterInfo } from './domUtils.js';

export function setupSearchButton() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', handleSearch);
}

async function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    if (!searchTerm) {
        return;
    }

    try {
        const characters = await fetchCharacterData();
        const character = characters.find(c => c.name.toLowerCase() === searchTerm);
        
        if (character) {
            displayCharacterInfo(character);
        } else {
            alert(`The character '${searchTerm}' could not be found.`);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Error fetching data.");
    }
}

// Anropa setupSearchButton när sidan har laddats
window.addEventListener('DOMContentLoaded', setupSearchButton);