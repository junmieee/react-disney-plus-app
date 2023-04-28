import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios';
import styled from 'styled-components'
import { motion } from "framer-motion";
import { makeImagePath } from '../utils';
import useOnClickOutside from '../hooks/useOnClickOutside';
import './detail.css'




const Overlay = styled(motion.div)`
    height: 100%;
    width: 100%;
    top: 0; 
    left: 0; 
    background-color: rgba(0,0,0,0.4);
    z-index: 99;
    position: fixed;
    opacity: 0;
 
`

const DetailPage = ({
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen
}) => {
    // let { movieId } = useParams();
    // const [movie, setMovie] = useState({})


    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await axios.get(`/movie/${movieId}`)
    //         console.log(response)
    //         setMovie(response.data)

    //     }
    //     fetchData()
    // }, [movieId])

    // if (!movie) return null;
    const ref = useRef();
    //console.log('ref', boxref.current)
    useOnClickOutside(ref, () => {
        setModalOpen(false);
    })

    return (
        <>
            {/* <Overlay onClick={() => setModalOpen(false)} /> */}
            {/* <div className='presentation' role="presentation"> */}
            {/* <div className='presentation' rolo='presentation' > */}
            <div className='presentation' role="presentation">

                <div className='wrapper-modal' >
                    <div className='modal' ref={ref}>
                        <span onClick={() => setModalOpen(false)}
                            className='modal-close'
                        >
                            X
                        </span>
                        <img className='modal__poster-img'
                            src={makeImagePath(backdrop_path, "original")}
                            alt="modal"
                        />
                        <div className='modal__content'>
                            <p className='modal__details'>
                                <span className='modal__user-percent'>98% for you</span>{" "}
                                {release_date ? release_date : first_air_date}
                            </p>
                            <h2 className='modal__title'>{title ? title : name}</h2>
                            <p className='modal__overview'>평점: {vote_average}</p>
                            <p className='modal__overview'>{overview}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* </div> */}
            {/* </div> */}
        </>

    )

}

export default DetailPage


//Search.js


