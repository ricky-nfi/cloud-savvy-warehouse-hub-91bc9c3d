
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { inventoryData } from './dashboardData';

export const InventoryFlowChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Flow (6 Months)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={inventoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="inflow" fill="#3b82f6" name="Inflow" />
            <Bar dataKey="outflow" fill="#ef4444" name="Outflow" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
