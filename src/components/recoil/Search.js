import { atom } from "recoil";
import placeList from "../../placelist.json";


export const SearchKeyword = atom({
    key: 'SearchKeyword',
    default: "",
});

export const FilterList = atom({
    key: 'FilterList',
    default: placeList.placelist,
});