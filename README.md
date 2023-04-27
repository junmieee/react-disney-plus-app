# React Disney+ App Clone

 React.js를 사용하여 프론트엔드를 구현하였고, 백엔드는 Firebase를 이용해 Disney+ 웹사이트 클론


## 프로젝트의 실행

- `git clone https://github.com/junmieee/react-disney-plus-app.git`
- `npm install`

<br/>

## 프로젝트 데모 영상




### 기능
* 영화 및 TV 쇼 목록 표시
* 클릭한 영화 또는 TV 쇼에 대한 정보 표시
* 인기 있는 콘텐츠 및 새로운 콘텐츠 섹션
* 검색 기능
* 로그인/로그아웃 및 회원가입
* Firebase를 이용한 사용자 인증 및 데이터베이스 연동



<br/>

## 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"><img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"><img src="https://img.shields.io/badge/themoviedatabase-01B4E4?style=for-the-badge&logo=The Movie Database&logoColor=white">


<br/>

## 프로젝트 구조
```
src
├── components    //앱에서 사용되는 리액트 컴포넌트들을 포함하는 폴더
│   ├── Footer
│   ├── Header
│   ├── HomeSlider
│   ├── Login
│   ├── Movies
│   ├── Navbar
│   ├── NewDisney
│   ├── Originals
│   ├── Signup
│   └── Trending
├── context     //Context API를 사용하여 전역적으로 사용되는 정보를 제공
│   ├── auth-context.js  //인증 관련 정보
│   └── firebase-context.js  //Firebase와 관련된 정보
├── firebase     //Firebase와 연결하는 코드 
│   └── firebase.js
├── pages    //라우팅된 페이지 컴포넌트
│   ├── Home
│   ├── Login
│   └── Signup
├── App.css
├── App.js
├── index.css
├── index.js
├── reportWebVitals.js
└── setupTests.js
```

<br/>

## 새로 학습한 내용

### Context API
- 


<br/>

## 개선할 사항
- TypeScript 적용 
- 실제 백엔드와 연동하여 로그인 기능을 구현


## 추가적으로 만들어 볼 수 있는 기능

- 모달에 Play버튼을 추가해 관련 Youtube 영상 연결
- 사용자가 즐겨찾기를 추가하여 사용자가 자신이 좋아하는 영화나 TV 프로그램을 저장하는 기능


