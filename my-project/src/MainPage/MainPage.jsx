import "./MainPage.css";
import Header from "../Include/Header/Header";
import Navbar from "../Include/Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import { Carousel } from 'bootstrap';

const MainPage = () => {


  const carouselRef = useRef(null);
  const [activeDropdown, setActiveDropdown] = useState("dropdown-new");

  useEffect(() => {
    const carousel = Carousel.getOrCreateInstance(carouselRef.current, {
      interval: 5000, // 화면 전환 속도 5초초
      ride: 'carousel'
    });

    const handleSlide = (e) => {
      updateActiveTab(e.to);
    };
    carouselRef.current.addEventListener("slid.bs.carousel", handleSlide);

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("slid.bs.carousel", handleSlide);
      }
    };

    
  }, []);

  const updateActiveTab = (index) => {
    document.querySelectorAll(".carousel-tab .label").forEach((label) => label.classList.remove("active"));
    document.querySelectorAll(".carousel-tab .label")[index].classList.add("active");
    document.querySelectorAll(".carousel-tab .bar").forEach((bar) => (bar.style.backgroundColor = "#ccc"));
    document.querySelectorAll(".carousel-tab .bar")[index].style.backgroundColor = "black";
  };

  return (
    <>
      <Header />
      <Navbar
      activeTab={activeDropdown}
      onTabChange={setActiveDropdown}
      carouselRef={carouselRef} 
      />

      {/* 캐러셀 */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        ref={carouselRef}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/uniklo.jpg" className="d-block w-100" alt="tt" style={{ opacity: 0.7 }} />
          </div>
          <div className="carousel-item">
            <img src="./images/crystal-jo-ImyxHEwt8Gs-unsplash.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/men.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/yujia-tang--CUg2tKMHV4-unsplash.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default MainPage;