import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { NavigateFunction, RouteObject, useNavigate } from "react-router-dom";
import PartStack from "../../../../components/mymaterialui/part_stack";
import { MoviesRouter } from "./pages/movies";
import { BooksRouter } from "./pages/books";
import { BlogsRouter } from "./pages/blogs";
import ChapterBox from "../../../../components/mymaterialui/chapter_box";

function WikiIndex({ contents }: { contents: { name: string, link: string }[] }): ReactNode {
    const navigate: NavigateFunction = useNavigate();
    return <PartStack>
        <ChapterBox sx={{ width: 1.0 }}>
            <Typography variant={"h1"} fontSize={36}> Recommendations </Typography>
            <List>
                {contents.map((e) =>
                    <ListItem key={e.link} sx={{ padding: 2 }}>
                        <Typography
                            color={"text.primary"}
                            fontWeight={"bold"}
                            onClick={() => navigate(e.link)}
                        >
                            {e.name}
                        </Typography>
                    </ListItem>
                )}
            </List>
        </ChapterBox>
    </PartStack>
}

export function WikiRouter(): RouteObject {
    const contents: { name: string, routes: RouteObject }[] = [
        {
            name: "Books",
            routes: BooksRouter(),
        },
        {
            name: "Movies",
            routes: MoviesRouter(),
        },
        {
            name: "Blogs",
            routes: BlogsRouter(),
        },
    ];
    return {
        path: "wiki",
        children: [
            {
                index: true,
                element: <WikiIndex contents={contents.map((e) => ({
                    name: e.name,
                    link: e.routes.path ?? "",
                }))} />,
            },
            ...contents.map((e) => e.routes)
        ],
    };
}