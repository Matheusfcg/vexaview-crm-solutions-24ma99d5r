import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Building2, Mail, Phone } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres.'),
  email: z.string().email('Email inválido.'),
  companySize: z.string().min(1, 'Selecione o tamanho da empresa.'),
  problem: z.string().min(1, 'Selecione seu principal desafio.'),
  message: z.string().optional(),
})

export default function ContatoPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      companySize: '',
      problem: '',
      message: '',
    },
  })

  // Mocking Supabase insertion
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // Simulate API call to Supabase
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log('Lead salvo no Supabase (mock):', values)

      toast({
        title: 'Demonstração Solicitada!',
        description: 'Nossa equipe de especialistas entrará em contato em breve.',
      })
      form.reset()
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao enviar. Tente novamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-16 lg:py-24">
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Vamos conversar sobre o <span className="text-primary">futuro</span> do seu negócio.
            </h1>
            <p className="text-lg text-muted-foreground">
              Nossa equipe está pronta para entender seus processos e mostrar como a VexaView pode
              trazer organização financeira e previsibilidade de vendas para sua empresa.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p>contato@vexaview.com.br</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">Telefone</p>
                <p>0800 123 4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">Escritório</p>
                <p>Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Card className="shadow-elevation border-muted/50">
            <CardHeader>
              <CardTitle>Solicite uma Demonstração</CardTitle>
              <CardDescription>
                Preencha os dados abaixo e prepararemos um ambiente de teste para você.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="João da Silva" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Corporativo</FormLabel>
                          <FormControl>
                            <Input placeholder="joao@suaempresa.com.br" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tamanho da Empresa</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o tamanho" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 funcionários</SelectItem>
                              <SelectItem value="11-50">11-50 funcionários</SelectItem>
                              <SelectItem value="51-200">51-200 funcionários</SelectItem>
                              <SelectItem value="201+">Mais de 200 funcionários</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="problem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Principal Desafio</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="O que você precisa resolver?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="crm">
                                Gestão de Leads Desorganizada (CRM)
                              </SelectItem>
                              <SelectItem value="atendimento">
                                Atendimento Lento (Chatbots)
                              </SelectItem>
                              <SelectItem value="dados">
                                Falta de Visibilidade Financeira (Dashboards)
                              </SelectItem>
                              <SelectItem value="todos">Uma solução completa</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem (Opcional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Conte-nos um pouco mais sobre o seu cenário atual..."
                            className="resize-none min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Solicitar Demonstração Gratuita'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
