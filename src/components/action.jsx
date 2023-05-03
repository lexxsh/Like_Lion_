import styled from "styled-components";
import "./App.css";
const Bigbox = styled.div`
  width: 280px;
  height: 330px;
  margin: 50px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.bigboxColor ? props.bigboxColor : "red"};
  position: relative;
`;

const Action = styled.div`
  position: absolute;
  top: -12%;
  left: -15%;
  width: 265px;
  height: 150px;
  margin: 50px;
  border-radius: 20px;
  background:url(${(props) => props.url});
  background-color: ${(props) =>
    props.actionColor ? props.actionColor : "green"};
`;
const Head = styled.p`
  position: absolute;
  top: 95%;
  left: 3%;
  font-family: "Open Sans", sans-serif;
  font-size: ${(props) => props.headtext_size};
  font-weight: ${(props) => (props.headtext_bold ? "bold" : "bolder")};
  color: ${(props) => (props.headColor ? props.headColor : "black")};
`;
const Content = styled.p`
  position: absolute;
  top: 125%;
  left: 3%;
  font-family: "Quicksand", sans-serif;
  font-size: ${(props) => props.contenttext_size};
  font-weight: ${(props) => (props.contenttext_bold ? "bold" : "lighter")};
  color: ${(props) => (props.content_Color ? props.content_Color : "#717070")};
`;
const Lastbox = styled.div`
  position: absolute;
  top: 142%;
  left: -18%;
  width: 260px;
  height: 45px;
  margin: 50px;
  border-radius: 19px;
  background: linear-gradient(
    to right,
    ${(props) =>
      props.lastbox_Color ? props.lastbox_Color : "#6882db, #889ddc"}
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Lasttext = styled.p`
  position: absolute;
  font-family: "Open Sans", sans-serif;
  font-size: ${(props) => props.lasttext_size};
  font-weight: ${(props) => (props.lasttext_bold ? "bold" : "lighter")};
  color: ${(props) => (props.lasttext_Color ? props.lasttext_Color : "white")};
`;
const All = (props) => {
  return (
    <>
      <Bigbox bigboxColor={props.bigboxColor}>
        <Action url={props.url} actionColor={props.actionColor}>
          <Head
            headtext_size={props.headtext_size}
            headtext_bold={props.headtext_bold}
            headColor={props.headColor}
          >
            {props.head}
          </Head>
          <Content
            contenttext_size={props.contenttext_size}
            contenttext_bold={props.contenttext_bold}
            content_Color={props.content_Color}
          >
            {props.content}
          </Content>
          <Lastbox lastbox_Color={props.lastbox_Color}>
            <Lasttext
              lasttext_size={props.lasttext_size}
              lasttext_bold={props.lasttext_bold}
              lasttext_Color={props.lasttext_Color}
            >
              {props.lasttext}
            </Lasttext>
          </Lastbox>
        </Action>
      </Bigbox>
    </>
  );
};
export default All;
