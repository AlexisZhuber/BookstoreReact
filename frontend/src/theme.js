// src/theme.js
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d3d4d8",
          200: "#a6a9b1",
          300: "#7a7e8a",
          400: "#4d5363",
          500: "#20283c",
          600: "#1a2030",
          700: "#131824",
          800: "#0d1018",
          900: "#06080c",
        },
        accent: {
          100: "#d3d3d3",
          200: "#a6a6a6",
          300: "#7a7a7a",
          400: "#4d4d4d",
          500: "#2e2e2e",  // Gris oscuro
          600: "#242424",
          700: "#1a1a1a",
          800: "#0f0f0f",
          900: "#050505",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#06080c",
          200: "#0d1018",
          300: "#131824",
          400: "#f2f3f5",
          500: "#20283c",
          600: "#4d5363",
          700: "#7a7e8a",
          800: "#a6a9b1",
          900: "#d3d4d8",
        },
        accent: {
          100: "#050505",
          200: "#0f0f0f",
          300: "#1a1a1a",
          400: "#242424",
          500: "#2e2e2e",  // Gris oscuro
          600: "#4d4d4d",
          700: "#7a7a7a",
          800: "#a6a6a6",
          900: "#d3d3d3",
        },
      }),
});

// MUI THEME SETTINGS
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.accent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.accent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Barlow", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
