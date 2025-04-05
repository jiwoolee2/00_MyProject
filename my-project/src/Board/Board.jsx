import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Title,
  WriteBtn,
  TableHeader,
  Row,
  Cell,
} from "./Board.styles";
import OnlyLogo from "../Include/Header/OnlyLogo";
import styled from "styled-components";

const Board = () => {
  const navi = useNavigate();
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/boards/select")
      .then((result) => 
            setBoardList(result.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
    <OnlyLogo/>
    <Wrapper>
      <Title>문의 게시판 목록</Title>
      <WriteBtn onClick={() => navi("/write-board")}>글쓰기</WriteBtn>

      <TableHeader>
        <Cell width="10%">번호</Cell>
        <Cell width="50%">제목</Cell>
        <Cell width="20%">작성자</Cell>
        <Cell width="20%">작성일</Cell>
      </TableHeader>

      {boardList.map((board) => (
        <Row key={board.boardNo}>
          <Cell width="10%">{board.boardNo}</Cell>
          <Cell width="50%">{board.boardTitle}</Cell>
          <Cell width="20%">{board.boardWriter}</Cell>
          <Cell width="20%">{board.createDate}</Cell>
        </Row>
      ))}
    </Wrapper>
    </>
  );
};

export default Board;
