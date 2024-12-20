// 自定義觸發器樣式
"use client"
import React from 'react'
import { Menu } from 'lucide-react';
import { useSidebar } from "@/components/ui/sidebar"

export default function CustomTrigger() {
    const { toggleSidebar } = useSidebar()

    return <Menu onClick={toggleSidebar} size={32} className='m-4' />
}
