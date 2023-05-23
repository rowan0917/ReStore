import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { useState } from "react";

function App() {
const [darkMode, setDarkMode] = useState(false);
const palettType = darkMode? 'dark' : 'light';
const theme = createTheme({
  palette:{
    mode: palettType,
    background: {
      default: palettType === 'light'? '#eaeaea' : '#121212'
    }
  }
})

function handleThemChange(){
  setDarkMode(!darkMode)
}
  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header darkMode={darkMode} handleThemChange={handleThemChange} />
        <Container>
          <Catalog />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
