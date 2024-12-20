import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 檢查是否是管理後台路徑
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // 如果是登入頁面，不需要驗證
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next()
    }

    // 從 cookie 獲取 token
    const token = request.cookies.get('adminToken')?.value

    // 如果沒有 token，重定向到登入頁面
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

// 配置需要進行身份驗證的路徑
export const config = {
  matcher: '/admin/:path*'
}
