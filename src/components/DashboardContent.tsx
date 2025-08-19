import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Clock, 
  TrendingUp, 
  DollarSign,
  Eye,
  ArrowUp,
  ArrowDown,
  Activity
} from 'lucide-react';

const MetricCard = ({ title, value, change, changeType, icon: Icon, description }: {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: any;
  description: string;
}) => (
  <Card className="bg-gradient-card border-border hover:border-primary/20 transition-all duration-200">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className="h-4 w-4 text-primary" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
      <div className="flex items-center text-xs">
        {changeType === 'positive' ? (
          <ArrowUp className="h-3 w-3 text-success mr-1" />
        ) : (
          <ArrowDown className="h-3 w-3 text-destructive mr-1" />
        )}
        <span className={changeType === 'positive' ? 'text-success' : 'text-destructive'}>
          {change}
        </span>
        <span className="text-muted-foreground ml-1">vs mês anterior</span>
      </div>
      <p className="text-xs text-muted-foreground mt-2">{description}</p>
    </CardContent>
  </Card>
);

export const DashboardContent = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral do desempenho das suas lojas em tempo real
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Visitantes Hoje"
          value="2,847"
          change="+12.5%"
          changeType="positive"
          icon={Users}
          description="Fluxo de pessoas detectadas"
        />
        <MetricCard
          title="Tempo Médio"
          value="18m 32s"
          change="+5.2%"
          changeType="positive"
          icon={Clock}
          description="Permanência média na loja"
        />
        <MetricCard
          title="Taxa de Conversão"
          value="3.8%"
          change="-2.1%"
          changeType="negative"
          icon={TrendingUp}
          description="Visitantes que compraram"
        />
        <MetricCard
          title="Receita/Visitante"
          value="R$ 42,15"
          change="+8.7%"
          changeType="positive"
          icon={DollarSign}
          description="Ticket médio por pessoa"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitor Flow Chart */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Activity className="h-5 w-5 text-primary" />
              Fluxo de Visitantes (Últimas 24h)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <p className="text-muted-foreground">Gráfico de fluxo de visitantes</p>
                <p className="text-sm text-muted-foreground mt-1">Dados em tempo real</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Heatmap */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Eye className="h-5 w-5 text-primary" />
              Mapa de Calor da Loja
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-success" />
                </div>
                <p className="text-muted-foreground">Visualização do mapa de calor</p>
                <p className="text-sm text-muted-foreground mt-1">Áreas mais visitadas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Atividade Recente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: '14:32', event: 'Pico de movimento detectado na entrada', type: 'info' },
              { time: '14:28', event: 'Fila excedeu 5 pessoas no caixa 1', type: 'warning' },
              { time: '14:25', event: 'Nova conversão registrada', type: 'success' },
              { time: '14:20', event: 'Cliente com tempo prolongado na seção eletrônicos', type: 'info' },
              { time: '14:15', event: 'Sistema iniciado com sucesso', type: 'success' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-success' :
                    activity.type === 'warning' ? 'bg-warning' :
                    'bg-primary'
                  }`} />
                  <span className="text-foreground">{activity.event}</span>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};