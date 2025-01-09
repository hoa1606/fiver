import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const imagePaths = [
  "../../../../public/hinhanh/hinhanh1.png",
  "../../../../public/hinhanh/hinhanh2.png",
  "../../../../public/hinhanh/hinhanh3.png",
  "../../../../public/hinhanh/hinhanh4.png",
  "../../../../public/hinhanh/hinhanh5.png",
  "../../../../public/hinhanh/hinhanh6.png",
  "../../../../public/hinhanh/hinhanh7.png",
  "../../../../public/hinhanh/hinhanh8.png",
  "../../../../public/hinhanh/hinhanh9.png",
  "../../../../public/hinhanh/hinhanh10.png",
];


const arrowStyle = {
  position: "absolute" as const,
  top: "50%",
  zIndex: 1,
  fontSize: "30px",
  color: "#000",
  cursor: "pointer",
  transform: "translateY(-50%)",
  backgroundColor: "#fff",
  padding: "10px",
  borderRadius: "50%",
};

const List: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: false,
    focusOnSelect: true,
    nextArrow: <FaArrowRight style={arrowStyle} />,
    prevArrow: <FaArrowLeft style={arrowStyle} />,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ position: "relative", background: "rgb(33, 33, 33)" }}>
     
      <div style={{padding: "25px"}}>
      <div style={{textAlign: "left", color: "white", fontSize: "40px", marginBottom: "20px"}}>
        Popular Professional Services
      </div>

     
      <Slider {...settings}>
        {imagePaths.map((image, index) => (
          <div key={index} style={{ padding: "0" }}> 
            <img
              src={image}
              alt={`Hình ảnh ${index + 1}`}
              style={{
                width: "200px",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

const textBannerStyle: React.CSSProperties = {
  backgroundColor: "#f2f2f2",
  textAlign: "center",
  padding: "20px 0",
  fontSize: "24px", 
  fontWeight: "600", 
  color: "#333", 
  borderTop: "3px solid #ff7f00",
  marginBottom: "20px", 
};

export default List;
