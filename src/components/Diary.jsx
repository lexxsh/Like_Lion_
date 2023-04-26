import React, {useState} from "react";


const Diary = () => {
    const[detail,setdetail]=useState({
      subject: '',
      content: '',
    });
    
    
    
    const handleValue = (e) => {
      const {value,name} = e.target;

      const nextInpusts={
        ...detail,
        [name]: value,
      };

      setdetail(nextInpusts);
    }

    const contentClik=()=>{
      alert(detail.content);
    }
    const onReset=(e)=>{
      setdetail({
        subject: '',
        content: '',
      })
    };

  return (
    <div className="diary">
      <input name="subject" placeholder="제목을 입력해주세요" onChange={handleValue} value={detail.subject}/>
      <br />
      <textarea name="content" placeholder="내용을 입력해주세요" onChange={handleValue} />
      <br />
      <button onClick={onReset}>초기화</button>
      <br />
      <button onClick={contentClik}>입력 완료</button>
    </div>
  );
};

export default Diary;
