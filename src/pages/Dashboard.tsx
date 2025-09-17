import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { DashboardContent } from '@/components/DashboardContent';
import { ReportsContent } from '@/components/ReportsContent';
import { CamerasContent } from '@/components/CamerasContent';
import { SettingsContent } from '@/components/SettingsContent';
import { AIAnalystContent } from '@/components/AIAnalystContent';
import { StoreComparisonContent } from '@/components/StoreComparisonContent';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardContent />;
      case 'store-comparison':
        return <StoreComparisonContent />;
      case 'reports':
        return <ReportsContent />;
      case 'cameras':
        return <CamerasContent />;
      case 'ai-analyst':
        return <AIAnalystContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="flex-1 overflow-auto">
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}