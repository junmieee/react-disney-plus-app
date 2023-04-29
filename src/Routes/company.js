import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../api/axios";

function CompanyPage() {
    const [movies, setMovies] = useState([]);
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


    return (
        <div>
            <h2>{id} 영화 목록</h2>
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