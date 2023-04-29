import React from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'
import Nav from '../components/Nav'
import Row from '../components/Row'
import styled from 'styled-components'
import { request } from '../api/request'

const Container = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  padding: calc(3.5vw + 5px);

  //전체적인 백그라운드 이미지

  &:after {
    content: "";
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    position: absolute;
    opacity: 1;
    z-index: -1;  
    inset:0;
/* top: 0;
right: 0;
left: 0;

bottom: 0; */
  }

  `

const Mainpage = () => {
  return (
    <Container>
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={request.fetchTopRated} />
      <Row title="Action Moview" id="AM" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={request.fetchComedyMovies} />
    </Container>
  )
}

export default Mainpage
