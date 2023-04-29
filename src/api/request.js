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



const categories = [
    { name: 'Disney', company: 2 },
    { name: 'Marvel', company: 420 },
    { name: 'Pixar', company: 3 },
    { name: 'Star Wars', company: 19551 },
    { name: 'National Geographic', company: 1428 },
];

export default request;