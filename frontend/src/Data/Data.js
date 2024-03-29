// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUserCircle,
  UilSchedule,
  UilSignOutAlt,
  UilSitemap,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import {
  UilExclamationTriangle,
  UilCheckCircle,
  UilHourglass,
} from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import target from "../imgs/target.gif";
import danger from "../imgs/danger.gif";
import download from "../imgs/download.gif";

import { BugReport } from "@material-ui/icons";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    link: "/",
    roles: [2],
  },
  {
    icon: UilEstate,
    heading: "IT Dashboard",
    link: "/it_dashboard",
    roles: [3],
  },
  {
    icon: UilUserCircle,
    heading: "My Profile",
    link: "/profile",
    roles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  // {
  //   icon: UilClipboardAlt,
  //   heading: "Issues",
  //   link: "/test",
  //   roles: [1,2],
  // },
  {
    icon: UilClipboardAlt,
    heading: "Issues",
    link: "/reportHistory",
    roles: [2],
  },
  // {
  //   icon: UilSchedule,
  //   heading: "Schedules",
  //   link: "/test",
  //   roles: [1,2],
  // },
  {
    icon: UilUsersAlt,
    heading: "Users",
    link: "/signup",
    roles: [2],
  },
  {
    icon: BugReport,
    heading: "Create Issue",
    link: "/make_report",
    roles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    icon: UilSitemap,
    heading: "Roles",
    link: "/roles",
    roles: [2],
  },

  {
    icon: UilPackage,
    heading: "Asset",
    link: "/asset",
    roles: [2],
  },
  // {
  //   icon: UilChart,
  //   heading: 'Inventory',
  //   link: "/test",
  //   roles: [2,3],
  // },
  // {
  //   icon: UilEstate,
  //   heading: "Permissions",
  //   link: "/test",
  //   roles: [2,3,4,5],
  // },
  // {
  //   icon: UilChart,
  //   heading: 'Analytics',
  //   link: "/test",
  //   roles: [2,3,4,5],
  // },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Reports",
    color: {
      // backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      // boxShadow: "0px 10px 20px 0px #e0c6f5",
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 70,
    value: "250",
    png: UilExclamationTriangle,
    series: [
      {
        name: "Reports",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Resolved",
    color: {
      backGround: "linear-gradient(180deg, #90EE9D 0%, #90EE90 100%)",
      boxShadow: "0px 10px 20px 0px #90EE97",
    },
    barValue: 80,
    value: "14,270",
    png: UilCheckCircle,
    series: [
      {
        name: "Resolved",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Pending",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilHourglass,
    series: [
      {
        name: "Pending",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: target,
    name: "Mark Jacky",
    noti: "has fixed the issue on QA250 LAB.",
    time: "25 seconds ago",
  },
  {
    img: danger,
    name: "Stive Jobs",
    noti: "has created a new issue on QM90 LAB.",
    time: "30 minutes ago",
  },
  {
    img: download,
    name: "Nick Feury",
    noti: "has requested a new Software requiremtent.",
    time: "2 hours ago",
  },
];

// User Management Cards Data
export const userManagement = [
  {
    title: "Example",
    color: {
      background: "linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 100%)",
      boxShadow: "0px 10px 20px 0px #CCCCCC",
    },
    barValue: 50,
    value: "500",
    png: UilExclamationTriangle,
    series: [
      {
        name: "Example",
        data: [10, 20, 30, 40, 50, 60, 70],
      },
    ],
  },

  {
    title: "Users",
    color: {
      backGround: "linear-gradient(180deg, #00FF00 0%, #00FF7F 100%)",
      boxShadow: "0px 10px 20px 0px #90EE97",
    },
    barValue: 80,
    value: "10",
    png: UilCheckCircle,
    series: [
      {
        name: "Users",
        data: [10, 20, 30, 40, 50, 60, 70],
      },
    ],
  },
  {
    title: "Roles",
    color: {
      backGround: "linear-gradient(180deg, #90EE9D 0%, #90EE90 100%)",
      boxShadow: "0px 10px 20px 0px #90EE97",
    },
    barValue: 80,
    value: "14,270",
    png: UilCheckCircle,
    series: [
      {
        name: "Roles",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Permissions",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilHourglass,
    series: [
      {
        name: "Permissions",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
