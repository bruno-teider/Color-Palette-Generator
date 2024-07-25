import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [palette, setPalette] = useState([])

  const getPalette = async () => {
    const apiUrl = '/api/'
    const apiModel = {
      "model": "default"
    }

    try {
      const response = await axios.post(apiUrl, apiModel, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
      setPalette(response.data.result)
    } catch (error) {
      console.log("Error: ", error)
    }

    console.log("Generated Palette: ", palette)
  };

  return (
    <div className="App">
      <button onClick={getPalette}>Generate Random Palette</button>
    </div>
  );
}

export default App;
