import React, { useState, useEffect } from "react";
import useKeyPress from "./hooks/usekeyPress";
import Snackbar from "@mui/material/Snackbar";
import { Slide } from "@mui/material";
import "./index.css";
import { GeneratePalette } from "./GeneratePalette";
import { CopyToClipboard } from "./CopyToClipboard";

function App() {
  const [palette, setPalette] = useState([]);
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [message, setMessage] = useState('')

  // Function for when you copy something
  const copy = (text, message) => {
    setMessage(message)
    setOpen(CopyToClipboard(text));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Func that gets the palette from the API
  const getPalette = async () => {
    setPalette(await GeneratePalette());
  };

  // Generates new palette when starting
  useEffect(() => {
    getPalette();
  }, []);

  // Generating new palette when pressing space
  useKeyPress(" ", getPalette);

  // Copying palette when pressing c
  useKeyPress("c", () => copy(palette, "Palette copied to Clipboard"));

  return (
    <div className="App">
      {/* Snackbar Appears when something is copied */}
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          message={message}
          onClose={handleClose}
          TransitionComponent={Slide}
          ContentProps={{
            sx: {
              border: "3px solid #000",
              color: "white",
              borderRadius: "6px",
              bgcolor: "#ff00f5",
              padding: "10px 12px",
              boxShadow: "5px 5px 0px 0px #000",
              width: 1 / 2,
              fontSize: "1.5rem",
            },
          }}
        />
      )}

      <div className="container">
        {/* Create a card for each color in the palette */}
        {palette.map((color, index) => (
          <div
            className="color-card"
            style={{
              backgroundColor: `#${color}`,
            }}
            // For the hover effect
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <div className="show-name" onClick={() => copy("#" + color, 'Color copied to Clipboard')}>
                <h1>#{color}</h1>
              </div>
            )}
          </div>
        ))}
      </div>

      <button onClick={getPalette} className="button">
        Generate Random Palette
      </button>
    </div>
  );
}

export default App;
