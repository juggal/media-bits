import React from "react";
import styles from "./App.module.css";
import Welcome from "./Views/Welcome";

function App() {
  return (
    <div className={styles.App}>
      <Welcome />
    </div>
  );
}

export default App;
