"use client";

import React from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
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
import { Home, Facebook, Instagram, Mail, Phone, Settings, LogOut, LogIn } from "lucide-react"
import { NavMain } from "@/components/nav-main";
import { data, commodity } from "@/lib/data";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100080111226997",
    isExternal: true,
  },
  {
    icon: Instagram,
    href: "/",
    isExternal: true,
  },
  {
    icon: Mail,
    href: "mailto:forevergood61@gmail.com",
    isExternal: true,
  },
  {
    icon: Phone,
    href: "tel:0423221545",
    isExternal: true,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setOpenMobile } = useSidebar()
  const { isAdminAuthenticated, adminLogout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    adminLogout()
    router.push('/')
    closeSidebar()
  }

  const closeSidebar = () => {
    setOpenMobile(false)
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild onClick={closeSidebar}>
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
                    <SidebarMenuButton onClick={closeSidebar}>
                      <Link href={item.url} className="w-full">
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {isAdminAuthenticated ? (
                <>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={closeSidebar}>
                      <Link href="/admin/dashboard" className="w-full flex items-center gap-2">
                        <Settings className="size-4" />
                        <span>管理者儀表板</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={handleLogout}>
                      <div className="w-full flex items-center gap-2">
                        <LogOut className="size-4" />
                        <span>登出</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </>
              ) : (
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={closeSidebar}>
                    <Link href="/admin/login" className="w-full flex items-center gap-2">
                      <LogIn className="size-4" />
                      <span>管理者登入</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="flex flex-row justify-center space-x-4">
        {socialLinks.map(({ icon: Icon, href, isExternal }) => (
          <Link
            key={href}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            <Icon />
          </Link>
        ))}
      </SidebarFooter>
    </Sidebar>
  );
}
