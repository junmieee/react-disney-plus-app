import React from 'react'
import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigation, useNavigate } from 'react-router-dom';
import { set } from 'lodash';

import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

const NavWrapper = styled(motion.nav)`
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5),
    transparent
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 999;
`;


const Logo = styled.a`
padding: 0;
width: 80px;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display: inline-block;

img {
    display: block;
    width: 100%;
}
`


const Login = styled.a`
background-color: rgba(0,0,0,0.6);
padding: 8px 13px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
transition: all 0.2s ease 0s;

&:hover {
    background-color: #f9f9f9;
    color: gray;
    border-color: transparent;
    cursor:pointer;
}


`

const Input = styled.input`
position: fixed;
left: 50%;
transform: translate(-50%, 0);
background-color: rgba(0,0,0,0.582);
border-radius: 5px;
color: white;
padding: 10px;
border: 1px solid #2d3436;

&:focus {
    outline: none;
}
`;

const DropDowm = styled.div`
        position: absolute;
        top: 48px;
        right: 0px;
        background: rgba(19,19,19);
        border: 1px solid rgba(151,151,151, 0.34);
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
        padding: 10px;
        font-size: 14px;
        letter-spacing: 3px;
        width: 100%;
        opacity: 0;

`;


const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover {
        ${DropDowm} {
            opacity: 1;
            transition-duration: 1s;
        }
    }

`;

const UserImg = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;


`;






const Nav = () => {

    const initailUserData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {}

    const { pathname } = useLocation();
    console.log(pathname);

    const navAnimation = useAnimation();
    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const [serachValue, setSearchValue] = useState("");
    const [userData, setUserData] = useState(initailUserData);

    //UR:SearchParams 인터페이스는 URL 쿼리 문자열을 대상으로 작업할 수 있는 유틸리티 메서드를 정의한다.

    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                if (pathname === '/')
                    navigate('/main');

            } else {
                navigate('/');
            }
        })

    }, [auth, navigate, pathname])



    const handleAuth = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUserData(result.user);
                localStorage.setItem('userData', JSON.stringify(result.user));

            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        // console.log('타겟', e.target.value)
        navigate(`/search?q=${e.target.value}`);

    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUserData({});
            navigate('/');
        }).catch((error) => {
            alert(error.message)
        })
    }


    useEffect(() => {
        scrollY.onChange(() => {
            if (scrollY.get() > 80) {
                navAnimation.start({ backgroundColor: "rgba(0,0,0,1)" });
            } else {
                navAnimation.start({ backgroundColor: "rgba(0,0,0,0)" });
            }
        });
    }, [scrollY, navAnimation]);

    //console.log('useLocation', useLocation().search);



    return (
        <NavWrapper
            animate={navAnimation} initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        >
            <Logo>
                <img
                    alt="Disney Plus Logo"
                    src='/images/logo.svg'
                    onClick={() => window.location.href = '/'}
                >
                </img>
            </Logo>
            {pathname === "/" ? (<Login onClick={handleAuth}>Login</Login>) :
                <>
                    <Input
                        value={serachValue}
                        onChange={handleChange}
                        className='nav-input'
                        type='text'
                        placeholder='Search' />
                    <SignOut>
                        <UserImg src={userData.photoURL} alt={userData.displayName} />
                        <DropDowm>
                            <span onClick={handleSignOut}>Sign Out</span>
                        </DropDowm>

                    </SignOut>
                </>

            }



        </NavWrapper>
    )
}

export default Nav
