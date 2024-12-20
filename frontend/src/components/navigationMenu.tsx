"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import {
  NavigationMenu as RadixNavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const aboutItems = [
  {
    title: "公司簡介",
    href: "/about",
    description: "了解更多關於我們的故事",
  },
  {
    title: "聯絡我們",
    href: "/contact",
    description: "與我們聯繫",
  },
  {
    title: "門市資訊",
    href: "/location",
    description: "查看我們的門市位置",
  },
];

const productItems = [
  {
    title: "女性商品",
    href: "/products/women",
    description: "跟鞋、平底鞋、長靴等女性商品",
  },
  {
    title: "男性商品",
    href: "/products/men",
    description: "運動鞋、休閒鞋、涼拖鞋等男性商品",
  },
  {
    title: "精選配件",
    href: "/products/accessories",
    description: "鞋墊、鞋材保養品、周邊商品",
  },
];

export function NavigationMenu() {
  const { isAdminAuthenticated, adminLogout } = useAuth();
  const router = useRouter();

  const handleAdminLogout = () => {
    adminLogout();
    router.push('/');
  };

  return (
    <div className="flex w-full justify-between items-center">
      <RadixNavigationMenu>
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger>關於我們</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        正豐皮號
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        專業皮革供應商
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {aboutItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>產品介紹</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {productItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </RadixNavigationMenu>

      <div className="flex gap-4">
        {isAdminAuthenticated ? (
          <>
            <Link href="/admin/dashboard" className={navigationMenuTriggerStyle()}>
              管理者儀表板
            </Link>
            <button
              onClick={handleAdminLogout}
              className={navigationMenuTriggerStyle()}
            >
              登出
            </button>
          </>
        ) : (
          <Link href="/admin/login" className={navigationMenuTriggerStyle()}>
            管理者登入
          </Link>
        )}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    className?: string;
    title: string;
    children: React.ReactNode;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
