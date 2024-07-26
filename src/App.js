import React, { useState, useEffect } from "react";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import useKeyPress from "./hooks/usekeyPress";
import rgbHex from "rgb-hex";
import "./index.css";

function App() {
  const [palette, setPalette] = useState([]);
  const [open, setOpen] = useState(false);

  function CopyToClipboard(text) { 
    if (document.hasFocus()) {
      navigator.clipboard.writeText(text).then(() => {
        setOpen(true);
      });
    } else {
      console.warn("Document is not focused, unable to copy to Clipboard");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false)
  };

  const getPalette = async () => {
    const apiUrl = "/api/";
    const apiModel = {
      model: "default",
    };

    try {
      const response = await axios.post(apiUrl, apiModel, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      setPalette(response.data.result.map((color, index) =>
        rgbHex(color.join(","))
      ))
    } catch (error) {
      console.log("Error: ", error)
    }
  };

  useEffect(() => {
    getPalette()
  }, [])

  useKeyPress(" ", getPalette)

  useKeyPress("c", () => CopyToClipboard(palette))

  return (
    <div className="App">

      {open && (
        <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      />
      )}

      <div className="container">
        {palette.map((color, index) => (
          <div key={index} style={{ backgroundColor: `#${color}`, width: 150, height: 225 }}/>
        ))}
      </div>

      <button onClick={getPalette} className="button">Generate Random Palette</button>
    </div>
  );
}

export default App;
