import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  User, 
  Store, 
  CreditCard, 
  Shield, 
  Settings as SettingsIcon,
  Plus,
  Trash2,
  Edit,
  Mail,
  MapPin,
  Crown,
  Eye
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'viewer';
  lastActive: Date;
  avatar?: string;
}

interface StoreInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  status: 'active' | 'inactive';
}

const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Ana Silva',
    email: 'ana.silva@empresa.com',
    role: 'admin',
    lastActive: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Carlos Santos',
    email: 'carlos.santos@empresa.com',
    role: 'manager',
    lastActive: new Date('2024-01-14')
  },
  {
    id: '3',
    name: 'Maria Oliveira',
    email: 'maria.oliveira@empresa.com',
    role: 'viewer',
    lastActive: new Date('2024-01-13')
  }
];

const mockStores: StoreInfo[] = [
  {
    id: '1',
    name: 'Loja Centro - SP',
    address: 'Rua Augusta, 1234 - Centro, São Paulo - SP',
    phone: '(11) 9999-8888',
    status: 'active'
  },
  {
    id: '2',
    name: 'Loja Shopping Vila Madalena',
    address: 'Av. Faria Lima, 5678 - Vila Madalena, São Paulo - SP',
    phone: '(11) 7777-6666',
    status: 'active'
  }
];

export const SettingsContent = () => {
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState('viewer');

  const getRoleBadge = (role: TeamMember['role']) => {
    const configs = {
      admin: { variant: 'default' as const, className: 'bg-primary text-primary-foreground', text: 'Admin', icon: Crown },
      manager: { variant: 'secondary' as const, className: 'bg-secondary text-secondary-foreground', text: 'Gerente', icon: Shield },
      viewer: { variant: 'outline' as const, className: '', text: 'Visualizador', icon: Eye }
    };
    
    const config = configs[role];
    const IconComponent = config.icon;
    
    return (
      <Badge variant={config.variant} className={config.className}>
        <IconComponent className="mr-1 h-3 w-3" />
        {config.text}
      </Badge>
    );
  };

  const handleInviteUser = () => {
    console.log('Inviting user:', { email: newUserEmail, role: newUserRole });
    setNewUserEmail('');
    setNewUserRole('viewer');
    setIsInviteDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie seu perfil, equipe e configurações da conta
        </p>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="text-sm">Perfil</TabsTrigger>
          <TabsTrigger value="team" className="text-sm">Equipe</TabsTrigger>
          <TabsTrigger value="stores" className="text-sm">Lojas</TabsTrigger>
          <TabsTrigger value="billing" className="text-sm">Faturamento</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <User className="h-5 w-5 text-primary" />
                Informações do Perfil
              </CardTitle>
              <CardDescription>
                Atualize suas informações pessoais e preferências
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" defaultValue="João Silva" className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="joao.silva@empresa.com" className="bg-input" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Alterar Senha</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Senha Atual</Label>
                    <Input id="current-password" type="password" className="bg-input" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nova Senha</Label>
                    <Input id="new-password" type="password" className="bg-input" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  Salvar Alterações
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="space-y-6">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Shield className="h-5 w-5 text-primary" />
                    Membros da Equipe
                  </CardTitle>
                  <CardDescription>
                    Gerencie o acesso e permissões dos usuários
                  </CardDescription>
                </div>
                
                <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                      <Plus className="mr-2 h-4 w-4" />
                      Convidar Usuário
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-card border-border">
                    <DialogHeader>
                      <DialogTitle className="text-foreground">Convidar Novo Usuário</DialogTitle>
                      <DialogDescription className="text-muted-foreground">
                        Envie um convite para um novo membro da equipe
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="invite-email">Email</Label>
                        <Input 
                          id="invite-email" 
                          type="email" 
                          placeholder="usuario@empresa.com"
                          value={newUserEmail}
                          onChange={(e) => setNewUserEmail(e.target.value)}
                          className="bg-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="invite-role">Função</Label>
                        <select 
                          id="invite-role"
                          value={newUserRole}
                          onChange={(e) => setNewUserRole(e.target.value)}
                          className="w-full p-2 bg-input border border-border rounded-md text-foreground"
                        >
                          <option value="viewer">Visualizador</option>
                          <option value="manager">Gerente</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>
                      <div className="flex justify-end gap-2 pt-4">
                        <Button variant="outline" onClick={() => setIsInviteDialogOpen(false)}>
                          Cancelar
                        </Button>
                        <Button onClick={handleInviteUser} className="bg-primary hover:bg-primary-hover text-primary-foreground">
                          Enviar Convite
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockTeamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{member.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          {member.email}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {getRoleBadge(member.role)}
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Stores Tab */}
        <TabsContent value="stores" className="space-y-6">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Store className="h-5 w-5 text-primary" />
                    Gerenciamento de Lojas
                  </CardTitle>
                  <CardDescription>
                    Configure e gerencie suas lojas
                  </CardDescription>
                </div>
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Loja
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockStores.map((store) => (
                  <div key={store.id} className="flex items-start justify-between p-4 bg-secondary/30 rounded-lg border border-border">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <Store className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{store.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                          <MapPin className="h-3 w-3" />
                          {store.address}
                        </div>
                        <p className="text-sm text-muted-foreground">{store.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge variant="default" className="bg-success text-success-foreground">
                        Ativa
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <CreditCard className="h-5 w-5 text-primary" />
                Plano e Faturamento
              </CardTitle>
              <CardDescription>
                Gerencie sua assinatura e informações de pagamento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Plan */}
              <div className="p-6 bg-gradient-primary rounded-lg text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Plano Professional</h3>
                    <p className="opacity-90">Acesso completo a todas as funcionalidades</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">R$ 299</div>
                    <div className="opacity-90">/mês</div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Método de Pagamento</h3>
                <div className="p-4 bg-secondary/30 rounded-lg border border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">**** **** **** 1234</p>
                      <p className="text-sm text-muted-foreground">Expira em 12/2026</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Atualizar</Button>
                </div>
              </div>

              {/* Billing History */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Histórico de Faturas</h3>
                <div className="space-y-2">
                  {[
                    { date: '01/01/2024', amount: 'R$ 299,00', status: 'Pago' },
                    { date: '01/12/2023', amount: 'R$ 299,00', status: 'Pago' },
                    { date: '01/11/2023', amount: 'R$ 299,00', status: 'Pago' }
                  ].map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <div className="flex items-center gap-4">
                        <span className="text-foreground">{invoice.date}</span>
                        <Badge variant="default" className="bg-success text-success-foreground">
                          {invoice.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-foreground">{invoice.amount}</span>
                        <Button variant="outline" size="sm">Download</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};