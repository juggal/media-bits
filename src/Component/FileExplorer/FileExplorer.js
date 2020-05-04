import React, { Component } from "react";
import { Container, Form, Jumbotron } from "react-bootstrap";
import Folders from "../Folders/Folders";
import styles from "./FileExplorer.module.css";

class FileExplorer extends Component {
  render() {
    {
      if (
        this.props.type === "music" ||
        this.props.type === "movies" ||
        this.props.type === "pictures"
      ) {
        const folder = [
          "Deadpool",
          "The Shining",
          "Avenger Endgame",
          "Thor",
          "Deadpool 2",
          "Terminator",
          "Kal ho na ho",
          "Kabhi Khushi Kabhi Gam",
          "Karwaan",
          "Kirushitsuji",
        ];
        const folders = folder.map((item) => <Folders text={item} />);
        return <div>{folders}</div>;
      }
    }
  }
}

export default FileExplorer;
