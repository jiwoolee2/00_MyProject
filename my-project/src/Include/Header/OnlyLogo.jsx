import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const NavbarText = styled.a`
  cursor: pointer;
  &:hover {
  }
  margin-left: 12.2px;
`;

const OnlyLogo = ( )=> {
  
  const navi = useNavigate();
  
  return (
    <>



    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-lightgrey">
      <NavbarText className="navbar-brand" onClick={()=>navi("/")}>
        <img id="home" src="/images/logo.png" alt="Home"/>
      </NavbarText>
    </nav>


    </>
  )
}
export default OnlyLogo;
