import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Bot, Send, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function ChatbotsPage() {
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    {
      role: 'bot',
      text: 'Olá! Sou o assistente virtual Vexa. Como posso ajudar a escalar suas vendas hoje?',
    },
  ])
  const [input, setInput] = useState('')

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = input
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }])
    setInput('')

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Excelente! Nossos chatbots podem capturar essa demanda e enviá-la diretamente para o CRM Vexa. Deseja falar com um humano para configurar isso?',
        },
      ])
    }, 1000)
  }

  return (
    <div className="flex flex-col">
      <section className="bg-secondary text-secondary-foreground pt-20 pb-24 overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-secondary-foreground">
              <Sparkles className="mr-2 h-4 w-4" /> IA Generativa Aplicada
            </div>
            <h1 className="font-heading text-5xl font-bold">
              Atendimento impecável, 24 horas por dia.
            </h1>
            <p className="text-xl text-secondary-foreground/80">
              Qualifique leads enquanto você dorme. Nossos chatbots inteligentes se integram ao
              WhatsApp e ao seu site, criando jornadas conversacionais que convertem.
            </p>
          </div>

          {/* Interactive Chat Demo */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-rose-500 rounded-[2rem] blur opacity-30"></div>
            <Card className="relative flex flex-col h-[400px] border-muted/20 bg-background shadow-2xl rounded-[2rem] overflow-hidden">
              <div className="bg-muted px-6 py-4 border-b flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="text-primary-foreground h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground leading-none">Assistente Vexa</h3>
                  <span className="text-xs text-green-500 font-medium">Online agora</span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-muted text-foreground rounded-tl-sm'}`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSend} className="p-4 border-t flex gap-2 bg-background">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Simule uma conversa..."
                  className="rounded-full"
                />
                <Button type="submit" size="icon" className="rounded-full shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
