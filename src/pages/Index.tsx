import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  BarChart3,
  CheckCircle2,
  ChevronRight,
  MessageSquareText,
  PlayCircle,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import crmImage from '@/assets/image-8d65c.png'

export default function Index() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <div className="flex flex-col">
      {/* Hero Section - Direct and Objective */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Eye-catching Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] opacity-40 pointer-events-none -z-10">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-full blur-[100px] animate-pulse"
            style={{ animationDuration: '4s' }}
          ></div>
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/40 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px]"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 relative">
            {/* Visual Glass Box Behind Content */}
            <div className="absolute inset-0 -z-10 bg-background/40 backdrop-blur-3xl rounded-[3rem] border border-primary/20 shadow-2xl scale-105 md:scale-110 transform translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-[3rem]"></div>
              {/* Inner glowing edge */}
              <div className="absolute inset-px rounded-[calc(3rem-1px)] border border-white/10 dark:border-white/5 pointer-events-none"></div>
            </div>

            <div className="pt-10 md:pt-14 pb-8 md:pb-12 px-4">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm text-primary font-semibold mb-6 animate-fade-in-up shadow-[0_0_15px_hsl(var(--primary)/0.2)]">
                <span className="flex h-2.5 w-2.5 rounded-full bg-primary mr-2.5 animate-pulse"></span>
                Para Pequenas e Médias Empresas
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground animate-fade-in-up leading-[1.15] text-balance"
                style={{ animationDelay: '100ms' }}
              >
                Sua empresa perde dinheiro por falta de{' '}
                <span className="text-primary italic relative inline-block">
                  organização
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary/30 rounded-full blur-sm"></span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/60 rounded-full"></span>
                </span>
                ?
              </h1>

              <p
                className="text-xl md:text-2xl text-foreground/80 animate-fade-in-up max-w-3xl mx-auto mt-8 font-medium leading-relaxed"
                style={{ animationDelay: '200ms' }}
              >
                Assuma o controle total. Automatize seu atendimento, feche mais negócios e tenha
                clareza financeira imediata com a plataforma VexaView.
              </p>

              <div
                className="flex flex-col sm:flex-row justify-center gap-5 pt-10 animate-fade-in-up"
                style={{ animationDelay: '300ms' }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-16 px-10 text-xl w-full sm:w-auto shadow-[0_8px_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_8px_40px_hsl(var(--primary)/0.6)] hover:-translate-y-1 transition-all rounded-full"
                  asChild
                >
                  <Link to="/cadastro">
                    Criar Conta Agora <ChevronRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 text-xl w-full sm:w-auto bg-background/80 backdrop-blur-md border-primary/20 hover:bg-primary/10 rounded-full transition-all text-foreground"
                  asChild
                >
                  <Link to="/contato">Falar com um Especialista</Link>
                </Button>
              </div>
              <p
                className="text-sm text-foreground/60 pt-6 animate-fade-in-up font-medium"
                style={{ animationDelay: '400ms' }}
              >
                Não requer cartão de crédito. Configuração em 5 minutos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients/Logos Section */}
      <section className="py-12 bg-background border-b overflow-hidden">
        <div className="container">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-widest">
            Empresas que confiam na VexaView
          </p>
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent className="items-center -ml-4 md:-ml-8">
                {['google', 'microsoft', 'spotify', 'amazon', 'netflix', 'meta'].map(
                  (logo, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 md:pl-8 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                    >
                      <div className="flex items-center justify-center h-16 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                        <img
                          src={`https://img.usecurling.com/i?q=${logo}&color=solid-black&shape=fill`}
                          alt={`Logo ${logo}`}
                          className="max-h-8 max-w-[120px] object-contain dark:invert"
                        />
                      </div>
                    </CarouselItem>
                  ),
                )}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* The "Pain" Section - Focused on immediate connection with user problems */}
      <section className="py-20 bg-muted/30 border-y">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Você se identifica com algum destes problemas?
            </h2>
            <p className="text-lg text-muted-foreground">
              A falta de processos definidos custa caro. Identifique onde sua operação está
              sangrando.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-background/80 backdrop-blur-sm border-none shadow-subtle hover:shadow-elevation transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-6">
                  <span className="text-red-600 dark:text-red-400 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Leads perdidos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clientes chamam no WhatsApp e ficam sem resposta, ou são esquecidos em planilhas
                  desatualizadas enquanto a concorrência atende rápido.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-none shadow-subtle hover:shadow-elevation transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-6">
                  <span className="text-red-600 dark:text-red-400 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Caos financeiro</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Você não sabe exatamente quanto entrou, quanto saiu e qual é o lucro real no fim
                  do mês, baseando decisões apenas em "achismos".
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-none shadow-subtle hover:shadow-elevation transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-6">
                  <span className="text-red-600 dark:text-red-400 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Processos manuais</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sua equipe gasta horas preciosas preenchendo relatórios ou cobrando clientes, ao
                  invés de focar no que realmente importa: fechar negócios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution Section (Features, objective approach) */}
      <section className="py-24 container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Solução: <span className="text-primary">VexaView</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Um ecossistema único focado no que importa: escalar suas vendas e estruturar a gestão do
            seu negócio.
          </p>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {/* Feature 1: Chatbots */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="https://img.usecurling.com/p/600/450?q=chatbot%20conversation&color=gray"
                alt="Cliente conversando com Chatbot"
                className="rounded-2xl shadow-elevation border border-muted relative z-10 w-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center rounded-xl bg-primary/10 p-3.5">
                <MessageSquareText className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Atendimento 24/7 com Chatbots de IA
              </h3>
              <p className="text-lg text-muted-foreground">
                Pare de perder clientes de madrugada ou nos finais de semana. Nossos bots
                conversacionais qualificam leads e agendam reuniões automaticamente no seu WhatsApp
                ou Site.
              </p>
              <ul className="space-y-4 pt-2">
                <li className="flex items-center text-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" /> Respostas
                  imediatas e humanizadas
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" /> Qualificação
                  automática de leads frios
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" /> Integração nativa
                  direcionando para o CRM
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2: CRM */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-xl bg-primary/10 p-3.5">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">CRM de Vendas Ágil e Visual</h3>
              <p className="text-lg text-muted-foreground">
                Dê adeus às planilhas confusas. Acompanhe cada negociação em um quadro visual
                intuitivo, saiba exatamente o próximo passo de cada lead e garanta que nenhum
                negócio esfrie.
              </p>
              <ul className="space-y-4 pt-2">
                <li className="flex items-center text-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" /> Funil de vendas
                  personalizável (Kanban)
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" /> Histórico
                  centralizado de interações
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" /> Lembretes
                  automáticos de follow-up
                </li>
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={crmImage}
                alt="CRM Visual"
                className="rounded-2xl shadow-elevation border border-muted relative z-10 w-full object-cover"
              />
            </div>
          </div>

          {/* Feature 3: Dashboards */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="https://img.usecurling.com/p/600/450?q=financial%20dashboard&color=red"
                alt="Dashboards de Gestão"
                className="rounded-2xl shadow-elevation border border-muted relative z-10 w-full"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center rounded-xl bg-primary/10 p-3.5">
                <BarChart3 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Dashboards Financeiros e de Metas</h3>
              <p className="text-lg text-muted-foreground">
                Decisões baseadas em dados reais. Veja seu faturamento líquido, custos fixos, CAC e
                a performance individual da sua equipe de vendas, tudo em tempo real.
              </p>
              <ul className="space-y-4 pt-2">
                <li className="flex items-center text-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" /> Visão clara de
                  Receitas vs Despesas
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" /> Acompanhamento de
                  cotas e metas de vendas
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" /> Relatórios
                  exportáveis com um clique
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video / Preview Section (Direct response style) */}
      <section className="bg-secondary text-secondary-foreground py-24 relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Veja o sistema operando e entenda como lucrar mais cortando o trabalho manual
            </h2>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer aspect-video bg-black/20">
              <img
                src="https://img.usecurling.com/p/1000/562?q=saas%20dashboard&color=black"
                alt="Demonstração do Sistema"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(var(--primary),0.5)]">
                  <PlayCircle className="h-10 w-10 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Aggressive CTA */}
      <section className="py-24 container">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 rounded-[2.5rem] p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Pronto para transformar sua empresa?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Junte-se a dezenas de PMEs que já pararam de perder dinheiro e automatizaram suas
              vendas e finanças com a VexaView.
            </p>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-16 px-10 text-xl w-full sm:w-auto rounded-full shadow-elevation hover:scale-105 transition-all"
                asChild
              >
                <Link to="/cadastro">
                  Criar Minha Conta Gratuita <ChevronRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Teste completo. Não precisa de cartão de crédito para iniciar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
