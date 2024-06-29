import "./LeftFeed.css";
import "../Components.css";
import MyCarousel from "../carousel/MyCarousel";
import News from "../news/News";

function LeftFeed() {
  return (
    <div className="leftFeedContainer boxSizing">
      <MyCarousel />
      <div className="line"></div>
      <News />
    </div>
  );
}

export default LeftFeed;
