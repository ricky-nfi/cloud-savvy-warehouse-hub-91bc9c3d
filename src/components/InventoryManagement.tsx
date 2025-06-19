
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Plus, 
  Filter, 
  Download,
  Package,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

const inventoryData = [
  { id: 'SKU-001', name: 'Wireless Headphones', category: 'Electronics', quantity: 156, minStock: 50, location: 'A1-B2', status: 'In Stock', value: '$2,340' },
  { id: 'SKU-002', name: 'Cotton T-Shirt', category: 'Clothing', quantity: 23, minStock: 30, location: 'B2-C1', status: 'Low Stock', value: '$460' },
  { id: 'SKU-003', name: 'Protein Bars', category: 'Food', quantity: 0, minStock: 20, location: 'C1-D3', status: 'Out of Stock', value: '$0' },
  { id: 'SKU-004', name: 'Office Chair', category: 'Furniture', quantity: 78, minStock: 25, location: 'D3-E1', status: 'In Stock', value: '$7,800' },
  { id: 'SKU-005', name: 'Smartphone Case', category: 'Electronics', quantity: 12, minStock: 15, location: 'A2-B1', status: 'Low Stock', value: '$240' },
];

export const InventoryManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Stock':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Low Stock':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'Out of Stock':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Package className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredData = inventoryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || item.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-800">Inventory Management</h2>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 text-slate-400 transform -translate-y-1/2" />
              <Input 
                className="pl-10" 
                placeholder="Search by item name or SKU..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === 'all' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('all')}
              >
                All
              </Button>
              <Button
                variant={filterStatus === 'In Stock' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('In Stock')}
              >
                In Stock
              </Button>
              <Button
                variant={filterStatus === 'Low Stock' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('Low Stock')}
              >
                Low Stock
              </Button>
              <Button
                variant={filterStatus === 'Out of Stock' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('Out of Stock')}
              >
                Out of Stock
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory Items ({filteredData.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Item</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Quantity</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Location</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Value</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-slate-900">{item.name}</p>
                        <p className="text-sm text-slate-600">{item.id}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="secondary">{item.category}</Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <span className="font-medium">{item.quantity}</span>
                        <span className="text-sm text-slate-500 ml-2">/ {item.minStock} min</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{item.location}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        {getStatusIcon(item.status)}
                        <Badge className={`ml-2 ${getStatusColor(item.status)}`}>
                          {item.status}
                        </Badge>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium text-slate-900">{item.value}</td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm" variant="outline">Adjust</Button>
                      </div>
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
