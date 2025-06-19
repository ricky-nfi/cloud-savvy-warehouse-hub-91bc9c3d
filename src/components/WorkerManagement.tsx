
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, User, Clock, CheckCircle } from 'lucide-react';

const workerData = [
  { id: 'W001', name: 'John Smith', role: 'Warehouse Manager', shift: 'Day', status: 'Active', tasksCompleted: 12, hoursToday: 6 },
  { id: 'W002', name: 'Sarah Johnson', role: 'Picker', shift: 'Day', status: 'Active', tasksCompleted: 25, hoursToday: 5 },
  { id: 'W003', name: 'Mike Davis', role: 'Forklift Operator', shift: 'Night', status: 'Off Duty', tasksCompleted: 18, hoursToday: 8 },
  { id: 'W004', name: 'Lisa Wilson', role: 'Quality Control', shift: 'Day', status: 'Active', tasksCompleted: 8, hoursToday: 4 },
];

export const WorkerManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-800">Worker Management</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Worker
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <User className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold">12</p>
                <p className="text-slate-600">Total Workers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold">9</p>
                <p className="text-slate-600">Active Now</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold">23</p>
                <p className="text-slate-600">Hours Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Worker Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Worker</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Role</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Shift</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Tasks Today</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Hours</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {workerData.map((worker) => (
                  <tr key={worker.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium">{worker.name}</p>
                        <p className="text-sm text-slate-600">{worker.id}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">{worker.role}</td>
                    <td className="py-4 px-4">
                      <Badge variant="secondary">{worker.shift}</Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={worker.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {worker.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">{worker.tasksCompleted}</td>
                    <td className="py-4 px-4">{worker.hoursToday}h</td>
                    <td className="py-4 px-4">
                      <Button size="sm" variant="outline">Manage</Button>
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
