
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  children?: React.ReactNode;
  activeView?: string;
  onViewChange?: (view: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeView = 'dashboard', 
  onViewChange = () => {} 
}) => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar activeItem={activeView} onItemClick={onViewChange} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
