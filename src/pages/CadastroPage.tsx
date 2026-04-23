import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/hooks/use-auth'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  firstName: z.string().min(2, 'Nome é obrigatório'),
  lastName: z.string().min(2, 'Sobrenome é obrigatório'),
  companyName: z.string().min(2, 'Nome da Empresa é obrigatório'),
  cnpj: z.string().optional(),
  phone: z.string().min(10, 'Telefone inválido'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  role: z.string().optional(),
  currentCrm: z.string().optional(),
  salesTeamSize: z.string().optional(),
  employeeCount: z.string().optional(),
  monthlyRevenue: z.string().optional(),
  challenges: z.string().optional(),
})

export default function CadastroPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { signUp } = useAuth()
  const { toast } = useToast()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      cnpj: '',
      phone: '',
      email: '',
      password: '',
      role: '',
      currentCrm: '',
      salesTeamSize: '',
      employeeCount: '',
      monthlyRevenue: '',
      challenges: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const { error } = await signUp(values.email, values.password, {
        first_name: values.firstName,
        last_name: values.lastName,
        company_name: values.companyName,
        cnpj: values.cnpj,
        phone: values.phone,
        role: values.role,
        current_crm: values.currentCrm,
        sales_team_size: values.salesTeamSize,
        employee_count: values.employeeCount,
        monthly_revenue: values.monthlyRevenue,
        challenges: values.challenges,
      })

      if (error) {
        throw new Error(error.message)
      }

      toast({
        title: 'Conta criada com sucesso!',
        description: 'Bem-vindo à VexaView. Você já pode acessar o sistema.',
      })
      navigate('/')
    } catch (error: any) {
      toast({
        title: 'Erro ao criar conta',
        description: error.message || 'Verifique seus dados e tente novamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-3xl py-12 md:py-24">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-heading mb-3">
          Crie sua conta na <span className="text-primary">VexaView</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Preencha os dados abaixo para iniciar sua jornada e organizar suas finanças.
        </p>
      </div>

      <Card className="border-muted/50 shadow-elevation">
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sobrenome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu sobrenome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da Empresa</FormLabel>
                    <FormControl>
                      <Input placeholder="Razão social ou nome fantasia" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cnpj"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CNPJ da Empresa</FormLabel>
                    <FormControl>
                      <Input placeholder="00.000.000/0000-00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="(00) 00000-0000" {...field} />
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
                      <FormLabel>E-mail corporativo</FormLabel>
                      <FormControl>
                        <Input placeholder="voce@suaempresa.com.br" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input placeholder="Crie uma senha segura" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: CEO, Gerente de Vendas..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="currentCrm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qual seu CRM atual</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Pipedrive, Salesforce, Nenhum..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="salesTeamSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantidade de Vendedores / SDR / Closer</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="employeeCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantidade de Funcionários</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-10">1 a 10</SelectItem>
                          <SelectItem value="11-50">11 a 50</SelectItem>
                          <SelectItem value="51-200">51 a 200</SelectItem>
                          <SelectItem value="200+">Mais de 200</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="monthlyRevenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Faturamento Mensal</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ate-50k">Até R$ 50.000</SelectItem>
                          <SelectItem value="50k-100k">R$ 50.000 a R$ 100.000</SelectItem>
                          <SelectItem value="100k-500k">R$ 100.000 a R$ 500.000</SelectItem>
                          <SelectItem value="500k+">Acima de R$ 500.000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="challenges"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Nos conte mais um pouco sobre o que você busca e quais os maiores desafios que
                      sua empresa enfrenta.
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descreva aqui..."
                        className="resize-none min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Criar Conta'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          Já tem uma conta?{' '}
          <Link to="/login" className="text-primary hover:underline font-medium">
            Entrar agora
          </Link>
        </p>
      </div>
    </div>
  )
}
