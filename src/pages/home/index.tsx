import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { FaDiscord } from "react-icons/fa6";
import PartStack from "../../components/mymaterialui/part_stack";
import { RouteObject } from "react-router-dom";
import { WikiRouter } from "./pages/wiki";
import MyNavigator from "../../components/my_navigator";
import { AboutusRouter } from "./pages/aboutus";

function HomeNav({ contents }: { contents: { name: string, link: string }[] }): ReactNode {
    return <MyNavigator title={"Indian Wiki"} pages={contents} />;
}

function HomeIndex(): ReactNode {
    return <PartStack>
        <Typography variant={"h1"} fontSize={60} align={"center"}>
            Welcome to the wisdom base.
        </Typography>
        <Chip
            component={"a"}
            href={"https://disboard.org/server/1218480967564660786"}
            avatar={<FaDiscord />}
            label={"Discord"}
        />
    </PartStack>
}

function Error404(): ReactNode {
    return <PartStack>
        <Typography variant={"h1"} fontSize={60} align={"center"}>
            404 Page not found
        </Typography>
    </PartStack>
}

export function HomeRouter(): RouteObject {
    const contents: { name: string, routes: RouteObject }[] = [
        {
            name: "Wiki",
            routes: WikiRouter(),
        },
        {
            name: "About us",
            routes: AboutusRouter(),
        }
    ];
    return {
        path: "/",
        element: <HomeNav contents={contents.map((e) => ({
            name: e.name,
            link: e.routes.path ?? "",
        }))} />,
        children: [
            {
                index: true,
                element: <HomeIndex />,
            },
            ...contents.map((e) => e.routes),
            {
                path: "*",
                element: <Error404 />
            },
        ],
    };
}