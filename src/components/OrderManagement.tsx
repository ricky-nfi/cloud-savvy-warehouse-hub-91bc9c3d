
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Search, Plus, Filter, Package, Truck, CheckCircle, Clock } from 'lucide-react';

const orderData = [
  { id: 'ORD-001', customer: 'Tech Corp', items: 5, total: '$2,450', status: 'Processing', date: '2024-01-15' },
  { id: 'ORD-002', customer: 'Fashion Store', items: 12, total: '$890', status: 'Shipped', date: '2024-01-14' },
  { id: 'ORD-003', customer: 'Home Goods', items: 3, total: '$1,200', status: 'Delivered', date: '2024-01-13' },
  { id: 'ORD-004', customer: 'Sports Plus', items: 8, total: '$560', status: 'Pending', date: '2024-01-12' },
];

export const OrderManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handleNewOrder = () => {
    toast({
      title: "New Order",
      description: "New order creation dialog would open here.",
    });
  };

  const handleViewOrder = (orderId: string) => {
    toast({
      title: "View Order",
      description: `Order details for ${orderId} would be displayed here.`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing': return <Clock className="h-4 w-4 text-blue-500" />;
      case 'Shipped': return <Truck className="h-4 w-4 text-yellow-500" />;
      case 'Delivered': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Package className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Shipped': return 'bg-yellow-100 text-yellow-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-800">Order Management</h2>
        <Button onClick={handleNewOrder}>
          <Plus className="h-4 w-4 mr-2" />
          New Order
        </Button>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 text-slate-400 transform -translate-y-1/2" />
            <Input 
              className="pl-10" 
              placeholder="Search orders..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Order ID</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Customer</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Items</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Total</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((order) => (
                  <tr key={order.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4 font-medium">{order.id}</td>
                    <td className="py-4 px-4">{order.customer}</td>
                    <td className="py-4 px-4">{order.items} items</td>
                    <td className="py-4 px-4 font-medium">{order.total}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        {getStatusIcon(order.status)}
                        <Badge className={`ml-2 ${getStatusColor(order.status)}`}>
                          {order.status}
                        </Badge>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{order.date}</td>
                    <td className="py-4 px-4">
                      <Button size="sm" variant="outline" onClick={() => handleViewOrder(order.id)}>
                        View
                      </Button>
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
