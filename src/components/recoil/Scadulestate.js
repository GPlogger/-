import { atom } from "recoil";

export const ScaduleState = atom({
    key: "ScaduleState",
    default: {
        title: "",
        time: 125,
        total: 0,
    },
});

export const TotalTimeState = atom({
    key: "TotalTimeState",
    default: 0,
})


export const TestState = atom({
    key: "Test",
    default: 0,
})