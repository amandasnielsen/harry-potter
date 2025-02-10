export async function fetchCharacterData(characterName) {
    console.log('Fetching character data...');
    console.log('Character name:', characterName ?? null);

    const url = `https://hp-api.onrender.com/api/characters`;

    try {
        console.log('Fetching data from:', url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log('Fetched data:', data);

        if (characterName) {
            console.log('Filtering characters...');

            const lowercasedName = characterName.toLowerCase();

            console.log('Lowercased name:', lowercasedName);

            // Filter characters if the input is part of a name, and loweCase
            const filteredData = data.filter(character => 
                character.name && character.name.toLowerCase().includes(lowercasedName)
            );

            console.log('Filtered characters:', filteredData);

            return filteredData;
        }

        console.log('No character name specified, returning all characters...');

        return data; // If no name is written, return all characters
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // If anything is wrong, return null
    }
}