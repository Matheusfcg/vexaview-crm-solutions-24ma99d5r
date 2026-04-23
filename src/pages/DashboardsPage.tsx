import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Fev', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 2000, expenses: 9800 },
  { month: 'Abr', revenue: 2780, expenses: 3908 },
  { month: 'Mai', revenue: 1890, expenses: 4800 },
  { month: 'Jun', revenue: 2390, expenses: 3800 },
  { month: 'Jul', revenue: 3490, expenses: 4300 },
]

const leadsData = [
  { week: 'Semana 1', leads: 40 },
  { week: 'Semana 2', leads: 65 },
  { week: 'Semana 3', leads: 85 },
  { week: 'Semana 4', leads: 120 },
]

export default function DashboardsPage() {
  return (
    <div className="container py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold">
          A verdade sobre a sua empresa, em um relance.
        </h1>
        <p className="text-xl text-muted-foreground">
          Dashboards financeiros e operacionais que transformam dados brutos em decisões
          estratégicas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-subtle">
          <CardHeader>
            <CardTitle>Receita vs Despesas</CardTitle>
            <CardDescription>Saúde financeira dos últimos 7 meses</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer
              config={{
                revenue: { label: 'Receita', color: 'hsl(var(--chart-1))' },
                expenses: { label: 'Despesas', color: 'hsl(var(--chart-3))' },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="hsl(var(--border))"
                  />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} tickFormatter={(val) => `R$${val}`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="shadow-subtle">
          <CardHeader>
            <CardTitle>Crescimento de Leads</CardTitle>
            <CardDescription>Volume de leads capturados por Chatbot este mês</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer
              config={{
                leads: { label: 'Leads Capturados', color: 'hsl(var(--chart-1))' },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={leadsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="hsl(var(--border))"
                  />
                  <XAxis dataKey="week" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="leads"
                    stroke="var(--color-leads)"
                    strokeWidth={3}
                    dot={{ r: 4, fill: 'var(--color-leads)' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
