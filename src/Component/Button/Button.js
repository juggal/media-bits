import React, { Component } from "react";
import styles from "./Button.module.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import ModalView from "../ModalView/ModalView";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //show modal on click
  handleClick() {
    this.setState((prev) => ({
      modalShow: !prev.modalShow,
    }));
  }

  render() {
    return (
      <div>
        <button className={styles.button} onClick={this.handleClick}>
          {this.props.text}
          <FaAngleDoubleDown />
        </button>
        <ModalView
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          heading={this.props.heading}
        />
      </div>
    );
  }
}

export default Button;
