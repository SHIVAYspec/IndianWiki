import { ReactNode } from "react";
import { NavigateFunction, RouteObject, useNavigate } from "react-router-dom";
import PartStack from "../../../../../../components/mymaterialui/part_stack";
import { IndianBooksRouter } from "./indian_books/index";
import ChapterBox from "../../../../../../components/mymaterialui/chapter_box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import data from './data.json'
import shuffle_array from "../../../../../../utils/shuffle_array";

function BooksIndex({ additionalContents }: { additionalContents: { name: string, link: string }[] }): ReactNode {
    const navigate: NavigateFunction = useNavigate();
    const dataContent: { name: string, href: string }[] = data;
    const contents: ReactNode[] = shuffle_array([
        ...additionalContents.map((e) =>
            <ChapterBox key={e.link} sx={{ width: 1.0 }}>
                <Link href={e.link} variant="h1">
                    <Typography color="text.primary" onClick={() => navigate(e.link)}>
                        {e.name}
                    </Typography>
                </Link>
            </ChapterBox>
        ),
        ...dataContent.map((e) =>
            <ChapterBox key={e.href} sx={{ width: 1.0 }}>
                <Link href={e.href} variant="h1">
                    <Typography color="text.primary">
                        {e.name}
                    </Typography>
                </Link>
            </ChapterBox>
        )
    ]);
    return <PartStack>
        {contents}
    </PartStack >
}

export function BooksRouter(): RouteObject {
    const contents: { name: string, routes: RouteObject }[] = [
        {
            name: "Books every indian must read",
            routes: IndianBooksRouter(),
        },
    ];
    return {
        path: "books",
        children: [
            {
                index: true,
                element: <BooksIndex additionalContents={
                    contents.map((e) => ({
                        name: e.name,
                        link: e.routes.path ?? "",
                    }))
                } />,
            },
            ...contents.map((e) => e.routes),
        ]
    };
}