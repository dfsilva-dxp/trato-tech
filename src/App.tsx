import { ThemeProvider } from "styled-components";

import { DefaultTheme, GlobalStyles } from "@/styles";
import { Navbar } from "@/components";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
