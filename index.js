const search = document.querySelector('#search');
const movieContainer = document.querySelector('#movieContainer');
const apiurl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=e9dfa86f7b80841271abb49800e0f47e';
const imageurl = 'https://image.tmdb.org/t/p/original';

function loadimages(titlecontains = "") {
    movieContainer.innerHTML = ""; // Ryd containeren

    fetch(apiurl)
        .then(response => response.json())
        .then(json => {

            const movies = json["results"];

            movies.forEach(function (movie) {
                // Kontrollér om titlen indeholder den søgte tekst
                if (movie["title"].toLowerCase().includes(titlecontains.toLowerCase())) {
                    document.createElement("a");
                    let movieposter = document.createElement("img");
                    movieposter.src = imageurl + movie["poster_path"];
                    movieposter.alt = movie["title"]; // Tilføj alt-tekst for bedre tilgængelighed

                    movieContainer.appendChild(movieposter); // Tilføj billede til containeren

                }
            });
        })
}

window.onload = function() {
    loadimages(); // Indlæs billeder ved indlæsning af siden
};

// Lyt efter input på søgefeltet
search.addEventListener('input', function() {
    loadimages(search.value); // Filtrér billeder baseret på søgningen
});


