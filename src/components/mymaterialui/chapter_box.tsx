import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";

const ChapterBox = styled(Box)(({ theme }) => ({
    background: theme.contentBoxBackground.chapter,
    border: `1px solid ${theme.palette.border.main}`,
    padding: theme.spacing(3),
    gap: theme.spacing(3),
}));

export default ChapterBox;