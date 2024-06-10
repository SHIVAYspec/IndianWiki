import { Theme } from "@mui/material/styles/createTheme";
import commonTheme from "./common";

const mainColor = "#000000";
const altColor = "#040D15";

export function darkTheme(): Theme {
    return commonTheme({
        palette: {
            mode: "dark",
            background: {
                default: mainColor,
            },
            primary: {
                main: "#040E16",
            },
            secondary: {
                main: "#000000",
            },
            navigation: {
                main: "#000000",
                light: "#000000",
                dark: "#040E16",
            },
            border: {
                main: "#0099CC",
            },
            text: {
                primary: "#FFFFFF",
                secondary: "#0099CC",
            },
        },
        contentBoxBackground: {
            part: mainColor,
            chapter: altColor,
            section: mainColor,
            subsection: altColor,
            subsubsection: mainColor,
        },
    });
}