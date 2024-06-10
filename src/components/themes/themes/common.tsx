import { PaletteColor, PaletteColorOptions, Theme, ThemeOptions, createTheme } from "@mui/material";
import '@fontsource/kalam';

declare module '@mui/material/styles' {
    interface Palette {
        navigation: PaletteColor,
        border: PaletteColor,
    }
    interface PaletteOptions {
        navigation?: PaletteColorOptions,
        border?: PaletteColorOptions,
    }
    interface Theme {
        contentBoxBackground: {
            part: string;
            chapter: string;
            section: string;
            subsection: string;
            subsubsection: string;
        };
    }
    interface ThemeOptions {
        contentBoxBackground?: {
            part?: string;
            chapter?: string;
            section?: string;
            subsection?: string;
            subsubsection?: string;
        };
    }
}

export default function commonTheme(inTheme: ThemeOptions): Theme {
    return createTheme(
        {
            typography: {
                fontFamily: "monospace",
                h1: {
                    fontFamily: "Kalam",
                }
            },
            ...inTheme
        }
    )

}