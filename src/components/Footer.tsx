import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export function Footer() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    toast({
      title: 'Inscrição realizada!',
      description: 'Você receberá nossas novidades em breve.',
    })
    setEmail('')
  }

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <span className="font-heading text-2xl font-bold text-primary">VexaView</span>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transformando a desorganização em lucro real para pequenas e médias empresas através
              de tecnologia inteligente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Soluções</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/crm" className="hover:text-primary transition-colors">
                  CRM Vexa
                </Link>
              </li>
              <li>
                <Link to="/chatbots" className="hover:text-primary transition-colors">
                  Chatbots Inteligentes
                </Link>
              </li>
              <li>
                <Link to="/dashboards" className="hover:text-primary transition-colors">
                  Dashboards Financeiros
                </Link>
              </li>
              <li>
                <Link to="/precos" className="hover:text-primary transition-colors">
                  Preços
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/carreiras" className="hover:text-primary transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receba dicas de gestão e novidades do VexaView.
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-[220px]"
              />
              <Button type="submit" variant="secondary">
                Assinar
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VexaView CRM Solutions. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link to="/privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="hover:text-primary transition-colors">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
