import { atom } from "recoil";

export const positionState = atom({
  key: "position",
  default: [33.37055326804881, 126.53223166774146],
});

export const levelState = atom({
  key: "level",
  default: 9,
});
