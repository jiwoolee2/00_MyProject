import "./Navbar.css";
import { useEffect } from "react";
import { Carousel } from 'bootstrap';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NaverText = styled.a`
cursor: pointer; 
`;

const Navbar = ({ activeTab, onTabChange, carouselRef }) => {

  const navi = useNavigate();



  useEffect(() => {
    const tabs = document.querySelectorAll(".carousel-tab");

    tabs.forEach((tab, index) => {
      const dropdownId = tab.dataset.dropdownId;

      const handleActivate = () => {
        if (carouselRef.current) {
          const carousel = Carousel.getOrCreateInstance(carouselRef.current);
          carousel.to(index); //  캐러셀 이동
        }
        onTabChange(dropdownId); // 드롭다운 열기
        updateActiveTab(index);
      };

      tab.addEventListener("mouseenter", handleActivate);
      tab.addEventListener("click", handleActivate);
    });

    const handleOutside = (e) => {
      if (
        !e.target.closest(".carousel-tab") &&
        !e.target.closest(".dropdown-menu-box")
      ) {
        onTabChange(null); // 드롭다운 닫기
      }
    };

    document.addEventListener("click", handleOutside);
    document.addEventListener("mousemove", handleOutside);

    return () => {
      tabs.forEach((tab) => {
        tab.replaceWith(tab.cloneNode(true));
      });
      document.removeEventListener("click", handleOutside);
      document.removeEventListener("mousemove", handleOutside);
    };
  }, [carouselRef, onTabChange]);

  const updateActiveTab = (index) => {
    document.querySelectorAll(".carousel-tab .label").forEach((label) =>
      label.classList.remove("active")
    );
    document
      .querySelectorAll(".carousel-tab .label")
      [index].classList.add("active");

    document.querySelectorAll(".carousel-tab .bar").forEach((bar) => {
      bar.style.backgroundColor = "#cccccca0";
    });
    document.querySelectorAll(".carousel-tab .bar")[
      index
    ].style.backgroundColor = "black";
  };

  return (
    <>
      <div
        className="dropdown-wrapper"
        onMouseLeave={() => onTabChange(null)}
      >
        <div id="drop-down-bar" className="carousel-nav d-flex justify-content-center gap-4 mt-4">
          {["new", "women", "men", "kids"].map((key, i) => (
            <div
              key={key}
              className="carousel-tab"
              data-dropdown-id={`dropdown-${key}`}
            >
              <div className={`label ${i === 0 ? "active" : ""}`}>
                {key.toUpperCase()}
              </div>
              <div className="bar"></div>
            </div>
          ))}
        </div>

      {/* 드롭다운 */}
      {activeTab === "dropdown-new" && (
        <div className="dropdown-menu-box show" id="dropdown-new">
          <div className="dropdown-content">
            <table className="table" id="innerbox">
                <tbody>
                  <tr>
                    <td>
                      <NaverText onClick={() => navi("/productinfo/new/collection")}>S/S Season New Collection</NaverText>
                    </td>
                  </tr>
                </tbody>
              </table>
         
          
       
      
          </div>
        </div>
      )}

      {activeTab === "dropdown-women" && (
        <div className="dropdown-menu-box show" id="dropdown-women">
          <div className="dropdown-content">
            <table className="table" id="innerbox">
              <tbody>
                <tr>
                  <td>
                    <NaverText onClick={()=>navi("/productinfo/women/outer")}>Outer</NaverText>
                  </td>
                  <td>
                    <NaverText onClick={()=>navi("/productinfo/women/sweat")}>Sweat</NaverText>
                  </td>
                  <td>
                    <NaverText onClick={()=>navi("/productinfo/women/shirt")}>Shirt</NaverText>
                  </td>
                  <td>
                    <NaverText onClick={()=>navi("/productinfo/women/pants")}>Pants</NaverText>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "dropdown-men" && (
        <div className="dropdown-menu-box show" id="dropdown-men">
          <div className="dropdown-content">
            <table className="table" id="innerbox">
              <tbody>
              <tr>
                  <td>
                    <NaverText onClick={()=>navi("/productinfo/men/outer")}>Outer</NaverText>
                  </td>
                  <td>
                    <NaverText onClick={()=>navi("/productinfo/men/sweat")}>Sweat</NaverText>
                  </td>
                  <td>
                    <NaverText onClick={()=>navi("/productinfo/men/shirt")}>Shirt</NaverText>
                  </td>
                  <td>
                    <NaverText onClick={()=>navi("/productinfo/men/pants")}>Pants</NaverText>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "dropdown-kids" && (
        <div className="dropdown-menu-box show" id="dropdown-kids">
          <div className="dropdown-content">
            <table className="table" id="innerbox">
              <tbody>
              <tr>
                  <td>
                    <NaverText onClick={()=>navi("/productinfo/kids/outer")}>Outer</NaverText>
                  </td>
                  <td>
                    <NaverText onClick={()=>navi("/productinfo/kids/sweat")}>Sweat</NaverText>
                  </td>
                  <td>
                    <NaverText onClick={()=>navi("/productinfo/kids/shirt")}>Shirt</NaverText>
                  </td>
                  <td>
                    <NaverText onClick={()=>navi("/productinfo/kids/pants")}>Pants</NaverText>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Navbar;
