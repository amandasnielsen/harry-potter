export async function fetchCharacterData(characterName) {
    console.log('Fetching character data...');
    console.log('Character name:', characterName ?? null);

    const url = `https://hp-api.onrender.com/api/characters`;

    try {
        console.log('Fetching data from:', url);

        const response = await fetch(url);

        // Kontrollera om anropet lyckades
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Logga datan för felsökning
        console.log('Fetched data:', data);

        // Om ett namn har angetts, filtrera karaktärerna
        if (characterName) {
            console.log('Filtering characters...');

            const lowercasedName = characterName.toLowerCase();

            console.log('Lowercased name:', lowercasedName);

            // Filtrera karaktärerna där namnet innehåller den del av namnet vi söker
            const filteredData = data.filter(character => 
                character.name && character.name.toLowerCase().includes(lowercasedName)
            );

            console.log('Filtered characters:', filteredData); // Logga de filtrerade karaktärerna

            return filteredData;
        }

        console.log('No character name specified, returning all characters...');

        return data; // Om inget namn har angetts, returnera alla karaktärer
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Om något går fel, returnera null
    }
}