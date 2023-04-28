import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import { makeImagePath } from '../utils'
import '../Routes/search.css'
import { useDebounce } from '../hooks/useDebounce'
import DetailPage from './detail'






const SearchPage = () => {
    const navigate = useNavigate();

    const [searchResult, setSearchResult] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});


    const useQuery = () => {
        return new URLSearchParams(useLocation().search);

    }
    let query = useQuery();
    const searchTerm = query.get("q");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    console.log('useLocation', useLocation());

    // const handleClick = (movie) => {
    //     setModalOpen(true);
    //     navigate(`/${movie.id}`)

    // }

    const handleClick = (movie) => {
        setModalOpen(true);

        setMovieSelected(movie);

    }


    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchSearchMovie(debouncedSearchTerm)
        }
    }, [debouncedSearchTerm])


    const fetchSearchMovie = async (searchTerm) => {
        try {
            const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
            setSearchResult(response.data.results);
        }

        catch {
            console.log('error');
        }
    }
    console.log('searchResult', searchResult)


    if (searchResult.length > 0) {

        return (
            <section className='search-container'>
                {searchResult.map((movie) => {
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
        )
    } else {
        return (
            <section className='no-results'>
                <div className='no-results__text'>
                    <p>
                        찾고자하는 검색어 "{searchTerm}"와 관련된 영화가 없습니다.
                    </p>
                </div>
            </section>
        )

    }



}

export default SearchPage
