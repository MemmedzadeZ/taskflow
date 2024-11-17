import React, { useState, useEffect } from "react";

const Notifier = ({ message, error = false }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const styles = {
    notifierDiv: {
      position: "fixed",
      display: "inline-flex",
      zIndex: 3,
      bottom: "10%",
      border: "5px solid white",
      padding: "5px 9px",
      whiteSpace: "nowrap",
      width: "auto",
      borderColor: error ? "red" : "springgreen",
      backgroundColor: error ? "#febece" : "#baffd8",
      transform: "translateX(-50%)",
      color: "#333",
      borderRadius: "5px",
    },
    messageText: {
      margin: 0,
      fontSize: "2rem",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.notifierDiv}>
      <p style={styles.messageText}>{message}</p>
    </div>
  );
};

export default Notifier;
