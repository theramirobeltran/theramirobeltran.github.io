import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useWindowSize } from "../../hooks";
import "./style.css";

export default ({ data, onChange, showThumbs }) => {
  const { width } = useWindowSize();

  return (
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
          style={{
            width: "100%",
            maxHeight: "300px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            className="centered"
            alt={item.description}
            src={item.image}
            style={{
              objectFit: "cover",
              maxHeight: width < 400 ? "200px" : "inherit",
            }}
          />
          {/* <p className="legend">{item.title}</p> */}
        </div>
      ))}
    </Carousel>
  );
};
