import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Water Treatment Chemical",
        path: "/products/water-treatment-chemicals",
        newTab: false,
      },
      {
        id: 62,
        title: "Fertilizers",
        path: "/products/fertilizers",
        newTab: false,
      },
      {
        id: 63,
        title: "Commodities",
        path: "/products/commodities",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Articles",
    path: "/articles",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
