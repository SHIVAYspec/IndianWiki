import { Theme } from "@mui/material/styles/createTheme";
import commonTheme from "./common";

const mainColor = "#FFFFFF";
const altColor = "#E6E6E6";

export function lightTheme(): Theme {
    return commonTheme({
        palette: {
            mode: "light",
            background: {
                default: altColor,
            },
            primary: {
                main: "#FFFFFF",
            },
            secondary: {
                main: "#E6E6E6",
            },
            navigation: {
                main: "#247BC2",
                light: "#FFFFFF",
                dark: "#D1E0E6",
            },
            border: {
                main: "#0099CC",
            },
            text: {
                primary: "#000000",
                secondary: "#0099CC",
            },
        },
        contentBoxBackground: {
            part: altColor,
            chapter: mainColor,
            section: altColor,
            subsection: mainColor,
            subsubsection: altColor,
        },
    });
}