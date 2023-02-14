import React from 'react'
import { useEffect, useState } from "react";
import axios from "../api/axios"
import request from "../api/request"
import "./Banner.css"
import styled from 'styled-components';
import { BsBoxArrowInLeft } from "react-icons/bs";
import { useRecoilState } from 'recoil';
import { MovieList, PlayClicked } from "../atom"

const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height:100vh; 
`

const HomeContainer = styled.div`
width: 100%;
height: 100%;


`


const Iframe = styled.iframe`
width: 100%;
height: 100%;
z-index: -1;
opacity: 0.65;
border: none;


&::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
`


const BackButton = styled.div`

width: 34px;
 height: 35px;
 position: relative;

 display: flex;
 bottom: 0;
 float: right;
 top: 30px;
 left: 35px;
 
 svg{
     width: 100%;
     height: 100%;
     cursor: pointer;
     &:hover {
         color: #2c3e50;
		box-shadow: 0 0.6rem 1.2rem rgba(0, 0, 0, 0.25);
        transition: all 0.2s ease-out;

	}
 }
 
 
`

// const returnButton = styled.div`

// width: 33px;
// height: 40px;
// position: absolute;


// `

const Banner = () => {
    const [movie, setMovie] = useRecoilState(MovieList);
    const [isClicked, setIsClicked] = useRecoilState(PlayClicked);
    // const [movie, setMovie] = useState([])
    // const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetchData()

    }, [])


    const fetchData = async () => {
        //현재 상영중인 영화 정보 가져오기
        const response = await axios.get(request.fetchNowPlaying)
        console.log(response)

        //여러 영화 중 랜덤으로 하나의 영화 ID 가져오기
        const movieId = response.data.results[Math.floor(Math.random() * response.data.results.length)].id

        //특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, { params: { append_to_response: 'videos' } })


        setMovie(movieDetail);
        console.log(movie)
    }

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n) + '...' : str
    }
    <iframe width="560" height="315"
        src="https://www.youtube.com/embed/EPgOSOJI9zI"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>



    if (isClicked) {
        return (
            <>
                <BackButton onClick={() => setIsClicked(false)}>
                    <BsBoxArrowInLeft />
                </BackButton>

                <Container>
                    <HomeContainer style={{ marginTop: 70 }}>
                        <Iframe
                            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                            width="640"
                            height="360"
                            frameborder="0"

                            allow="autoplay; fullscreen"
                        ></Iframe>
                    </HomeContainer>
                </Container>
            </>
        )
    } else {
        return (

            <header
                className="banner" style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                    backgroundPosition: "top center",
                    backgroundSize: "cover",
                    borderRadius: "10px"
                }}
            >
                <div className='banner_contents'>
                    <h1 className='banner_title'>
                        {movie.title || movie.name || movie.original_name}
                    </h1>

                    <div className='banner_buttons'>
                        {movie?.videos?.results[0]?.key && <button onClick={() => setIsClicked(true)} className='banner_button play'>
                            Play
                        </button>}

                    </div>
                    <p className='banner_description'>
                        {truncate(movie.overview, 100)}
                    </p>
                </div>
                <div className='banner_fadeBottom' />

            </header >
        )
    }
}

export default Banner
