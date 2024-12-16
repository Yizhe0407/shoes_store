// 側邊欄
"use client";

import React from 'react'
import { useSidebar } from "@/components/ui/sidebar"
import {
  Sidebar,
  SidebarMenu,
  SidebarGroup,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Home, Facebook, Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link";
import { NavMain } from "@/components/nav-main";
import { data, commodity } from "@/lib/data"; // 匯入資料

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setOpenMobile } = useSidebar()

  const closeSidebar = () => { // 關閉側邊欄
    setOpenMobile(false)
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild onClick={() => closeSidebar()}>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Home className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">正豐皮號</span>
                  <span className="truncate text-xs">我們相信好的產品來自於你的肯定</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={commodity.navMain} />

        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton onClick={() => closeSidebar()}>
                      <Link href={item.url} className='w-full'>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="flex flex-row justify-center space-x-4">
        <Link href="https://www.facebook.com/profile.php?id=100080111226997" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </Link>
        <Link href="/" rel="noopener noreferrer">
          <Instagram />
        </Link>
        <Link href="mailto:forevergood61@gmail.com" rel="noopener noreferrer">
          <Mail />
        </Link>
        <Link href="tel:0423221545" rel="noopener noreferrer">
          <Phone />
        </Link>


      </SidebarFooter>


    </Sidebar>

  );
}
