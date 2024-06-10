import { ReactNode } from "react";
import ChapterBox from "../../../../../../../components/mymaterialui/chapter_box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import data from './data.json'
import shuffle_array from "../../../../../../../utils/shuffle_array";
import { RouteObject } from "react-router-dom";
import PartStack from "../../../../../../../components/mymaterialui/part_stack";

function IndianBooks(): ReactNode {
    const content: { name: string, href: string }[] = shuffle_array(data);
    <Typography>
        Indian books contents
    </Typography>
    return <PartStack>
        <ChapterBox sx={{ width: 1.0 }}>
            <Typography variant="h1" fontSize={36} padding={2}>
                Books every indian must read
            </Typography>
            {
                content.map((e) => (
                    <ChapterBox key={e.href} sx={{
                        background: (theme) => theme.contentBoxBackground.section,
                    }}>
                        <Link href={e.href}>
                            <Typography color={"text.primary"}>
                                {e.name}
                            </Typography>
                        </Link>
                    </ChapterBox>
                ))
            }
        </ChapterBox>
    </PartStack>
}

export function IndianBooksRouter(): RouteObject {
    return {
        path: "indianbooks",
        element: <IndianBooks />
    };
}