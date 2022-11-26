import { atom } from "recoil";


export const mapState = atom({
  key: "mapState",
  default: {
    center: {
      lat: 33.37055326804881,
      lng: 126.53223166774146
    },
    position: {
      lat: 33.37055326804881,
      lng: 126.53223166774146
    },
    isPanto: true,
    name: "제주도 여행껏",
  }
});