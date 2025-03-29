import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";

  const NavbarText = styled.a`
    cursor: pointer;
    &:hover {
  }
`;

const Header = () => {

  const navi = useNavigate();
  return (
  <>  
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-lightgrey">
          <div className="container-fluid">
            <NavbarText className="navbar-brand" onClick={()=>navi("/")}>
              <img id="home" src="../images/uuu.png" alt="Home"/>
            </NavbarText>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse menu" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavbarText className="nav-link" aria-current="page" onClick={()=>navi("/login")}>Login</NavbarText>
                </li>
                <li className="nav-item">
                  <NavbarText className="nav-link" onClick={()=>navi("/signup")}>Signup</NavbarText>
                </li>
                <li className="nav-item">
                  <NavbarText className="nav-link" onClick={()=>navi("/logout")}>Logout</NavbarText>
                </li>
                <li className="nav-item">
                  <NavbarText className="nav-link" onClick={()=>navi("/mypage")}>Mypage</NavbarText>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  </>
  );
};
export default Header;