# React Disney+ App 클론코딩

React Disney+ 앱은 사용자가 디즈니+ 콘텐츠를 검색하고 시청할 수 있는 SPA입니다. React.js를 사용하여 프론트엔드를 구현하였고, 백엔드는 Firebase를 이용하였습니다.


## 프로젝트의 실행 방법

- `git clone https://github.com/junmieee/react-disney-plus-app.git`
- `npm install`

<br/>

## 프로젝트 데모 영상




### 구현 기능
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
/src
├── App.js
├── components 
│   ├── Banner.js   //홈 화면 상단에 배치되는 대형 배너
│   ├── Header.js
│   ├── Login.js
│   ├── Nav.js
│   ├── Row.js
│   └── index.js
├── firebase.js
├── index.css
├── index.js
├── requests.js
└── setupTests.js
```

<br/>

## 새로 학습한 내용

### emotion.js 
- Component로 만들어 재사용에 용이함
- 같은 UI를 공유하는 Signin과 Signup컴포넌트에 named export 활용하여 사용함
- Styled-component와 문법이 매우 유사해 기존에 styled-component에 익숙하다면 적용이 비교적 쉽다.


<br/>

## 개선할 사항
- TypeScript 적용 
- 실제 백엔드와 연동하여 로그인 기능을 구현

## 추가적으로 만들어 볼 수 있는 기능

- 모달에 Play버튼을 추가해 관련 Youtube 영상 연결
- 사용자가 즐겨찾기를 추가하여 사용자가 자신이 좋아하는 영화나 TV 프로그램을 저장하는 기능


