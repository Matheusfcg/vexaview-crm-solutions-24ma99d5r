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
import { BarChart3, MessageSquareText, Users } from 'lucide-react'
import * as React from 'react'

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
                <Link to="/#sobre">
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}
                  >
                    Sobre Nós
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/#casos">
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}
                  >
                    Casos de Sucesso
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex" asChild>
            <Link to="/login">Entrar</Link>
          </Button>
          <Button
            className="bg-primary hover:bg-secondary text-primary-foreground transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/contato">Solicitar Demonstração</Link>
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
