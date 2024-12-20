"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { api } from '@/lib/api';

interface AuthContextType {
  isAdminAuthenticated: boolean;
  adminLogin: (token: string) => void;
  adminLogout: () => Promise<void>;
  verifyAdminToken: () => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await api.auth.me();
        setIsAdminAuthenticated(true);
      } catch (error) {
        console.error('Error verifying token:', error);
        setIsAdminAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const verifyAdminToken = async () => {
    try {
      await api.auth.me();
      return true;
    } catch (error) {
      console.error('Error verifying token:', error);
      return false;
    }
  };

  const adminLogin = (token: string) => {
    setIsAdminAuthenticated(true);
  };

  const adminLogout = async () => {
    try {
      await api.auth.logout();
      setIsAdminAuthenticated(false);
      toast.success('管理者已登出');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('登出時發生錯誤');
      // Even if the API call fails, we still want to log out locally
      setIsAdminAuthenticated(false);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        isAdminAuthenticated,
        adminLogin,
        adminLogout,
        verifyAdminToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
