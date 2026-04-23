import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, LayoutDashboard, Target, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CrmPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-muted/30 pt-20 pb-16">
        <div className="container flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-heading text-5xl font-bold text-foreground">
              CRM <span className="text-primary">Vexa</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Um funil de vendas intuitivo e poderoso que acompanha o ritmo da sua equipe comercial,
              garantindo que nenhum lead esfrie.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary" asChild>
                <Link to="/contato">Agendar Demo do CRM</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <img
              src="https://img.usecurling.com/p/600/400?q=kanban%20board&color=rose"
              alt="CRM Kanban Board"
              className="rounded-xl shadow-elevation border w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Funcionalidades desenhadas para converter
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Gestão Visual (Kanban)',
              icon: LayoutDashboard,
              desc: 'Arraste e solte leads através das etapas do seu funil personalizado.',
            },
            {
              title: 'Histórico Centralizado',
              icon: Users,
              desc: 'Tenha o contexto de cada interação, email e reunião em um só lugar.',
            },
            {
              title: 'Automação de Follow-ups',
              icon: Zap,
              desc: 'Lembretes automáticos para que os vendedores liguem no momento certo.',
            },
            {
              title: 'Metas e Previsões',
              icon: Target,
              desc: 'Acompanhe a cota da equipe e preveja o faturamento do mês.',
            },
          ].map((feat, idx) => (
            <Card key={idx} className="border-none shadow-sm bg-muted/20">
              <CardContent className="pt-6">
                <feat.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground">{feat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
