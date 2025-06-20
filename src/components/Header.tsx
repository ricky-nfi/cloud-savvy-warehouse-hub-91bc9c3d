
import React, { useState } from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have 3 new notifications: Low stock alert for Widget A, New order received, Worker shift update.",
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      toast({
        title: "Search",
        description: `Searching for: ${searchTerm}`,
      });
    }
  };

  const handleProfileAction = (action: string) => {
    toast({
      title: "Profile Action",
      description: `${action} functionality would be implemented here.`,
    });
  };

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-slate-800">Warehouse Management System</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 text-slate-400 transform -translate-y-1/2" />
            <Input 
              className="pl-10 w-64" 
              placeholder="Search inventory, orders..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative" 
            onClick={handleNotificationClick}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleProfileAction('Profile')}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleProfileAction('Settings')}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleProfileAction('Help')}>
                Help
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleProfileAction('Logout')}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
