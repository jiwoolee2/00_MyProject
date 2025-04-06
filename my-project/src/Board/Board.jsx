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

const Board = () => {
  const navi = useNavigate();
  const [page, setPage] = useState(0);
  const [boardList, setBoardList] = useState([]);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [startPage, setStartPage] = useState(1);  // 0부터 시작!

  const btnHandler = (boardNo) => {
    navi(`/boards/${boardNo}`);
  };

  useEffect(() => {
    axios.get(`http://localhost/boards/page/${page}`, 
      ).then((result) => {
        console.log(result.data);
        setBoardList(result.data.boardList);
        setTotalPageCount(result.data.totalPageCount);
      })
      .catch((error) => console.error(error));
  }, [page]);


  const pageNumbers = [];
  for (let i = 0; i < 5; i++) {
    if (startPage + i <= totalPageCount) {
      pageNumbers.push(startPage + i);
    }
  }

  const Previous = () => {
    if (startPage > 5) {
      setStartPage(startPage - 5);
      setPage(startPage - 5); 
    }
  };

  const Next = () => {
    if (startPage + 5 <= totalPageCount) {
      setStartPage(startPage + 5);
      setPage(startPage + 5); 
    }
  };

  return (
    <>
      <OnlyLogo />
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
            <Cell
              onClick={() => btnHandler(board.boardNo)}
              style={{ cursor: "pointer" }}
              width="50%"
            >
              {board.boardTitle}
            </Cell>
            <Cell width="20%">{board.boardWriter}</Cell>
            <Cell width="20%">{board.createDate}</Cell>
          </Row>
        ))}

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button onClick={Previous}>이전</button>

          {pageNumbers.map((num) => (
            <button
              key={num} onClick={() => setPage(num)}
              style={{
                margin: "0 5px",fontWeight: page === num ? "bold" : "normal"
              }}
            >
              {num}
            </button>
          ))}

          <button onClick={Next}>다음</button>
        </div>

      </Wrapper>
    </>
  );
};

export default Board;
