const request = {
    fetchNowPlaying: "movie/now_playing",
    fetchTrending: "/trending/all/week",
    fetchTopRated: "/movie/top_rated",
    fetchActionMovies: "/discover/movie?with_genres=28",
    fetchComedyMovies: "/discover/movie?with_genres=35",
    fetchHorrorMovies: "/discover/movie?with_genres=27",
    fetchRomanceMovies: "/discover/movie?with_genres=10749",
    fetchDocumentaries: "/discover/movie?with_genres=99",
}

const category = [
    {
        title: "Popular Movies",
        path: "/popular",
        fetchUrl: "https://api.themoviedb.org/3/movie/popular?api_key=API_KEY&language=en-US&page=1",
    },
]

export default request;