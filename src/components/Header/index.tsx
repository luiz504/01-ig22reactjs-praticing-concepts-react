import React from "react";
import { PlusCircle } from "phosphor-react";

import { ReactComponent as Rocket } from "../../assets/rocket.svg";

import styles from "./styles.module.css";

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles["logo-section"]}>
      <Rocket />
      <span>
        to<strong>do</strong>
      </span>
    </div>
    <form className={styles.form}>
      <input placeholder="Add a new Task" />

      <button type="submit" title="Create">
        <span>Create</span> <PlusCircle size={16} />
      </button>
    </form>
  </header>
);
