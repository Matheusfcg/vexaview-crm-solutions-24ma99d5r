import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BarChart3,
  ChevronRight,
  MessageSquareText,
  PlayCircle,
  TrendingUp,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background pt-24 pb-32">
        <div className="container relative z-10 flex flex-col items-center text-center">
          <div
            className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground mb-8 animate-fade-in-up"
            style={{ animationDelay: '0ms' }}
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Nova Plataforma de Gestão 2026
          </div>
          <h1
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl mb-6 animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            Transforme sua <span className="text-primary italic">desorganização</span> em lucro
            real.
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            VexaView é a solução definitiva de CRM, Chatbots e Dashboards projetada para PMEs que
            desejam automatizar vendas e dominar suas finanças.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-secondary text-primary-foreground h-14 px-8 text-base transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/contato">Começar Agora</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base bg-background/50 backdrop-blur-sm"
            >
              <PlayCircle className="mr-2 h-5 w-5 text-primary" />
              Ver Vídeo
            </Button>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Social Proof Marquee */}
      <section className="border-y bg-muted/30 py-10 overflow-hidden flex items-center">
        <div className="container md:w-auto md:mr-8 text-sm font-medium text-muted-foreground whitespace-nowrap">
          CONFIADO POR EMPRESAS INOVADORAS:
        </div>
        <div className="flex flex-1 overflow-hidden relative mask-image-linear-gradient">
          <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-16 px-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`https://img.usecurling.com/i?q=company%20logo&shape=outline&color=gray&seed=${i}`}
                alt="Logo"
                className="h-8 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              />
            ))}
          </div>
          <div
            className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-16 px-8"
            aria-hidden="true"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={`dup-${i}`}
                src={`https://img.usecurling.com/i?q=company%20logo&shape=outline&color=gray&seed=${i}`}
                alt="Logo"
                className="h-8 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Big Three (Services) */}
      <section className="py-24 container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold mb-4">
            Soluções integradas para o seu crescimento
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo que você precisa para capturar, engajar e analisar em um único ecossistema
            sofisticado.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-elevation transition-all duration-300 border-muted bg-card/50 backdrop-blur-sm hover:-translate-y-1">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Users className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">CRM Vexa</CardTitle>
              <CardDescription className="text-base">Gestão inteligente de funil.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Automatize follow-ups, organize seus leads em um kanban visual e nunca mais perca
                uma oportunidade de venda por falta de organização.
              </p>
              <Link
                to="/crm"
                className="text-primary font-medium flex items-center hover:text-secondary"
              >
                Conhecer o CRM <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elevation transition-all duration-300 border-muted bg-card/50 backdrop-blur-sm hover:-translate-y-1">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <MessageSquareText className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Chatbots Vexa</CardTitle>
              <CardDescription className="text-base">
                Atendimento 24/7 automatizado.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Agentes de IA que qualificam leads, agendam reuniões e respondem dúvidas frequentes
                diretamente no seu site ou WhatsApp.
              </p>
              <Link
                to="/chatbots"
                className="text-primary font-medium flex items-center hover:text-secondary"
              >
                Ver Chatbots <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elevation transition-all duration-300 border-muted bg-card/50 backdrop-blur-sm hover:-translate-y-1">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <BarChart3 className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Dashboards</CardTitle>
              <CardDescription className="text-base">Decisões baseadas em dados.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Painéis visuais deslumbrantes que traduzem a saúde financeira e o desempenho de
                vendas da sua empresa em tempo real.
              </p>
              <Link
                to="/dashboards"
                className="text-primary font-medium flex items-center hover:text-secondary"
              >
                Explorar Dashboards <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pain Point Section (Before / After) */}
      <section id="casos" className="bg-secondary text-secondary-foreground py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">
                O fim das planilhas perdidas e clientes ignorados.
              </h2>
              <p className="text-secondary-foreground/80 text-lg mb-8">
                Empresas perdem até 30% da receita anual devido à má gestão de leads e processos
                manuais. Com o VexaView, centralizamos sua operação para que você foque no que
                importa: fechar negócios.
              </p>
              <ul className="space-y-4">
                {[
                  'Automação de tarefas repetitivas',
                  'Visão 360º do cliente',
                  'Relatórios que você realmente entende',
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="mr-4 rounded-full bg-primary p-1">
                      <TrendingUp className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent rounded-2xl opacity-20 blur-xl"></div>
              <img
                src="https://img.usecurling.com/p/800/600?q=dashboard%20software&color=gray"
                alt="Dashboard Preview"
                className="rounded-2xl border border-white/10 shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
