import React from "react";
import ReactDOM from "react-dom";
import styles from "./Welcome.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Arrow from "../assets/images/arrow-welcome.png";
import { AiOutlineArrowDown } from "react-icons/ai";

class Welcome extends React.Component {
  render() {
    return (
      <Container className={styles.section} fluid={true}>
        <Container>
          <Row>
            <Col>
              <div className={styles.heading}>Welcome to MediaBits</div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col onClick={this.props.scroll}>
              <img className={styles.arrow} src={Arrow} alt="arrow" />
              {/* <AiOutlineArrowDown className={styles.arrow} /> */}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Welcome;
