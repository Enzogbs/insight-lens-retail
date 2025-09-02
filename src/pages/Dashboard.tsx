import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { DashboardContent } from '@/components/DashboardContent';
import { ReportsContent } from '@/components/ReportsContent';
import { CamerasContent } from '@/components/CamerasContent';
import { SettingsContent } from '@/components/SettingsContent';
import { AIAnalystContent } from '@/components/AIAnalystContent';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardContent />;
      case 'analytics':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Análises Avançadas</h1>
            <p className="text-muted-foreground">Métricas detalhadas e insights avançados do comportamento dos clientes.</p>
            <div className="h-96 bg-gradient-card border border-border rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Página de análises em desenvolvimento</span>
            </div>
          </div>
        );
      case 'reports':
        return <ReportsContent />;
      case 'cameras':
        return <CamerasContent />;
      case 'ai-analyst':
        return <AIAnalystContent />;
      case 'insights':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Insights Avançados</h1>
            <p className="text-muted-foreground">Insights gerados por IA e recomendações estratégicas.</p>
            <div className="h-96 bg-gradient-card border border-border rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Página de insights em desenvolvimento</span>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Gestão de Usuários</h1>
            <p className="text-muted-foreground">Controle de acesso e permissões dos usuários do sistema.</p>
            <div className="h-96 bg-gradient-card border border-border rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Página de usuários em desenvolvimento</span>
            </div>
          </div>
        );
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