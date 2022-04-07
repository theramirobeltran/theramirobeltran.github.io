import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";

export default ({ data, onChange, showThumbs }) => (
  <Carousel
    showThumbs={showThumbs}
    onChange={onChange}
    data={data}
    showIndicators={data.length > 1}
    showStatus={data.length > 1}
  >
    {data.map((item) => (
      <div
        key={item.title}
        style={{ height: "300px", display: "flex", justifyContent: "center" }}
      >
        <img
          className="centered"
          alt={item.description}
          src={item.image}
          style={{ objectFit: "cover" }}
        />
        {/* <p className="legend">{item.title}</p> */}
      </div>
    ))}
  </Carousel>
);
