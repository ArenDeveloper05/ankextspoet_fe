// import UserPosts from "./components/userposts/UserPosts"

import { MdAccountCircle } from "react-icons/md";
import { BsSignpostSplitFill } from "react-icons/bs";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { ROUTER } from "./router/router";

export const CONFIG = {
  myPostsConfig: [
    {
      id: 1,
      title: "Հրապարակային",
      type: "public",
      // component: <UserPosts/>
    },
    {
      id: 2,
      title: "Գաղտնի",
      type: "private",
    },
  ],
};

export const accountModalConfig = [
  {
    id: 1,
    title: "My Account",
    icon: MdAccountCircle,
    to: ROUTER.ACCOUNT_ROUTE,
    isLogout: false,
  },
  {
    id: 2,
    title: "My Posts",
    icon: BsSignpostSplitFill,
    to: ROUTER.MY_POSTS_ROUTE,
    isLogout: false,
  },
  {
    id: 3,
    title: "Logout",
    icon: RiLogoutCircleRFill,
    to: "",
    isLogout: true,
  },
];

export const navConfig = [
  {
    id: 1,
    title: "Գլխավոր",
    link: ROUTER.HOME_ROUTE,
  },
  {
    id: 2,
    title: "Մեր Մասին",
    link: ROUTER.ABOUT_PAGE_ROUTE,
  },
  // {
  //   id: 3,
  //   title: "Exercise",
  //   link: ROUTER.EXERCISE_PAGE_ROUTE,
  // },
];
