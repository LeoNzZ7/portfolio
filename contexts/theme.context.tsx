import { createContext, ReactNode, useContext, useState } from "react";

type themeContextType = {
  theme: string;
  setTheme: (theme: "dark" | "light") => void;
};

const defaultValues: themeContextType = {
  theme: "dark",
  setTheme: () => null
};

const themeContext = createContext<themeContextType>(defaultValues);
export const useThemeContext = () => useContext(themeContext);

type Props = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  
  return (
    <themeContext.Provider value={{ theme, setTheme }} >
      { children }
    </themeContext.Provider>
  );
};