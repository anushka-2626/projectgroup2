import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import pic1 from "../../img/11.jpg";
import pic2 from "../../img/22.jpg";
import pic3 from "../../img/33.jpg";
import pic4 from "../../img/44.jpeg";
import pic5 from "../../img/55.jpg";
import pic6 from "../../img/66.jpeg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={pic1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
