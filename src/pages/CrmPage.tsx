import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  CheckCircle2,
  LayoutDashboard,
  Target,
  Users,
  Zap,
  Mail,
  Phone,
  Building2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { useRealtime } from '@/hooks/use-realtime'
import { useEffect, useState } from 'react'
import pb from '@/lib/pocketbase/client'
import crmImage from '@/assets/image-8d65c.png'

export default function CrmPage() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <CrmDashboard />
  }

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
              src={crmImage}
              alt="CRM Dashboard"
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

function CrmDashboard() {
  const [contacts, setContacts] = useState<any[]>([])

  const loadData = async () => {
    try {
      const records = await pb.collection('contacts').getFullList({ sort: '-created' })
      setContacts(records)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  useRealtime('contacts', () => {
    loadData()
  })

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold">Painel de Leads</h1>
        <p className="text-muted-foreground">Monitore os contatos recebidos em tempo real.</p>
      </div>

      <div className="grid gap-6">
        {contacts.length === 0 ? (
          <Card className="bg-muted/20 border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <Users className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
              <p className="text-lg font-medium text-muted-foreground">Nenhum lead encontrado.</p>
              <p className="text-sm text-muted-foreground">
                Os contatos aparecerão aqui assim que forem enviados.
              </p>
            </CardContent>
          </Card>
        ) : (
          contacts.map((contact) => (
            <Card key={contact.id} className="shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{contact.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Mail className="h-4 w-4" /> {contact.email}
                      {contact.phone && (
                        <>
                          <span className="text-muted-foreground/30">•</span>
                          <Phone className="h-4 w-4" /> {contact.phone}
                        </>
                      )}
                    </CardDescription>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(contact.created).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 text-sm mt-2">
                  {contact.companySize && (
                    <div className="flex items-start gap-2">
                      <Building2 className="h-4 w-4 mt-0.5 text-primary" />
                      <div>
                        <span className="font-semibold block">Tamanho da Empresa</span>
                        <span className="text-muted-foreground">{contact.companySize}</span>
                      </div>
                    </div>
                  )}
                  {contact.problem && (
                    <div className="flex items-start gap-2">
                      <Target className="h-4 w-4 mt-0.5 text-primary" />
                      <div>
                        <span className="font-semibold block">Principal Desafio</span>
                        <span className="text-muted-foreground">{contact.problem}</span>
                      </div>
                    </div>
                  )}
                </div>
                {contact.message && (
                  <div className="mt-4 p-3 bg-muted/30 rounded-md text-sm">
                    <p className="font-medium mb-1">Mensagem:</p>
                    <p className="text-muted-foreground">{contact.message}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
