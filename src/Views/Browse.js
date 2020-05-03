import React from "react";
import ReactDOM from "react-dom";
import styles from "./Browse.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

class Browse extends React.Component {
  render() {
    return (
      <Container className={styles.section} fluid={true}>
        Browsing section
      </Container>
    );
  }
}

export default Browse;
