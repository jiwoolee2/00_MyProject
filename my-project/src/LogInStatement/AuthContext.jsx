import { useState,createContext} from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const Provider = ({children}) => {
  
  const navi = useNavigate();

  const [auth,setAuth] = useState({
    memberId : null,
    memberName : null,
    memberPhone : null,
    accessToken : null,
    refreshToken : null,
    isAuthenticated : false,
  })


  useEffect(() => {

    // localStorage로 부부어 데이터를  받아서 변수에 담음
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const memberName = localStorage.getItem("memberName");
    const memberId = localStorage.getItem("memberId");
    const memberPhone = localStorage.getItem("memberPhone");


    // 데이터에 값이 모두 들어있다면 권한을 허용
    if(accessToken && refreshToken && memberName && memberId && memberPhone){
      setAuth({
        memberPhone,
        memberId,
        memberName,
        accessToken,
        refreshToken,
        isAuthenticated: true,
      })
    }
  }, [])


  // 로그인 통해 받은 데이터들을 auth에 대입
  const login = (memberId,memberName,memberPhone,accessToken,refreshToken) => {
    setAuth({
      memberId,
      memberName,
      memberPhone,
      accessToken,
      refreshToken,
      isAuthenticated: true,
    })
    localStorage.setItem("accessToken",accessToken);
    localStorage.setItem("refreshToken",refreshToken);
    localStorage.setItem("memberName",memberName);
    localStorage.setItem("memberId",memberId);
    localStorage.setItem("memberPhone",memberPhone);
  };

  // 로그아웃 : auth 싺 지우고, localStorage싹지우고
  const logout = () => {
    setAuth({
      memberId : null,
      memberName : null,
      memberPhone : null,
      accessToken : null,
      refreshToken : null,
      isAuthenticated : false,
    });
    localStorage.removeItem("memberId");
    localStorage.removeItem("memberName");
    localStorage.removeItem("memberPhone");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navi("/");
    alert("로그아웃 되었습니다.")
  };

  return(
    <AuthContext.Provider value={{ auth,login, logout}}>
      {children}
    </AuthContext.Provider>
  )

};