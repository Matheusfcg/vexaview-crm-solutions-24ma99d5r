import React, { createContext, useContext, useState, ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ChevronLeft } from 'lucide-react'
import pb from '@/lib/pocketbase/client'

type PlanModalContextType = {
  openModal: (plan?: 'basic' | 'premium') => void
}

const PlanModalContext = createContext<PlanModalContextType | undefined>(undefined)

export function usePlanModal() {
  const context = useContext(PlanModalContext)
  if (!context) throw new Error('usePlanModal must be used within PlanModalProvider')
  return context
}

export function PlanModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<'plans' | 'email'>('plans')
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium' | null>(null)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const openModal = (plan?: 'basic' | 'premium') => {
    if (plan) {
      setSelectedPlan(plan)
      setStep('email')
    } else {
      setStep('plans')
      setSelectedPlan(null)
    }
    setIsOpen(true)
  }

  const handlePlanSelect = (plan: 'basic' | 'premium') => {
    setSelectedPlan(plan)
    setStep('email')
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await pb.collection('subscriptions').create({ email, plan_type: selectedPlan })
      window.location.href = 'https://clkdmg.site/subscribe/vexaview'
    } catch (err) {
      console.error(err)
      alert('Ocorreu um erro ao processar sua solicitação. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PlanModalContext.Provider value={{ openModal }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          {step === 'plans' ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-center">
                  Planos VexaView
                </DialogTitle>
                <DialogDescription className="text-center text-lg mt-2">
                  Escolha o plano ideal para a sua empresa e faça parte da comunidade Vexa.
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {/* Basic */}
                <div className="flex flex-col relative border rounded-xl p-6 bg-background/80 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold">Basic</h3>
                  <div className="text-4xl font-bold mt-4 mb-6">
                    R$ 150
                    <span className="text-sm font-normal text-muted-foreground">/mês</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      Acesso ao CRM Vexa
                    </li>
                  </ul>
                  <Button
                    onClick={() => handlePlanSelect('basic')}
                    variant="outline"
                    className="w-full"
                  >
                    Finalizar compra
                  </Button>
                </div>
                {/* Premium */}
                <div className="flex flex-col relative border-2 border-primary rounded-xl p-6 bg-background/80 shadow-[0_0_20px_hsl(var(--primary)/0.15)]">
                  <div className="absolute -top-3 inset-x-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-xs font-bold py-1 px-4 rounded-full">
                      Recomendado
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">Premium</h3>
                  <div className="text-4xl font-bold mt-4 mb-6">
                    R$ 250
                    <span className="text-sm font-normal text-muted-foreground">/mês</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start text-sm font-medium">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      Acesso ao CRM Vexa
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      Acesso aos nossos Dashboards
                    </li>
                  </ul>
                  <Button
                    onClick={() => handlePlanSelect('premium')}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Finalizar compra
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 -ml-2"
                    onClick={() => setStep('plans')}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <DialogTitle className="text-xl">Finalizar Assinatura</DialogTitle>
                </div>
                <DialogDescription className="text-base">
                  Você escolheu o plano{' '}
                  <strong className="text-foreground">
                    {selectedPlan === 'basic' ? 'Basic' : 'Premium'}
                  </strong>
                  . Informe seu e-mail para prosseguir para o pagamento.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubscribe} className="space-y-6 mt-6">
                <div className="space-y-3">
                  <label htmlFor="modal-email" className="text-sm font-semibold">
                    E-mail corporativo
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg h-12 bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processando...' : 'Ir para Pagamento'}
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </PlanModalContext.Provider>
  )
}
