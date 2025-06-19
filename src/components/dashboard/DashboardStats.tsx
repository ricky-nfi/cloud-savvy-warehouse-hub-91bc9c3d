
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { statsData } from './dashboardData';

export const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trending === 'up' ? TrendingUp : TrendingDown;
        
        return (
          <Card key={index} className="transition-all duration-200 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendIcon className={cn(
                      "h-4 w-4 mr-1",
                      stat.trending === 'up' ? "text-green-500" : "text-red-500"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      stat.trending === 'up' ? "text-green-500" : "text-red-500"
                    )}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-full">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
