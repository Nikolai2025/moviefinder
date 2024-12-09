const movieinformation=document.querySelector('#movieinformation')
const apiurl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=e9dfa86f7b80841271abb49800e0f47e';
const imageurl = 'https://image.tmdb.org/t/p/original';

    movieinfo();
function movieinfo(titlecontains = "") {
            movieinformation.innerHTML="";
        fetch(apiurl)
            .then(response => response.json())
            .then(json => {

                const movies = json["results"];


                movies.forEach(function (movie) {
                    if (movie["title"].toLowerCase().includes(titlecontains.toLowerCase()) ) {
                        let moviename = document.createElement("h1");
                        let movieposter = document.createElement("img");
                        let moviecontent = document.createElement("p");
                        let movierelase = document.createElement("p");

                        //set movie details
                        moviename.textContent = movie["title"];
                        moviecontent.textContent = "movie content: "+movie["overview"];
                        movieposter.src = imageurl + movie["poster_path"];
                        movierelase.textContent = "Release date: "+movie["release_date"]
                        movieposter.alt = movie["title"];
                        movieposter.onclick = ()=>movieinfo(movie["title"]);

                        //Append movie details to the movieDetailsPage
                        movieinformation.appendChild(moviename);
                        movieinformation.appendChild(movieposter);
                        movieinformation.appendChild(movierelase);
                        movieinformation.appendChild(moviecontent);

                    }
                });
            });

}
