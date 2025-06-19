
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/components/Dashboard';
import { InventoryManagement } from '@/components/InventoryManagement';
import { OrderManagement } from '@/components/OrderManagement';
import { WorkerManagement } from '@/components/WorkerManagement';

const Index = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'inventory':
        return <InventoryManagement />;
      case 'orders':
        return <OrderManagement />;
      case 'workers':
        return <WorkerManagement />;
      case 'layout':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-slate-800">Warehouse Layout</h2>
            <p className="text-slate-600 mt-4">Layout management coming soon...</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-slate-800">Analytics</h2>
            <p className="text-slate-600 mt-4">Advanced analytics coming soon...</p>
          </div>
        );
      case 'master':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-slate-800">Master Data</h2>
            <p className="text-slate-600 mt-4">Master data management coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
            <p className="text-slate-600 mt-4">System settings coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeView={activeView} onViewChange={setActiveView}>
      {renderContent()}
    </Layout>
  );
};

export default Index;
