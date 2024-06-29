import "./LeftFeed.css";
import "../Components.css";
import { Carousel } from "react-bootstrap";
import "../../images/1.jpg";

function LeftFeed() {
  return (
    <div className="leftFeedContainer">
      <Carousel>
        <Carousel.Item>
          <img src="../../images/1.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="../../images/1.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="../../images/1.jpg" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default LeftFeed;
