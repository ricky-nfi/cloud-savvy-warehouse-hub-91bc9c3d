
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { recentActivities } from './dashboardData';

export const RecentActivityList: React.FC = () => {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center">
                <div className={cn(
                  "w-2 h-2 rounded-full mr-3",
                  activity.type === 'inflow' && "bg-green-500",
                  activity.type === 'outflow' && "bg-red-500",
                  activity.type === 'order' && "bg-blue-500",
                  activity.type === 'alert' && "bg-yellow-500",
                  activity.type === 'worker' && "bg-purple-500"
                )} />
                <div>
                  <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                  <p className="text-xs text-slate-600">{activity.item}</p>
                </div>
              </div>
              <span className="text-xs text-slate-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
