
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/components/Dashboard';
import { InventoryManagement } from '@/components/InventoryManagement';
import { OrderManagement } from '@/components/OrderManagement';
import { WorkerManagement } from '@/components/WorkerManagement';
import { WarehouseLayout } from '@/components/WarehouseLayout';
import { Analytics } from '@/components/Analytics';
import { MasterData } from '@/components/MasterData';
import { Settings } from '@/components/Settings';

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
        return <WarehouseLayout />;
      case 'analytics':
        return <Analytics />;
      case 'master':
        return <MasterData />;
      case 'settings':
        return <Settings />;
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
