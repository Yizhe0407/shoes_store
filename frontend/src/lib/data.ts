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
          url: "/news",
        },
        {
          title: "聯絡我們",
          url: "/contact",
        },
      ],
    },
  ],
};

export const commodity = {
  navMain: [
    {
      title: "女性商品",
      url: "/products/women",
      icon: Footprints,
      isActive: true,
      items: [
        {
          title: "跟鞋",
          url: "/products/women/heels",
        },
        {
          title: "平底鞋",
          url: "/products/women/flats",
        },
        {
          title: "長靴",
          url: "/products/women/boots",
        },
      ],
    },
    {
      title: "男性商品",
      url: "/products/men",
      icon: Footprints,
      isActive: true,
      items: [
        {
          title: "運動鞋",
          url: "/products/men/sports",
        },
        {
          title: "休閒鞋",
          url: "/products/men/casual",
        },
        {
          title: "涼拖鞋",
          url: "/products/men/sandals",
        },
      ],
    },
    {
      title: "精選配件",
      url: "/products/accessories",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "鞋墊",
          url: "/products/accessories/insoles",
        },
        {
          title: "鞋材保養品",
          url: "/products/accessories/care",
        },
        {
          title: "周邊",
          url: "/products/accessories/others",
        },
      ],
    },
  ],
};
