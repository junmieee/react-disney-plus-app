import React, { useEffect, useCallback, useState } from 'react';
import { MovieRowList } from '../atom';
import { useRecoilState } from 'recoil';
import axios from '../api/axios';
import { makeImagePath } from '../utils';
import "./Row.css"
import MovieModal from './MovieModal/modal';
import { motion, AnimatePresence } from "framer-motion"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
//import swiper style
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';





const BoxVariants = {
    normal: {
        scale: 1,
    },
    hover: {
        scale: 1.04,

        transition: {
            //bouncing 방지
            type: "tween",
            delay: 0.3,
            duration: 0.2,
        },
    },
};
const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`

`;

const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
              rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out;
    z-index:1;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
       rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Row = ({ title, id, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);


    const [movieSelected, setMovieSelected] = useState({});
    const fetchMovieData = useCallback(async () => {
        const response = await axios.get(fetchUrl);
        // console.log('response', response);
        setMovies(response.data.results);
    }, [fetchUrl])


    useEffect(() => {
        fetchMovieData();
    }, [fetchMovieData])

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);

    }



    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                //install swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop={true} //loop 기능 사용
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    1378: {
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                    },
                    998: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                    625: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    0: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    }
                }}
            >
                <Content id={id}>
                    {movies.map(movie => (
                        <SwiperSlide key={movie.id}>

                            {/* <AnimatePresence> */}
                            <Wrap>
                                <img
                                    key={movie.id}
                                    // whileHover="hover"

                                    src={makeImagePath(movie.backdrop_path, "original")}
                                    alt={movie.name}
                                    onClick={() => handleClick(movie)}
                                // initial="normal"
                                // transition={{ type: "tween" }}
                                // variants={BoxVariants}
                                />
                            </Wrap>
                            {/* </AnimatePresence> */}

                        </SwiperSlide>
                    ))}
                </Content>
            </Swiper>
            {modalOpen && <MovieModal setModalOpen={setModalOpen} {...movieSelected} />}
        </Container>


    )
}

export default Row
