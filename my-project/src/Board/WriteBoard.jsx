import { useState } from "react";
import {
  Container,
  Label,
  Input,
  TextArea,
  CharCount,
  Notice,
  BtnWrapper,
  Btn
} from "./WriteBoard.styles";
import OnlyLogo from "../Include/Header/OnlyLogo";
import axios from "axios";
import { useContext,useEffect } from "react";
import { AuthContext } from "../LogInStatement/AuthContext";
import { useNavigate } from "react-router-dom";


const WriteBoard = () => {

  const navi = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {auth} = useContext(AuthContext);

  const btnHandler = () => {


    axios.post("http://localhost/boards/insert",{
      "boardTitle" : title,
      "boardContent" : content,
      "boardWriter" : auth.memberId,
    },{
      headers : {
        Authorization : `Bearer ${auth.accessToken}`
      }
    }).then((result) => {
      console.log(result);
    })
    setTitle("");
    setContent("");

    navi(-1);
}



  return (
    <>
      <OnlyLogo/>
      <h2>문의 게시판</h2>
      <hr style={{margin : "20px 380px"}}/>
      <Container>
        {/* 제목 */}
        <Label>제목 <span>*</span></Label>
        <Input
          type="text"
          maxLength={50}
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Notice>1~50자 사이로 작성해 주세요.</Notice>

        {/* 내용 */}
        <Label>내용 <span>*</span></Label>
        <TextArea
          maxLength={500}
          rows={7}
          placeholder={
            "내용을 작성해주세요."
          }
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Notice>25~500자 사이로 작성해 주세요.</Notice>
        <CharCount>{content.length}/500</CharCount>

        <BtnWrapper>
          <Btn onClick={btnHandler} className="btn btn-dark">
            제출하기
          </Btn>
          <Btn onClick={() => navi(-1)} className="btn btn-dark">
            목록으로
          </Btn>
        </BtnWrapper>  
      </Container>
    </>
  );
};

export default WriteBoard;
