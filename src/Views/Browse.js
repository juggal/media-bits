import React from "react";
import ReactDOM from "react-dom";
import styles from "./Browse.module.css";
import { Carousel } from "react-bootstrap";
import Button from "../Component/Button/Button";

class Browse extends React.Component {
  render() {
    const settings = {
      indicators: false,
    };
    return (
      <Carousel {...settings}>
        <Carousel.Item>
          <div className={`${styles.center} ${styles.bgImage} ${styles.music}`}>
            <Button text="Music" heading="Music" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className={`${styles.center} ${styles.bgImage} ${styles.movies}`}
          >
            <Button text="Movies" heading="Movies" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className={`${styles.center} ${styles.bgImage} ${styles.pictures}`}
          >
            <Button text="Pictures" heading="Pictures" />
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Browse;
