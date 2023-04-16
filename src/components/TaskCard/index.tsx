import React from "react";
import { Trash, Check } from "phosphor-react";

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
        <button
          className={styles.checkbox}
          type="button"
          data-checked={completed}
          title=""
          onClick={() => onMarkTaskCompleted({ id, checked: !completed })}
        >
          <Check size={10} weight="bold" />
        </button>
      </div>

      <div>
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
          <Trash size={12} fontVariant={"bold"} />
        </button>
      </div>
    </div>
  );
};
