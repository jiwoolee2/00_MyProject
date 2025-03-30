import styled from "styled-components";
import OnlyLogo from "../../Include/Header/OnlyLogo";

// 제목
const Title = styled.div`
  text-align: left;
  font-size: 40px;
  max-width: 500px;

`;

// 구분선
const Line = styled.hr`
  margin: 20px auto;
  max-width: 500px;
`;

// 버튼
const Btn = styled.button`
  margin-left: 0px;
  display: block;
  text-align: left;
  width: 20%;
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
`;

const SignUp = () => {
  return (
    <>
      <OnlyLogo />


      <Wrapper>

        <Title>회원가입</Title>
        <Line />

        {/* 이름 */}
        <div className="mb-3">
          <Label className="form-label">
            이름(First name) <span className="text-primary">※</span>
          </Label>
          <input type="text" className="form-control" placeholder="이름을 입력해 주세요." />
        </div>

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

        {/* 전화번호 */}
        <div className="mb-4">
          <Label className="form-label">
            전화번호 <span className="text-primary">※</span>
          </Label>
          <input type="text" className="form-control" placeholder="전화번호를 입력해 주세요." />
        </div>

        {/* 버튼 */}
        <Btn className="btn btn-dark">
          회원 가입
        </Btn>
      </Wrapper>
    </>
  );
};

export default SignUp;
