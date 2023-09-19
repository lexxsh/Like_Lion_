import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px;
  border-radius: 100px;
  background-color: ${(props) =>
    props.circleColor ? props.circleColor : "green"};
  display: inline-block;
  align-items: center;
  justify-content: center;
`;

export default Circle;
