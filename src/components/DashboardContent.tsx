import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  Users, 
  Clock, 
  TrendingUp, 
  Activity, 
  CalendarIcon, 
  Filter,
  BarChart3,
  PieChart,
  TrendingDown,
  Eye,
  Timer,
  Zap,
  Target,
  ArrowRight,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface KPICardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
}

const KPICard = ({ title, value, change, changeType = 'neutral', icon }: KPICardProps) => {
  const changeColor = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-muted-foreground'
  }[changeType];

  return (
    <Card className="bg-gradient-card border-border hover:border-primary/20 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {change && (
              <div className="flex items-center mt-1">
                {changeType === 'positive' && <ArrowUp className="h-3 w-3 text-green-600 mr-1" />}
                {changeType === 'negative' && <ArrowDown className="h-3 w-3 text-red-600 mr-1" />}
                <p className={`text-sm ${changeColor}`}>{change}</p>
              </div>
            )}
          </div>
          <div className="text-primary text-2xl">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface FilterBarProps {
  dateRange: { from: Date | undefined; to: Date | undefined };
  setDateRange: (range: { from: Date | undefined; to: Date | undefined }) => void;
  gender: string;
  setGender: (gender: string) => void;
  store: string;
  setStore: (store: string) => void;
}

const FilterBar = ({ dateRange, setDateRange, gender, setGender, store, setStore }: FilterBarProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const datePresets = [
    { label: 'Hoje', value: 'today' },
    { label: 'Esta Semana', value: 'week' },
    { label: 'Este Mês', value: 'month' },
  ];

  const handlePresetClick = (preset: string) => {
    const today = new Date();
    switch (preset) {
      case 'today':
        setDateRange({ from: today, to: today });
        break;
      case 'week':
        const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
        const weekEnd = new Date(today.setDate(today.getDate() - today.getDay() + 6));
        setDateRange({ from: weekStart, to: weekEnd });
        break;
      case 'month':
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        setDateRange({ from: monthStart, to: monthEnd });
        break;
    }
    setIsCalendarOpen(false);
  };

  return (
    <Card className="bg-gradient-card border-border mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">Filtros Globais</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Date Range Filter */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground">Período</label>
              <div className="flex gap-2">
                {datePresets.map((preset) => (
                  <Button
                    key={preset.value}
                    variant="outline"
                    size="sm"
                    onClick={() => handlePresetClick(preset.value)}
                    className="text-xs"
                  >
                    {preset.label}
                  </Button>
                ))}
                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className={cn("text-xs", !dateRange.from && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-3 w-3" />
                      {dateRange.from 
                        ? `${format(dateRange.from, "dd/MM")} - ${dateRange.to ? format(dateRange.to, "dd/MM") : "..."}`
                        : "Personalizado"
                      }
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
                      selected={dateRange}
                      onSelect={(range) => setDateRange(range as { from: Date | undefined; to: Date | undefined } || { from: undefined, to: undefined })}
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Gender Filter */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground">Gênero</label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="male">Masculino</SelectItem>
                  <SelectItem value="female">Feminino</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Store Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground">Loja</label>
              <Select value={store} onValueChange={setStore}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as Lojas</SelectItem>
                  <SelectItem value="store1">Loja Centro - SP</SelectItem>
                  <SelectItem value="store2">Loja Shopping Vila Madalena</SelectItem>
                  <SelectItem value="store3">Loja Paulista</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MockChart = ({ title, description, icon: Icon, height = "h-64" }: {
  title: string;
  description: string;
  icon: any;
  height?: string;
}) => (
  <div className={`${height} bg-secondary/20 rounded-lg flex items-center justify-center`}>
    <div className="text-center">
      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <p className="text-muted-foreground font-medium">{title}</p>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  </div>
);


export const DashboardContent = () => {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(),
    to: new Date()
  });
  const [gender, setGender] = useState('all');
  const [store, setStore] = useState('all');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Visão completa do comportamento dos clientes e performance das lojas
        </p>
      </div>

      {/* Global Filters */}
      <FilterBar 
        dateRange={dateRange}
        setDateRange={setDateRange}
        gender={gender}
        setGender={setGender}
        store={store}
        setStore={setStore}
      />

      {/* Tabbed Interface */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
          <TabsTrigger value="zones" className="text-sm">Zone Analysis</TabsTrigger>
          <TabsTrigger value="behavioral" className="text-sm">Behavioral Insights</TabsTrigger>
        </TabsList>

        {/* Tab 1: Overview */}
        <TabsContent value="overview" className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KPICard
              title="Current Store Occupancy"
              value="142"
              change="+12.5%"
              changeType="positive"
              icon={<Users />}
            />
            <KPICard
              title="Total Visitors"
              value="2,847"
              change="+8.3%"
              changeType="positive"
              icon={<Eye />}
            />
            <KPICard
              title="Peak Hour"
              value="14:30"
              change="15min earlier"
              changeType="neutral"
              icon={<Clock />}
            />
          </div>

          {/* Main Chart */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Activity className="h-5 w-5 text-primary" />
                Store Traffic Rhythm
              </CardTitle>
              <CardDescription>
                Ocupação total da loja ao longo do período selecionado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MockChart 
                title="Gráfico de Linha - Ritmo de Tráfego"
                description="Mostra a ocupação ao longo do tempo"
                icon={Activity}
                height="h-80"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 2: Zone Analysis */}
        <TabsContent value="zones" className="space-y-6">
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Zone Occupancy Comparison
                </CardTitle>
                <CardDescription>
                  Comparação de ocupação entre diferentes zonas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MockChart 
                  title="Gráfico Multi-Linha"
                  description="Ocupação por zona ao longo do tempo"
                  icon={BarChart3}
                />
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Timer className="h-5 w-5 text-primary" />
                  Average Dwell Time by Zone
                </CardTitle>
                <CardDescription>
                  Tempo médio de permanência em cada zona
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MockChart 
                  title="Gráfico de Barras Horizontal"
                  description="Tempo de permanência por zona"
                  icon={Timer}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 3: Behavioral Insights */}
        <TabsContent value="behavioral" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Zap className="h-5 w-5 text-primary" />
                  First Interaction
                </CardTitle>
                <CardDescription>
                  Funil de primeira interação dos clientes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MockChart 
                  title="Funil Chart"
                  description="Jornada inicial do cliente"
                  icon={Zap}
                />
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Target className="h-5 w-5 text-primary" />
                  Zone Engagement Rate
                </CardTitle>
                <CardDescription>
                  Taxa de engajamento por zona da loja
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MockChart 
                  title="Gráfico de Barras Agrupadas"
                  description="Engajamento por zona e período"
                  icon={Target}
                />
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border lg:col-span-2 xl:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  Product Affinity & Zone Transitions
                </CardTitle>
                <CardDescription>
                  Fluxo de transições entre zonas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MockChart 
                  title="Diagrama Sankey"
                  description="Fluxo de movimento entre zonas"
                  icon={ArrowRight}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};