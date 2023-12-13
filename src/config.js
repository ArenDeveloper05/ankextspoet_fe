// import UserPosts from "./components/userposts/UserPosts"

import { MdAccountCircle } from "react-icons/md";
import { BsSignpostSplitFill } from "react-icons/bs";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { ROUTER } from "./router";

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
