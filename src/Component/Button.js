import React, { Component } from "react";
import styles from "./Button.module.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Prev } from "react-bootstrap/PageItem";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toShow: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prev) => ({
      toShow: !prev.toShow,
    }));
  }
  render() {
    return (
      <div>
        <button className={styles.button} onClick={this.handleClick}>
          {this.props.text}
          <FaAngleDoubleDown />
        </button>
        <div
          className={
            this.state.toShow ? `${styles.slideInDown}` : `${styles.slideOutUp}`
          }
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </div>
    );
  }
}

export default Button;
