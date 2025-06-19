
import React from 'react';
import { DashboardStats } from './dashboard/DashboardStats';
import { InventoryFlowChart } from './dashboard/InventoryFlowChart';
import { WeeklyOrdersChart } from './dashboard/WeeklyOrdersChart';
import { CategoryDistributionChart } from './dashboard/CategoryDistributionChart';
import { RecentActivityList } from './dashboard/RecentActivityList';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-800">Dashboard</h2>
        <div className="text-sm text-slate-600">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Stats Cards */}
      <DashboardStats />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InventoryFlowChart />
        <WeeklyOrdersChart />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CategoryDistributionChart />
        <RecentActivityList />
      </div>
    </div>
  );
};
