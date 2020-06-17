import React, { createContext, useState, ChangeEvent } from "react";

interface InterfaceContext {
  LangProvider: any;
  LangContext: any;
  ThemeContext: any;
  ThemeProvider: any;
}

function AppContext() {
  const LangContext = createContext(null);
  const ThemeContext = createContext(null);

  const LangProvider = (props: any) => {
    const [lang, setLang] = useState("id");
    const changeLang = (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event);
      setLang(event.target.value);
    };
    const langState: any = { lang, changeLang };

    return (
      <LangContext.Provider value={langState}>
        {props.children}
      </LangContext.Provider>
    );
  };

  const ThemeProvider = (props: any) => {
    const [theme, setTheme] = useState("light");
    const changeTheme = (event: ChangeEvent<HTMLInputElement>) => {
      setTheme(event.target.value);
    };
    const themeState: any = { theme, changeTheme };

    return (
      <ThemeContext.Provider value={themeState}>
        {props.children}
      </ThemeContext.Provider>
    );
  };

  let Context: InterfaceContext = {
    LangProvider,
    ThemeProvider,
    LangContext,
    ThemeContext,
  };
  return Context;
}

export default AppContext();
