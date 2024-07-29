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

  const copy = (text) => {
    setOpen(CopyToClipboard(text));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const getPalette = async () => {
    setPalette(await GeneratePalette());
  };

  useEffect(() => {
    getPalette();
  }, []);

  useKeyPress(" ", getPalette);

  useKeyPress("c", () => copy(palette));

  return (
    <div className="App">
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          message={"Palette copied to Clipboard"}
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
        {palette.map((color, index) => (
          <div
            className="color-card"
            style={{
              backgroundColor: `#${color}`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <div className="show-name">
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
