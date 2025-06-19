import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Package, 
  ShoppingCart, 
  Users, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  DollarSign
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { cn } from '@/lib/utils';

const statsData = [
  { icon: Package, label: 'Total Items', value: '2,847', change: '+12%', trending: 'up' },
  { icon: ShoppingCart, label: 'Active Orders', value: '156', change: '+8%', trending: 'up' },
  { icon: Users, label: 'Active Workers', value: '24', change: '-2%', trending: 'down' },
  { icon: AlertTriangle, label: 'Low Stock Alerts', value: '18', change: '+5%', trending: 'up' },
];

const inventoryData = [
  { month: 'Jan', inflow: 400, outflow: 240 },
  { month: 'Feb', inflow: 300, outflow: 139 },
  { month: 'Mar', inflow: 200, outflow: 180 },
  { month: 'Apr', inflow: 278, outflow: 190 },
  { month: 'May', inflow: 189, outflow: 250 },
  { month: 'Jun', inflow: 239, outflow: 180 },
];

const orderData = [
  { day: 'Mon', orders: 45 },
  { day: 'Tue', orders: 52 },
  { day: 'Wed', orders: 38 },
  { day: 'Thu', orders: 61 },
  { day: 'Fri', orders: 55 },
  { day: 'Sat', orders: 42 },
  { day: 'Sun', orders: 28 },
];

const categoryData = [
  { name: 'Electronics', value: 400, color: '#3b82f6' },
  { name: 'Clothing', value: 300, color: '#10b981' },
  { name: 'Food', value: 200, color: '#f59e0b' },
  { name: 'Other', value: 100, color: '#ef4444' },
];

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

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Flow Chart */}
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

        {/* Weekly Orders Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Order Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={orderData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="#10b981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-slate-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: 'Inventory Update', item: 'SKU-001 Electronics', time: '2 min ago', type: 'inflow' },
                { action: 'Order Processed', item: 'Order #1234', time: '5 min ago', type: 'order' },
                { action: 'Low Stock Alert', item: 'SKU-456 Clothing', time: '10 min ago', type: 'alert' },
                { action: 'Worker Check-in', item: 'John Doe', time: '15 min ago', type: 'worker' },
                { action: 'Inventory Update', item: 'SKU-789 Food', time: '20 min ago', type: 'outflow' },
              ].map((activity, index) => (
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
      </div>
    </div>
  );
};
