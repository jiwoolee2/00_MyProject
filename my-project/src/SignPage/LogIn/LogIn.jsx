import styled from "styled-components";
import OnlyLogo from "../../Include/Header/OnlyLogo";

// 제목
const Title = styled.div`
  text-align: left;
  font-size: 30px;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 10px; /* 👈 상단 공간 줄이기 */
`;

// 구분선
const Line = styled.hr`
  margin: 10px auto 20px auto; /* 👈 위쪽 마진 줄이기 */
  max-width: 500px;
`;

// 버튼
const Btn = styled.button`
  margin-left: 0px;
  display: block;
  text-align: left;
  width: 15.2%;
`;

// 라벨
const Label = styled.label`
  margin-left: 0px;
  display: block;
  text-align: left;
`;

// 폼 전체 래퍼
const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  font-size: 14px;
  margin: 0 auto; /* 가로 가운데 정렬 */
  position: fixed;
  top: 50px;
  left: 60px;
`;

const LogIn = () => {
  return (
    <>
      <OnlyLogo />


      <Wrapper>
        <Title>로그인</Title>
        <Line />

        {/* 이메일 */}
        <div className="mb-3">
          <Label className="form-label">
            이메일 주소(아이디) <span className="text-primary">※</span>
          </Label>
          <input type="email" className="form-control" placeholder="이메일(example@uniklo.com)" />
        </div>

        {/* 비밀번호 */}
        <div className="mb-3 position-relative">
          <Label className="form-label">
            비밀번호 <span className="text-primary">※</span>
          </Label>
          <input type="password" className="form-control pe-5" placeholder="비밀번호를 입력해 주세요." />
        </div>

        {/* 버튼 */}
        <Btn className="btn btn-dark">
          로그인
        </Btn>
      </Wrapper>
    </>
  );
};

export default LogIn;
