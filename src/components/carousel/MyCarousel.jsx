import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MyCarousel.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1507955987999-df4864ee80d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Photo 2",
  },
  {
    src: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww",
    alt: "Photo 3",
  },
  // Add more images as needed
];

const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {images.map((item, idx) => {
          return (
            <div key={idx}>
              <img src={item.src} alt={item.alt} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
