import { Header } from "./components/Header";

import { useState } from "react";

import styles from "./App.module.css";
import { TaskCard } from "./components/TaskCard";

export type TTask = {
  id: string;
  completed: boolean;
  description: string;
};

export function App() {
  const [tasks, setTasks] = useState<TTask[]>([
    { id: "12312", description: "task mount hello", completed: false },
    { id: "12312123", description: "task mount hello 33", completed: true },
  ]);

  const handleDeleteTask = (id: TTask["id"]) => {
    console.log("id", id);
  };

  const handleMarkTask = ({
    id,
    checked,
  }: {
    id: TTask["id"];
    checked: boolean;
  }) => {
    console.log("idd", { id, checked });
    setTasks((old) =>
      old.map((task) =>
        task.id === id ? { ...task, completed: checked } : task
      )
    );
  };

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
            Completed{" "}
            <span className={styles.badge}>
              {tasks.length ? `2 of ${tasks.length}` : 0}
            </span>
          </div>
        </div>
        <div className={styles["task-list"]}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              {...task}
              onDeleteTask={handleDeleteTask}
              onMarkTaskCompleted={handleMarkTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
