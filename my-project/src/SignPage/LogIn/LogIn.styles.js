import styled from "styled-components";
// 제목
export const Title = styled.div`
  text-align: left;
  font-size: 30px;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 10px; 
`;

// 구분선
export const Line = styled.hr`
  margin: 10px auto 20px auto; 
  max-width: 500px;
`;

// 버튼
export const Btn = styled.button`
  margin-left: 0px;
  display: block;
  text-align: left;
  width: 15.2%;
`;

// 라벨
export const Label = styled.label`
  margin-left: 0px;
  display: block;
  text-align: left;
`;

// 폼 전체 래퍼
export const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  font-size: 14px;
  margin: 0 auto; 
  position: fixed;
  top: 100px;
  left: 100px;
`;