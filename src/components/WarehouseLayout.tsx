
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Plus, Edit, Trash2, Grid, Move } from 'lucide-react';

const warehouseZones = [
  { id: 'A1', name: 'Electronics Storage', type: 'Storage', capacity: '85%', status: 'Active' },
  { id: 'B2', name: 'Receiving Dock', type: 'Receiving', capacity: '60%', status: 'Active' },
  { id: 'C3', name: 'Shipping Area', type: 'Shipping', capacity: '40%', status: 'Active' },
  { id: 'D4', name: 'Quality Control', type: 'Inspection', capacity: '30%', status: 'Maintenance' },
];

export const WarehouseLayout: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handleAddZone = () => {
    toast({
      title: "Add Zone",
      description: "Zone creation dialog would open here.",
    });
  };

  const handleEditZone = (zoneId: string) => {
    toast({
      title: "Edit Zone",
      description: `Editing zone ${zoneId} properties.`,
    });
  };

  const handleDeleteZone = (zoneId: string) => {
    toast({
      title: "Delete Zone",
      description: `Zone ${zoneId} would be deleted after confirmation.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Maintenance': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-800">Warehouse Layout</h2>
        <Button onClick={handleAddZone}>
          <Plus className="h-4 w-4 mr-2" />
          Add Zone
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Layout Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Grid className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">Interactive warehouse map would be displayed here</p>
                <Button variant="outline" className="mt-4">
                  <Move className="h-4 w-4 mr-2" />
                  Design Layout
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Zone Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input 
                placeholder="Search zones..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="space-y-2">
                {warehouseZones.map((zone) => (
                  <div key={zone.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-slate-500" />
                        <span className="font-medium">{zone.id}</span>
                      </div>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="ghost" onClick={() => handleEditZone(zone.id)}>
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => handleDeleteZone(zone.id)}>
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{zone.name}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{zone.capacity}</span>
                      <Badge className={getStatusColor(zone.status)}>
                        {zone.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
