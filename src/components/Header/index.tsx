import React, { useState } from "react";
import { PlusCircle } from "phosphor-react";

import { ReactComponent as Rocket } from "../../assets/rocket.svg";

import styles from "./styles.module.css";

type HeaderProps = {
  handleAddTask: (description: string) => void;
};

export const Header: React.FC<HeaderProps> = ({ handleAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
    if (!!inputValue.length) {
      handleAddTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles["logo-section"]}>
        <Rocket />
        <span>
          to<strong>do</strong>
        </span>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          placeholder="Add a new Task"
          value={inputValue}
          onChange={handleInputChange}
          required
        />

        <button type="submit" title="Create" disabled={!inputValue.length}>
          <span>Create</span> <PlusCircle size={16} />
        </button>
      </form>
    </header>
  );
};
