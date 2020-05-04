import React, { Component } from "react";
import { FcFolder } from "react-icons/fc";
import { Col, Row } from "react-bootstrap";
import styles from "./Folders.module.css";

class Folders extends Component {
  render() {
    return (
      <div
        className={`${styles.inline} ${styles.folderSize} ${styles.folderSpacing}`}
      >
        <Row>
          <Col>
            <FcFolder />
          </Col>
        </Row>
        <Row>
          <Col>{this.props.text}</Col>
        </Row>
      </div>
    );
  }
}

export default Folders;
