import { Header } from "./Header";

import styles from "./App.module.css";
import { useState } from "react";

export function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.body}>
        <div className={styles["info-row"]}>
          <div className="created">
            Created Tasks
            <span className={styles.badge}>{tasks.length}</span>
          </div>

          <div className="done-section">
            Done{" "}
            <span className={styles.badge}>
              {tasks.length ? `2 of ${tasks.length}` : 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
