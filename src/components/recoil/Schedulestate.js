import { atom } from "recoil";

export const ScheduleState = atom({
    key: "ScheduleState",
    default: {
        title: "",
        time: 0,
        total: 0,
    },
});

export const TotalTimeState = atom({
    key: "TotalTimeState",
    default: 0,
})


export const TotalCountState = atom({
    key: "TotalCountState",
    default: 0,
})