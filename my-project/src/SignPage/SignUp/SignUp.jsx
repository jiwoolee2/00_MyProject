import { Title,Line,Btn,Label,Wrapper } from "./SignUp.styles";
import OnlyLogo from "../../Include/Header/OnlyLogo";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const SignUp = () => {

  const navi = useNavigate();

  const [memberId,setMemberId] = useState("");
  const [memberPw,setMemberPw] = useState("");
  const [memberName,setMemberName] = useState("");
  const [memberPhone,setMemberPhone] = useState("");

  const memberIdHandler = e => {
    setMemberId(e.target.value);
  }
  const memberPwHandler = e => {
    setMemberPw(e.target.value);
  }
  const memberNameHandler = e => {
    setMemberName(e.target.value);
  }
  const memberPhoneHandler = e => {
    setMemberPhone(e.target.value);
  }


  const btnHandler = e => {

    axios.post('http://localhost/members',
      {
        memberId,
        memberPw,
        memberName,
        memberPhone
      }).then((result) => {
        console.log(result);
        if(result.status === 201){
          alert("회원가입에 성공하셨습니다");
          navi("/");
        }

      }).catch((error) => {
        console.log(error.response.data);
        alert(error.response.data);
      })

  }

  


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
          <input onChange={memberNameHandler} type="text" className="form-control" placeholder="이름을 입력해 주세요." />
        </div>

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

        {/* 전화번호 */}
        <div className="mb-4">
          <Label className="form-label">
            전화번호 <span className="text-primary">※</span>
          </Label>
          <input onChange={memberPhoneHandler} type="text" className="form-control" placeholder="전화번호를 입력해 주세요." />
        </div>

        {/* 버튼 */}
        <Btn onClick={btnHandler} className="btn btn-dark">
          회원 가입
        </Btn>
      </Wrapper>
    </>
  );
};

export default SignUp;
