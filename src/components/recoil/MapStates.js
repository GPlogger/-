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

export const lineState = atom({
  key: "lineState",
  default: [[
    { lat: 33.452344169439975, lng: 126.56878163224233 },
    { lat: 33.452739313807456, lng: 126.5709308145358 },
    { lat: 33.37055326804881, lng: 126.53223166774146 },
  ]],
});