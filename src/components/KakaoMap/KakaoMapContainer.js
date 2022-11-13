import React, { useRef, useEffect } from "react";

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(33.37055326804881, 126.53223166774146), //지도의 중심좌표.
  level: 9, //지도의 레벨(확대, 축소 정도)
};

function KakaoMapContainer() {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  useEffect(() => {
    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    return () => {};
  }, []);

  return (
    <div
      className="map"
      style={{ width: "100%", height: "600px" }}
      ref={container}
    ></div>
  );
}

export default KakaoMapContainer;