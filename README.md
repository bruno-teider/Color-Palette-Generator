# React Color Palette Generator

This is a React application that generates a random color palette using the Colormind API and Axios.

- Generation of random color palettes
- Display of colors as clickable cards
- Snackbar notifications for copied colors
- Keyboard shortcuts for generating palettes and copying colors

![image](https://github.com/user-attachments/assets/30eb4160-a5ca-4ded-a934-5fa5cd16839f)

## Features

- **Generate Random Palette**: Click the button, or press Space to generate a new color palette with the API.
- **Copy to Clipboard**: Click on a color card to copy the color hex, or press "C" to copy the entire palette  to clipboard.
- **Snackbar Notifications**: Snackbar notifications when something is copied.
- **Responsive**: This website is responsive with different desktop resolutions.
- **Design**: It has a very cool neubrutalism design, with hover animations.

![Screenshot_1](https://github.com/user-attachments/assets/69b74800-4c5f-4725-9e5d-e18e398f295b)

## How to run

1. **Navigate into the project directory:**

   ```bash
   cd <project-directory>
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Acknowledgments

- [Material-UI](https://mui.com/) for the Snackbar component.
- [React](https://reactjs.org/) for the framework used in this project.
- [axios](https://axios-http.com/) for making the API requests.
- [rgb-hex](https://www.npmjs.com/package/rgb-hex) for converting RGB to hex color codes.
