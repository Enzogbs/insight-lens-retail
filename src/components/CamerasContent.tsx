import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  Settings, 
  Eye, 
  Wifi, 
  WifiOff,
  Clock,
  Activity,
  MapPin,
  Zap,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CameraDevice {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline' | 'maintenance';
  device: string;
  uptime: string;
  lastSync: string;
  thumbnail?: string;
  fps: number;
  resolution: string;
}

const mockCameras: CameraDevice[] = [
  {
    id: '1',
    name: 'Camera 1',
    location: 'Main Entrance',
    status: 'online',
    device: 'Jetson Nano',
    uptime: '72 horas',
    lastSync: '2 minutos atrás',
    fps: 30,
    resolution: '1920x1080'
  },
  {
    id: '2',
    name: 'Camera 2',
    location: 'Electronics Section',
    status: 'online',
    device: 'Jetson Nano',
    uptime: '68 horas',
    lastSync: '1 minuto atrás',
    fps: 30,
    resolution: '1920x1080'
  },
  {
    id: '3',
    name: 'Camera 3',
    location: 'Clothing Area',
    status: 'offline',
    device: 'Jetson Nano',
    uptime: '0 horas',
    lastSync: '45 minutos atrás',
    fps: 0,
    resolution: '1920x1080'
  },
  {
    id: '4',
    name: 'Camera 4',
    location: 'Checkout Zone',
    status: 'online',
    device: 'Jetson Nano',
    uptime: '71 horas',
    lastSync: '3 minutos atrás',
    fps: 30,
    resolution: '1920x1080'
  },
  {
    id: '5',
    name: 'Camera 5',
    location: 'Food Court',
    status: 'maintenance',
    device: 'Jetson Nano',
    uptime: '12 horas',
    lastSync: '30 minutos atrás',
    fps: 15,
    resolution: '1920x1080'
  },
  {
    id: '6',
    name: 'Camera 6',
    location: 'Back Storage',
    status: 'online',
    device: 'Jetson Nano',
    uptime: '69 horas',
    lastSync: '1 minuto atrás',
    fps: 30,
    resolution: '1920x1080'
  }
];

export const CamerasContent = () => {
  const getStatusConfig = (status: CameraDevice['status']) => {
    const configs = {
      online: {
        badge: { variant: 'default' as const, className: 'bg-success text-success-foreground' },
        icon: Wifi,
        iconColor: 'text-success',
        text: 'Online'
      },
      offline: {
        badge: { variant: 'destructive' as const, className: '' },
        icon: WifiOff,
        iconColor: 'text-destructive',
        text: 'Offline'
      },
      maintenance: {
        badge: { variant: 'secondary' as const, className: 'bg-warning text-warning-foreground' },
        icon: AlertTriangle,
        iconColor: 'text-warning',
        text: 'Manutenção'
      }
    };
    return configs[status];
  };

  const onlineCount = mockCameras.filter(cam => cam.status === 'online').length;
  const totalCount = mockCameras.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Gestão de Câmeras</h1>
        <p className="text-muted-foreground">
          Monitoramento e configuração dos dispositivos de câmera conectados
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Status Geral</p>
                <p className="text-3xl font-bold text-foreground">{onlineCount}/{totalCount}</p>
                <p className="text-sm text-success mt-1">Câmeras Online</p>
              </div>
              <div className="text-primary text-2xl">
                <Camera />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Uptime Médio</p>
                <p className="text-3xl font-bold text-foreground">68.5h</p>
                <p className="text-sm text-success mt-1">Tempo ativo médio</p>
              </div>
              <div className="text-primary text-2xl">
                <Clock />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Última Sincronização</p>
                <p className="text-3xl font-bold text-foreground">1min</p>
                <p className="text-sm text-success mt-1">Mais recente</p>
              </div>
              <div className="text-primary text-2xl">
                <Activity />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Camera Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCameras.map((camera) => {
          const statusConfig = getStatusConfig(camera.status);
          const StatusIcon = statusConfig.icon;

          return (
            <Card key={camera.id} className="bg-gradient-card border-border hover:border-primary/20 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-foreground">{camera.name}</CardTitle>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <CardDescription className="text-sm">{camera.location}</CardDescription>
                    </div>
                  </div>
                  <Badge 
                    variant={statusConfig.badge.variant} 
                    className={cn("flex items-center gap-1", statusConfig.badge.className)}
                  >
                    <StatusIcon className="h-3 w-3" />
                    {statusConfig.text}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Thumbnail Placeholder */}
                <div className="aspect-video bg-secondary/20 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                  {camera.status === 'online' ? (
                    <div className="text-center">
                      <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Live Feed</p>
                      <p className="text-xs text-muted-foreground">{camera.resolution} @ {camera.fps}fps</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <WifiOff className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Sem sinal</p>
                    </div>
                  )}
                </div>

                {/* Device Info */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Dispositivo:</span>
                    <span className="text-foreground font-medium">{camera.device}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Uptime:</span>
                    <span className="text-foreground font-medium">{camera.uptime}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Última Sync:</span>
                    <span className="text-foreground font-medium">{camera.lastSync}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs"
                    disabled={camera.status === 'offline'}
                  >
                    <Eye className="mr-1 h-3 w-3" />
                    Live Feed
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Settings className="mr-1 h-3 w-3" />
                    Config
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};