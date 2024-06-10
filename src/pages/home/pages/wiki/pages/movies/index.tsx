import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";
import PartStack from "../../../../../../components/mymaterialui/part_stack";

function MoviesNav(): ReactNode {
    return <PartStack>
        <Typography>
            Empty
        </Typography>
    </PartStack>
}

export function MoviesRouter(): RouteObject {
    return {
        path: "movies",
        element: <MoviesNav />,
    };
}