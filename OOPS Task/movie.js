class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG" || movie.rating === "PG13");
    }
}
      
    const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");

    const movies = [
        new Movie("Jurassic Park", "A Studios", "PG13"),
        new Movie("Titanic", "B Studios", "PG"),
        new Movie("Avengers", "Marvel Studios", "R"),
        new Movie("Godzilla", "C Studios")
    ];

    const pgMovies = Movie.getPG(movies);
    console.log(pgMovies);
    