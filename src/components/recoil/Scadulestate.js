import { atom } from "recoil";

export const ScaduleState = atom({
    key: "ScaduleState",
    default: {
        title: "",
        time: 0,
    },
});
