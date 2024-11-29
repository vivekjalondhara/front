import React, { useState, useEffect } from "react";
import Button from "./Button";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return (
      savedMode === "true" ||
      (savedMode === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "false");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Button onClick={toggleDarkMode} className="primary__Btn ">
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </Button>
  );
};

export default DarkModeToggle;
