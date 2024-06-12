import { RouteObject } from "react-router-dom";
import { IndianBooksRouter } from "./indian_books/index";

const additionalContents: { name: string, routes: RouteObject }[] = [
    {
        name: "Books every indian must read",
        routes: IndianBooksRouter(),
    },
];

export default additionalContents;