
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Database, Plus, Edit, Trash2, Search, Upload, Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = [
  { id: 1, name: 'Electronics', code: 'ELEC', items: 156, status: 'Active' },
  { id: 2, name: 'Clothing', code: 'CLTH', items: 89, status: 'Active' },
  { id: 3, name: 'Home & Garden', code: 'HOME', items: 234, status: 'Active' },
  { id: 4, name: 'Sports', code: 'SPRT', items: 67, status: 'Inactive' },
];

const suppliers = [
  { id: 1, name: 'Tech Solutions Inc', code: 'TSI001', contact: 'john@techsol.com', status: 'Active' },
  { id: 2, name: 'Fashion Wholesale', code: 'FW002', contact: 'orders@fashionwh.com', status: 'Active' },
  { id: 3, name: 'Home Supplies Co', code: 'HSC003', contact: 'supply@homeco.com', status: 'Active' },
  { id: 4, name: 'Sports Direct', code: 'SD004', contact: 'trade@sportsdirect.com', status: 'Pending' },
];

const locations = [
  { id: 1, name: 'Warehouse A', code: 'WHA', address: '123 Industrial St', capacity: '85%' },
  { id: 2, name: 'Warehouse B', code: 'WHB', address: '456 Commerce Ave', capacity: '62%' },
  { id: 3, name: 'Distribution Center', code: 'DC1', address: '789 Logistics Blvd', capacity: '91%' },
];

export const MasterData: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handleAdd = (type: string) => {
    toast({
      title: `Add ${type}`,
      description: `New ${type.toLowerCase()} creation dialog would open here.`,
    });
  };

  const handleEdit = (type: string, id: number) => {
    toast({
      title: `Edit ${type}`,
      description: `Editing ${type.toLowerCase()} #${id}.`,
    });
  };

  const handleDelete = (type: string, id: number) => {
    toast({
      title: `Delete ${type}`,
      description: `${type} #${id} would be deleted after confirmation.`,
    });
  };

  const handleImport = () => {
    toast({
      title: "Import Data",
      description: "File upload dialog would open for bulk import.",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export Data",
      description: "Master data would be exported as CSV/Excel.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-800">Master Data</h2>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleImport}>
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button variant="outline" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="categories" className="space-y-4">
        <TabsList>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
        </TabsList>

        <TabsContent value="categories">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Product Categories</CardTitle>
                <Button onClick={() => handleAdd('Category')}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Category
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 text-slate-400 transform -translate-y-1/2" />
                  <Input 
                    className="pl-10" 
                    placeholder="Search categories..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Code</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Items</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <tr key={category.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-4 px-4 font-medium">{category.name}</td>
                        <td className="py-4 px-4">{category.code}</td>
                        <td className="py-4 px-4">{category.items}</td>
                        <td className="py-4 px-4">
                          <Badge className={getStatusColor(category.status)}>
                            {category.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" onClick={() => handleEdit('Category', category.id)}>
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDelete('Category', category.id)}>
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suppliers">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Suppliers</CardTitle>
                <Button onClick={() => handleAdd('Supplier')}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Supplier
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 text-slate-400 transform -translate-y-1/2" />
                  <Input 
                    className="pl-10" 
                    placeholder="Search suppliers..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Code</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Contact</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suppliers.map((supplier) => (
                      <tr key={supplier.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-4 px-4 font-medium">{supplier.name}</td>
                        <td className="py-4 px-4">{supplier.code}</td>
                        <td className="py-4 px-4">{supplier.contact}</td>
                        <td className="py-4 px-4">
                          <Badge className={getStatusColor(supplier.status)}>
                            {supplier.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" onClick={() => handleEdit('Supplier', supplier.id)}>
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDelete('Supplier', supplier.id)}>
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="locations">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Storage Locations</CardTitle>
                <Button onClick={() => handleAdd('Location')}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Location
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 text-slate-400 transform -translate-y-1/2" />
                  <Input 
                    className="pl-10" 
                    placeholder="Search locations..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Code</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Address</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Capacity</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {locations.map((location) => (
                      <tr key={location.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-4 px-4 font-medium">{location.name}</td>
                        <td className="py-4 px-4">{location.code}</td>
                        <td className="py-4 px-4">{location.address}</td>
                        <td className="py-4 px-4">
                          <Badge className="bg-blue-100 text-blue-800">
                            {location.capacity}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" onClick={() => handleEdit('Location', location.id)}>
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDelete('Location', location.id)}>
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
