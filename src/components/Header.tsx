import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { BarChart3, MessageSquareText, Users, LogOut } from 'lucide-react'
import * as React from 'react'
import { useAuth } from '@/hooks/use-auth'
import { usePlanModal } from '@/contexts/plan-modal-context'

const solutions = [
  {
    title: 'CRM Vexa',
    href: '/crm',
    description: 'Gestão de leads, funil de vendas e automação de follow-ups.',
    icon: Users,
  },
  {
    title: 'Chatbots',
    href: '/chatbots',
    description: 'Atendimento 24/7 integrado ao WhatsApp e site.',
    icon: MessageSquareText,
  },
  {
    title: 'Dashboards',
    href: '/dashboards',
    description: 'Painéis financeiros e de performance de vendas.',
    icon: BarChart3,
  },
]

export function Header() {
  const { user, signOut } = useAuth()
  const { openModal } = usePlanModal()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold text-primary">VexaView</span>
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Soluções</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutions.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}
                  href="/#sobre"
                >
                  Sobre Nós
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}
                  href="/#casos"
                >
                  Casos de Sucesso
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:inline-flex">
                Olá, {user.email}
              </span>
              <Button variant="ghost" size="sm" onClick={() => signOut()}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" className="hidden sm:inline-flex" asChild>
                <Link to="/login">Entrar</Link>
              </Button>
              <Button
                className="bg-primary hover:bg-secondary text-primary-foreground transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/cadastro">Criar Conta</Link>
              </Button>
            </>
          )}
          <Button
            variant="outline"
            className="hidden lg:inline-flex border-primary text-primary hover:bg-primary/10 ml-2"
            onClick={() => openModal()}
          >
            Quer ser um vexa
          </Button>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref as any}
          to={href || '#'}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...(props as any)}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            <Icon className="h-4 w-4 text-primary" />
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
