import { ReactNode } from "react";
import { NavigateFunction, RouteObject, useNavigate } from "react-router-dom";
import PartStack from "../../../../../../components/mymaterialui/part_stack";
import ChapterBox from "../../../../../../components/mymaterialui/chapter_box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import contents from './contents.json'
import shuffle_array from "../../../../../../utils/shuffle_array";
import additionalContents from "./additional_contents";

function BooksIndex({ contents, additionalContents }: {
    contents: { name: string, href: string }[],
    additionalContents: { name: string, link: string }[],
}): ReactNode {
    const navigate: NavigateFunction = useNavigate();
    const allContents: ReactNode[] = shuffle_array([
        ...additionalContents.map((e) =>
            <ChapterBox key={e.link} sx={{ width: 1.0 }}>
                <Typography color="text.primary" onClick={() => navigate(e.link)}>
                    {e.name}
                </Typography>
            </ChapterBox>
        ),
        ...contents.map((e) =>
            <ChapterBox key={e.href} sx={{ width: 1.0 }}>
                <Link href={e.href}>
                    <Typography color="text.primary">
                        {e.name}
                    </Typography>
                </Link>
            </ChapterBox>
        )
    ]);
    return <PartStack>
        {allContents}
    </PartStack >
}

export function BooksRouter(): RouteObject {
    return {
        path: "books",
        children: [
            {
                index: true,
                element: <BooksIndex additionalContents={additionalContents.map((e) => ({
                    name: e.name,
                    link: e.routes.path ?? "",
                }))} contents={contents} />,
            },
            ...additionalContents.map((e) => e.routes),
        ]
    };
}