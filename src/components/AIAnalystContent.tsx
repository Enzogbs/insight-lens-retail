import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Send, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Clock,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Target
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  insights?: {
    title: string;
    value: string;
    change?: string;
    changeType?: 'positive' | 'negative';
  }[];
  tables?: {
    title: string;
    headers: string[];
    rows: string[][];
  }[];
}

const suggestionChips = [
  {
    id: 'traffic-comparison',
    text: 'Compare Saturday vs. Sunday traffic this month',
    icon: BarChart3
  },
  {
    id: 'zone-engagement',
    text: 'Which zone had the highest engagement this week and why?',
    icon: Target
  },
  {
    id: 'performance-summary',
    text: 'Write a summary of last month\'s performance',
    icon: TrendingUp
  },
  {
    id: 'customer-patterns',
    text: 'What are the main customer behavior patterns?',
    icon: Users
  }
];

const mockResponses: Record<string, ChatMessage> = {
  'traffic-comparison': {
    id: '1',
    type: 'ai',
    content: 'Baseado na análise dos dados de tráfego, identifiquei diferenças significativas entre sábados e domingos neste mês:',
    timestamp: new Date(),
    insights: [
      { title: 'Tráfego Sábado', value: '2,847', change: '+12.5%', changeType: 'positive' },
      { title: 'Tráfego Domingo', value: '2,156', change: '-8.3%', changeType: 'negative' },
      { title: 'Diferença', value: '691', change: '+24.3%', changeType: 'positive' }
    ],
    tables: [{
      title: 'Análise por Horário de Pico',
      headers: ['Horário', 'Sábado', 'Domingo', 'Diferença'],
      rows: [
        ['10h-12h', '342', '278', '+64'],
        ['14h-16h', '456', '387', '+69'],
        ['18h-20h', '398', '298', '+100']
      ]
    }]
  },
  'zone-engagement': {
    id: '2',
    type: 'ai',
    content: 'A zona com maior engajamento esta semana foi a Seção de Eletrônicos, com resultados excepcionais:',
    timestamp: new Date(),
    insights: [
      { title: 'Taxa de Engajamento', value: '78.5%', change: '+15.2%', changeType: 'positive' },
      { title: 'Tempo Médio', value: '12.3min', change: '+3.1min', changeType: 'positive' },
      { title: 'Interações', value: '1,247', change: '+28.4%', changeType: 'positive' }
    ]
  },
  'performance-summary': {
    id: '3',
    type: 'ai',
    content: 'Aqui está um resumo completo da performance do mês passado com os principais indicadores:',
    timestamp: new Date(),
    insights: [
      { title: 'Visitantes Únicos', value: '8,742', change: '+18.7%', changeType: 'positive' },
      { title: 'Tempo Médio na Loja', value: '23.4min', change: '+2.1min', changeType: 'positive' },
      { title: 'Taxa de Conversão', value: '34.2%', change: '+5.8%', changeType: 'positive' }
    ]
  }
};

export const AIAnalystContent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: `Analisando sua pergunta: "${message}". Baseado nos dados disponíveis, posso fornecer os seguintes insights...`,
        timestamp: new Date(),
        insights: [
          { title: 'Métrica Principal', value: '1,234', change: '+12.3%', changeType: 'positive' },
          { title: 'Tendência', value: 'Crescimento', change: '+8.7%', changeType: 'positive' }
        ]
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const handleSuggestionClick = (suggestionId: string) => {
    const suggestion = suggestionChips.find(chip => chip.id === suggestionId);
    if (!suggestion) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: suggestion.text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response with mock data
    setTimeout(() => {
      const mockResponse = mockResponses[suggestionId];
      if (mockResponse) {
        setMessages(prev => [...prev, { ...mockResponse, id: (Date.now() + 1).toString() }]);
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
          <Brain className="h-8 w-8 text-primary" />
          AI Analyst
        </h1>
        <p className="text-muted-foreground">
          Faça perguntas em linguagem natural e receba insights inteligentes sobre seus dados
        </p>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col">
        <Card className="flex-1 bg-gradient-card border-border flex flex-col">
          <CardHeader className="border-b border-border">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Sparkles className="h-5 w-5 text-primary" />
              Conversa com IA
            </CardTitle>
            <CardDescription>
              Pergunte qualquer coisa sobre seus dados de analytics
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6">
              {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Bem-vindo ao AI Analyst
                      </h3>
                      <p className="text-muted-foreground">
                        Comece fazendo uma pergunta ou escolha uma das sugestões abaixo
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {messages.map((message) => (
                    <div key={message.id} className={cn(
                      'flex',
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    )}>
                      <div className={cn(
                        'max-w-[80%] rounded-lg p-4',
                        message.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary/50 text-foreground'
                      )}>
                        <div className="flex items-start gap-3">
                          {message.type === 'ai' && (
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Brain className="h-3 w-3 text-primary" />
                            </div>
                          )}
                          <div className="flex-1">
                            <p className="mb-2">{message.content}</p>
                            
                            {/* Insights Cards */}
                            {message.insights && (
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                                {message.insights.map((insight, index) => (
                                  <div key={index} className="bg-card/50 rounded-lg p-3 border border-border">
                                    <p className="text-xs text-muted-foreground mb-1">{insight.title}</p>
                                    <p className="text-lg font-bold">{insight.value}</p>
                                    {insight.change && (
                                      <p className={cn(
                                        'text-xs',
                                        insight.changeType === 'positive' ? 'text-success' : 'text-destructive'
                                      )}>
                                        {insight.change}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Tables */}
                            {message.tables && (
                              <div className="mt-4 space-y-3">
                                {message.tables.map((table, index) => (
                                  <div key={index} className="bg-card/50 rounded-lg p-3 border border-border">
                                    <h4 className="font-semibold mb-2">{table.title}</h4>
                                    <div className="overflow-x-auto">
                                      <table className="w-full text-sm">
                                        <thead>
                                          <tr className="border-b border-border">
                                            {table.headers.map((header, headerIndex) => (
                                              <th key={headerIndex} className="text-left p-2 text-muted-foreground">
                                                {header}
                                              </th>
                                            ))}
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {table.rows.map((row, rowIndex) => (
                                            <tr key={rowIndex} className="border-b border-border/50">
                                              {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className="p-2">
                                                  {cell}
                                                </td>
                                              ))}
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-secondary/50 rounded-lg p-4 max-w-[80%]">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                            <Brain className="h-3 w-3 text-primary" />
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Suggestion Chips */}
            {messages.length === 0 && (
              <div className="border-t border-border p-6">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    Perguntas Sugeridas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {suggestionChips.map((chip) => {
                      const IconComponent = chip.icon;
                      return (
                        <Button
                          key={chip.id}
                          variant="outline"
                          className="justify-start text-left h-auto p-3 hover:border-primary/30"
                          onClick={() => handleSuggestionClick(chip.id)}
                        >
                          <IconComponent className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{chip.text}</span>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t border-border p-6">
              <div className="flex gap-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Faça uma pergunta sobre seus dados..."
                  className="flex-1 bg-input"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage(inputValue);
                    }
                  }}
                  disabled={isLoading}
                />
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground px-6"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Pressione Enter para enviar ou clique no botão
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};