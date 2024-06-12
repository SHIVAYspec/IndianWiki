import { RouteObject } from "react-router-dom";
import { MoviesRouter } from "./pages/movies";
import { BooksRouter } from "./pages/books";
import { BlogsRouter } from "./pages/blogs";

export const recommendationsContents: { name: string, routes: RouteObject }[] = [
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