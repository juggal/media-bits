import React from "react";
import ReactDOM from "react-dom";
import styles from "./Browse.module.css";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Component/Button";

class Browse extends React.Component {
  render() {
    const settings = {
      className: "sliders",
      arrows: false,
      swipeToSlide: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div className={`${styles.center} ${styles.bgImage} ${styles.music}`}>
          <Button text="Music" />
        </div>
        <div className={`${styles.center} ${styles.bgImage} ${styles.movies}`}>
          <Button text="Movies" />
        </div>
        <div
          className={`${styles.center} ${styles.bgImage} ${styles.pictures}`}
        >
          <Button text="Pictures" />
        </div>
      </Slider>
    );
  }
}

export default Browse;
