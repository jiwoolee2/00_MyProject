import { useState, useEffect, useContext } from "react";
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
import { AuthContext } from "../LogInStatement/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

const BoardDetail = () => {
  const navi = useNavigate();
  const { auth } = useContext(AuthContext);
  const { boardNo } = useParams();

  const [board, setBoard] = useState({
    boardContent: "",
    boardNo: null,
    boardTitle: "",
    boardWriter: "",
    createDate: ""
  });

  useEffect(() => {
    axios.get(`http://localhost/boards/${boardNo}`, {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      }
    })
    .then((result) => {
      const boardInfo = result.data;
      setBoard({
        boardContent: boardInfo.boardContent,
        boardNo: boardInfo.boardNo,
        boardTitle: boardInfo.boardTitle,
        boardWriter: boardInfo.boardWriter,
        createDate: boardInfo.createDate
      });
    })
    .catch((error) => console.error(error));
  }, [boardNo, auth.accessToken]);

  return (
    <>
      <OnlyLogo />
      <h2>문의 게시판</h2>
      <hr style={{ margin: "20px 380px" }} />
      <Container>
        {/* 제목 */}
        <Label>제목 <span>*</span></Label>
        <Input
          type="text"
          maxLength={50}
          value={board.boardTitle}
          readOnly
        />

        {/* 내용 */}
        <Label>내용 <span>*</span></Label>
        <TextArea
          maxLength={500}
          rows={7}
          value={board.boardContent}
          readOnly
        />
        <Notice>작성자 : {board.boardWriter}</Notice>
        <Notice>등록일 : {board.createDate}</Notice>
        <CharCount>{(board.boardContent ?? "").length}/500</CharCount>

        <BtnWrapper>
          <Btn onClick={() => navi(-1)} className="btn btn-dark">
            목록으로
          </Btn>
        </BtnWrapper>
      </Container>
    </>
  );
};

export default BoardDetail;
