import axios from "axios";
import rgbHex from "rgb-hex";

export const GeneratePalette = async () => {
  const apiUrl = "/api/"
  const apiModel = { model: "default" }

  try {
    const response = await axios.post(apiUrl, apiModel, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.result.map((color, index) => rgbHex(color.join(",")))
  } catch (error) {
    console.log("Error: ", error)
  }
}
