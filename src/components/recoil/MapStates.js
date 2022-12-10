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



// 경로 배정이 0인지 표시
export const isScheduleState = atom({
  key: "isScheduleState",
  default: false,
})

// 추가한 위치의 좌표, 일정 추가 시 그 장소의 좌표값 path에 추가
export const placePositionState = atom({
  key: "placePositionState",
  default: ({
    lat: 0,
    lng: 0,
  })
})

// 지도에 그어질 선 좌표들 지정
export const pathState = atom({
  key: "pathState",
  default: ([]),
});

// 선의 거리정보 표시할 커스텀 오버레이
export const distancesState = atom({
  key: "distanceState",
  default: ([
    
  ]),
});