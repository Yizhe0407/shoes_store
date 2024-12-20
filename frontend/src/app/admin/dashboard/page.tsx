'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { api } from '@/lib/api'

export default function AdminDashboard() {
  const router = useRouter()
  const { isAdminAuthenticated } = useAuth()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.auth.me();
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/admin/login');
      }
    };

    checkAuth();
  }, [router]);

  if (!isAdminAuthenticated) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">管理者儀表板</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">訂單管理</h2>
          <p className="text-gray-600">管理所有訂單狀態</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">商品管理</h2>
          <p className="text-gray-600">新增、編輯或刪除商品</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">用戶管理</h2>
          <p className="text-gray-600">管理用戶資料和權限</p>
        </div>
      </div>
    </div>
  )
}
