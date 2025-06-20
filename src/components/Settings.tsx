
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Settings as SettingsIcon, Save, User, Bell, Shield, Database, Mail } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';

export const Settings: React.FC = () => {
  const [userSettings, setUserSettings] = useState({
    name: 'John Doe',
    email: 'john.doe@warehouse.com',
    role: 'Warehouse Manager',
    notifications: true,
    emailAlerts: true,
    lowStockAlerts: true,
    orderUpdates: false,
  });

  const [systemSettings, setSystemSettings] = useState({
    backupEnabled: true,
    autoArchive: true,
    maintenanceMode: false,
    apiAccess: true,
  });

  const { toast } = useToast();

  const handleSave = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `${section} settings have been updated successfully.`,
    });
  };

  const handleUserSettingChange = (key: string, value: any) => {
    setUserSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSystemSettingChange = (key: string, value: any) => {
    setSystemSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-800">Settings</h2>
        <SettingsIcon className="h-8 w-8 text-slate-600" />
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    value={userSettings.name}
                    onChange={(e) => handleUserSettingChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={userSettings.email}
                    onChange={(e) => handleUserSettingChange('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input 
                    id="role"
                    value={userSettings.role}
                    disabled
                    className="bg-slate-50"
                  />
                </div>
              </div>
              <Button onClick={() => handleSave('Profile')}>
                <Save className="h-4 w-4 mr-2" />
                Save Profile
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notifications">Push Notifications</Label>
                    <p className="text-sm text-slate-600">Receive real-time notifications in the app</p>
                  </div>
                  <Switch 
                    id="notifications"
                    checked={userSettings.notifications}
                    onCheckedChange={(checked) => handleUserSettingChange('notifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emailAlerts">Email Alerts</Label>
                    <p className="text-sm text-slate-600">Receive important alerts via email</p>
                  </div>
                  <Switch 
                    id="emailAlerts"
                    checked={userSettings.emailAlerts}
                    onCheckedChange={(checked) => handleUserSettingChange('emailAlerts', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="lowStockAlerts">Low Stock Alerts</Label>
                    <p className="text-sm text-slate-600">Get notified when inventory is running low</p>
                  </div>
                  <Switch 
                    id="lowStockAlerts"
                    checked={userSettings.lowStockAlerts}
                    onCheckedChange={(checked) => handleUserSettingChange('lowStockAlerts', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="orderUpdates">Order Updates</Label>
                    <p className="text-sm text-slate-600">Receive notifications for order status changes</p>
                  </div>
                  <Switch 
                    id="orderUpdates"
                    checked={userSettings.orderUpdates}
                    onCheckedChange={(checked) => handleUserSettingChange('orderUpdates', checked)}
                  />
                </div>
              </div>
              <Button onClick={() => handleSave('Notification')}>
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>
              <div className="pt-4 border-t">
                <Button onClick={() => handleSave('Security')}>
                  <Save className="h-4 w-4 mr-2" />
                  Update Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2" />
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="backupEnabled">Automatic Backup</Label>
                    <p className="text-sm text-slate-600">Enable daily automatic data backups</p>
                  </div>
                  <Switch 
                    id="backupEnabled"
                    checked={systemSettings.backupEnabled}
                    onCheckedChange={(checked) => handleSystemSettingChange('backupEnabled', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="autoArchive">Auto Archive</Label>
                    <p className="text-sm text-slate-600">Automatically archive old records</p>
                  </div>
                  <Switch 
                    id="autoArchive"
                    checked={systemSettings.autoArchive}
                    onCheckedChange={(checked) => handleSystemSettingChange('autoArchive', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                    <p className="text-sm text-slate-600">Enable maintenance mode for system updates</p>
                  </div>
                  <Switch 
                    id="maintenanceMode"
                    checked={systemSettings.maintenanceMode}
                    onCheckedChange={(checked) => handleSystemSettingChange('maintenanceMode', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="apiAccess">API Access</Label>
                    <p className="text-sm text-slate-600">Allow external API access to system data</p>
                  </div>
                  <Switch 
                    id="apiAccess"
                    checked={systemSettings.apiAccess}
                    onCheckedChange={(checked) => handleSystemSettingChange('apiAccess', checked)}
                  />
                </div>
              </div>
              <Button onClick={() => handleSave('System')}>
                <Save className="h-4 w-4 mr-2" />
                Save System Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
