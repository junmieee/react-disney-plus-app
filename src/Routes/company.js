import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CompanyPage() {
    const [movies, setMovies] = useState([]);
    const { company } = useParams();

    useEffect(() => {
        async function fetchMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_companies=${company}`
            );
            setMovies(response.data.results);
        }
        fetchMovies();
    }, [company]);

    return (
        <div>
            <h2>{company} 영화 목록</h2>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </div>
            ))}
        </div>
    );
}

export default CompanyPage;