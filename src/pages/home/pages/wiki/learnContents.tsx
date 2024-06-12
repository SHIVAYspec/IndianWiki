import { RouteObject } from "react-router-dom";
import { ComputerScienceRouter } from "./pages/computer_science";

export const learnContents: { name: string, routes: RouteObject }[] = [
    {
        name: "Computer Science",
        routes: ComputerScienceRouter(),
    },
];