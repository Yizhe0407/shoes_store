import { Footprints, BookOpen } from "lucide-react";

export const data = {
  navMain: [
    {
      title: "about",
      items: [
        {
          title: "服務簡介",
          url: "/about",
        },
        {
          title: "最新消息",
          url: "#",
        },
        {
          title: "聯絡我們",
          url: "#",
        },
      ],
    },
  ],
};

export const commodity = {
  navMain: [
    {
      title: "女性商品",
      url: "#",
      icon: Footprints,
      isActive: true,
      items: [
        {
          title: "跟鞋",
          url: "#",
        },
        {
          title: "平底鞋",
          url: "#",
        },
        {
          title: "長靴",
          url: "#",
        },
      ],
    },
    {
      title: "男性商品",
      url: "#",
      icon: Footprints,
      isActive: true,
      items: [
        {
          title: "運動鞋",
          url: "#",
        },
        {
          title: "休閒鞋",
          url: "#",
        },
        {
          title: "涼拖鞋",
          url: "#",
        },
      ],
    },
    {
      title: "精選配件",
      url: "#",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "鞋墊",
          url: "#",
        },
        {
          title: "鞋材保養品",
          url: "#",
        },
        {
          title: "周邊",
          url: "#",
        },
      ],
    },
  ],
};
