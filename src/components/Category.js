import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { categories } from '../api/request'

const Container = styled.div`
margin-top: 30px;
padding: 30px 0px 26px;
display: grid;
gap: 25px;
grid-template-columns: repeat(5,1fr);
@media (max-width: 768px) {
    grid-template-columns: repeat(1,1fr);
}

`


const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgba(0 0 0 /69%) 0px 26px 30px --10px,
    rgb(0 0 0 / 73%) 0px 16px 10px --10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border: 2.4px solid rgba(249,249,249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
       position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
}

video {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0px;
    opacity: 0;
    z-index: 0;
}

&:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px --16px,
    rgb(0 0 0 / 72%) 0px 30px 22px --10px;

    transform: scale(1.05);
    border-color: rgba(249,249,249, 0.8);
    video {
        opacity: 1;
    }
}
`





const Category = () => {
    return (
        <Container>
            {categories.map(cat => (
                <Wrap>
                    <Link to={`/company/${cat.company}`}>
                        <img src={`/images/viewers-${cat.imgname}.png`} alt={cat.imgname} />
                    </Link>
                    <video autoPlay loop muted>
                        <source src={`/videos/${cat.videoname}.mp4`} type='video/mp4' />
                    </video>
                </Wrap>
            ))}
        </Container>
    )
}

export default Category
