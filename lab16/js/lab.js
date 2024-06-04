// URL for the Pokémon API
const URL = "https://pokeapi.co/api/v2/pokemon/";

// Button click event
$("#activate").click(function(){
  console.log("Click");
  getRandomPokemon();
});

function getRandomPokemon() {
    const maxPokemonId = 898; // As of the last update, there are 898 Pokémon
    const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
    const apiUrl = `${URL}${randomId}/`;

    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request
        url: apiUrl,
        // The data to send (will be converted to a query string)
        // In this case, no additional data is needed for this specific API call
        data: { 
            // Any required data for the API would go here
        },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        success: ajaxSuccess,
        // What we do if the api call fails
        error: ajaxError
    });
}

function ajaxSuccess(data) {
    console.log("Data:", data);
    const name = capitalizeFirstLetter(data.name);
    const imageUrl = data.sprites.front_default;
    const types = data.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join(', ');

    $("#pokemon-name").text(name);
    $("#pokemon-image").attr("src", imageUrl);
    $("#pokemon-image").attr("alt", name);
    $("#pokemon-details").text(`ID: ${data.id} | Type: ${types}`);

    // Also update the output div with more detailed information if needed
    $("#output").html(`
        <h3>${name}</h3>
        <img src="${imageUrl}" alt="${name}" width="500" height="500">
        <p>ID: ${data.id}</p>
        <p>Type: ${types}</p>
    `);
}

function ajaxError(jqXHR, textStatus, errorThrown) {
    console.error("Error fetching data:", textStatus, errorThrown);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
