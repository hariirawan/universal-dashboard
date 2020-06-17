import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

const { LangProvider, LangContext, ThemeContext, ThemeProvider } = AppContext;

function App() {
  return (
    <div className="App">
      <LangProvider>
        <ThemeProvider>
          <Header />
          <Content />
          <Footer />
        </ThemeProvider>
      </LangProvider>
    </div>
  );
}

function Header() {
  const langCtx = useContext<any>(LangContext);
  const themeCtx = useContext<any>(ThemeContext);

  return (
    <header className="App-header">
      <div>-- Header --</div>
      <div>
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>
            Language{" "}
            <select onChange={langCtx.changeLang} defaultValue={langCtx.lang}>
              <option value="id">Indonesia</option>
              <option value="en">English</option>
            </select>
          </li>
          <li>
            Theme{" "}
            <select
              onChange={themeCtx.changeTheme}
              defaultValue={themeCtx.theme}
            >
              <option value="light">Light</option>
              <option value="black">Black</option>
            </select>
          </li>
        </ul>
      </div>
    </header>
  );
}

function Content() {
  return (
    <div>
      <div>-- Content --</div>
      <div>Hallo Dashboard Ku</div>
    </div>
  );
}

function Footer() {
  const langCtx = useContext<any>(LangContext);
  const themeCtx = useContext<any>(ThemeContext);

  return (
    <div>
      <div>-- Footer --</div>
      <div>Language : {langCtx.lang}</div>
      <div>Theme : {themeCtx.theme}</div>
    </div>
  );
}

export default App;
