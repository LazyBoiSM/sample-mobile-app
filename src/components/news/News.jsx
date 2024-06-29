import React from "react";
import "../Components.css";
import "./News.css";

const newsData = [
  {
    title: "Lava teases the launch of Blaze X",
    date: "12 April 2024",
    src: "https://institute.aljazeera.net/sites/default/files/ajr/2022/4.%20GettyImages-1158777704RESIZED.jpg",
  },
  {
    title:
      "Realme 13 Pro+ passes through the FCC, has its battery capacity revealed",
    date: "2 June 2024",
    src: "https://images.unsplash.com/photo-1659540796819-3ef1a812e33f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbXN1bmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Huawei develops new energy-efficient Taishan cores",
    date: "28 June 2024",
    src: "https://images.unsplash.com/photo-1517940001917-1c03b8b1b85b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function News() {
  return (
    <div>
      <h3 className="news">News</h3>
      <div>
        {newsData.map((item, idx) => {
          return (
            <div className="newsPhotoContainer" key={idx}>
              <img className="newsPhoto cursor" src={item.src} alt="" />
              <div className="newsData">
                <h5 className="cursor">{item.title}</h5>
                <h6>{item.date}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
