import { atom, useRecoilState } from "recoil";

// export const latState = atom({
//   ket: "latState",
//   default: 33.37055326804881,
// })

// export const lngState = atom({
//   ket: "lngState",
//   default: 126.53223166774146,
// })


// 중심 좌표
export const centerState = atom({
  key: "centerState",
  default: {
    lat: 33.37055326804881,
    lng: 126.53223166774146
  },
});

// 마커 좌표
export const positionState = atom({
  key: "positionState",
  default: {lat: 33.37055326804881, lng: 126.53223166774146},
});

// 지도 확대 레벨
export const levelState = atom({
  key: "levelState",
  default: 9,
});
