import { atom } from "recoil";
import placeList from "../../placelist.json";

export const ScheduleState = atom({
    key: "ScheduleState",
    default: {
        time: 0,
        total: 0,
    },
});

export const ScheduleListState = atom({
    key: "ScheduleListState",
    default: [
        // {
        //     id : 0,
        //     title : "여행지",
        //     time : 320,
        //     moveTime: 30,
        // },
        // {},
    ]
});

export const TotalTimeState = atom({
    key: "TotalTimeState",
    default: 0,
})


export const TotalCountState = atom({
    key: "TotalCountState",
    default: 0,
})