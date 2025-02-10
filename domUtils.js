// Skapar element och lägger texten där. Etiketterna blir bold, med <strong>
function createTextElement(tag, textContent, isStrong = false) {
    const element = document.createElement(tag);
    if (isStrong) {
        const strong = document.createElement('strong');
        strong.textContent = textContent;
        element.appendChild(strong);
    } else {
        element.textContent = textContent;
    }
    return element;
}

export function displayCharacterInfo(character) {
    const resultDiv = document.getElementById("result");

    // Rensar tidigare resultat
    while (resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild);
    }

    // Skapar en container och lägger all info där
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character-info');

    characterDiv.appendChild(createTextElement('h2', character.name));
    characterDiv.appendChild(createTextElement('p', `Other names: ${character.alternate_names || 'Not available'}`, true));
    characterDiv.appendChild(createTextElement('p', `House: ${character.house || 'Not available'}`, true));
    characterDiv.appendChild(createTextElement('p', `Date of Birth: ${character.dateOfBirth || 'Not available'}`, true));
    characterDiv.appendChild(createTextElement('p', `Ancestry: ${character.ancestry || 'Not available'}`, true));
    characterDiv.appendChild(createTextElement('p', `Patronus: ${character.patronus || 'Not available'}`, true));

    const imageElement = document.createElement('img');
    imageElement.src = character.image;
    imageElement.alt = character.name;
    imageElement.style.width = '200px';
    characterDiv.appendChild(imageElement);

    // Lägg till  i result-diven
    resultDiv.appendChild(characterDiv);
}