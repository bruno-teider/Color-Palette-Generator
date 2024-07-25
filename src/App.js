import React, { useState, useEffect } from "react";
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
  }

  useEffect(() => {
    getPalette()
  }, [])

  return (
    <div className="App">

      <div className="container">
        {palette.map((color, index) => (
          <div key={index} style={{ backgroundColor: `rgb(${color.join(",")})`, width: 50, height: 50 }}/>
        ))}
      </div>

      <button onClick={getPalette}>Generate Random Palette</button>      
    </div>
  );
}

export default App;
