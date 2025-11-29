import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartGame.css";

const StartGame = () => {
  const [start, setStart] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    setStart(true);

    // Create multiple BIG bubbles
    for (let i = 0; i < 15; i++) {
      createBubble();
    }

    // Navigate after animation
    setTimeout(() => {
      navigate("/Game");
    }, 2500);
  };

  // Create bubble
  const createBubble = () => {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Bigger size (50px - 110px)
    const size = Math.random() * 60 + 50;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    // Random X position
    bubble.style.left = Math.random() * window.innerWidth + "px";

    // Multi-color bubbles
    const colors = ["#ff6b6b", "#ffd93d", "#6bff6b", "#6bc9ff", "#b26bff", "#ff6bd1"];
    bubble.style.background = `radial-gradient(circle, white, ${
      colors[Math.floor(Math.random() * colors.length)]
    })`;

    document.querySelector(".container").appendChild(bubble);

    // Remove bubble after animation
    setTimeout(() => bubble.remove(), 2500);
  };

  return (
    <div className="container">
      {!start && (
        <button className="start-btn" onClick={handleStart}>
          Start Game
        </button>
      )}
    </div>
  );
};

export default StartGame;
