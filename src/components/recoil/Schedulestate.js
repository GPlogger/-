import { atom } from "recoil";

export const ScheduleState = atom({     // 전체 시간, 장소
    key: "ScheduleState",
    default: {
        time: 0,
        total: 0,
    },
});

export const ScheduleListState = atom({     // 일정 추가 리스트
    key: "ScheduleListState",
    default: [
        // {
        //     id : 0,
        //     title : "여행지",
        //     time : 320,
        // },
    ]
});

export const moveTimeListState = atom({
    key: "moveTimeListState",
    default: ([]),
})