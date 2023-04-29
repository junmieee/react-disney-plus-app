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
    { imgname: 'disney', videoname: 'disney', company: 2 },
    { imgname: 'marvel', videoname: 'marvel', company: 420 },
    { imgname: 'pixar', videoname: 'pixar', company: 3 },
    { imgname: 'starwars', videoname: 'star-wars', company: 19551 },
    { imgname: 'national', videoname: 'national-geographic', company: 1428 },
];

export { request, categories };
