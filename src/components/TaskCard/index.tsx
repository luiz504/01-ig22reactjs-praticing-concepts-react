import React from "react";
import { Trash, Check, Circle, CheckCircle } from "phosphor-react";

import styles from "./styles.module.css";

import { TTask } from "../../App";

type TaskProps = {
  onDeleteTask: (id: TTask["id"]) => void;
  onMarkTaskCompleted: (data: { id: TTask["id"]; checked: boolean }) => void;
} & TTask;

export const TaskCard: React.FC<TaskProps> = ({
  id,
  completed,
  description,
  onDeleteTask,
  onMarkTaskCompleted,
}) => {
  return (
    <div className={styles["task-card"]}>
      <div>
        <label
          className={styles.checkbox}
          htmlFor={`checkbox-${id}`}
          aria-label="Toogle Task Completed"
        >
          <input
            type="checkbox"
            id={`checkbox-${id}`}
            defaultChecked={completed}
            onChange={({ target }) => {
              onMarkTaskCompleted({ id, checked: target.checked });
            }}
          />
          <div className={styles["check-circle"]}>
            <Check size={10} weight="bold" />
          </div>
        </label>
      </div>

      <div className={styles["section-description "]}>
        <p className={styles.description} data-completed={completed}>
          {description}
        </p>
      </div>

      <div>
        <button
          className={styles["btn-delete"]}
          type="button"
          onClick={() => onDeleteTask(id)}
        >
          <Trash fontVariant={"bold"} />
        </button>
      </div>
    </div>
  );
};
