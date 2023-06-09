import { useState } from "react";
import { v4 } from "uuid";

import { ReactComponent as Clipboard } from "./assets/Clipboard.svg";

import { Header } from "./components/Header";
import { TaskCard } from "./components/TaskCard";

import styles from "./App.module.css";
import { tasksMock } from "./mocks/tasks";

export type TTask = {
  id: string;
  completed: boolean;
  description: string;
};

export function App() {
  const [tasks, setTasks] = useState<TTask[]>([...tasksMock].reverse());

  const completedTasksCount = tasks.reduce((prev, cur) => {
    if (cur.completed) {
      return prev + 1;
    }
    return prev;
  }, 0);

  const handleAddTask = (description: string) => {
    if (!description.length) return;
    const newTask: TTask = {
      id: v4(),
      completed: false,
      description: description,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleDeleteTask = (id: TTask["id"]) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
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
      <Header handleAddTask={handleAddTask} />

      <div className={styles.body}>
        <div className={styles["info-row"]}>
          <div>
            Created Tasks
            <span className={styles.badge}>{tasks.length}</span>
          </div>

          <div>
            Completed{" "}
            <span className={styles.badge}>
              {tasks.length ? `${completedTasksCount} of ${tasks.length}` : 0}
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

          {!tasks.length && (
            <div className={styles["empty-feedback"]}>
              <Clipboard />
              <strong>You haven't added any tasks yet</strong>
              <span>
                Get organized by creating tasks and managing your to-dos
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
