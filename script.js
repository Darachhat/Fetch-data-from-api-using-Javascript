// Fetch (url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => 
//     {
//         if(!response.ok){
//             throw new Error("Could not fetch data");
//         }
//         return response.json();
//     }
//     )
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// Using async/await
async function fetchData() {
    try {

        const Name = document.getElementById("Name").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Name}`)

        // if response is not ok
        if(!response.ok){
            throw new Error("Could not fetch data");
        }

        // if response is ok
        const data = await response.json();
        // console.log(data);
        
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        

    } catch (error) {
        console.log(error);
        
    }
}