
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { BarChart3, TrendingUp, Download, Calendar, Filter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const performanceData = [
  { month: 'Jan', orders: 65, revenue: 12400, efficiency: 92 },
  { month: 'Feb', orders: 78, revenue: 15600, efficiency: 89 },
  { month: 'Mar', orders: 82, revenue: 18200, efficiency: 94 },
  { month: 'Apr', orders: 95, revenue: 21500, efficiency: 96 },
  { month: 'May', orders: 88, revenue: 19800, efficiency: 91 },
  { month: 'Jun', orders: 102, revenue: 24300, efficiency: 98 },
];

const kpiData = [
  { title: 'Order Fulfillment Rate', value: '98.5%', trend: '+2.3%', positive: true },
  { title: 'Average Processing Time', value: '2.4h', trend: '-15min', positive: true },
  { title: 'Inventory Accuracy', value: '99.2%', trend: '+0.8%', positive: true },
  { title: 'Cost per Order', value: '$8.45', trend: '-$0.23', positive: true },
];

export const Analytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: "Export Report",
      description: "Analytics report would be exported as PDF/Excel.",
    });
  };

  const handleFilterChange = () => {
    toast({
      title: "Filter Applied",
      description: "Analytics data filtered successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-800">Analytics</h2>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleFilterChange}>
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">{kpi.title}</span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold mb-1">{kpi.value}</div>
              <Badge className={kpi.positive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                {kpi.trend}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Volume Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Month</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Orders</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Revenue</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Efficiency</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((data, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4 font-medium">{data.month}</td>
                    <td className="py-4 px-4">{data.orders}</td>
                    <td className="py-4 px-4">${data.revenue.toLocaleString()}</td>
                    <td className="py-4 px-4">
                      <Badge className="bg-green-100 text-green-800">
                        {data.efficiency}%
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
