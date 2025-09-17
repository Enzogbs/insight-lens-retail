import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Users, 
  TrendingUp, 
  Activity, 
  CalendarIcon, 
  Filter,
  BarChart3,
  Eye,
  Timer,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Store,
  Target,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface ComparisonKPIProps {
  title: string;
  stores: Array<{
    name: string;
    value: string;
    change?: string;
    changeType?: 'positive' | 'negative' | 'neutral';
  }>;
  icon: React.ReactNode;
}

const ComparisonKPI = ({ title, stores, icon }: ComparisonKPIProps) => {
  return (
    <Card className="bg-gradient-card border-border hover:border-primary/20 transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-foreground text-lg">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stores.map((store, index) => {
            const changeColor = store.changeType === 'positive' ? 'text-green-600' : 
                              store.changeType === 'negative' ? 'text-red-600' : 'text-muted-foreground';
            
            return (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
                <div>
                  <p className="font-medium text-foreground">{store.name}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{store.value}</p>
                  {store.change && (
                    <div className="flex items-center mt-1">
                      {store.changeType === 'positive' && <ArrowUp className="h-3 w-3 text-green-600 mr-1" />}
                      {store.changeType === 'negative' && <ArrowDown className="h-3 w-3 text-red-600 mr-1" />}
                      <p className={`text-sm ${changeColor}`}>{store.change}</p>
                    </div>
                  )}
                </div>
                <Badge variant="secondary" className="text-xs">
                  #{index + 1}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

const MockComparisonChart = ({ title, description, icon: Icon, height = "h-64" }: {
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

export const StoreComparisonContent = () => {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(),
    to: new Date()
  });
  const [selectedStores, setSelectedStores] = useState<string[]>(['store1', 'store2', 'store3']);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const availableStores = [
    { id: 'store1', name: 'Loja Centro - SP', color: 'bg-blue-500' },
    { id: 'store2', name: 'Loja Shopping Vila Madalena', color: 'bg-green-500' },
    { id: 'store3', name: 'Loja Paulista', color: 'bg-purple-500' },
    { id: 'store4', name: 'Loja Jardins', color: 'bg-orange-500' },
    { id: 'store5', name: 'Loja Moema', color: 'bg-red-500' },
  ];

  const handleStoreToggle = (storeId: string) => {
    setSelectedStores(prev => 
      prev.includes(storeId) 
        ? prev.filter(id => id !== storeId)
        : [...prev, storeId]
    );
  };

  const datePresets = [
    { label: 'Últimos 7 dias', value: 'week' },
    { label: 'Último mês', value: 'month' },
    { label: 'Últimos 3 meses', value: 'quarter' },
  ];

  const handlePresetClick = (preset: string) => {
    const today = new Date();
    switch (preset) {
      case 'week':
        const weekStart = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        setDateRange({ from: weekStart, to: today });
        break;
      case 'month':
        const monthStart = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        setDateRange({ from: monthStart, to: today });
        break;
      case 'quarter':
        const quarterStart = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
        setDateRange({ from: quarterStart, to: today });
        break;
    }
    setIsCalendarOpen(false);
  };

  const comparisonData = {
    visitors: [
      { name: 'Loja Centro - SP', value: '2,847', change: '+8.3%', changeType: 'positive' as const },
      { name: 'Loja Shopping Vila Madalena', value: '3,124', change: '+12.1%', changeType: 'positive' as const },
      { name: 'Loja Paulista', value: '1,956', change: '-2.4%', changeType: 'negative' as const },
    ],
    revenue: [
      { name: 'Loja Centro - SP', value: 'R$ 45.2k', change: '+15.2%', changeType: 'positive' as const },
      { name: 'Loja Shopping Vila Madalena', value: 'R$ 52.8k', change: '+18.7%', changeType: 'positive' as const },
      { name: 'Loja Paulista', value: 'R$ 38.1k', change: '+5.1%', changeType: 'positive' as const },
    ],
    avgDwellTime: [
      { name: 'Loja Centro - SP', value: '12m 34s', change: '+1m 15s', changeType: 'positive' as const },
      { name: 'Loja Shopping Vila Madalena', value: '15m 22s', change: '+2m 8s', changeType: 'positive' as const },
      { name: 'Loja Paulista', value: '11m 08s', change: '-45s', changeType: 'negative' as const },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Comparação entre Lojas</h1>
        <p className="text-muted-foreground">
          Análise comparativa de performance entre suas diferentes unidades
        </p>
      </div>

      {/* Filters */}
      <Card className="bg-gradient-card border-border">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Filtros de Comparação</span>
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

              {/* Store Selection */}
              <div className="flex flex-col gap-2 min-w-0 flex-1">
                <label className="text-sm font-medium text-muted-foreground">Lojas para Comparar</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {availableStores.map((store) => (
                    <div key={store.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={store.id}
                        checked={selectedStores.includes(store.id)}
                        onCheckedChange={() => handleStoreToggle(store.id)}
                      />
                      <label 
                        htmlFor={store.id} 
                        className="text-sm font-medium text-foreground cursor-pointer flex items-center gap-2"
                      >
                        <div className={`w-3 h-3 rounded-full ${store.color}`}></div>
                        {store.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison KPIs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ComparisonKPI
          title="Total de Visitantes"
          stores={comparisonData.visitors}
          icon={<Eye className="h-5 w-5 text-primary" />}
        />
        <ComparisonKPI
          title="Receita Estimada"
          stores={comparisonData.revenue}
          icon={<TrendingUp className="h-5 w-5 text-primary" />}
        />
        <ComparisonKPI
          title="Tempo Médio de Permanência"
          stores={comparisonData.avgDwellTime}
          icon={<Timer className="h-5 w-5 text-primary" />}
        />
      </div>

      {/* Comparison Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <BarChart3 className="h-5 w-5 text-primary" />
              Tráfego Comparativo
            </CardTitle>
            <CardDescription>
              Comparação de fluxo de visitantes entre lojas ao longo do tempo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MockComparisonChart 
              title="Gráfico Multi-Linha Comparativo"
              description="Fluxo de visitantes por loja"
              icon={Activity}
              height="h-80"
            />
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Target className="h-5 w-5 text-primary" />
              Performance por Zona
            </CardTitle>
            <CardDescription>
              Comparação de performance de zonas similares entre lojas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MockComparisonChart 
              title="Gráfico de Barras Agrupadas"
              description="Performance de zonas por loja"
              icon={BarChart3}
              height="h-80"
            />
          </CardContent>
        </Card>
      </div>

      {/* Insights and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Top Performers
            </CardTitle>
            <CardDescription>
              Lojas com melhor performance no período selecionado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div>
                  <p className="font-medium text-foreground">🏆 Loja Shopping Vila Madalena</p>
                  <p className="text-sm text-muted-foreground">Maior crescimento em visitantes (+12.1%)</p>
                </div>
                <Badge variant="secondary" className="bg-green-500/20 text-green-700">
                  #1
                </Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div>
                  <p className="font-medium text-foreground">🎯 Loja Centro - SP</p>
                  <p className="text-sm text-muted-foreground">Melhor tempo de permanência médio</p>
                </div>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-700">
                  #2
                </Badge>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <div>
                  <p className="font-medium text-foreground">💰 Loja Shopping Vila Madalena</p>
                  <p className="text-sm text-muted-foreground">Maior receita total no período</p>
                </div>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-700">
                  #3
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <ArrowRight className="h-5 w-5 text-primary" />
              Recomendações
            </CardTitle>
            <CardDescription>
              Insights automáticos baseados na comparação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <p className="font-medium text-foreground mb-1">⚠️ Oportunidade de Melhoria</p>
                <p className="text-sm text-muted-foreground">
                  Loja Paulista apresenta queda de -2.4% em visitantes. 
                  Considere analisar fatores externos ou estratégias de marketing local.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="font-medium text-foreground mb-1">💡 Insight de Performance</p>
                <p className="text-sm text-muted-foreground">
                  Loja Shopping Vila Madalena tem 23% mais visitantes que a média. 
                  Analise as práticas desta unidade para replicar em outras lojas.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="font-medium text-foreground mb-1">🚀 Tendência Positiva</p>
                <p className="text-sm text-muted-foreground">
                  Todas as lojas apresentaram crescimento no tempo de permanência, 
                  indicando maior engajamento dos clientes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};