import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar as CalendarIcon,
  Plus,
  Filter,
  Clock,
  FileBarChart,
  FileSpreadsheet
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface Report {
  id: string;
  name: string;
  type: string;
  dateGenerated: Date;
  status: 'ready' | 'processing' | 'failed';
  size: string;
}

const mockReports: Report[] = [
  {
    id: '1',
    name: 'Weekly Performance Summary',
    type: 'Performance',
    dateGenerated: new Date('2024-01-15'),
    status: 'ready',
    size: '2.4 MB'
  },
  {
    id: '2',
    name: 'Zone Engagement Deep-Dive',
    type: 'Analytics',
    dateGenerated: new Date('2024-01-14'),
    status: 'ready',
    size: '5.8 MB'
  },
  {
    id: '3',
    name: 'Full Data Export December',
    type: 'Export',
    dateGenerated: new Date('2024-01-13'),
    status: 'processing',
    size: '12.3 MB'
  },
  {
    id: '4',
    name: 'Customer Flow Analysis',
    type: 'Behavioral',
    dateGenerated: new Date('2024-01-12'),
    status: 'ready',
    size: '3.7 MB'
  }
];

const reportTemplates = [
  {
    id: 'weekly-performance',
    name: 'Weekly Performance Summary',
    description: 'Visão geral da performance semanal com KPIs principais',
    icon: FileBarChart
  },
  {
    id: 'zone-engagement',
    name: 'Zone Engagement Deep-Dive',
    description: 'Análise detalhada do engajamento por zona da loja',
    icon: FileText
  },
  {
    id: 'data-export',
    name: 'Full Data Export (.csv)',
    description: 'Exportação completa dos dados brutos para análise externa',
    icon: FileSpreadsheet
  }
];

export const ReportsContent = () => {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(new Date().setDate(new Date().getDate() - 30)),
    to: new Date()
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const getStatusBadge = (status: Report['status']) => {
    const variants = {
      ready: { variant: 'default' as const, color: 'text-success', text: 'Pronto' },
      processing: { variant: 'secondary' as const, color: 'text-warning', text: 'Processando' },
      failed: { variant: 'destructive' as const, color: 'text-destructive', text: 'Erro' }
    };
    
    const config = variants[status];
    return (
      <Badge variant={config.variant} className={cn("", config.color)}>
        {config.text}
      </Badge>
    );
  };

  const handleGenerateReport = (templateId: string) => {
    console.log('Generating report:', templateId);
    setIsDialogOpen(false);
    // Here you would typically make an API call to generate the report
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Relatórios</h1>
        <p className="text-muted-foreground">
          Geração e gerenciamento de relatórios personalizados para análise de dados
        </p>
      </div>

      {/* Filters and Actions */}
      <Card className="bg-gradient-card border-border">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Filtros</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-muted-foreground">Período</label>
                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className={cn("text-xs", !dateRange.from && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-3 w-3" />
                      {dateRange.from 
                        ? `${format(dateRange.from, "dd/MM")} - ${dateRange.to ? format(dateRange.to, "dd/MM") : "..."}`
                        : "Selecionar período"
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

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  <Plus className="mr-2 h-4 w-4" />
                  Gerar Novo Relatório
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="text-foreground">Gerar Novo Relatório</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Selecione o tipo de relatório que deseja gerar
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {reportTemplates.map((template) => (
                    <Card key={template.id} className="bg-gradient-card border-border hover:border-primary/30 transition-all cursor-pointer" onClick={() => handleGenerateReport(template.id)}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <template.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">{template.name}</h3>
                            <p className="text-sm text-muted-foreground">{template.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Reports Table */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <FileText className="h-5 w-5 text-primary" />
            Relatórios Gerados
          </CardTitle>
          <CardDescription>
            Lista de todos os relatórios gerados recentemente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border hover:border-primary/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{report.name}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {format(report.dateGenerated, "dd/MM/yyyy")}
                      </div>
                      <span className="text-sm text-muted-foreground">{report.size}</span>
                      {getStatusBadge(report.status)}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {report.status === 'ready' && (
                    <>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Eye className="mr-1 h-3 w-3" />
                        Visualizar
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Download className="mr-1 h-3 w-3" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Download className="mr-1 h-3 w-3" />
                        CSV
                      </Button>
                    </>
                  )}
                  {report.status === 'processing' && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                      Processando...
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};