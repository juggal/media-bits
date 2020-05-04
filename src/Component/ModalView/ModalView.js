import React, { Component } from "react";
import FileExplorer from "../FileExplorer/FileExplorer";
import { Modal, Form } from "react-bootstrap";
import styles from "./ModalView.module.css";

class ModalView extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.heading}</Modal.Title>
          <Form className={styles.search}>
            <Form.Control
              type="text"
              placeholder="Search"
              className={styles.search}
            />
          </Form>
        </Modal.Header>
        <Modal.Body className={styles.scroll}>
          <FileExplorer type="music" />
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalView;
