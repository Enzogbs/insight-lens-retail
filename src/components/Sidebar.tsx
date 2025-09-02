import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  FileText, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Home,
  Users,
  Camera,
  TrendingUp,
  Brain
} from 'lucide-react';
import nortLogo from '@/assets/nort-logo.png';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: Home,
    description: 'Visão geral dos dados'
  },
  {
    id: 'analytics',
    label: 'Análises',
    icon: BarChart3,
    description: 'Métricas detalhadas'
  },
  {
    id: 'reports',
    label: 'Relatórios',
    icon: FileText,
    description: 'Relatórios e exports'
  },
  {
    id: 'cameras',
    label: 'Câmeras',
    icon: Camera,
    description: 'Gestão de dispositivos'
  },
  {
    id: 'ai-analyst',
    label: 'AI Analyst',
    icon: Brain,
    description: 'Análise com IA'
  },
  {
    id: 'insights',
    label: 'Insights',
    icon: TrendingUp,
    description: 'Insights avançados'
  },
  {
    id: 'users',
    label: 'Usuários',
    icon: Users,
    description: 'Gestão de usuários'
  },
  {
    id: 'settings',
    label: 'Configurações',
    icon: Settings,
    description: 'Configurações do sistema'
  }
];

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    window.location.href = '/';
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <img src={nortLogo} alt="NORT" className="h-8 w-auto" />
          {!isCollapsed && (
            <span className="text-xl font-bold text-sidebar-foreground">NORT</span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "w-full justify-start h-12 text-left transition-all duration-200",
                  isActive 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground border border-sidebar-ring/20" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  isCollapsed && "justify-center px-2"
                )}
              >
                <IconComponent className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
                {!isCollapsed && (
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-xs opacity-60">{item.description}</span>
                  </div>
                )}
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className={cn(
            "w-full justify-start h-12 text-sidebar-foreground hover:bg-destructive/10 hover:text-destructive",
            isCollapsed && "justify-center px-2"
          )}
        >
          <LogOut className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
          {!isCollapsed && <span>Sair</span>}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={cn(
        "hidden md:flex flex-col bg-sidebar-background border-r border-sidebar-border transition-all duration-300",
        isCollapsed ? "w-20" : "w-72"
      )}>
        {/* Collapse toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-4 -right-3 z-10 h-6 w-6 rounded-full bg-sidebar-background border border-sidebar-border shadow-sm"
        >
          {isCollapsed ? <Menu className="h-3 w-3" /> : <X className="h-3 w-3" />}
        </Button>

        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-50 bg-sidebar-background border border-sidebar-border shadow-sm"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden">
            <div className="fixed inset-y-0 left-0 w-72 bg-sidebar-background border-r border-sidebar-border shadow-xl">
              <SidebarContent />
            </div>
          </div>
        )}
      </div>
    </>
  );
};