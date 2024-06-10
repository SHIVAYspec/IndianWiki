import React, { ReactNode } from "react";
import { NavigateFunction, useNavigate } from "react-router";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AcUnit from "@mui/icons-material/AcUnit";
import { CurrentTheme } from "./themes/main";
import { Outlet } from "react-router-dom";

export default function MyNavigator(props: {
    title: String,
    pages: { name: string, link: string }[],
}): ReactNode {
    const [drawerState, setDrawerState] = React.useState<boolean>(false);
    const navigate: NavigateFunction = useNavigate();
    return <>
        <AppBar
            sx={{
                displayPrint: "none",
                position: 'sticky',
                border: (theme) => `2px solid ${theme.palette.border.main}`,
                background: (theme) => theme.palette.navigation.light,
            }}
        >
            <Toolbar>
                <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => setDrawerState((value) => !value)}
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant={"h1"}
                    fontSize={30}
                    fontWeight={"fontWeightBold"}
                    flexGrow={1}
                    onClick={() => navigate("/")}
                >
                    {props.title}
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
                    {props.pages.map((item) => (
                        <Button
                            key={item.link}
                            sx={[
                                {
                                    border: (theme) => `2px solid ${theme.palette.border.main}`,
                                    background: (theme) => theme.palette.navigation.dark,
                                    marginLeft: 1,
                                    marginRight: 1,
                                },
                            ]}
                            onClick={() => navigate(item.link)}
                        >
                            <Typography sx={[
                                {
                                    color: (theme) => theme.palette.text.primary,
                                },
                            ]}>
                                {item.name}
                            </Typography>
                        </Button>
                    ))}
                </Box>
                <CurrentTheme.Consumer>
                    {
                        (nextTheme) =>
                            <IconButton
                                aria-label="next theme"
                                edge="start"
                                onClick={() => nextTheme()}
                                sx={{ margin: 1 }}
                            >
                                <AcUnit />
                            </IconButton>
                    }
                </CurrentTheme.Consumer>
            </Toolbar>
        </AppBar >
        <Drawer
            variant="temporary"
            ModalProps={{ keepMounted: true, }}
            open={drawerState}
            onClose={() => setDrawerState((value) => !value)}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 256 },
            }}
        >
            <List>
                {props.pages.map((item) => (
                    <ListItem key={item.link} disablePadding>
                        <ListItemButton
                            sx={[
                                {
                                    textAlign: 'center'
                                },
                                {
                                    border: (theme) => `2px solid ${theme.palette.border.main}`,
                                    background: (theme) => theme.palette.secondary.main,
                                    borderRadius: 2,
                                    margin: 1,
                                },
                            ]}
                            onClick={function () {
                                navigate(item.link);
                                setDrawerState((state) => !state);
                            }}
                        >
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
        <Outlet />
    </>
}
