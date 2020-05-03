import React from "react";
import styles from "./App.module.css";
import Welcome from "./Views/Welcome";
import Browse from "./Views/Browse";
import scrollToComponent from "react-scroll-to-component";

class App extends React.Component {
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
        <section
          ref={(section) => {
            this.Browse = section;
          }}
        >
          <Browse />
        </section>
      </div>
    );
  }
}

export default App;
