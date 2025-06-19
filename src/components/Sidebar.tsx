
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  MapPin, 
  BarChart3, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Package, label: 'Inventory', id: 'inventory' },
  { icon: ShoppingCart, label: 'Orders', id: 'orders' },
  { icon: Users, label: 'Workers', id: 'workers' },
  { icon: MapPin, label: 'Layout', id: 'layout' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: Database, label: 'Master Data', id: 'master' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeItem = 'dashboard', 
  onItemClick = () => {} 
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "bg-slate-900 text-white transition-all duration-300 flex flex-col",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-lg font-semibold">WMS</h2>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800",
                    isActive && "bg-slate-800 text-white",
                    isCollapsed && "px-2"
                  )}
                  onClick={() => onItemClick(item.id)}
                >
                  <Icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
