import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarHeader,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';

// Liens principaux
const mainNavItems: NavItem[] = [
 {
  title: 'Tableau de bord',
  href: '/dashboard',
  icon: LayoutGrid,
 },
];

// Liens du pied de menu
const footerNavItems: NavItem[] = [
 {
  title: 'Repository',
  href: '',
  icon: Folder,
 },
 {
  title: "Retour à l'accueil",
  href: '/',
  icon: BookOpen,
 },
];

export function AppSidebar() {
 return (
  <Sidebar collapsible="icon" variant="inset">
   <SidebarHeader>
    <SidebarMenu>
     <SidebarMenuItem>
      <SidebarMenuButton size="lg" asChild>
       <Link href="/dashboard" prefetch>
        <AppLogo />
       </Link>
      </SidebarMenuButton>
     </SidebarMenuItem>
    </SidebarMenu>
   </SidebarHeader>

   <SidebarContent>
    <NavMain items={mainNavItems} />
   </SidebarContent>

   <SidebarFooter>
    <NavFooter items={footerNavItems} className="mt-auto" />
    <NavUser />
   </SidebarFooter>
  </Sidebar>
 );
}
