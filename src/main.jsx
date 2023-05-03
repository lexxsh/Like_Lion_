import React from "react";
import Box from "./components/box";
import Circle from "./components/circle";
import All from "./components/action";
import Container from "./components/container";

const Main = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <>
      <Box boxColor="red" text="아 너무" />
      <Box boxColor="blue" text="재밌다." />
      <Box boxColor="green" text="나는 이게" />
      <Box boxColor="pink" text="너무 재밌다." />

      {circleColorArr.map((color, index) => (
        <Circle key={index} circleColor={color} />
      ))}

      <Container containerColor="#c8c8c8">
        <All
          bigboxColor="#fdfdfd"
          actionColor="#b4dfc1"
          head="Heading"
          headtext_size="23px"
          headtext_bold="700"
          content="This is a short description about the card"
          contenttext_size="16px"
          lasttext="Action"
          lasttext_size="16px"
        ></All>
        <All
          bigboxColor="#d900ff"
          url="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/U5u-6CeJlogKbzBf5Hh159n6i8o"
          actionColor="#b4dfc1"
          head="Faker"
          headtext_size="25px"
          content="who is the famous progamerererr"
          contenttext_size="17px"
          content_Color="black"
          lastbox_Color="pink, red"
          lasttext="YASUO"
          lasttext_size="16px"
        ></All>
        <All
          bigboxColor="#000000"
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Jef26P6CSzMFS18Jyg2_FCEHxl9jDnDbRA&usqp=CAU"
          actionColor="#00ff4c"
          head="second"
          headtext_size="23px"
          headColor="white"
          content="kong kong kong kong kong king kong"
          contenttext_size="10px"
          content_Color="white"
          lastbox_Color="green, white"
          lasttext="KAKAKAKA"
          lasttext_size="16px"
          lasttext_Color="yellow"
        ></All>
        <All
          bigboxColor="#9aa9df"
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTWKfgQmO_0pMHMCFk5brGk-NtmuMOCRSdw&usqp=CAU"
          actionColor="#b4dfc1"
          head="Iron man!!!"
          headtext_size="23px"
          content="who? am ? i? iam henius mans"
          contenttext_size="17px"
          content_Color="red"
          lastbox_Color="pink, white"
          lasttext="cLICK!"
          lasttext_size="16px"
          lasttext_Color="blue"
        ></All>
      </Container>
      <Container containerColor="#000000">
        <All
          bigboxColor="#ff0000"
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmfAiA41c6dASaffeYjAnMtrOWmp65LrTYw&usqp=CAU"
          actionColor="#374e3e"
          head="IRELKING"
          headtext_size="23px"
          content="YAP YAP YQAP QYA"
          content_Color="black"
          contenttext_size="17px"
          lastbox_Color="purple, white"
          lasttext="I LOVE YOU"
          lasttext_size="16px"
          lasttext_Color="black"
        ></All>
      </Container>
    </>
  );
};

export default Main;
