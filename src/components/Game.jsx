// // game.jsx
// import React, { useRef, useEffect, useState } from "react";
// import "./Game.css";

// import { auth, database } from "../firebase";  // Updated to import 'database' instead of 'db'
// import { push, ref } from "firebase/database";  // Added for Realtime Database operations
// import { onAuthStateChanged } from "firebase/auth";

// export default function Game() {
//   const canvasRef = useRef(null);
//   const animationRef = useRef(null);

//   const [running, setRunning] = useState(false);
//   const [score, setScore] = useState(0);
//   const [lives, setLives] = useState(5);
//   const [timeLeft, setTimeLeft] = useState(60);

//   const bubbles = useRef([]);
//   const speedLevel = useRef(0.5);
//   const currentUser = useRef(null);

//   const colors = ["#00aaff", "#ff6699", "#66ff66", "#ffaa00", "#cc66ff"];

//   // GET LOGGED USER
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       currentUser.current = user;
//       console.log("Logged User:", user?.email);
//     });
//   }, []);

//   // SAVE SCORE TO FIREBASE (Updated for Realtime Database)
//   const saveScoreToDB = async () => {
//     if (!currentUser.current) {
//       console.log("User not logged in");
//       return;
//     }

//     try {
//       // Use push to add a new entry under 'gameScores' in Realtime Database
//       await push(ref(database, 'gameScores'), {
//         uid: currentUser.current.uid,
//         email: currentUser.current.email,
//         score: score,
//         lives: lives,
//         timeLeft: Math.ceil(timeLeft),
//         createdAt: new Date().toISOString()  // Use ISO string for date in Realtime DB
//       });

//       console.log("Score saved successfully!");
//     } catch (error) {
//       console.error("Error saving score:", error);
//     }
//   };

//   // CREATE BUBBLE
//   const createBubble = (canvas) => {
//     const size = Math.random() * 20 + 25;

//     bubbles.current.push({
//       x: Math.random() * (canvas.width - size * 2) + size,
//       y: canvas.height + size,
//       size,
//       color: colors[Math.floor(Math.random() * colors.length)],
//       speed: speedLevel.current + Math.random() * 0.7,
//       dx: (Math.random() - 0.5) * 0.8,
//     });
//   };

//   const startGame = () => {
//     setRunning(true);
//     setScore(0);
//     setLives(5);
//     setTimeLeft(60);
//     bubbles.current = [];
//     speedLevel.current = 0.5;
//   };

//   // CANVAS RESIZE
//   useEffect(() => {
//     const resize = () => {
//       const canvas = canvasRef.current;
//       canvas.width = canvas.clientWidth;
//       canvas.height = canvas.clientHeight;
//     };
//     resize();

//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   // GAME LOOP
//   useEffect(() => {
//     if (!running) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let lastSpawn = 0;

//     const loop = (t) => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // TIMER
//       setTimeLeft((prev) => {
//         if (prev <= 0) {
//           saveScoreToDB();
//           setRunning(false);
//           alert(`⏳ Time Over!\nScore: ${score}`);
//           return 0;
//         }
//         return prev - 0.016;
//       });

//       const timePlayed = 60 - timeLeft;

//       // SPEED INCREASE
//       if (timePlayed < 25) speedLevel.current = 0.7;
//       else if (timePlayed < 45) speedLevel.current = 1.2;
//       else speedLevel.current = 1.8;

//       // LIMIT bubbles
//       if (bubbles.current.length < 5) {
//         if (t - lastSpawn > 1200) {
//           createBubble(canvas);
//           lastSpawn = t;
//         }
//       }

//       bubbles.current.forEach((b, i) => {
//         b.y -= b.speed;
//         b.x += b.dx;

//         if (b.x < b.size || b.x > canvas.width - b.size) b.dx *= -1;

//         // DRAW BUBBLE
//         ctx.beginPath();
//         ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
//         ctx.fillStyle = b.color;
//         ctx.globalAlpha = 0.85;
//         ctx.fill();
//         ctx.globalAlpha = 1;

//         // ESCAPED BUBBLE
//         if (b.y < -b.size) {
//           bubbles.current.splice(i, 1);
//           setLives((L) => {
//             if (L - 1 <= 0) {
//               saveScoreToDB();
//               setRunning(false);
//               alert(`💀 Game Over!\nScore: ${score}`);
//               return 0;
//             }
//             return L - 1;
//           });
//         }
//       });

//       animationRef.current = requestAnimationFrame(loop);
//     };

//     animationRef.current = requestAnimationFrame(loop);

//     return () => cancelAnimationFrame(animationRef.current);
//   }, [running, score, timeLeft]);

//   // CLICK POP
//   useEffect(() => {
//     const canvas = canvasRef.current;

//     const tap = (e) => {
//       if (!running) return;

//       const rect = canvas.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       bubbles.current.forEach((b, i) => {
//         const dx = x - b.x;
//         const dy = y - b.y;

//         if (dx * dx + dy * dy <= b.size * b.size) {
//           bubbles.current.splice(i, 1);
//           setScore((s) => s + 10);
//         }
//       });
//     };

//     canvas.addEventListener("click", tap);
//     return () => canvas.removeEventListener("click", tap);
//   }, [running]);

//   return (
//     <div className="game-wrapper">
//       <div className="game-header">
//         <h2 className="game-title">Bubble Game</h2>

//         <div className="game-controls">
//           <div className="score-box">Score: <strong>{score}</strong></div>
//           <div className="lives-box">Lives: <strong>{lives}</strong></div>
//           <div className="lives-box">Time: <strong>{Math.ceil(timeLeft)}</strong>s</div>

//           <button className="btn btn-primary" onClick={startGame}>
//             Start Game
//           </button>
//         </div>
//       </div>

//       <div className="canvas-box">
//         <canvas ref={canvasRef}></canvas>
//       </div>

//       <p className="instructions">Tap the bubbles before they escape!</p>
//     </div>
//   );
// }






// game.jsx
import React, { useRef, useEffect, useState } from "react";
import "./Game.css";

import { auth, database } from "../firebase";
import { push, ref } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

export default function Game() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const [level, setLevel] = useState(1); // LEVEL CONTROL
  const [running, setRunning] = useState(false);

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [timeLeft, setTimeLeft] = useState(60);

  const bubbles = useRef([]);
  const speedLevel = useRef(0.5);
  const currentUser = useRef(null);

  const colors = ["#00aaff", "#ff6699", "#66ff66", "#ffaa00", "#cc66ff"];

  // GET LOGGED USER
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      currentUser.current = user;
    });
  }, []);

  // SAVE SCORE TO DATABASE
  const saveScoreToDB = async () => {
    if (!currentUser.current) {
      alert("Please login first");
      return;
    }

    try {
      await push(ref(database, "gameScores"), {
        uid: currentUser.current.uid,
        email: currentUser.current.email,
        score,
        level,
        date: new Date().toISOString(),
      });

      console.log("Score saved!");
    } catch (e) {
      console.log("Error:", e);
    }
  };

  // CREATE BUBBLE BASED ON LEVEL
  const createBubble = (canvas) => {
    const size = Math.random() * 20 + 25;

    if (level === 1) {
      // LEVEL 1 → Bottom → Up
      bubbles.current.push({
        x: Math.random() * (canvas.width - size * 2) + size,
        y: canvas.height + size,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: speedLevel.current + Math.random() * 1,
        dx: (Math.random() - 0.5) * 0.8,
      });
    } else {
      // LEVEL 2 → Left → Right (FAST)
      bubbles.current.push({
        x: -size,
        y: Math.random() * (canvas.height - size * 2) + size,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 2 + Math.random() * 2, // Faster for Level 2
      });
    }
  };

  // START GAME
  const startGame = () => {
    setRunning(true);
    setLives(5);
    setTimeLeft(20);
    bubbles.current = [];

    if (level === 1) speedLevel.current = 0.7;
    else speedLevel.current = 2.5;
  };

  // CANVAS RESIZE
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  // GAME LOOP
  useEffect(() => {
    if (!running) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let lastSpawn = 0;

    const loop = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // TIMER
      setTimeLeft((prev) => {
        if (prev <= 0) {
          setRunning(false);

          if (level === 1) {
            alert("🎯 Level 1 Completed!");
          } else {
            alert("🏆 Game Completed!");
            saveScoreToDB();
          }
          return 0;
        }
        return prev - 0.016;
      });

      // SPAWN LIMIT
      if (bubbles.current.length < 5) {
        if (t - lastSpawn > 1000) {
          createBubble(canvas);
          lastSpawn = t;
        }
      }

      // UPDATE BUBBLES
      bubbles.current.forEach((b, i) => {
        if (level === 1) {
          b.y -= b.speed; // UP
          b.x += b.dx;
        } else {
          b.x += b.speed; // RIGHT FAST
        }

        // DRAW
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();

        // ESCAPE → Lose Life
        if (
          (level === 1 && b.y < -b.size) ||
          (level === 2 && b.x > canvas.width + b.size)
        ) {
          bubbles.current.splice(i, 1);
          setLives((L) => {
            if (L - 1 <= 0) {
              setRunning(false);
              alert("💀 Game Over");
              saveScoreToDB();
              return 0;
            }
            return L - 1;
          });
        }
      });

      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationRef.current);
  }, [running, level]);

  // POP BUBBLE
  useEffect(() => {
    const canvas = canvasRef.current;

    const tap = (e) => {
      if (!running) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      bubbles.current.forEach((b, i) => {
        const dx = x - b.x;
        const dy = y - b.y;

        if (dx * dx + dy * dy <= b.size * b.size) {
          bubbles.current.splice(i, 1);
          setScore((s) => s + 10);
        }
      });
    };

    canvas.addEventListener("click", tap);
    return () => canvas.removeEventListener("click", tap);
  }, [running]);

  return (
    <div className="game-wrapper">
      <h2 className="game-title">Bubble Game</h2>

      <div className="game-controls">
        <div className="score-box">Score: {score}</div>
        <div className="lives-box">Lives: {lives}</div>
        <div className="lives-box">Time: {Math.ceil(timeLeft)}s</div>

        {!running && level === 1 && (
          <button className="btn btn-primary" onClick={startGame}>
            Start Level 1
          </button>
        )}

        {!running && level === 1 && timeLeft <= 0 && (
          <button
            className="btn btn-success"
            onClick={() => {
              setLevel(2);
              setRunning(false);
              setTimeLeft(20);
            }}
          >
            Next Level →
          </button>
        )}

        {!running && level === 2 && (
          <button className="btn btn-danger" onClick={startGame}>
            Start Level 2 (FAST)
          </button>
        )}
      </div>

      <div className="canvas-box">
        <canvas ref={canvasRef}></canvas>
      </div>

      <p className="instructions">
        Level {level}: Pop all bubbles before they escape!
      </p>
    </div>
  );
}
