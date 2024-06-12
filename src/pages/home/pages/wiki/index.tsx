import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { NavigateFunction, RouteObject, useNavigate } from "react-router-dom";
import PartStack from "../../../../components/mymaterialui/part_stack";
import ChapterBox from "../../../../components/mymaterialui/chapter_box";
import { recommendationsContents } from "./recommendationsContents.tsx";
import { learnContents } from "./learnContents.tsx";


function WikiIndex({ contents }: {
    contents: { name: string, contents: { name: string, link: string }[] }[]
}): ReactNode {
    const navigate: NavigateFunction = useNavigate();
    return <PartStack>
        {contents.map((section) =>
            <ChapterBox sx={{ width: 1.0 }}>
                <Typography variant={"h1"} fontSize={36}> {section.name} </Typography>
                <List>
                    {section.contents.map((e) =>
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
        )}
    </PartStack>
}

export function WikiRouter(): RouteObject {
    const chapters: {
        name: string,
        sections: {
            name: string,
            routes: RouteObject,
        }[]
    }[] = [
            {
                name: "Recommendations",
                sections: recommendationsContents,
            },
            {
                name: "Learn",
                sections: learnContents,
            },
        ];
    return {
        path: "wiki",
        children: [
            {
                index: true,
                element: <WikiIndex contents={
                    chapters.map((chapter) => ({
                        name: chapter.name,
                        contents: chapter.sections.map((section) => ({
                            name: section.name,
                            link: section.routes.path ?? "",
                        }))
                    }))
                } />,
            },
            ...chapters.map((e) => e.sections).reduce((n, p) => n.concat(p)).map((e) => e.routes),
        ],
    };
}