import { Wrapper, Title, Line, Label, Btn } from "./LogIn.styles";
import OnlyLogo from "../../Include/Header/OnlyLogo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../LogInStatement/AuthContext";

const LogIn = () => {

  const {login} = useContext(AuthContext);
  const navi = useNavigate();

  const [memberId, setMemberId] = useState("");
  const [memberPw, setMemberPw] = useState("");

  const memberIdHandler = e => {
    setMemberId(e.target.value)
  }

  const memberPwHandler = e => {
    setMemberPw(e.target.value)
  }

  const btnHandler = e => {

    axios.post("http://localhost/log-in",
      { memberId,memberPw}
    ).then((result) => {
      console.log(result.data);
      if(result.status === 200){
        alert("로그인 되었습니다.");
        navi(-1);
      }
      const {memberId,memberName,memberPhone,accessToken,refreshToken} = result.data;
      login(memberId,memberName,memberPhone,accessToken,refreshToken);
    }).catch((error) => {
      console.log(error);
      alert(error.response.data);
    })


  }






  return (
    <>

      <OnlyLogo/>
      <Wrapper>
        <Title>로그인</Title>
        <Line />

        {/* 이메일 */}
        <div className="mb-3">
          <Label className="form-label">
            이메일 주소(아이디) <span className="text-primary">※</span>
          </Label>
          <input onChange={memberIdHandler} type="email" className="form-control" placeholder="이메일(example@uniklo.com)" />
        </div>

        {/* 비밀번호 */}
        <div className="mb-3 position-relative">
          <Label className="form-label">
            비밀번호 <span className="text-primary">※</span>
          </Label>
          <input onChange={memberPwHandler} type="password" className="form-control pe-5" placeholder="비밀번호를 입력해 주세요." />
        </div>

        {/* 버튼 */}
        <Btn onClick={btnHandler} className="btn btn-dark">
          로그인
        </Btn>
      </Wrapper>
    </>
  );
};

export default LogIn;
