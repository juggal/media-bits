import React from "react";
import styles from "./App.module.css";
import Welcome from "./Views/Welcome";
import Browse from "./Views/Browse";
import scrollToComponent from "react-scroll-to-component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }
  render() {
    return (
      <div className={styles.App}>
        <Welcome
          scroll={() =>
            scrollToComponent(this.Browse, {
              offset: 0,
              align: "top",
              duration: 1000,
            })
          }
        />
        <Browse
          ref={(section) => {
            this.Browse = section;
          }}
        />
        {console.log(`width: ${this.state.windowWidth}`)}
      </div>
    );
  }
}

export default App;
