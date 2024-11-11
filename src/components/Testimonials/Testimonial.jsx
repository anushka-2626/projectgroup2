import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "This artwork beautifully captures the complexities of human emotion through its intricate lines and vibrant colors. The artist's use of light and shadow brings depth to the composition, making it both thought-provoking and visually stunning. Every brushstroke seems to tell a story, drawing the viewer into a world of reflection and wonder.",
    },
    {
      img: profilePic2,
      review:
        "The subtlety and peacefulness of this piece evoke a sense of calm. The artist’s ability to balance minimalism with deep meaning is truly impressive. The soft palette and gentle curves create an atmosphere that invites viewers to pause and reflect, offering a moment of quiet contemplation in our busy lives.",
    },
    {
      img: profilePic3,
      review:
        "This piece is an explosion of energy and bold colors that command attention. The rawness of the composition, paired with a fearless use of color contrast, speaks to the artist's passion and confidence. It’s a stunning representation of modern expressionism, and it’s impossible to look away from its intensity.",
    },
    {
      img: profilePic4,
      review:
        "What makes this art piece so intriguing is its abstract nature, which allows for personal interpretation. The combination of geometric shapes and organic forms leads to a visual narrative that feels unique with every viewing. It challenges the viewer to break free from conventional perspectives and embrace a new way of seeing the world",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from us...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
