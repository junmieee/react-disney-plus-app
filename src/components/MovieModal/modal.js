import React from 'react'
import "./MovieModal.css"
import { makeImagePath } from '../../utils'
import styled from "styled-components";
import { motion } from "framer-motion";


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

// const ModalBox = styled(motion.div)`
//     position: fixed;
//   top: 7rem;
//   left: 0;
//   right: 0;
//   margin: 0 auto;
//   width: 50%;
//   min-width: 76.8rem;
//   height: 80%;
//   overflow: auto;
//   border-radius: 1.5rem;
//   background-color: ${(props) => props.theme.black.lighter};
//   color: ${(props) => props.theme.white.lighter};
//   z-index: 100;
//   `


const MovieModal = ({
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen
}) => {
    // const navigate = useNavigate();
    // const onClickedOverlay = () => navigate(`/`);

    return (
        <>
            <Overlay onClick={() => setModalOpen(false)} />
            {/* <div className='presentation' role="presentation"> */}
            <div className='wrapper-modal'>
                <div className='modal'>
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
            {/* </div> */}
        </>
    )
}

export default MovieModal
