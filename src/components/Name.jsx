import React, {useState} from "react";

const Name = (event) => {
    const[myName,setName]=useState(' ');
    const[nickName,setNickName]=useState(' ');

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleNickName = (event) => {
    setNickName(event.target.value);
  };

  return (
    <div className="name">
      <input name="myName" placeholder="이름을 입력해주세요" onChange={handleName} />
      <input name="nickName" placeholder="닉네임을 입력해주세요" onChange={handleNickName} />
      <p>이름: {myName ==="" ?"아직 이름이 없습니다":myName}</p>
      <p>닉네임: {nickName ==="" ?"아직 닉네임이 없습니다":nickName}</p>
    </div>
  );
};

export default Name;
