import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
 // Récupération des props côté Laravel (ex: utilisateur connecté)
 const { auth } = usePage().props;

 // Breadcrumbs statiques
 const breadcrumbs: BreadcrumbItem[] = [
  {
   title: 'Tableau de bord',
   href: '/dashboard', // route directe
  },
 ];

 return (
  <AppLayout breadcrumbs={breadcrumbs}>
   <Head title="Tableau de bord" />

   <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
    {/* Section principale en grille */}
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
     <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
      <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
     </div>
     <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
      <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
     </div>
     <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
      <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
     </div>
    </div>

    {/* Grande section principale */}
    <div className="relative min-h-[80vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
     <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
    </div>
   </div>
  </AppLayout>
 );
}
