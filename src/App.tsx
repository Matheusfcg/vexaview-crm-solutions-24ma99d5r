import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'

// Application Pages
import Index from './pages/Index'
import CrmPage from './pages/CrmPage'
import ChatbotsPage from './pages/ChatbotsPage'
import DashboardsPage from './pages/DashboardsPage'
import ContatoPage from './pages/ContatoPage'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/crm" element={<CrmPage />} />
          <Route path="/chatbots" element={<ChatbotsPage />} />
          <Route path="/dashboards" element={<DashboardsPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
