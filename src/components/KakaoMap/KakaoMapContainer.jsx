import React, { useState, useEffect } from "react";
import styled from "styled-components";

const { kakao } = window;

function KakaoMapContainer() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.37055326804881, 126.53223166774146),
      level: 9,
    };
    const map = new kakao.maps.Map(container, options);
    setMap(map);
  }, []);

  return (
    <Wrapper>
      <div
        style={{
          width: "100%",
        }}
      >
        <div id="map" style={{ width: "1500px", height: "852px" }}></div>
      </div>
    </Wrapper>
  );
}

export default KakaoMapContainer;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
