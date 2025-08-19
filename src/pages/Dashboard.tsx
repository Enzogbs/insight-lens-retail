import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { DashboardContent } from '@/components/DashboardContent';

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
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Relatórios</h1>
            <p className="text-muted-foreground">Geração e download de relatórios personalizados.</p>
            <div className="h-96 bg-gradient-card border border-border rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Página de relatórios em desenvolvimento</span>
            </div>
          </div>
        );
      case 'cameras':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Gestão de Câmeras</h1>
            <p className="text-muted-foreground">Configuração e monitoramento de dispositivos conectados.</p>
            <div className="h-96 bg-gradient-card border border-border rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Página de câmeras em desenvolvimento</span>
            </div>
          </div>
        );
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
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
            <p className="text-muted-foreground">Configurações gerais do sistema e preferências.</p>
            <div className="h-96 bg-gradient-card border border-border rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Página de configurações em desenvolvimento</span>
            </div>
          </div>
        );
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