import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 400px;
  margin: 0;
  border-radius: 25px;
  background-color: ${(props) =>
    props.containerColor ? props.containerColor : "black"};
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default Container;
