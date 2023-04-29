import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../api/axios";
import DetailPage from "./detail";

function CompanyPage() {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    const { id } = useParams();
    console.log('zjzjzj', id);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await instance.get(`/discover/movie`, {
                    params: {
                        with_companies: id,
                    },
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMovies();
    }, [id]);
    console.log('무비', movies)
    console.log('무비셀렉티드', movieSelected)


    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }



    return (


        <section className='search-container'>
            {movies.map((movie) => {
                if (movie.backdrop_path !== null && movie.media_type !== "person") {
                    const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
                    return (
                        <>
                            <div className='movie' key={movie.id}>
                                <div className='movie__column-poster' onClick={() => handleClick(movie)} >
                                    <img src={movieImageUrl} alt="movie" className='movie__poster' />
                                </div>
                            </div>
                            {modalOpen && <DetailPage {...movieSelected} setModalOpen={setModalOpen} />}
                        </>
                    )
                }
            })}
        </section>
        // <div>
        //     <h2>{id} 영화 목록</h2>
        //     {movies.map((movie) => (
        //         <div key={movie.id}>
        //             <h3>{movie.title}</h3>
        //             <p>{movie.overview}</p>
        //         </div>
        //     ))}
        // </div>
    );
}

export default CompanyPage;