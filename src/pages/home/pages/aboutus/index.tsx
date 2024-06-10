import Chip from "@mui/material/Chip";
import { FaDiscord } from "react-icons/fa6";
import PartStack from "../../../../components/mymaterialui/part_stack";
import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";
import Typography from "@mui/material/Typography";

export function Aboutus(): ReactNode {
    return <PartStack gap={2}>
        <Typography variant={"h1"} fontSize={60} align={"center"}>
            We are a community of knowledge enthusiasts.
        </Typography>
        <Typography variant={"h1"} fontSize={30} align={"center"}>
            Find us on discord
        </Typography>
        <Chip
            component={"a"}
            href={"https://disboard.org/server/1218480967564660786"}
            avatar={<FaDiscord />}
            label={"Discord"}
        />
    </PartStack>
}

export function AboutusRouter(): RouteObject {
    return {
        path: "aboutus",
        element: <Aboutus />,
    };
}