import { createContext, ReactNode, useContext, useState } from "react";

type themeContextType = {
  theme: "dark" | "light"
  setTheme: (theme: "dark" | "light") => void;
};



