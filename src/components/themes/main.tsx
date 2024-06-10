import { ReactNode, createContext, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery, Theme } from '@mui/material';
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dart";

export const CurrentTheme = createContext(() => alert("THEME ERROR"));

const themes: Theme[] = [
    darkTheme(),
    lightTheme(),
];

export default function ThemeLoader({ children }: { children: ReactNode }) {
    const [themeIndex, setThemeIndex] = useState<number>(-1)
    const deviceThemeSetting: boolean = useMediaQuery("(prefers-color-scheme:light)");
    var theme: Theme;
    if (themeIndex == -1) {
        if (deviceThemeSetting) {
            theme = lightTheme();
        } else {
            theme = darkTheme();
        }
    } else {
        theme = themes[themeIndex];
    }
    function nextTheme() {
        if (themeIndex + 1 == themes.length) {
            setThemeIndex(0);
        } else {
            setThemeIndex(themeIndex + 1);
        }
    }
    return <CurrentTheme.Provider value={nextTheme}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    </CurrentTheme.Provider>
}