import Stack from "@mui/material/Stack";
import styled from "@mui/material/styles/styled";

const PartStack = styled(Stack)(({ theme }) => ({
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    gap: theme.spacing(3),
    background: theme.contentBoxBackground.part,
    alignItems: "center",
}));

export default PartStack;