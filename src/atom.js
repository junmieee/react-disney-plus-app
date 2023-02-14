import { atom } from "recoil";





export const MovieList = atom({
    key: "movieList",
    default: [],
});


export const PlayClicked = atom({
    key: "PlayClicked",
    default: false,
});