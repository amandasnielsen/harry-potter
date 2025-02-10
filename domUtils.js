// Creating an element and adding the data
function createTextElement(tag, textContent) {
    const element = document.createElement(tag); // Creating a new HTML-element with the tag
    element.textContent = textContent; // Putting the text in the element
    return element; // Returning the created element
}

// Getting an array of characters and creating a div for each character
export function displayCharacterInfo(characters) {
    const resultDiv = document.getElementById("result");

    if (!resultDiv || !characters.length) {
        return;
    }
    // Emptying the result-div
    resultDiv.innerHTML = '';

    // Looping through all characters and creating a section
    for (const character of characters) {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character-info');

        // Creating an element and adding each property
        characterDiv.appendChild(createTextElement('h2', character.name));
        characterDiv.appendChild(createTextElement('p', `Other names: ${character.alternate_names || 'Not available'}`));
        characterDiv.appendChild(createTextElement('p', `House: ${character.house || 'Not available'}`));
        characterDiv.appendChild(createTextElement('p', `Date of Birth: ${character.dateOfBirth || 'Not available'}`));
        characterDiv.appendChild(createTextElement('p', `Ancestry: ${character.ancestry || 'Not available'}`));
        characterDiv.appendChild(createTextElement('p', `Patronus: ${character.patronus || 'Not available'}`));

        // If the image is unavailable, add a dummy-image with the characters name
        const imageElement = document.createElement('img');
        imageElement.src = character.image || `https://dummyimage.com/200x267/eee/666&text=${character.name}`;
        imageElement.alt = character.name;
        imageElement.style.width = '200px';
        characterDiv.appendChild(imageElement);

        // Adding to the result-div
        resultDiv.appendChild(characterDiv);
    }
}