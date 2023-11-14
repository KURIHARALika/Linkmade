import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    // :idという書き方でその部分可変として扱うことを記す
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
